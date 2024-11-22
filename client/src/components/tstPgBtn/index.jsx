import { useNavigate } from 'react-router-dom'

const TstPgBtn = () => {

  const nav = useNavigate();
  
  const goToTest = () => {
    nav('/TestPage')
  }

  return (
    <button className='btn' onClick={goToTest}>Test Page</button>
  )

}

export default TstPgBtn