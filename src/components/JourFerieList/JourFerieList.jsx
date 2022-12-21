import React, { useEffect, useState } from 'react'
import LoadingHooks from '../../hooks/LoadingHooks';
import { getAllJourferie } from '../../service/JourferieService';
import Spinner from '../../utils/Spinner';
import ButtonPersonalise from '../../common/ButtonPersonalise';
import FormDialogJourFerie from './JourFerieListFormulaire';
import { convertirDate } from '../../utils/HandleError';
import { Audio } from 'react-loader-spinner';
import SpinnerLoadingComponent from '../../utils/SpinnerLoadingComponent';


export default function JourFerieList() {
  const [listeJourferie, setListeJourferie] = useState([]);
  const {dataIsLoading, isLoading} = LoadingHooks()
  const [showDialogJourFerie, setShowDialogJourFerie] = useState(false);

  const listeJourFerieDatabase = async () => {

    dataIsLoading(true);
    const liste = await getAllJourferie();
    setListeJourferie(liste);
    dataIsLoading(false);
  }
  useEffect(() => {
    listeJourFerieDatabase();
  }, [''])

  const showDialogAddFonction = () => {
    setShowDialogJourFerie(true)
  }

  const hideDialogFonction = () => {
    setShowDialogJourFerie(false)
    listeJourFerieDatabase();
  }

  return (
    
    <div>
   
        <h1 className='title'>Jour Ferie</h1>
        <h2 className='subtitle'>liste des jours feries </h2>
        <ButtonPersonalise titre="ajouter" functionADeclencher={() => showDialogAddFonction()} />
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>Nom Evenement</th>
                    <th>date Jour ferie</th>
                    <th>Matricule Rh</th>

                </tr>
            </thead>
            <tbody>
               {
                isLoading ? <SpinnerLoadingComponent  /> :
                listeJourferie.map(jourFerie => {
                  return (
                    <tr>
                      <td>{jourFerie.nomEvenement}</td>
                      <td>{convertirDate(jourFerie.dateJourFerie)}</td>
                      <td>{jourFerie.matricule}</td>
                    </tr>
                  )
                })
               }
            </tbody>
        </table>
        <FormDialogJourFerie open={showDialogJourFerie} handleClose={hideDialogFonction} />
    </div>
        )
}
