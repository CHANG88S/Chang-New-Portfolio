export const Resume = () => {
    return (
    <div className="max-w-3xl mx-auto z-35 justify-center">
        <div className="flex items-center pb-8">
            <h1 id="Resume" className="text-3xl font-bold">Resume</h1>
        </div>
        
        <embed 
        src="src\assets\resume.pdf" 
        type="application/pdf" 
        width="100%" 
        height="800px" 
        className="rounded-lg shadow-lg"
      />
    </div>
    );
};