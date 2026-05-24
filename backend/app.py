from flask import Flask
from flask_cors import CORS
from config import Config
from routes.contact import contact_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    # Enable CORS for all routes and origins
    CORS(app)
    
    # Register blueprints
    app.register_blueprint(contact_bp)
    
    @app.route('/api/health', methods=['GET'])
    def health_check():
        return {'status': 'healthy', 'message': 'Backend is running.'}, 200
        
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, port=5000)
