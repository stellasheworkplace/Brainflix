import image from "../../assets/Images/pagenotfound.png";
import '../PageNotFound/PageNotFound.scss';


function PageNotFound() {

    return (
        <>
            <section className="pagenotfound">
                <div className="pagenotfound__outside">
                    <img className="pagenotfound__image" src={image} alt="404" />
                </div>
            </section>
        </>
    );
}

export default PageNotFound;