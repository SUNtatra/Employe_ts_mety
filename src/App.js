import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Employees from "./pages/Employees";
import Unite from "./pages/Unite";
import React from "react";
// import { ROUTE_DASHBOARD, ROUTE_EMPLOYEE, ROUTE_UNITE } from "./components/formulaireUnite/router/Routes";
import ErrorPage from "./components/formulaire/ErrorPage";
import { ROUTE_DASHBOARD,ROUTE_JOURFERIE, ROUTE_EMPLOYEE,ROUTE_CONGEVALIDE,ROUTE_CONGENONVALIDE,ROUTE_POINTAGE, ROUTE_UNITE, ROUTE_FONCTION, ROUTE_CONGEDEMANDE } from "./router/Routes";
import CongeValide from "./pages/CongeValide";
import CongeNonValide from "./pages/CongeNonValide";
import Pointage from "./pages/Pointage";
import JourFerie from "./pages/Jourferie";
import FonctionSuspense from "./pages/Fonction";
import CongeDemande from "./pages/CongeDemande";

// import JourFerie from "./pages/Jourferie";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE_DASHBOARD} element={<Dashboard/>}/>
          <Route path={ROUTE_CONGEDEMANDE} element={<CongeDemande/>}/>

          <Route path={ROUTE_EMPLOYEE} element={<Employees/>}/>
          <Route path={ROUTE_CONGEVALIDE} element={<CongeValide/>}/>
          <Route path={ROUTE_CONGENONVALIDE} element={<CongeNonValide/>}/>
          <Route path={ROUTE_UNITE} element={<Unite/>}/>
          <Route path={ROUTE_POINTAGE} element={<Pointage/>}/>
          <Route path={ROUTE_FONCTION} element={<FonctionSuspense/>}/>
          <Route path={ROUTE_JOURFERIE} element={<JourFerie/>}/>
          {/* <Route path={ROUTE_JOURFERIE} element={<JourFerie/>}/> */}


          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
