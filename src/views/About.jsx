import aboutImage from "../assets/hero.jpg";
import handImage from "../assets/hand.jpg";
import communityImage from "../assets/community.jpg"
import "./About.css";

export default function About() {

    return (
        <>
            <h1>About FlowerPlant</h1>
            <section className="about">
                <div className="about-container">
                    <img src={communityImage} alt="This is a picture of people in a garden." className="about-img" />
                    <div className="about-text">
                        <h2>Our Vision</h2>
                        <p>
                            We want to create a welcoming community where plant enthusiasts of all levels can explore, learn, and grow together with their plants. 
                            We envision a world where everyone, from beginners to experienced gardeners, can enjoy the beauty and benefits of greenery, 
                            fostering a closer connection with nature and a sense of calm in daily life.
                        </p>
                    </div>
                </div>

                <div className="about-container">
                    <div className="about-text-left">
                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to provide practical, easy-to-follow plant care guides, interactive tools to manage your personal plant collection, and inspiration for indoor and outdoor gardening. 
                            We aim to make plant care approachable, enjoyable, and rewarding, so that every plant in your home or garden thrives under your care.
                        </p>
                    </div>
                    <img src={handImage} alt="This is a picture of a hand holding a seedling." className="about-img-right" />
                </div>

                <div className="about-container">
                    <img src={aboutImage} alt="This is a picture of flowers." className="about-img" />
                    <div className="about-text">
                        <h2>Our Purpose</h2>
                        <p>
                            FlowerPlant exists to empower individuals to nurture plants and, in doing so, cultivate mindfulness, patience, and sustainability. 
                            By sharing knowledge, supporting each other, and celebrating the joy of greenery, we hope to build a community that grows together, one plant at a time.
                        </p>
                    </div>
                </div>
            </section>
            </>
    )
}
