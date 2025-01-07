import React, { useEffect, useRef } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";

const GrapeJSEditor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: editorRef.current,
      height: "100vh",
      width: "auto",
      storageManager: false, // Disable storage
      canvas: {
        styles: [
          "/template/css/bootstrap.min.css",
          "/template/css/bootstrap-icons.css",
          "/template/css/templatemo-topic-listing.css",
        ],
        scripts: [
          "/template/js/jquery.min.js",
          "/template/js/bootstrap.bundle.min.js",
          "/template/js/click-scroll.js",
          "/template/js/jquery.sticky.js",
          "/template/js/custom.js",
        ],
      },
      assetManager: {
        assets: [
          { src: "/template/images/businesswoman-using-tablet-analysis.jpg", name: "Tablet Analysis" },
          { src: "/template/images/colleagues-working-cozy-office-medium-shot.jpg", name: "Colleagues" },
          { src: "/template/images/faq_graphic.jpg", name: "FAQ Graphic" },
        ],
      },
    });

    // Load the main HTML file
    fetch("/template/index.html")
      .then((res) => res.text())
      .then((html) => {
        editor.setComponents(html);
      })
      .catch((err) => console.error("Failed to load HTML:", err));

    return () => {
      editor.destroy();
    };
  }, []);

  return <div ref={editorRef} />;
};

export default GrapeJSEditor;
