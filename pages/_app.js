import '../styles/globals.scss'
import '../styles/components/navbar.scss'
import '../styles/components/homepage/hero.scss'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp