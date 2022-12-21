import React from 'react'
import Spinner from '../../utils/Spinner';
import { convertirDate } from '../../utils/HandleError';

export default function TableauConge({titre, listeDesConge, isLoading}) {
    return (
        isLoading ? <Spinner /> :
        <div>
       
            <h1 className='title'>Conge</h1>
            <h2 className='subtitle'>{titre} </h2>
            {/* <ButtonPersonalise titre="ajouter" functionADeclencher={() => showFormAddFunction()} /> */}
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        
                        <th>nomConge</th>
                        <th>motif</th>
                        <th>dateDebutDemandeConge</th>
                        <th>dateFinDemandeConge</th>
                        <th>dateDebutObtenue</th>
                        <th>dateFinObtenue</th>
                        <th>matriculeDemandeur</th>
                        <th>matriculeRH</th>
    
                    </tr>
                </thead>
                <tbody>
                   {
                    listeDesConge.map(ValideConge => {
                      return (<tr>
                        <td>{ValideConge.nomConge}</td>
                        <td>{ValideConge.motif}</td>
                        <td>{convertirDate(ValideConge.dateDebutDemandeConge)}</td>
                        <td>{convertirDate(ValideConge.dateFinDemandeConge)}</td>
                        <td>{convertirDate(ValideConge.dateDebutObtenue)}</td>
                        <td>{convertirDate(ValideConge.dateFinObtenue)}</td>
                        <td>{ValideConge.matriculeDemandeur}</td>
                        <td>{convertirDate()}</td>
    
                      </tr>)
                    })
                   }
                </tbody>
            </table>
            {/* <FormDialogValideConge open={showFormAdd} handleClose={hideFormAddFunction} /> */}
        </div>
      )
}
