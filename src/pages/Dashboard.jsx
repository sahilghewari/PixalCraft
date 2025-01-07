// src/pages/EditableWebsite.jsx
import React, { useState, useRef } from 'react';

const EditableWebsite = () => {
  const [htmlContent, setHtmlContent] = useState(`
    <div>
      <nav contenteditable="true" style="background-color: #333; color: white; padding: 10px; display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 1.5em;">Editable Navbar</span>
        <ul style="list-style: none; display: flex; gap: 15px; margin: 0;">
          <li><a href="#" style="color: white; text-decoration: none;">Home</a></li>
          <li><a href="#" style="color: white; text-decoration: none;">About</a></li>
          <li><a href="#" style="color: white; text-decoration: none;">Services</a></li>
          <li><a href="#" style="color: white; text-decoration: none;">Contact</a></li>
        </ul>
      </nav>
      <header contenteditable="true" style="background-color: #4CAF50; color: white; padding: 50px; text-align: center;">
        <h1>Editable Hero Section</h1>
        <p>Click here to edit the hero section description.</p>
      </header>
      <main style="padding: 20px;">
        <section contenteditable="true" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
          <div style="border: 1px solid #ccc; padding: 10px; border-radius: 5px;">
            <h2>Card Title 1</h2>
            <p>Editable content for card 1.</p>
          </div>
          <div style="border: 1px solid #ccc; padding: 10px; border-radius: 5px;">
            <h2>Card Title 2</h2>
            <p>Editable content for card 2.</p>
          </div>
          <div style="border: 1px solid #ccc; padding: 10px; border-radius: 5px;">
            <h2>Card Title 3</h2>
            <p>Editable content for card 3.</p>
          </div>
        </section>
      </main>
      <footer contenteditable="true" style="background-color: #f1f1f1; text-align: center; padding: 10px;">
        Editable Footer
      </footer>
    </div>
  `);

  const cssContent = useRef(`
    nav {
      background-color: #333;
      color: white;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    nav ul {
      list-style: none;
      display: flex;
      gap: 15px;
      margin: 0;
    }
    nav ul li a {
      color: white;
      text-decoration: none;
    }
    header {
      background-color: #4CAF50;
      color: white;
      padding: 50px;
      text-align: center;
    }
    main {
      padding: 20px;
    }
    section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
    }
    section div {
      border: 1px solid #ccc;
      padding: 10px;
      border-radius: 5px;
    }
    footer {
      background-color: #f1f1f1;
      text-align: center;
      padding: 10px;
    }
  `);

  const handleSave = () => {
    const content = document.querySelector('#editable-area').innerHTML;
    setHtmlContent(content);
  };

  const handleExport = () => {
    const htmlBlob = new Blob([htmlContent], { type: 'text/html' });
    const cssBlob = new Blob([cssContent.current], { type: 'text/css' });

    const htmlLink = document.createElement('a');
    htmlLink.href = URL.createObjectURL(htmlBlob);
    htmlLink.download = 'template.html';
    htmlLink.click();

    const cssLink = document.createElement('a');
    cssLink.href = URL.createObjectURL(cssBlob);
    cssLink.download = 'style.css';
    cssLink.click();
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Advanced Editable Website Template</h2>
      <div
        id="editable-area"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}
      ></div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={handleSave} style={{ margin: '0 10px', padding: '10px 20px', cursor: 'pointer' }}>
          Save Changes
        </button>
        <button onClick={handleExport} style={{ margin: '0 10px', padding: '10px 20px', cursor: 'pointer' }}>
          Export HTML & CSS
        </button>
      </div>
    </div>
  );
};

export default EditableWebsite;
