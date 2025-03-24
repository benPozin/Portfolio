const Resume = () => {
    return (
      <div className="h-screen flex flex-col">
        <div className="flex-grow flex justify-center items-center">
          <iframe 
            src="/resume.pdf"  // Ensure your resume is inside "public/" folder
            width="100%" 
            height="100%" 
            style={{ border: 'none' }}
            title="Resume"
          >
            This browser does not support PDFs. Please download the PDF to view it: 
            <a href="/resume.pdf">Download PDF</a>.
          </iframe>
        </div>
      </div>
    );
  };
  
  export default Resume;