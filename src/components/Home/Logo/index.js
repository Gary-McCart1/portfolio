import './index.scss'
import glight from '../../../assets/images/G-light.png'
import { useEffect, useRef } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    const tl = gsap.timeline()

    tl.to(bgRef.current, { duration: 1, opacity: 1 }) // Fade in background
      .fromTo(
        outlineLogoRef.current,
        { drawSVG: "0%", opacity: 1 },
        { drawSVG: "100%", duration: 3, ease: "power1.inOut" }
      )
      .fromTo(
        solidLogoRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2 },
        "-=1" // Starts fading in solid logo slightly before outline is done
      )
      .to(outlineLogoRef.current, { opacity: 0, duration: 1 }, "-=0.5") // Fades out outline logo
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" alt="S" src={glight} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 400 609"
        preserveAspectRatio="xMidYMid meet"
        className="svg-container"
      >
        <path
          ref={outlineLogoRef}
          fill="none"
          stroke="#ffd700"
          strokeWidth="10"
          strokeMiterlimit="4"
          d="M 242.614353 513.245262 L 242.614353 335.656709 L 367.843528 335.656709 C 367.843528 338.016084 367.999778 341.396292 368.317486 345.797334 C 368.629986 353.974418 368.786236 359.240043 368.786236 361.599419 C 368.786236 407.82338 357.978944 443.948382 336.359151 469.969217 C 314.739358 495.990052 283.494564 510.417137 242.614353 513.245262 Z M 233.416436 160.193155 L 354.166444 160.193155 L 354.166444 294.620248 Z M 212.661226 513.245262 C 168.322682 509.630678 134.718513 492.922344 111.838303 463.130675 C 88.963301 433.333798 77.525801 391.318171 77.525801 337.073375 C 77.525801 282.67233 88.963301 240.573369 111.838303 210.7817 C 134.718513 180.984823 168.322682 164.125447 212.661226 160.193155 Z M 212.661226 513.245262 "
        />
      </svg>
    </div>
  )
}

export default Logo



