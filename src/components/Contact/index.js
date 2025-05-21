import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_an1kzdc',
        'template_a0huevp',
        refForm.current,
        'K8CgCMwHuRPmC8lLW'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <div className="page">
      <div className="container contact-page">
        <div className="contact-text">
          {/* <div className="info-map">
            Gary McCart,
            <br />
            Judd Parkway
            <br />
            Fuquay-Varina, NC <br />
            USA
            <br />
            <span>gwmccart3@gmail.com</span>
          </div> */}
          <div className="heading-text">
            <div className="text">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                  idx={15}
                />
              </h1>
            </div>
            <div className="text">
              <p>
                I am interested in full-time work opportunities. However, if you
                have any other requests or questions, don't hesitate to contact
                me using the form below.
              </p>
            </div>
          </div>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <div className="form-group">
                <input placeholder="Name" type="text" name="name" required />
                <input placeholder="Email" type="email" name="email" required />
              </div>
              <input
                placeholder="Subject"
                type="text"
                name="subject"
                required
              />
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
              <button type="submit" className="flat-button">
                SEND
              </button>
            </form>
          </div>
        </div>
        <div className="map">
          <div className="map-wrap">
            <MapContainer center={[35.59343, -78.7787]} zoom={10}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[35.59343, -78.7787]}>
                <Popup>Gary lives here, come over for a cup of coffee :)</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default Contact
