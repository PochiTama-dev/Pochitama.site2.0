import {
    BsInstagram,
    BsTwitter,
    BsLinkedin,
    BsGithub,
    BsFacebook,
  } from "react-icons/bs";
  import {FaGithub,
  }  from "react-icons/fa";

const LinksBox = () =>{
    return(
        <div className="footer-links"> {/* CONTENEDOR IMAGEN */}
            <a
            href="https://instagram.com/pochitama.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="sin-enlace"
            >
                <BsInstagram />
            </a>
            <a
            href="https://facebook.com/profile.php?id=100090586969134"
            target="_blank"
            rel="noopener noreferrer"
            className="sin-enlace"
            >
                <BsFacebook />
            </a>
            <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="sin-enlace"
            >
                <BsTwitter />
            </a>
            <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="sin-enlace"
            >
                <BsLinkedin />
            </a>
            <a
            href="https://github.com/PochiTama-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="sin-enlace"
            >
                <BsGithub />
            </a>
      </div>
    )
}

export default LinksBox