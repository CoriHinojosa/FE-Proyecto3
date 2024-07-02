import React from 'react';
import { Link } from 'react-router-dom';
import { NavSection } from './styles';


const AppNav = () => {
    return(
        <NavSection>
            <Link to="/AppMain"> HOME </Link>
            <Link to="/AppNow"> EL CLIMA </Link>
            <Link to="/AppForm"> REGISTRO </Link>
        </NavSection>
    )
}

export default AppNav;