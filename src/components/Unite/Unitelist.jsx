import React, { useEffect, useState } from 'react';
import ButtonPersonalise from '../../common/ButtonPersonalise';
import LoadingHooks from '../../hooks/LoadingHooks';
import { getAllUnite } from '../../service/UniteService';
import Spinner from '../../utils/Spinner';
import FormDialogUnite from '../formulaireUnite/FormDialogUnite';
import UniteShowModal from './UniteShowModal';

const Unitelist = () => {
    const [listeUnite, setListeUnite] = useState([]);
    const [showFormAdd, setShowFormAdd] = useState(false);
    const [showUniteInfo, setShowUniteInfo] = useState(false);
    const {dataIsLoading, isLoading} = LoadingHooks();
    const [uniteToShow, setUniteToShow] = useState(false);

    const getListeUniteDatabase = async () => {
        dataIsLoading(true);
        const liste = await getAllUnite();
        setListeUnite(liste);
        dataIsLoading(false);


    }
    useEffect(() => {
        // setListeUnite(await getListeUniteDatabase());
        
        getListeUniteDatabase();
       
    }, [''])

    const showFormAddFunction = () => {
        setShowFormAdd(true)
    }
    const hideFormAddFunction = () => {
        setShowFormAdd(false);
        getListeUniteDatabase();
    }

    const showUnite = (Unite) => {
        setUniteToShow(Unite);
        setShowUniteInfo(true);
    }
    const hideUniteShown = () => {
      
        setShowUniteInfo(false);
        setUniteToShow({});
        getListeUniteDatabase();
    }

  return (
    isLoading ? <Spinner /> :
    <div>
   
        <h1 className='title'>Unite</h1>
        <h2 className='subtitle'>liste des unites</h2>
        <ButtonPersonalise titre="ajouter" functionADeclencher={() => showFormAddFunction()} />
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nom</th>
                    <th>Voir</th>
                </tr>
            </thead>
            <tbody>
            
                {listeUnite.map(Unite => {
                    return <tr>
                        <td>{Unite.codeUnite}</td>
                        <td>{Unite.nomUnite}</td>
                        <td><ButtonPersonalise titre="Voir" functionADeclencher={() => showUnite(Unite)}/></td>
                    </tr>
                })}
            </tbody>
        </table>
        <FormDialogUnite open={showFormAdd} handleClose={hideFormAddFunction} />
        <UniteShowModal handleClose={hideUniteShown} open={showUniteInfo} unite={uniteToShow} />
    </div>
  )
}

export default Unitelist