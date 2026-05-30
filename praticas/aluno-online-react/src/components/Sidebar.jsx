import './Sidebar.css';

function Sidebar({ items }) {
  return (
    <aside className="app-sidebar">
      <nav>
        <ul>
          {items.map((item) => (
            <li key={item.label} className={item.variant || ''}>
              <strong>{item.label}</strong>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
