import React, { useState } from "react";
import axios from "axios";

function ResumeForm() {
  const [resume, setResume] = useState("");
  const [job, setJob] = useState("");
  const [result, setResult] = useState(null);

  const analyze = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:5000/api/analyze", {
        resume: resume,
        job: job
      });
      setResult(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <textarea
        placeholder="Paste Resume"
        onChange={(e) => setResume(e.target.value)}
      />

      <textarea
        placeholder="Paste Job Description"
        onChange={(e) => setJob(e.target.value)}
      />

      <button onClick={analyze}>Analyze</button>

      {result && (
        <div>
          <h2>ATS Score: {result.score}%</h2>
          <ul>
            {result.matched_keywords.map((item, index) => (
              <li key={index}>
                {item[0]} - {item[1]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ResumeForm;