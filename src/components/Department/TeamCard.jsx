import s from "./TeamCard.module.css";

export const TeamCard = ({ name, position, image, socialLinks }) => {
  return (
    <div className={s.card}>
      <div className={s.card__image}>
        <img src={image} alt={name} />
        <div className={s.socialIcons}>
          {socialLinks.length > 0 &&
            socialLinks.map((social, index) => (
              <img key={index} src={`/src/assets/${social}.svg`} alt={social} />
            ))}
        </div>
      </div>
      <div className={s.card__text}>
        <h3 className={s.card__title}>{name}</h3>
        <p className={s.position}>{position}</p>
      </div>
    </div>
  );
};
