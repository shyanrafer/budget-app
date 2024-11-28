// App will now be used for providing the routes 

import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
// I need a home page too...
import Homepage from "./pages/HomePage"
import Profile from "./pages/Profile"
import TestPage from "./pages/TestPage"

function App() {
  return (
    // start with Routes...
    <Routes>
      {/* then make individual route(s) starttin with a root route... */}
      <Route path="/" element={<Layout />}>
        {/* index element in the case below is the default page that will be loaded when the URL has just "/" */}
        <Route index element={<Homepage />} />
        {/* the following is how to set up additional routes */}
        <Route path="Profile" element={<Profile />} />
        <Route path="TestPage" element={<TestPage />} />
      </Route>
    </Routes>
  )
}

export default App
