import React, { useState } from "react";
import axios from "axios";

function App() {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);

  const analyze = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:5000/api/analyze", {
        resume: resume,
        job_description: jobDescription,
      });

      setResult(res.data);
    } catch (error) {
      console.error(error);
      alert("Error analyzing resume");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Smart Resume Analyzer</h1>

      <textarea
        placeholder="Paste Resume"
        rows="8"
        cols="80"
        onChange={(e) => setResume(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Paste Job Description"
        rows="8"
        cols="80"
        onChange={(e) => setJobDescription(e.target.value)}
      />

      <br /><br />

      <button onClick={analyze}>Analyze</button>

      {result && (
        <div>
          <h2>ATS Score: {result.score}%</h2>

          <h3>Top Skills</h3>
          <ul>
            {result.top_skills.map((skill, index) => (
              <li key={index}>{skill[0]} ({skill[1]})</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;