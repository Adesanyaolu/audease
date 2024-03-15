import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Homepage from "./Homepage";
import SignIn from "./SignIn"
import Dashboard from "./Dashboard";

function App() {

  return (
    <div>
      {
        <Router>
          <Routes>
            <Route exact="true" path="/" element={<Homepage />}></Route>
            <Route  path="/signin" element={<SignIn />}></Route>
            <Route  path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </Router>
      }
    </div>  
  )
}

export default App
