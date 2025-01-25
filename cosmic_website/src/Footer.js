const discord_link = 'https://discord.com/invite/xc9MTRb9Hs'

// here we define a Footer module that can be used in any of our pages
function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-3">
                
            <p>2024 Collegiate Space Mining Competition</p>
            <p>Cardinal Space Mining</p>
            <p>
                <a href={discord_link} target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-discord" style={{ fontSize: '50px', marginLeft: '20px' }}></i>
                </a>
            </p>  
        </footer>
    );
}

export default Footer;