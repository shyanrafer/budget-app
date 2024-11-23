import './index.css'
import TstPgBtn from '../tstPgBtn'
import ProfBtn from '../ProfileBtn'

const Header = () => {
  return (
    <div className='header'> 
      <h1 className='h1'>Budet app 9000</h1>
      <div className='btnSection'>
        <TstPgBtn className='tstBtn btns'></TstPgBtn>
        <ProfBtn className='profBtn btns'></ProfBtn>
      </div>
    </div>
  )
}

export default Header