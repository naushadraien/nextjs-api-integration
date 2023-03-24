import '@/styles/globals.css';
import Script from 'next/script'


export default function App({ Component, pageProps }) {
  return( <>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous" />
        <Component {...pageProps} />
  </>
  )
}
