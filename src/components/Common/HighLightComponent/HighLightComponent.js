import Image from '../../Image/Images';
import './HighLightComponent.scss';
import picture1 from '../../../assets/images/image1.jpg';
import picture2 from '../../../assets/images/image2.jpg';
import picture3 from '../../../assets/images/image3.jpg';

function HighLightComponent() {
    return (
        <div className="highlight-wrapper">
            <div className="highlight-head">
                <h2>This weeks specials!</h2>
                <button>Online Menu</button>
            </div>
            <section className="highlight-content">
                <ul className="menu-container">
                    <li className="highlight-menu-item">
                        <Image
                            src={picture1}
                            alt="image"
                            className="menu-item-image"
                        />
                        <div className="menu-item-content">
                            <div className="menu-item__title-price">
                                <p className="menu-item-title">Greek salad</p>
                                <p className="menu-item-price">$12.99</p>
                            </div>
                            <p className="menu-item-description">
                                The famous Greek salad of crispy lettuce,
                                peppers, olives, and our Chicago-style feta
                                cheese, garnished with crunchy garlic and
                                rosemary croutons
                            </p>
                            <p className="menu-item-order-button">
                                Order a delivery
                            </p>
                        </div>
                    </li>
                    <li className="highlight-menu-item">
                        <Image
                            src={picture2}
                            alt="image"
                            className="menu-item-image"
                        />
                        <div className="menu-item-content">
                            <div className="menu-item__title-price">
                                <p className="menu-item-title">Bruschetta</p>
                                <p className="menu-item-price">$5.99</p>
                            </div>
                            <p className="menu-item-description">
                                Our Bruschetta is made from grilled bread that
                                has been smeared with garlic and seasoned with
                                salt and olive oil.
                            </p>
                            <p className="menu-item-order-button">
                                Order a delivery
                            </p>
                        </div>
                    </li>
                    <li className="highlight-menu-item">
                        <Image
                            src={picture3}
                            alt="image"
                            className="menu-item-image"
                        />
                        <div className="menu-item-content">
                            <div className="menu-item__title-price">
                                <p className="menu-item-title">Lemon Dessert</p>
                                <p className="menu-item-price"> $5.00</p>
                            </div>
                            <p className="menu-item-description">
                                This comes straight from grandma's recipe book;
                                every last ingredient has been sourced and is as
                                authentic as can be imagined.
                            </p>
                            <p className="menu-item-order-button">
                                Order a delivery
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default HighLightComponent;
