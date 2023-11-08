import { Link } from 'react-router-dom'   

import '../assets/index.css'
// import '../assets/dwLogoLg.png'

export interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = () => {
    // const navigate = useNavigate()
    return (
        <>
            <nav className="nav la la-bars">
                <ul>
                    <li><Link to="/"><i className="las la-home"></i>Home</Link></li>
                    <li><Link to="/about"><i className="las la-info-circle"></i>About</Link></li>
                    <li><Link to="/portfolio"><i className="las la-file-code"></i>Portfolio</Link></li>
                    <li><Link to="/blog"><i className="las la-blog"></i>Blog</Link></li>
                    <li><Link to="/contact"><i className="las la-address-book"></i>Contact</Link></li>
                </ul>
            </nav>
        {/* <button onClick={() => navigate('/layout/55')}>Go to layout, with a number</button> */}
        </>
    );
};

export default Navbar