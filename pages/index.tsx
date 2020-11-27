import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    alert('useEffect says hello...')
  }, [])
  return (
    <div>
      <h1>I'm INDEXERS</h1>
    </div>
  )
}
