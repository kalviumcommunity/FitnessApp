import React, { useEffect } from 'react';

const Crisp = () => {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "e1484b43-6c2a-4193-ac07-44f4e5cf8baa";
    
    (function() {
      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = true;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }, []);

  return null; // This component doesn't render anything
};

export default Crisp;
