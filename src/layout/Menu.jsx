import logo from '../images/logoEmpresa.png'

const Menu = props => {

    return (
        <header>
            <div className="logo"><img src={logo} alt="" /></div>
            <nav>
                <ul>
                    <li><a href="#about">Quem somos</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu