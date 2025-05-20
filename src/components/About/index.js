import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { Link } from 'react-router-dom'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId) // Proper cleanup
  }, [])

  return (
    <div className="page">
      <div className="container about-page">
        <div className="about-zone">
          <div className="about-text">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              I'm a passionate Full Stack Developer with a strong focus on
              Python, Django, and React, eager to join a dynamic team that
              thrives on solving complex problems and delivering impactful
              solutions.
            </p>
            <p align="LEFT">
              With a problem-solving mindset and an eye for detail, I’m
              continually honing my skills—whether it's optimizing back-end
              systems, building seamless user interfaces, or tackling intricate
              design challenges.
            </p>
            <p>
              Outside of coding, I’m a big Duke basketball fan, a movie
              enthusiast, and I am always seeking new perspectives on life and
              technology.
            </p>
            <Link to="/projects" className="flat-button">
              View My Projects
            </Link>
          </div>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#FFD700" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
          <div className="underneath">
            
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default About
