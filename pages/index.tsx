import { useState } from 'react'
import jwt from 'jsonwebtoken'

export default function Home() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [message, setMessage] = useState<string>('You are not logged in')
  const [secret, setSecret] = useState<string>('')

  async function submitForm() {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    }).then((t) => t.json())

    const token = res.token;

    if (token) {
      const json = jwt.decode(token) as { [key: string]: string }
      console.log('JSON ...', json)

      setMessage(
        `Welcome ${json.username.toUpperCase()} and you are ${json.admin ? 'an admin!' : 'not an admin'}`)

      const res = await fetch('/api/secret', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
      }).then((t) => t.json())
      if (res.secretAdminCode) {
        setSecret(res.secretAdminCode)
      }
      else {
        setSecret('Nothing Available')
      }

    } else {
      setMessage('Something went very wrong..')
    }
  }

  return (
    <div>
      <h1>{message}</h1>
      <h1>Simple Routing Secret: {secret}</h1>
      <form>
        <input
          type="text"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <input
          type="button"
          value="Login"
          onClick={submitForm}
        />
      </form >
    </div >
  )
}

// Styled JSX...
// function Heading(props) {
//   return (
//     <div>
//       <h1 className={styles.h1}><span>I am a RED (then green)...  </span>{props.heading}</h1>
//       {/* <style jsx>
//         {`
//           h1 {
//             color: red;
//           }
//         `}
//       </style> */ //}
//     </div>
//   )
// }

  // useEffect(() => {
  //   // alert('useEffect says hello...')
  // }, [])

  // return (
  //   <div>
  //     <Heading heading="Heading" />
  //     <h1>HERE remains Black</h1>
  //   </div>
  // )
