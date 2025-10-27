import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Certificates = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId) // Proper cleanup
  }, [])
  return (
    <div className="cert-page">
      <div className="cert-heading">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[
              'C',
              'e',
              'r ',
              't',
              'i',
              'f',
              'i',
              'c',
              'a',
              't',
              'e',
              's',
            ]}
            idx={15}
          />
        </h1>
      </div>
      <div className="certs-list">
        <div className="certs-wrap">
        <div className="cert-card">
            <img className="cert-image" src="/aws-ccp.png" alt="CS50 Website Development" />
          </div>
          <div className="cert-card">
            <img className="cert-image" src="/CS50W.png" alt="CS50 Website Development" />
          </div>
          <div className="cert-card">
            <img className="cert-image" src="/CS50SQL.png" alt="CS50 Website Development" />
          </div>
          <div className="cert-card">
            <img className="cert-image" src="/udemy-python.jpg" alt="CS50 Website Development" />
          </div>
          <div className="cert-card">
            <img className="cert-image" src="/udemy-react.jpg" alt="CS50 Website Development" />
          </div>
          <div className="cert-card">
            <img className="cert-image" src="/codecademy-datascience.png" alt="CS50 Website Development" />
          </div>
          <div className="cert-card">
            <img className="cert-image" src="/codecademy-django.png" alt="CS50 Website Development" />
          </div>
          <div className="cert-card">
            <img className="cert-image" src="/codecademy-c++.png" alt="CS50 Website Development" />
          </div>
          <div className="cert-card">
            <img className="cert-image" src="/codecademy-java.png" alt="CS50 Website Development" />
          </div>
          <div className="cert-card">
            <img className="cert-image" src="/CS50x.png" alt="CS50 Website Development" />
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </div>
  )
}

export default Certificates
