from api.shared.encrypt_password import encrypt_pass, check_pass
from api.shared.validate_email import check_email
from api.models.index import db, User
from flask_jwt_extended import create_access_token

def get_user_by_id(user_id):
    return User.query.get(user_id)

def register_user(body):
    try:
        if "email" not in body or len(body["email"]) == 0 or check_email(body["email"]) == False:
            return False

        if "password" not in body or len(body["password"]) == 0:
            return False

        hash_pass = encrypt_pass(body["password"])
        new_user = User(email=body["email"], password=hash_pass)

        db.session.add(new_user)
        db.session.commit()

        return new_user.serialize()

    except Exception as err:
        db.session.rollback()
        print("[ERROR ADD USER]: ", err)
        return None

def login_user(body):
    try:
        if "email" not in body or len(body["email"]) == 0:
            return False

        if "password" not in body or len(body["password"]) == 0:
            return False
        
        user = db.session.query(User).filter(User.email == body["email"]).first()
        if user is None:
            return "not_exist"

        validate_pass = check_pass(body["password"], user.password)
        if validate_pass == False:
            return "pass_error"

        new_token = create_access_token(identity={ "id": user.id })
        return { "token": new_token }
        
    except Exception as err:
        print("[ERROR LOGIN USER]: ", err)
        return None
