import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Cadastro</Link>
                    </li>
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contacts'>Contacts</Link>
                    </li>
                    <li>
                        <Link to={'/login'}>Login</Link>
                    </li>

                </ul>
            </nav>
            </header>
    )
}