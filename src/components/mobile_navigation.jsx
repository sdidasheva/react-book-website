import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";


export default function MobileNavigation() {
    const [open, setOpen] = useState(false)

    const hamburgerIcon = <FiMenu className='burger_icon' onClick={() => setOpen(!open)} />

    const closeIcon = <CgClose className='burger_icon' onClick={() => setOpen(!open)} />

    const closeMobileNav = () => setOpen(false);

    const isMobile = true;

    const animateFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }
    return (
        <nav className='mobile_nav'>
            {open ? closeIcon : hamburgerIcon}
            {open && <><ul className='mobile_nav_list'>
                <motion.li
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{ delay: 0.05 }}
                    onClick={() => isMobile && closeMobileNav()} ><Link className='link' to="/">Главная</Link></motion.li>
                <motion.li
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{ delay: 0.1 }}
                    onClick={() => isMobile && closeMobileNav()}><Link className='link' to="/list">Прочитанное</Link></motion.li>
            </ul>
            </>}

        </nav>
    )
}
