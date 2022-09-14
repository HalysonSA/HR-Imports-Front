import Navbar from './Navbar/navbar'
import Footer from './Footer/footer'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />

            {children}

            <Footer />
        </>
    )
}
export default Layout
