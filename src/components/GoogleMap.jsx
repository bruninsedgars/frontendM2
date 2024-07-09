import React from 'react';

const GoogleMap = () => {
  return (
    <div>
      <h2>Visit Varnaviči</h2>
      <p>Find us on Google Maps:</p>
      <a 
        href="https://www.google.com/maps/place/Varnavi%C4%8Di,+Kaplava+parish,+Kr%C4%81slava+Municipality,+LV-5668,+Latvia/@55.829634,27.287177,16z/data=!4m6!3m5!1s0x46c31d5fc1200397:0xfe4d05dd22914bc0!8m2!3d55.8313007!4d27.2959522!16s%2Fg%2F1hhzg3bxd?entry=ttu" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Open in Google Maps
      </a>
      <div style={{ marginTop: '20px' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.690942674935!2d27.287177115824017!3d55.82963428056873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c31d5fc1200397%3A0xfe4d05dd22914bc0!2sVarnavi%C4%8Di%2C%20Kaplava%20parish%2C%20Kr%C4%81slava%20Municipality%2C%20LV-5668%2C%20Latvia!5e0!3m2!1sen!2sus!4v1690039448790!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
