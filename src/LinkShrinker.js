import React, { useState } from "react";

export default function LinkShrinker() {
  const [longUrl, setLongUrl] = useState("");
  const [shortCode, setShortCode] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = () => {
    if (!longUrl.trim()) {
      alert("Please enter a valid long URL");
      return;
    }

    // Generate random code if custom code is empty
    const code = shortCode.trim()
      ? shortCode.trim()
      : Math.random().toString(36).substring(2, 7);
    setShortUrl(`https://cpt405.co/${code}`);
  };

  return (
    <div className="card">
      <h1 className="title">Link Shrinker</h1>

      <div className="form-group">
        <label>Long URL:</label>
        <input
          type="text"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="https://example.com/very-long-url"
        />
      </div>

      <div className="form-group">
        <label>Enter short code:</label>
        <input
          type="text"
          value={shortCode}
          onChange={(e) => setShortCode(e.target.value)}
          placeholder="e.g. react101"
        />
      </div>

      <div className="btn-container">
        <button onClick={handleShorten} className="shorten-btn">
          Shorten
        </button>
      </div>

      {shortUrl && (
        <div className="result-group">
          <label className="result-label">Short URL</label>
          <div className="result-box">
            <a href={shortUrl} target="_blank" rel="noreferrer">
              {shortUrl}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
