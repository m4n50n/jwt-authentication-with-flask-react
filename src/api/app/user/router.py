from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

users = Blueprint("users", __name__)

@api.route("/register", methods=["POST"])
def add_user():
    body = request.get_json()
    new_user = add_user(body)

    if new_user is None:
        return jsonify("Internal Server Error"), 500
    elif new_user == False:
        return jsonify("Bad Request"), 400
    else:
        return jsonify(new_user), 201

@api.route("/login", methods=["POST"])
def login_user():
    body = request.get_json()
    token = login_user(body)

    if token is None:
        return jsonify("Internal Server Error"), 500
    elif token == "not_exist":
        return jsonify("Sorry, we don't recognise this account"), 404
    elif token == "pass_error":
        return jsonify("Invalid email or password"), 401
    else:
        return jsonify(token), 200

@api.route("/", methods=["GET"])
@jwt_required()
def get_user():
    user_id = get_jwt_identity()
    user = get_user_by_id(user_id["id"])

    if user is None:
        return jsonify("User not found"), 404
    else:
        return jsonify(user.serialize()), 200