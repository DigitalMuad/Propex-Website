from flask import Blueprint, request, jsonify, make_response, current_app
from models import db, Property, User
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime
from werkzeug.security import generate_password_hash, check_password_hash

# Initialize blueprints
properties_bp = Blueprint('properties', __name__)
# Note: URL prefix is already set in app.py
auth_bp = Blueprint('auth', __name__)

# Authentication Routes
@auth_bp.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        print("Received data for registration:", data)  # Log the incoming data
        
        # Check if user already exists
        if User.query.filter_by(email=data['email']).first():
            return jsonify({'message': 'Email already registered'}), 400

        hashed_password = generate_password_hash(data['password'], method='pbkdf2:sha256')
        new_user = User(
            username=data['username'],
            email=data['email'],
            password_hash=hashed_password
        )
        
        db.session.add(new_user)
        db.session.commit()
        
        # Verify user was actually created
        created_user = User.query.filter_by(email=data['email']).first()
        if not created_user:
            return jsonify({'message': 'Failed to create user'}), 500
            
        return jsonify({
            'message': 'User registered successfully',
            'user_id': created_user.id
        }), 201
        
    except Exception as e:
        import traceback
        traceback.print_exc()
        db.session.rollback()
        return jsonify({'message': f'Registration failed: {str(e)}'}), 500


@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()
    if not user or not check_password_hash(user.password_hash, data['password']):
        return jsonify({'message': 'Invalid credentials'}), 401
    
    token = jwt.encode({
        'user_id': user.id,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=24)
    }, current_app.config['JWT_SECRET_KEY'], algorithm='HS256')

    return jsonify({
        'message': 'Logged in successfully',
        'token': token
    }), 200

# Property Routes (CRUD operations)
@properties_bp.route('/properties', methods=['POST'])
def create_property():
    try:
        # Get the token from the Authorization header
        auth_header = request.headers.get('Authorization')
        if not auth_header:
            return jsonify({'message': 'No authorization header'}), 401
        
        token = auth_header.split(' ')[1]  # Remove 'Bearer ' prefix
        
        # Verify the token
        try:
            data = jwt.decode(token, current_app.config['JWT_SECRET_KEY'], algorithms=['HS256'])
            user_id = data['user_id']
        except:
            return jsonify({'message': 'Invalid token'}), 401

        # Get property data from request
        data = request.get_json()
        
        property = Property(
            title=data['title'],
            description=data['description'],
            price=data['price'],
            location=data['location'],
            bedrooms=data.get('bedrooms', 3),
            bathrooms=data.get('bathrooms', 2),
            sqft=data.get('sqft', 1500),
            image_url=data.get('image_url'),
            owner_id=user_id
        )
        
        db.session.add(property)
        db.session.commit()
        
        return jsonify(property.to_dict()), 201
        
    except Exception as e:
        print(f"Error creating property: {str(e)}")
        db.session.rollback()
        return jsonify({'message': f'Error creating property: {str(e)}'}), 500

# Protected Route Example
@properties_bp.route('/protected', methods=['GET'])
def protected():
    token = request.headers.get('Authorization')
    if not token:
        return jsonify({'message': 'Token is missing'}), 401
    
    try:
        data = jwt.decode(token, current_app.config['JWT_SECRET_KEY'], algorithms=['HS256'])
        current_user = User.query.get(data['user_id'])
    except:
        return jsonify({'message': 'Token is invalid'}), 401
    
    return jsonify({'message': f'Hello {current_user.username}'}), 200

# Debug Route
@auth_bp.route('/debug/users', methods=['GET'])
def debug_users():
    users = User.query.all()
    return jsonify([{
        'id': user.id,
        'username': user.username,
        'email': user.email,
        'created_at': user.created_at.isoformat() if user.created_at else None
    } for user in users]), 200

# Property Routes (continued)
@properties_bp.route('/properties', methods=['GET'])
def get_properties():
    properties = Property.query.all()
    return jsonify([property.to_dict() for property in properties]), 200

@properties_bp.route('/properties/<int:id>', methods=['GET'])
def get_property(id):
    property = Property.query.get_or_404(id)
    return jsonify(property.to_dict()), 200

@properties_bp.route('/properties/<int:id>', methods=['PATCH'])
def update_property(id):
    property = Property.query.get_or_404(id)
    data = request.get_json()
    
    for field in ['title', 'description', 'price', 'location', 'bedrooms', 'bathrooms', 'sqft', 'image_url']:
        if field in data:
            setattr(property, field, data[field])
    
    db.session.commit()
    return jsonify(property.to_dict()), 200

@properties_bp.route('/properties/<int:id>', methods=['DELETE'])
def delete_property(id):
    property = Property.query.get_or_404(id)
    db.session.delete(property)
    db.session.commit()
    return jsonify({'message': 'Property deleted'}), 200
