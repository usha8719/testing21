import React, { useState } from 'react';
import './Featured.css'; 

function FeaturedPage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      alert('File Uploaded Successfully');
    } else {
      alert('No file selected.');
    }
  };

  return (
    <section id ="getfeatured">
    <div className="featured-page">

      <h1>File Upload</h1>
      <p>To Get Featured your experience on our page, share your experience and images with us.</p>
      <div className="form2">
      <form id="upload-form" onSubmit={handleSubmit}>
        <input type="file" id="file-input" accept=".txt,.pdf,.doc,.docx,.jpg" onChange={handleFileChange} />
        <button type="submit">Upload File</button>
      </form>
      <div id="file-info">
        {selectedFile && <p>File Name: {selectedFile.name}</p>}
      </div>
      </div>
    </div>
    </section>
  );
}

export default FeaturedPage;
