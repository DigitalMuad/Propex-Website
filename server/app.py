from flask import Flask
from flask_cors import CORS
from extensions import db, migrate
from config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Configure CORS properly
    CORS(app, resources={
        r"/api/*": {
            "origins": ["http://localhost:3000"],
            "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
            "allow_headers": ["Content-Type", "Authorization", "Accept"],
            "supports_credentials": True,
            "expose_headers": ["Content-Type", "Authorization"]
        }
    })

    # Register blueprints
    from routes import auth_bp, properties_bp
    app.register_blueprint(auth_bp, url_prefix='/api')
    app.register_blueprint(properties_bp, url_prefix='/api')

    db.init_app(app)
    migrate.init_app(app, db)

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, port=5000)
