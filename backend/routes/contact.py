from flask import Blueprint, request, jsonify
from pymongo import MongoClient
import datetime
from config import Config

contact_bp = Blueprint('contact', __name__)

client = MongoClient(Config.MONGO_URI)
db = client.get_database()
messages_collection = db.messages

@contact_bp.route('/api/contact', methods=['POST'])
def submit_contact():
    try:
        data = request.get_json()
        
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')
        
        if not name or not email or not message:
            return jsonify({'error': 'Please provide all fields (name, email, message)'}), 400
            
        new_message = {
            'name': name,
            'email': email,
            'message': message,
            'created_at': datetime.datetime.utcnow()
        }
        
        messages_collection.insert_one(new_message)
        
        return jsonify({'message': 'Message sent successfully!'}), 201
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500
