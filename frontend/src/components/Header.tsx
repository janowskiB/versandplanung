import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <Link to="/customers">Customers</Link>
                    <Link to="/employees">Employees</Link>
                    <Link to="/fleets">Fleets</Link>
                </ul>
            </nav>
        </header>
    )
}