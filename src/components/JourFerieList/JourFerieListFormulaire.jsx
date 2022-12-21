import { Button, Dialog, DialogActions,DialogContent , DialogTitle, FormControl, TextField } from '@mui/material';
import React, { useState } from 'react';
import { addJourFerieIntoDatabase } from '../../service/JourferieService';
import { DatePickerPersonalise } from '../../common/Datepicker';
import LoadingHooks from '../../hooks/LoadingHooks';
// import { addFonctionDb } from '../../service/JourFerieService';


const modelJourFerie = {
    nomEvenement: '',
    dateJourFerie  : '',
    matricule: '',
}
export default function FormDialogFonction({ handleClose, open}) {
    const [JourFerie, setJourFerie] = useState(modelJourFerie);
    const {dataIsLoading} = LoadingHooks()
  const effacerFormulaire = () => {

    setJourFerie(modelJourFerie)
    handleClose();
  }
  const addJourFerieToDatabase = async () => {
    dataIsLoading(true)
    await addJourFerieIntoDatabase(JourFerie)
    dataIsLoading(false);
    fermerFormulaire()
  }
  const fermerFormulaire = () => {
    effacerFormulaire();
  
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setJourFerie({...JourFerie, [name]: value})
  }
  return (
    <div>
      <Dialog
        open={open}
        onClose={fermerFormulaire}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Ajout JourFerie</DialogTitle>
        <DialogContent>

        <FormControl fullWidth>
          <TextField
            id="outlined-name"
            label="nomEvenement"
            name='nomEvenement'
            value={JourFerie.nomEvenement}
            onChange={handleChange}
          />

          </FormControl>
    
          <FormControl fullWidth>
            <DatePickerPersonalise handleChange={handleChange} nameInput="dateJourFerie" valeurDate={JourFerie.dateJourFerie}/>
          </FormControl>

          <FormControl fullWidth>
          <TextField
            id="outlined-name"
            label="matricule"
            name='matricule'
            value={JourFerie.matricule}
            onChange={handleChange}
          />

          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={fermerFormulaire} color="primary">
            fermer
          </Button>
          <Button onClick={addJourFerieToDatabase} color="primary">
            ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}