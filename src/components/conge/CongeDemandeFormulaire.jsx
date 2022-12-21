import { Button, Dialog, DialogActions,DialogContent , DialogTitle, FormControl, TextField } from '@mui/material';
import React, { useState } from 'react';
import { addCongeDb } from '../../service/CongeService';
import { DatePickerPersonalise } from '../../common/Datepicker';


// import { addFonctionDb } from '../../service/CongeDemandeService';
const modelCongeDemande = {
    nomConge: '',
    motif: '',
    dateDebutDemandeConge: '',
    dateFinDemandeConge: '',
    matriculeDemandeur : '',

    

}
export default function FormDialogCongeDemande({ handleClose, open}) {
    const [CongeDemande, setCongeDemande] = useState(modelCongeDemande);
  const effacerFormulaire = () => {
    setCongeDemande(modelCongeDemande)
    handleClose();
  }
  const addCongeDemandeToDatabase = async () => {
    // await addCongeDemandeIntoDatabase(CongeDemande)
    await addCongeDb(CongeDemande);
    fermerFormulaire()
  }
  const fermerFormulaire = () => {
    effacerFormulaire();
  
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setCongeDemande({...CongeDemande, [name]: value})
  }
  return (
      <Dialog
        open={open}
        onClose={fermerFormulaire}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Ajout CongeDemande</DialogTitle>
        <DialogContent>

        <FormControl fullWidth>
          <TextField
            id="outlined-name"
            label="Nom Conge"
            name='nomConge'
            value={CongeDemande.nomConge}
            onChange={handleChange}
          />

          </FormControl>

          <FormControl fullWidth>
          <TextField
            id="outlined-name"
            label="motif du conge"
            name='motif'
            value={CongeDemande.motif}
            onChange={handleChange}
          />

          </FormControl>

          <FormControl fullWidth>
            <DatePickerPersonalise handleChange={handleChange} nameInput="dateDebutDemandeConge" valeurDate={CongeDemande.dateDebutDemandeConge}/>
          </FormControl>

          <FormControl fullWidth>
            <DatePickerPersonalise handleChange={handleChange} nameInput="dateFinDemandeConge" valeurDate={CongeDemande.dateFinDemandeConge}/>
          </FormControl>

        <FormControl fullWidth>
          <TextField
            id="outlined-name"
            label="matricule du Demandeur"
            name='matriculeDemandeur'
            value={CongeDemande.matriculeDemandeur} 
            onChange={handleChange}
          />

          </FormControl>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={fermerFormulaire} color="primary">
            fermer
          </Button>
          <Button onClick={addCongeDemandeToDatabase} color="primary">
            ajouter
          </Button>
        </DialogActions>
      </Dialog>
  );
}