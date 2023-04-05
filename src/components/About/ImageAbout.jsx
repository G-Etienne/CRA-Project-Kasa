//PAGE A PROPOS

//Importation de l'image de la page A Propos
import image from "../../assets/images/image-a-propo.png";

//Composant fonction qui retourne un élément image avec la photo importée
function ImageAbout() {
    return (
        <img
            className="image-about__image"
            src={image}
            alt="Paysage avec des montagnes."
        />
    );
}

//Exportation du composant fonction
export default ImageAbout;
