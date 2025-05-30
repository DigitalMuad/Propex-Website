from extensions import db

class Property(db.Model):
    __tablename__ = 'property'  # Define the table name
    id = db.Column(db.Integer, primary_key=True)  # Primary key
    title = db.Column(db.String(200), nullable=False)
    location = db.Column(db.String(200), nullable=False)
    price = db.Column(db.Float, nullable=False)
    image_url = db.Column(db.String(500), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    bookings = db.relationship("Booking", backref="property", cascade="all, delete-orphan")
    favorites = db.relationship("Favorite", backref="property", cascade="all, delete-orphan")

    serialize_rules = ("-user.properties", "-bookings.property", "-favorites.property")

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "location": self.location,
            "price": self.price,
            "image_url": self.image_url,
            "user_id": self.user_id
        }

class User(db.Model):
    __tablename__ = 'users'  # Match the table name in migrations
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(200), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())


    roperties = db.relationship("Property", backref="user", cascade="all, delete-orphan")
    bookings = db.relationship("Booking", backref="user", cascade="all, delete-orphan")
    favorites = db.relationship("Favorite", backref="user", cascade="all, delete-orphan")

    serialize_rules = ("-password_hash", "-bookings.user", "-favorites.user", "-properties.user")

    def set_password(self, password):
        self._password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self._password_hash, password)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "role": self.role
        }



class Booking(db.Model, SerializerMixin):
    __tablename__ = "bookings"

    id = db.Column(db.Integer, primary_key=True)
    check_in = db.Column(db.String, nullable=False)
    check_out = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    property_id = db.Column(db.Integer, db.ForeignKey("properties.id"), nullable=False)

    serialize_rules = ("-user.bookings", "-property.bookings")

    def to_dict(self):
        return {
            "id": self.id,
            "check_in": self.check_in,
            "check_out": self.check_out,
            "user_id": self.user_id,
            "property_id": self.property_id,
            "property": self.property.to_dict()  # ✅ Include property details in booking
        }


class Favorite(db.Model, SerializerMixin):
    __tablename__ = "favorites"

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True)
    property_id = db.Column(db.Integer, db.ForeignKey('properties.id'), primary_key=True)

    serialize_rules = ("-user.favorites", "-property.favorites")

    def to_dict(self):
        return {
            "user_id": self.user_id,
            "property_id": self.property_id
        }