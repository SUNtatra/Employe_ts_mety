import React from 'react';
import {NavLink} from "react-router-dom";
import { IoPerson, IoPricetag,IoCalendarNumberOutline, IoHome,IoBed,IoQrCode } from "react-icons/io5";
import { ROUTE_CONGEVALIDE,ROUTE_CONGEDEMANDE, ROUTE_POINTAGE,ROUTE_FONCTION,ROUTE_JOURFERIE, ROUTE_CONGENONVALIDE, ROUTE_DASHBOARD, ROUTE_EMPLOYEE, ROUTE_UNITE  } from '../router/Routes';
// import { ROUTE_DASHBOARD, ROUTE_EMPLOYEE, ROUTE_UNITE } from './router/Routes';


const Sidebar = () => {
  return (
    <div>
        <aside className="menu pl-2 has-shadow">
            <p className="menu-label">General</p>
            <ul className="menu-list">
            <li>
                <NavLink to={ROUTE_DASHBOARD}><IoHome/> Dashboard</NavLink>
            </li>
            <li>
                <NavLink to={ROUTE_EMPLOYEE}><IoPerson/>Employees</NavLink>
            </li>
            <li>
                <NavLink to={ROUTE_UNITE}><IoPricetag/>Unite </NavLink>
            </li>
            <li>
                <NavLink to={ROUTE_FONCTION}><IoHome/>Fonction </NavLink>
            </li>
            <li>
                <NavLink to={ROUTE_CONGEVALIDE}><IoBed/>Conge validé</NavLink>
            </li>
            <li>
                <NavLink to={ROUTE_CONGENONVALIDE}><IoBed/>Conge non validé</NavLink>
                
            </li>
            <li>
                <NavLink to={ROUTE_CONGEDEMANDE}><IoBed/>Demande conge</NavLink>
            </li>
            <li>
                <NavLink to={ROUTE_JOURFERIE}><IoCalendarNumberOutline/>Jour ferié</NavLink>
            </li>
            <li>
                <NavLink to={ROUTE_POINTAGE}><IoQrCode/>Pointage</NavLink>
            </li>
            
          </ul>
        </aside>
    </div>
  );
};

export default Sidebar;
