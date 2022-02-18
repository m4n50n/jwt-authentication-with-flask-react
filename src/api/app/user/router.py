from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.user.controller import get_user_by_id, register_user, login_user, validate_user
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

users = Blueprint("users", __name__)

@users.route("/", methods=["GET"])
@jwt_required()
def get_user():
    user_id = get_jwt_identity()
    return get_user_by_id(user_id["id"])

@users.route("/register", methods=["POST"])
def create_user():
    body = request.get_json(force = True)
    return register_user(body)

@users.route("/login", methods=["POST"])
def user_login():
    body = request.get_json(force = True)
    return login_user(body)

@users.route("/validate", methods=["POST"])
def user_validate():
    body = request.get_json(force = True)
    return validate_user(body)
    