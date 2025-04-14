from models import db, Property, User
from extensions import db as extensions_db

def populate_sample_data():
    # Create test user
    user = User(name='Real Estate Admin', email='admin@propex.com', password='secure123')
    db.session.add(user)
    db.session.commit()

    # Sample luxury properties with images
    properties = [
        {
            'title': 'Luxury Villa in Malibu',
            'description': 'Stunning oceanfront villa with private beach access, infinity pool, and panoramic ocean views. Features smart home technology and designer interiors.',
            'price': 4500000,
            'location': 'Malibu, CA',
            'bedrooms': 5,
            'bathrooms': 6,
            'sqft': 6500,
            'image_url': 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        },
        {
            'title': 'Modern Penthouse in Manhattan',
            'description': 'Luxurious penthouse with panoramic city views, floor-to-ceiling windows, and private rooftop terrace. Includes concierge service and premium amenities.',
            'price': 3800000,
            'location': 'New York, NY',
            'bedrooms': 4,
            'bathrooms': 4.5,
            'sqft': 4200,
            'image_url': 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        },
        {
            'title': 'Historic Charleston Estate',
            'description': 'Beautifully restored historic home with classic southern charm. Features original hardwood floors, wrap-around porch, and lush gardens.',
            'price': 2750000,
            'location': 'Charleston, SC',
            'bedrooms': 6,
            'bathrooms': 5.5,
            'sqft': 7800,
            'image_url': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        },
        {
            'title': 'Mountain Retreat in Aspen',
            'description': 'Luxury ski-in/ski-out chalet with breathtaking mountain views. Features heated floors, hot tub, and custom woodwork throughout.',
            'price': 5200000,
            'location': 'Aspen, CO',
            'bedrooms': 7,
            'bathrooms': 7,
            'sqft': 8500,
            'image_url': 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        }
    ]

    for prop in properties:
        property = Property(
            title=prop['title'],
            description=prop['description'],
            price=prop['price'],
            location=prop['location'],
            bedrooms=prop['bedrooms'],
            bathrooms=prop['bathrooms'],
            sqft=prop['sqft'],
            image_url=prop['image_url'],
            user_id=user.id
        )
        db.session.add(property)
    
    db.session.commit()
    print("Successfully added 4 luxury property listings")

if __name__ == '__main__':
    from app import app
    with app.app_context():
        populate_sample_data()
