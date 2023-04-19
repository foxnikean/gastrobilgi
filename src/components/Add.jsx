import React, { useState, useEffect } from 'react';

function AdComponent() {
  const [adCode, setAdCode] = useState('');

  useEffect(() => {
    setAdCode('<your ad code here>');
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: adCode }} />
  );
}
