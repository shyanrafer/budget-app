import { useNavigate } from 'react-router-dom'


const ProfBtn = () => {
  const nav = useNavigate();
  const goToProf = () => {
    nav('/Profile')
  }
  
  return (
    <button onClick={goToProf}>Profile</button>
  )
}

export default ProfBtn