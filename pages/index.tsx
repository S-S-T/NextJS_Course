import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    alert('useEffect says hello...')
  }, [])
  return (
    <div>
<<<<<<< HEAD
      <h1>I'm INDEXERS</h1>
=======
      <h1>I'm INDEX</h1>
>>>>>>> ac2a089ba3364f5003ab346d5110c1d5da29030b
    </div>
  )
}
