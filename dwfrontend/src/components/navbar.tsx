import { Link } from 'react-router-dom'   

import '../assets/index.css'
// import '../assets/dwLogoLg.png'

export interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = () => {
    // const navigate = useNavigate()
    return (
        <>
            <nav className="navBar">
                <Link to="/"><i className="las la-home"></i>Home</Link>
                <Link to="/about"><i className="las la-info-circle"></i>About</Link>
                <Link to="/portfolio"><i className="las la-file-code"></i>Portfolio</Link>
                <Link to="/blog"><i className="las la-blog"></i>Blog</Link>
                <Link to="/contact"><i className="las la-address-book"></i>Contact</Link>
            </nav>
        {/* <button onClick={() => navigate('/layout/55')}>Go to layout, with a number</button> */}
        </>
    )
}

export default Navbar