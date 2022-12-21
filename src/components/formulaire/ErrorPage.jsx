
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_DASHBOARD } from '../../router/Routes';
// import { ROUTE_DASHBOARD } from '../formulaireUnite/router/Routes';
const ErrorPage = () => 
    <div>
        <h1>Oops, something went wrong!</h1>
        <Link to={ROUTE_DASHBOARD}>Go back home</Link>
    </div>

export default ErrorPage;