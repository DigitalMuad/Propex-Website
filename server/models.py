from .extensions import db

class Property(db.Model):
    __tablename__ = 'property'  # Define the table name
    id = db.Column(db.Integer, primary_key=True)  # Primary key
    # Define other fields here

class User(db.Model):
    __tablename__ = 'user'  # Define the table name
    id = db.Column(db.Integer, primary_key=True)  # Primary key
    # Define other fields here
