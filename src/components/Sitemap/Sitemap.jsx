import { useEffect, useState } from 'react';

const Sitemap = () => {
  const [xmlContent, setXmlContent] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('../../../public/sitemap.xml')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => setXmlContent(data))
      .catch(error => setError('Error fetching sitemap: ' + error.message));
  }, []);

  return (
    <div>
      <h1>Sitemap</h1>
      {error ? <p>{error}</p> : <pre>{xmlContent}</pre>}
    </div>
  );
};

export default Sitemap;
