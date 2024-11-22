import './index.css'
import TstPgBtn from '../tstPgBtn'
import ProfBtn from '../ProfileBtn'

const Header = () => {
  return (
     <div className='header'> 
      <h1 className='h1'>Budet app 9000</h1>
      <div className='btns'>
        <TstPgBtn className='tstBtn'></TstPgBtn>
        <ProfBtn className='profBtn'></ProfBtn>
      </div>
    </div>
  )
}

export default Header