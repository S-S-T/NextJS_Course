import styles from './index.module.scss'
import { useEffect } from "react"

// Styled JSX...

function Heading(props) {
  return (
    <div>
      <h1 className={styles.h1}><span>I am a RED (then green)...  </span>{props.heading}</h1>
      {/* <style jsx>
        {`
          h1 {
            color: red;
          }
        `}
      </style> */}
    </div>
  )
}

export default function Home() {

  useEffect(() => {
    // alert('useEffect says hello...')
  }, [])

  return (
    <div>
      <Heading heading="Heading" />
      <h1>HERE remains Black</h1>
    </div>
  )

}
