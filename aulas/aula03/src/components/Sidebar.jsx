import logo from "../assets/learn.svg";
import Menu from "./Menu";
function Sidebar() {
    return (
        <aside className='hidden md:block hg-gray-300'>
    <header classname='flex flex-row'>
        <img src={logo} alt='imagem logo' />
        <h1>Aluno Online</h1>
    </header>
    <Menu />
    </aside>
    );
}
export default Sidebar;