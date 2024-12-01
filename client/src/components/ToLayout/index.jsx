// need to create a pipeline to backend something fierce...
// need a sign in/login

import { useNavigate } from "react-router-dom"

const ToLayoutBtn =() => {
  const nav = useNavigate();
  const goToLayout = () => {
    nav('/Homepage')
  }
  
  return (
    <button className="toLandingBtn" onClick={goToLayout}>Home</button>
  )
}

export default ToLayoutBtn
   