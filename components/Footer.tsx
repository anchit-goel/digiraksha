
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-6">
      <div className="container mx-auto px-6 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} DigiRaksha by Team HorizonX. All Rights Reserved.</p>
        <p className="text-sm mt-1">Smart India Hackathon 2025 Submission</p>
      </div>
    </footer>
  );
};

export default Footer;
