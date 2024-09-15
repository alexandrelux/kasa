import CoverAbout from "../components/CoverAbout";
import Dropdown from "../components/Dropdown";

const Aboutpage = () => {
    return (
        <div>
            <div className="spacer" />
            <CoverAbout />
            <div className="spacer" />
            <Dropdown title="Fiabilité">
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes.
            </Dropdown>
            <div className="spacer2030" />
            <Dropdown title="Respect">
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement à discriminatoire ou de perturbation du
                voisinage entraînera un exclusion de notre plateforme.
            </Dropdown>
            <div className="spacer2030" />
            <Dropdown title="Service">
                La qualité du service est au coeur de notre engagement chez
                Kasa; Nous veillons à ce que chaque interaction, que ce soit
                avec nos hôtes ou nos locataires, soit empreinte de respect et
                de bienveillance.
            </Dropdown>
            <div className="spacer2030" />
            <Dropdown title="Sécurité">
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                que pour les voyageurs, chaque logement correspond aux critères
                de sécurité établis par nos services? En laissant une note aussi
                bien à l’hote qu’au locataire, cela permet à nos équipes de
                vérifier que les standards sont bien respectés. Nous organisions
                également des ateliers sur la sécurité domestique pour nos
                hôtels.
            </Dropdown>
            <div className="spacer" />
        </div>
    );
};

export default Aboutpage;
