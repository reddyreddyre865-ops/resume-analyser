from flask import Blueprint, request, jsonify
from controllers.resume_controller import analyze_resume_controller

resume_bp = Blueprint("resume", __name__)

@resume_bp.route("/analyze", methods=["POST"])
def analyze():
    return analyze_resume_controller(request)