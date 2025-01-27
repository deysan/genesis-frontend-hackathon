import Link from 'next/link';
import {Navbar, Container, Nav, Button, Image} from 'react-bootstrap';

import css from './Header.module.scss';

const Header = () => {
    return (
        <Navbar collapseOnSelect bg="dark" variant="dark" className={css.navbarContainer}>
            <Container>
                <Navbar.Brand href="/">
                    <img src="https://www.deltafaucet.com/themes/custom/delta_theme/logo.svg"
                         width="140"
                         height="35"
                         className="d-inline-block align-top"
                         alt="Delta app logo"/>
                </Navbar.Brand>
                <Nav>
                    <Link href="/profile">
                        <div className={css.profileLink}>
                            <Image
                                src="https://off-bot.ru/data/avatars/l/0/165.jpg"
                                width="40"
                                height="40"
                                className="d-inline-block align-top"
                                alt="Profile" roundedCircle/>
                        </div>
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;