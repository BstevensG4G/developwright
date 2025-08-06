import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import SiteTemplate from './sitetemplate'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import PortfolioPage from './pages/Portfolio'
import BlogPage from './pages/Blog'
import ContactPage from './pages/Contact'

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<SiteTemplate />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="contact" element={<ContactPage />} />                        
          </Route>          
        </Routes>
      </Router>
    );
};

export default App
