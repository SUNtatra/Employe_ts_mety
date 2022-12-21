import React, { useState } from 'react'
import ButtonPersonalise from '../../common/ButtonPersonalise';
import LoadingHooks from '../../hooks/LoadingHooks';
import { getcongevalideDb } from '../../service/CongeService';
import FormDialogCongeDemande from './CongeDemandeFormulaire';


export default function CongeDemande() {
    const [showFormConge, setShowFormConge] = useState(false);
    const showFormulaire = () => {
        setShowFormConge(true);
    }
    const hideFormulaire = () => {
        setShowFormConge(false);
    }
  return (
    <div>CongeDemande
        <ButtonPersonalise titre="ajouter" functionADeclencher={showFormulaire} />
        <FormDialogCongeDemande handleClose={hideFormulaire} open={showFormConge}  />
    </div>
  )
}
