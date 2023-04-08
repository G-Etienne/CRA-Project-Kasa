//PAGE A PROPOS

//Importation de useState
//Importation de l'image du bouton pour ouvrir et fermer les barres
import { useState } from "react";
import ImageButton from "../assets/images/V-buttom.png";


//Composant fonction qui retourne des éléments pour construire les barres contenant les informations
//Si isOpen est false --> la barre est fermée, sinon elle affiche les informations
function InfoRod({ title, texte, page }) {
    const [isOpen, setIsOpen] = useState(false);

    const whatpage = (texteAdd) => {
        if (page === "about"){
            return("about" + texteAdd)
        }else if (page === "dwelling"){
            return("dwelling" + texteAdd)
        }
    };

    if (isOpen === true) {
        return (
            <div className={whatpage("-container-rod")}>
                <div
                    onClick={() => setIsOpen(false)}
                    className={whatpage("__title-container")}
                >
                    <h2 className={whatpage("__title")}>{title}</h2>
                    <img
                        onClick={() => setIsOpen(false)}
                        src={ImageButton}
                        alt="Bouton fermer/ouvrir des barres d'informations."
                        className={whatpage("__title-button")}
                    />
                </div>
                <p className={whatpage("__texte")}>{texte}</p>
            </div>
        );
    } else if (isOpen === false) {
        return (
            <div className={whatpage("-container-rod")}>
                <div
                    onClick={() => setIsOpen(true)}
                    className={whatpage("__title-container")}
                >
                    <h2 className={whatpage("__title")}>{title}</h2>
                    <img
                        style={{ rotate: "180deg" }}
                        src={ImageButton}
                        alt="Bouton fermer/ouvrir des barres d'informations."
                        className={whatpage("__title-button")}
                    />
                </div>
            </div>
        );
    }
}

//Exportation du composant fonction
export default InfoRod;
