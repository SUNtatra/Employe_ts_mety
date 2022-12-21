import { Button, Dialog, DialogActions,DialogContent , DialogTitle, FormControl, TextField } from '@mui/material';
import React, { useState } from 'react';
import { addFonctionIntoDatabase } from '../../service/FonctionService';

// import { addFonctionDb } from '../../service/FonctionService';
const modelFonction = {
    nom: '',
    info: '',
    nomService: ''
}
export default function FormDialogFonction({ handleClose, open}) {
    const [fonction, setFonction] = useState(modelFonction);
  const effacerFormulaire = () => {
    setFonction(modelFonction)
    handleClose();
  }
  const addFonctionToDatabase = async () => {
    await addFonctionIntoDatabase(fonction)
    fermerFormulaire()
  }
  const fermerFormulaire = () => {
    effacerFormulaire();
  
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFonction({...fonction, [name]: value})
  }
  return (
    <div>
      <Dialog
        open={open}
        onClose={fermerFormulaire}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Ajout Fonction</DialogTitle>
        <DialogContent>

        <FormControl fullWidth>
          <TextField
            id="outlined-name"
            label="Nom fonction"
            name='nom'
            value={fonction.nom}
            onChange={handleChange}
          />

          </FormControl>

          <FormControl fullWidth>
          <TextField
            id="outlined-name"
            label="Information"
            name='info'
            value={fonction.info}
            onChange={handleChange}
          />

          </FormControl>

          <FormControl fullWidth>
          <TextField
            id="outlined-name"
            label="Nom Service"
            name='nomService'
            value={fonction.nomService}
            onChange={handleChange}
          />

          </FormControl>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={fermerFormulaire} color="primary">
            fermer
          </Button>
          <Button onClick={addFonctionToDatabase} color="primary">
            ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}