import React, { useEffect, useState } from 'react'
import ButtonPersonalise from '../../common/ButtonPersonalise';
import LoadingHooks from '../../hooks/LoadingHooks';
import { getListeCongeNonValideDb } from '../../service/CongeService';

import TableauConge from './TableauConge';


export default function CongeNonValideList() {
  const [listeNonValide, setListeNonValide] = useState([]);
  const {dataIsLoading, isLoading} = LoadingHooks()
  const getAllValideCongeDatabase = async () => {
    dataIsLoading(true)
    const liste = await getListeCongeNonValideDb();
    setListeNonValide(liste);
    dataIsLoading(false)
  }
  useEffect(() => {
    getAllValideCongeDatabase();
  }, [''])
  return (
   <TableauConge titre="Liste des conges valides " listeDesConge={listeNonValide} isLoading={isLoading}/>
  )
}
