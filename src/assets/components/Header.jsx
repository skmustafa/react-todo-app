
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <>

            <nav className="navbar navbar-expand-sm navbar-dark ms-auto bg-dark">
                <div className="container">

                    <NavLink className="navbar-brand ms-2" href="#">Todo App</NavLink>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation"></button>

                    <div className="collapse navbar-collapse " id="collapsibleNavId">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">

                            <li className="nav-item active">
                                <NavLink className="nav-link" to={'/'}>Home</NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink className="nav-link" to={'/about'}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/contact'}>Contact</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Header