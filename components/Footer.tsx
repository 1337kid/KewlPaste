"use client"
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div>
      <p className='text-center text-[18px] pt-3'>
      Made with <FontAwesomeIcon icon={faHeart} style={{color:'rgb(139 92 246)'}} size="lg"/> by&nbsp;
        <a className="text-violet-500 hover:text-violet-700 underline underline-offset-3" href="https://github.com/1337kid">@1337kid</a><br/>
        Source Code : <FontAwesomeIcon icon={faGithub} size="lg" className="text-violet-500 hover:text-violet-600 cursor-pointer"/>
      </p>
    </div>
  )
}

export default Footer