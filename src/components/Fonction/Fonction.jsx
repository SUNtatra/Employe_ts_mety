import React, { useEffect, useState } from 'react'
import { getAllFonction } from '../../service/FonctionService';
import ButtonPersonalise from '../../common/ButtonPersonalise';
import LoadingHooks from '../../hooks/LoadingHooks';
import Spinner from '../../utils/Spinner';
import FormDialogFonction from './FonvtionFormulaire';
import FonctionShowModal from './FonctionShowModal';



export default function Fonction() {
  const [listeDesFonction, setListeDesFonction] = useState([]);
  const [showDialogFonction, setShowDialogFonction] = useState(false);
  const {dataIsLoading, isLoading} = LoadingHooks()
  const [fonctionToShow, setFonctionToShow] = useState({});
  const [showFormAdd, setShowFormAdd] = useState(false);
  const [showFonctionInfo, setShowFonctionInfo] = useState(false);


  const getAllFonctionDatabase = async () => {
    dataIsLoading(true)
    const liste = await getAllFonction();
    setListeDesFonction(liste);
    dataIsLoading(false)
  }
  useEffect(() => {
    getAllFonctionDatabase();
  }, [''])

  const showDialogFonctionForm = () => {
    setShowDialogFonction(true)
  }

  const hideDialogFonctionForm = () => {
    setShowDialogFonction(false)
    getAllFonctionDatabase()
  }

  const  showFonction = (fonction) => {
    setFonctionToShow(fonction);
    setShowFonctionInfo(true)
  }
  const hideFonctionShown = () => {
    setShowFonctionInfo(false)
    setFonctionToShow({});

  }
  return (
    isLoading ? <Spinner /> :
    <div>
   
        <h1 className='title'>Fonction</h1>
        <h2 className='subtitle'>liste des fonction </h2>
        <ButtonPersonalise titre="ajouter" functionADeclencher={() => showDialogFonctionForm()} />
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>Nom fonction</th>
                    <th>Information</th>
                    <th>Nom service</th>
                </tr>
            </thead>
            <tbody>
               {
                listeDesFonction.map(fonction => {
                  return (<tr>
                    <td>{fonction.nom}</td>
                    <td>{fonction.info}</td>
                    <td>{fonction.nomUnite}</td>
                    <td><ButtonPersonalise titre="Voir" functionADeclencher={() => showFonction(fonction)}/></td>

                  </tr>)
                })
               }
            </tbody>
        </table>
        <FormDialogFonction open={showDialogFonction} handleClose={hideDialogFonctionForm} />
        <FonctionShowModal handleClose={hideFonctionShown} open={showFonctionInfo} fonction={fonctionToShow} />

    </div>
  )
}
