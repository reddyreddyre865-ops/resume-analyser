import re
from collections import Counter

def clean_text(text):
    text = text.lower()
    text = re.sub(r'[^a-zA-Z0-9\s]', '', text)
    return text

def extract_keywords(text):
    words = clean_text(text).split()
    return Counter(words)

def analyze_resume(resume, job_description):
    resume_keywords = extract_keywords(resume)
    job_keywords = extract_keywords(job_description)

    matched = {}
    total_keywords = len(job_keywords)

    for word in job_keywords:
        if word in resume_keywords:
            matched[word] = resume_keywords[word]

    score = (len(matched) / total_keywords) * 100 if total_keywords > 0 else 0

    top_skills = sorted(matched.items(), key=lambda x: x[1], reverse=True)

    return {
        "score": round(score, 2),
        "matched_keywords": matched,
        "top_skills": top_skills[:10]
    }