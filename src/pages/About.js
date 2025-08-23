// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <div className="page-container">
      <h1>About Neelvardhan</h1>
      <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#555' }}>
        We are a passionate, youth-led voluntary force dedicated to mobilizing the next generation of environmental leaders.</p> 
	<p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#555' }}>At Neelvardhan, we don't just talk about change; we actively build it.
      </p>
      
      <hr style={{ margin: '2rem 0' }} />

      <h2>Our Mission</h2>
      <p>
        To forge a powerful link between passionate young volunteers and impactful environmental action. We collaborate with reputed NGOs to execute high-impact projects—from restoring coastlines to reforesting our communities—while ensuring our members receive the certified recognition they deserve for their dedicated service.
      </p>

      <h2>Our Vision</h2>
      <p>
        We envision a future where youth are at the forefront of the environmental movement. A world where every young person is empowered with the experience, network, and passion to lead and innovate, creating a sustainable and thriving planet for all.
      </p>

      <h2>Our Approach</h2>
      <p>
        Neelvardhan operates as a strategic bridge. We identify meaningful volunteering opportunities with established organizations, allowing our members to contribute to proven, effective conservation efforts. This model ensures that our collective energy creates measurable results while fostering the professional growth of our volunteers.
      </p>

      <h2>Our Core Values</h2>
      <ul>
        <li><strong>Action & Impact:</strong> We believe in hands-on work that creates visible, positive change.</li>
        <li><strong>Collaboration:</strong> We succeed by partnering with and learning from established leaders in the environmental field.</li>
        <li><strong>Passion:</strong> Our drive comes from a genuine dedication to protecting our planet.</li>
        <li><strong>Growth:</strong> We are committed to developing the skills and credibility of every member.</li>
      </ul>
    </div>
  );
};

export default About;