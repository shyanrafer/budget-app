import { useNavigate } from 'react-router-dom'


const TestPage = () => {
  const nav = useNavigate()  
  const goToHome = () => {
    nav('/')
  }
  
  return (
    <div>
      {/* If i use link around the stuff h1 can I make that clickable and send people back to the main page? */}
      <h1>Stuff</h1>
      <button onClick={goToHome}>Home</button>
    </div>
  );
};


export default TestPage