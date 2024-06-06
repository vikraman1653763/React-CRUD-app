from flask import request,jsonify
from config import app,db
from model import Contact


@app.route('/',methods=['GET'])
def getcontact():
    contacts=Contact.query.all()
    jsoncontact=list(map(lambda x: x.to_json(), contacts))
    return jsonify({"contacts":jsoncontact})

@app.route('/create',methods=['POST'])
def createcontact():
    firstname=request.json.get('firstName')
    lastname=request.json.get('lastName')
    email=request.json.get('email')
    
    if not firstname or not lastname or not email:
       return( jsonify({"message":"enter valid data"}),400)
    
    newcontact = Contact(firstname=firstname, lastname=lastname,email=email)
    try:
        db.session.add(newcontact)
        db.session.commit()
    except Exception as e:
        return(jsonify({"message":str(e)}),400)
    return(jsonify({"message":"user created"}),201)

@app.route('/update/<int:user_id>')
def updatecontact(user_id):
    contact=Contact.query.get(user_id)
    if not contact:
        return jsonify({"message":"not found"}),404

    data=request.json
    contact.firstname= data.get("firstName",contact.firstname)
    contact.lastname= data.get("lastName",contact.lastname)
    contact.email= data.get("email",contact.email)
    db.session.commit()
    
    return jsonify({"message":"updated succesfully"}),201

@app.route("/delete/<int:user_id>",methods=["DELETE"])
def delete(user_id):
    contact=Contact.query.get(user_id)
    if not contact:
        return jsonify({"message":"not found"}),404

    db.session.delete(contact)
    db.session.commit()
    return jsonify({"message":"deleted successfully"}), 201

if __name__=='__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)