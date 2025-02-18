import s from "./Department.module.css";
import { TeamCard } from "./TeamCard";

export const Department = ({ title, members }) => {
  return (
    <section className={s.department}>
      <h2 className={s.department__title}>{title}</h2>
      <div className={s.team}>
        {members.map((member) => (
          <TeamCard key={member.id} {...member} />
        ))}
      </div>
    </section>
  );
};
