import Navbar from "./Navbar"

const Layout = ({ children }) => {
    return (
        <div className='page-container'>
            <Navbar />
            <div className="gap">
            {children}   
            </div>
        </div>
    )
}

export default Layout
