from flask import Flask, jsonify, request
from flask_cors import CORS
<<<<<<< HEAD
from extensions import db, migrate
from config import Config
=======
from server.extensions import db, migrate
from .config import Config
import logging

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)
>>>>>>> 0eb44260 (final working version)

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Update CORS configuration
    CORS(app, resources={
        r"/*": {  # Allow all routes
            "origins": ["http://localhost:3000"],
            "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
            "allow_headers": ["Content-Type", "Authorization"],
            "supports_credentials": True
        }
    })

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)  # Ensure this line is present

    # Register blueprints
    from routes import auth_bp, properties_bp
    app.register_blueprint(auth_bp, url_prefix='/api')
    app.register_blueprint(properties_bp, url_prefix='/api')

    @app.errorhandler(500)
    def handle_500_error(error):
        return jsonify({'error': 'Internal Server Error'}), 500

    @app.route('/api/login', methods=['POST'])
    def login():
        try:
            data = request.get_json()
            logger.debug(f"Received login request with data: {data}")
            # Your login logic here
            return jsonify({'message': 'Login successful'})
        except Exception as e:
            logger.error(f"Login error: {str(e)}", exc_info=True)
            return jsonify({'error': str(e)}), 500

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, port=5000)
