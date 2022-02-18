from api.shared.encrypt_password import encrypt_pass, check_pass
from api.shared.validate_email import check_email
from api.shared.response import success_response, error_response
from api.models.index import db, User
from flask_jwt_extended import create_access_token

def get_user_by_id(user_id):
    result = User.query.get(user_id)

    if result is None:
        return error_response("User not found", 404)
    else:
        return success_response(user.serialize())

def register_user(body):
    try:
        if body is None:
            return error_response("Invalid email or password. Please, try again.", 400)

        if "email" not in body or len(body["email"]) == 0:
            return error_response("Email is empty. Please, try again.", 400)

        if check_email(body["email"]) == False:
            return error_response("Invalid email format. Please, try again.", 400)

        if "password" not in body or len(body["password"]) == 0:
            return error_response("Password is empty. Please, try again.", 400)

        hash_pass = encrypt_pass(body["password"])
        new_user = User(email=body["email"], password=hash_pass)

        db.session.add(new_user)
        db.session.commit()

        return success_response(new_user.serialize(), 201)

    except Exception as err:
        db.session.rollback()
        print("[ERROR ADD USER]: ", err)
        return error_response("Internal Server Error. Please, try again later.")

def login_user(body):
    try:
        if body is None:
            return error_response("Invalid email or password. Please, try again.", 400)

        if "email" not in body or len(body["email"]) == 0:
            return error_response("Email is empty. Please, try again.", 400)

        if "password" not in body or len(body["password"]) == 0:
            return error_response("Password is empty. Please, try again.", 400)
        
        user = db.session.query(User).filter(User.email == body["email"]).first()
        if user is None:
            return error_response("Sorry, we don't recognise this account. Please, try again.", 404)

        validate_pass = check_pass(body["password"], user.password)
        if validate_pass == False:
            return error_response("Invalid email or password. Please, try again.", 401)

        new_token = create_access_token(identity={ "id": user.id })
        return success_response({ "token": new_token })
        
    except Exception as err:
        print("[ERROR LOGIN USER]: ", err)
        return error_response("Internal Server Error")

def validate_user(body):
    pass