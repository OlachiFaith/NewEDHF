import AsteriskIcon from "./AsteriskIcon";
import ValueCard from "./ValueCard";
import styles from "./about.module.css";

const ValuesSection = () => {
  const values = [
    "Compassion",
    "Dignity",
    "Empowerment",
    "Integrity",
    "Community Transformation",
  ];

  const coreValues = [
    {
      title: "FEEDBACKS",
      subtitle: "Our Vision",
      description:
        "Our vision is: building people with dignity and self-worth. Every human being should have the same opportunity.",
    },
    {
      title: "FEEDBACKS",
      subtitle: "Our mission",
      description:
        "To advocate for community development, basic human right and welfare. To create platform where every citizen can excel.",
    },
    {
      title: "FEEDBACKS",
      subtitle: "Our Volunteer",
      description:
        "This is a place where you get to bring your full self, to serve, to impart knowledge, and to create values worth emulating",
    },
  ];

  return (
    <section className={styles.valuesSection}>
      <div className={styles.marquee}>
        <div className={styles.marqueeInner}>
          {values.map((value, index) => (
            <span
              className={styles.valueItem}
              key={index}
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#8E8E8E",
                lineHeight: "1.65rem",
              }}
            >
              {value}
              {index !== values.length - 1 && (
                <AsteriskIcon
                  style={{
                    marginLeft: "2.39rem",
                    marginRight: "2.39rem",
                    verticalAlign: "middle",
                  }}
                />
              )}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.coreValues}>
        <h1 className={styles.coreValuesHeader}>OUR CORE VALUES</h1>
        <div className={styles.coreValuesCardsContainer}>
          {coreValues.map((value, index) => (
            <ValueCard
              key={index}
              title={value.title}
              subtitle={value.subtitle}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
