import './SectionCard.css';

function SectionCard({ title, children }) {
  return (
    <article className="section-card">
      <h3>{title}</h3>
      <div className="section-card-body">{children}</div>
    </article>
  );
}

export default SectionCard;
