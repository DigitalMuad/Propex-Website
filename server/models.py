from datetime import datetime
from extensions import db

# Property Model
class Property(db.Model):
    __tablename__ = 'properties'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Float, nullable=False)
    location = db.Column(db.String(100), nullable=False)
    bedrooms = db.Column(db.Integer, default=3)
    bathrooms = db.Column(db.Integer, default=2)
    sqft = db.Column(db.Integer, default=1500)
    image_url = db.Column(db.String(255))
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    features = db.relationship('PropertyFeature', back_populates='property')
    favorites = db.relationship('Favorite', back_populates='property')

# User Model
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(200), nullable=False)
    properties = db.relationship('Property', backref='owner')
    favorites = db.relationship('Favorite', back_populates='user')

# Feature Model
class Feature(db.Model):
    __tablename__ = 'features'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    properties = db.relationship('PropertyFeature', back_populates='feature')

# PropertyFeature Join Model
class PropertyFeature(db.Model):
    __tablename__ = 'property_features'
    id = db.Column(db.Integer, primary_key=True)
    property_id = db.Column(db.Integer, db.ForeignKey('properties.id'))
    feature_id = db.Column(db.Integer, db.ForeignKey('features.id'))
    custom_value = db.Column(db.String(100))
    property = db.relationship('Property', back_populates='features')
    feature = db.relationship('Feature', back_populates='properties')

# Favorite Model
class Favorite(db.Model):
    __tablename__ = 'favorites'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    property_id = db.Column(db.Integer, db.ForeignKey('properties.id'))
    notes = db.Column(db.Text)
    user = db.relationship('User', back_populates='favorites')
    property = db.relationship('Property', back_populates='favorites')
