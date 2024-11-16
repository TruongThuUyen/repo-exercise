import Header from '../../components/Common/Header/Header';
import background from '../../assets/images/background.jpg';
import Image from '../../components/Image/Images';
import './HomePage.scss';
import HighLightComponent from '../../components/Common/HighLightComponent/HighLightComponent';

function HomePage() {
    return (
        <div>
            <Header />
            <section className="hero-section">
                <div className="left-section">
                    <h2 className="left-section__title">Litte Lemon</h2>
                    <p className="left-section__sub-title">Chicago</p>
                    <p className="left-section__introduction">
                        We are a family owned Mediteranean restaurant, focused
                        on traditional recipes served with a modern twist.
                    </p>
                    <button className="btn-reserve">Reserve a Table</button>
                </div>
                <div className="right-section">
                    <Image src={background} alt="image" />
                </div>
            </section>
            <HighLightComponent />
        </div>
    );
}

export default HomePage;
