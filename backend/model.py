from config import db

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(100), nullable=False , unique=False)
    lastname = db.Column(db.String(100), nullable=False,unique=False)
    email = db.Column(db.String(100), nullable=False , unique=True)
    
    def to_json(self):
        return {
            'id': self.id,
            'firstname': self.firstname,
            'lastname': self.lastname,
            'email': self.email
        }