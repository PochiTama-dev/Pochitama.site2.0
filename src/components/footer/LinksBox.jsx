
import instagram from  "../../assets/images/instagram-icon.svg"
import facebook from  "../../assets/images/facebook-icon.svg"
import twitter from  "../../assets/images/twitter-icon.svg"
import linkedin from  "../../assets/images/linkedin-icon.svg"
import github from  "../../assets/images/github-icon.svg"
import './footer.css'

const LinksBox = () =>{
    return(
        <div className="footer-links"> {/* CONTENEDOR IMAGEN */}
            <a
            href="https://instagram.com/pochitama.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="sin-enlace"
            >
                <img src={instagram} alt='img' className="footer-icons"/>
            </a>
            <a
            href="https://facebook.com/profile.php?id=100090586969134"
            target="_blank"
            rel="noopener noreferrer"
            className="sin-enlace"
            >
                <img src={facebook} alt='facebook' className="footer-icons"/>
            </a>
            <a
            href="https://www.facebook.com/profile.php?id=100090586969134"
            target="_blank"
            rel="noopener noreferrer"
            className="sin-enlace"
            >
                <img src={linkedin} alt='linkedin' className="footer-icons"/>
            </a>
            <a
            href="https://github.com/PochiTama-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="sin-enlace"
            >
                <img src={github} alt='github' className="footer-icons"/>
            </a>
      </div>
    )
}

export default LinksBox