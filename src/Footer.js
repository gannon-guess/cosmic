import './components/Footer.css';
import './components/Global.css';
import { discord_link } from './constants';

// here we define a Footer module that can be used in any of our pages
function Footer() {
    return (
            <footer className="bg-dark text-white text-center py-3">
                    
                <p>2025 Collegiate Space Mining Competition</p>
                <p>Cardinal Space Mining</p>
                <p>
                    <a href={discord_link} target="_blank" rel="noopener noreferrer">
                        <i className="cosmic-icon bi bi-discord" style={{ fontSize: '50px', marginLeft: '20px' }}></i>
                    </a>
                </p>  
            </footer>
    );
}

export default Footer;