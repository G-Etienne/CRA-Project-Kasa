//PAGE ACCUEIL
//Importation des styles
import "../../styles/pages/home/_imagehome.scss"
import "../../styles/pages/home/_dwelling.scss"

//Importation de l'image en haut de la page d'accueil
import Image from "../../assets/images/image-home.png";

//Composant fonction qui retourne une image et le texte à afficher au centre de l'image.
function ImageHome() {
    return (
        <div className="imageHome">
            <img
                className="imageHome__image"
                src={Image}
                alt="Plages Rocheuses"
            />
            <p className="imageHome__texte">Chez vous, partout et ailleurs</p>
        </div>
    );
}

//Exportation du composant fonction
export default ImageHome;
