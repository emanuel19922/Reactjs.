
import Button from 'react-bootstrap/Button';
import './_Countcomponent.scss'


const CountComponent = ({ contador, setcontador}) => {


  const Morecount = () => {

    setcontador(contador + 1)

  }


  const less = () => {
    setcontador((lescount) => {
      if (lescount > 1) {
        return lescount - 1;
      } else {
        return lescount
      }
    })
  }




  return (

    <div className='buttoncount'>

      <Button variant="outline-dark" onClick={Morecount}> suma   </Button>

      <Button variant="outline-dark" onClick={less}>resta </Button>


    </div>
  )
}

export default CountComponent