// STYLES
import '../styles/global.css';

// CONTEXT
import { PathProvider } from '../contexts/PathContext';

function MyApp({ Component, pageProps }) {
  return (
    <PathProvider>
      <Component {...pageProps} />
    </PathProvider>
  )
}

export default MyApp;
