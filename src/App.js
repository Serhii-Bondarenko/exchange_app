import {Route, Routes} from "react-router-dom";

import './css/style.css';
import {HomePage} from "./Pages";
import {Layout} from "./Components";

function App() {
  return (
      <>
          <Routes>
              <Route path={'/'} element={<Layout/>}>
                  <Route index element={<HomePage/>}/>
              </Route>
          </Routes>
      </>
  );
}

export default App;
