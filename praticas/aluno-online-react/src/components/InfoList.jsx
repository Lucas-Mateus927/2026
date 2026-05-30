import './InfoList.css';

function InfoList({ title, items }) {
  return (
    <section className="info-list">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            <div>
              <strong>{item.title}</strong>
              <p>{item.subtitle}</p>
            </div>
            <span>{item.action}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default InfoList;
