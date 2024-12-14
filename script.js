document.getElementById('generate').addEventListener('click', function () {
    // Collect form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const experience = document.getElementById('experience').value;
  
    // Create the HTML structure for resume preview
    const resumeOutput = `
      <h1>${name}</h1>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h2>Education</h2>
      <p>${education.replace(/\n/g, '<br>')}</p>
      <h2>Skills</h2>
      <p>${skills.replace(/\n/g, '<br>')}</p>
      <h2>Experience</h2>
      <p>${experience.replace(/\n/g, '<br>')}</p>
    `;
  
    // Display the preview in the HTML
    document.getElementById('resumeOutput').innerHTML = resumeOutput;
    
    // Show the download button
    document.getElementById('download').style.display = 'inline-block';
  });
  
  // Handle PDF download
  document.getElementById('download').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const experience = document.getElementById('experience').value;
  
    const pdf = new jspdf.jsPDF();
  
    // Set the font and sizes for the document
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(24);
    pdf.text(name, 10, 20);
  
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(12);
    pdf.text(`Email: ${email}`, 10, 30);
    pdf.text(`Phone: ${phone}`, 10, 40);
  
    // Add Education
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(16);
    pdf.text("Education", 10, 50);
    pdf.setFont("helvetica", "normal");
    let yPosition = 60;
    const educationLines = education.split('\n');
    educationLines.forEach(line => {
        pdf.text(line, 10, yPosition);
        yPosition += 10; // Adjust line spacing
    });
  
    // Add Skills
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(16);
    pdf.text("Skills", 10, yPosition);
    pdf.setFont("helvetica", "normal");
    yPosition += 10;
    const skillsLines = skills.split('\n');
    skillsLines.forEach(line => {
        pdf.text(line, 10, yPosition);
        yPosition += 10;
    });
  
    // Add Experience
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(16);
    pdf.text("Experience", 10, yPosition);
    pdf.setFont("helvetica", "normal");
    yPosition += 10;
    const experienceLines = experience.split('\n');
    experienceLines.forEach(line => {
        pdf.text(line, 10, yPosition);
        yPosition += 10;
    });
  
    // Save the generated PDF
    pdf.save("resume.pdf");
  });