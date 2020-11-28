import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    alert('useEffect says hello...')
  }, [])
  return (
    <div>
      <h1>I'm INDEX VEXER</h1>
    </div>
  )
}
