import React, { useEffect, useState } from 'react';

import { Layout, Loader } from './components';

const App = () => {

  const [start, setStart] = useState(false);

  useEffect(() => {
    const preload = setTimeout(() => {
      setStart(!start);
    }, 1000);

    return () => {
      clearTimeout(preload);
    }
  }, [])

  return (
      <>
        {
          !start ? <Loader/> : <Layout/>
        }
      </>
  );
}

export default App;
