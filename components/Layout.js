import Navbar from './Navbar'
import Strips from './Strips'
// import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <Strips />
            { children }
            {/* <Footer /> */}
        </>
    )
}

export default Layout