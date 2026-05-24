import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    MONGO_URI = os.environ.get('MONGO_URI') or 'mongodb://localhost:27017/portfolio_db'
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'your-secret-key'
