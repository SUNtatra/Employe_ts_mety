import { Button, Dialog, DialogActions,DialogContent , DialogTitle, FormControl, TextField } from '@mui/material';
import React from 'react';
import { addUniteDb } from '../../service/UniteService';
export default function FormDialogUnite({ handleClose, open}) {
  const [codeUnite, setCodeUnite] = React.useState('');
  const [nomUnite, setNomUnite] = React.useState('');
  const handleChangeCodeUnite = (event) => {
    setCodeUnite(event.target.value);
  }
  const handleChangeNomUnite = (event) => {
    setNomUnite(event.target.value);
  }
  const effacerFormulaire = () => {
    setCodeUnite('');
    setNomUnite('');
  }
  const addUniteToDatabase = async () => {
    const payload = {
      codeUnite, nomUnite
    }
    await addUniteDb(payload);
    fermerFormulaire()
  }
  const fermerFormulaire = () => {
    effacerFormulaire();
    handleClose();
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={fermerFormulaire}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Ajout unite</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
          <TextField
            id="outlined-name"
            label="Code Unite"
            value={codeUnite}
            onChange={handleChangeCodeUnite}
          />

          </FormControl>
          <FormControl fullWidth>
          <TextField
            id="outlined-name"
            label="Nom de l'unite"
            value={nomUnite}
            onChange={handleChangeNomUnite}
          />

          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={fermerFormulaire} color="primary">
            fermer
          </Button>
          <Button onClick={addUniteToDatabase} color="primary">
            ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}