import './index.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['G', 'a', 'r', 'y', ' ', 'M', 'c', 'C', 'a', 'r', 't']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timeoutId)
  }, [])

  const handleDownload = () => {
    const pdfUrl = '/resume.pdf'

    const link = document.createElement('a')
    link.href = pdfUrl
    link.setAttribute('download', 'Gary_McCart_Resume.pdf')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <div className="home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span> </span>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <div className="subtitle">
            <h2 className="role">Python / Fullstack Developer</h2>
            <div className="buttons">
              <div>
                <Link to="/contact" className="flat-button">
                  CONTACT ME
                </Link>
              </div>
              <div>
                <button className="dark-button" onClick={handleDownload}>
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
        <img className="small" src="/G-light.png" alt="logo" />
        <div id="logo-container">
          <Logo />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
