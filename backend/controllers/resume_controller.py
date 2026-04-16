from flask import jsonify
from services.resume_service import analyze_resume

def analyze_resume_controller(request):
    try:
        data = request.get_json()

        resume_text = data.get("resume", "")
        job_description = data.get("job_description", "")

        result = analyze_resume(resume_text, job_description)

        return jsonify(result), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500