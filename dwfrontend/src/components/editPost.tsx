import React, { useState } from 'react';

interface FormData {
  title: string;
  content: string;
}

const EditPost: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ title: '', content: '' });
  const [submissionStatus, setSubmissionStatus] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { title, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [title]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('Submitting...');

    try {
      const response = await fetch('http://localhost:5272/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('Submission successful!');
        // Optionally, close the popup or send a message back to the parent
        // window.opener.postMessage('Form submitted successfully', 'http://localhost:3000'); // Example
      } else {
        const errorData = await response.json();
        setSubmissionStatus(`Submission failed: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      setSubmissionStatus(`Submission failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  return (
    <div>
      <h2>Submit Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <input type="content" id="content" name="content" value={formData.content} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submissionStatus && <p>{submissionStatus}</p>}
    </div>
  );
};

export default EditPost;