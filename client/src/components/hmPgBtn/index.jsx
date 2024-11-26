import { useNavigate } from 'react-router-dom'

const HmPgBtn = () => {

  const nav = useNavigate();
  
  const goToHome = () => {
    nav('/')
  }

  return (
    <button className='btn' onClick={goToHome}>Home Page</button>
  )

}

export default HmPgBtn