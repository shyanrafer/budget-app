import { useNavigate } from 'react-router-dom'

function TestComponent() {
  const nav = useNavigate();
  
  const goToTest = () => {
    nav('/testpage')
  }

  return (
    <button onClick={goToTest}>
      Go to test page
    </button>
  )
}

export default TestComponent