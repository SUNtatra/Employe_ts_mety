import React, { useEffect, useState } from 'react'
import ButtonPersonalise from '../../common/ButtonPersonalise';
import LoadingHooks from '../../hooks/LoadingHooks';
import { getListeCongeValideDb } from '../../service/CongeService';

import TableauConge from './TableauConge';


export default function Fonction() {
  const [listeDesValideConge, setListeDesValideConge] = useState([]);
  const {dataIsLoading, isLoading} = LoadingHooks()
  const getAllValideCongeDatabase = async () => {
    dataIsLoading(true)
    const liste = await getListeCongeValideDb();
    setListeDesValideConge(liste);
    dataIsLoading(false)
  }
  useEffect(() => {
    getAllValideCongeDatabase();
  }, [''])

  // const list = 
  console.log(listeDesValideConge)
  return (
   <TableauConge titre="Liste des conges valides " listeDesConge={listeDesValideConge} isLoading={isLoading}/>
  )
}
