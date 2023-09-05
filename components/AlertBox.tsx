import { AlertBoxProps } from '@types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const AlertBox = ({type,handleClick,alertText} : AlertBoxProps) => {
  return (
    <div className={`alert-${type} gap-2 transition ease-out duration-500`}>
      <div className='center-align overflow-auto'>
        {alertText}
      </div>
      <div className='center-align'>
        <button type="button" onClick={() => handleClick('')}>
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
    </div>
  )
}

export default AlertBox