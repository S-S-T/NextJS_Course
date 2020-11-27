// import './globals.css'
// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

export default function App({ Component, pageProps }) {
  console.log('HelloFromMyApp...both server and client sees message...')
  return <Component {...pageProps} />
}
