import Image from "next/image";
import styles from "./about.module.css";

const HeroSection = () => {
  return (
    <section className={styles.herosection}>
      <div className={styles.herosectionWrapper}>
        <div className={styles.herosectionTexts}>
          <h1>
            Get to <span>Know </span>Us
          </h1>
          <p>
            Empowering communities, defending rights, and building a society
            where every citizen has the chance to thrive.
          </p>
        </div>
        <div className={styles.herosectionImage}>
          <Image
            src="/About-us-bg.png"
            alt="About Us Background"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
