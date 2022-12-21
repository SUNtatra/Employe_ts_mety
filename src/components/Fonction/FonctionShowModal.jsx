import * as React from 'react';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Button, Dialog, DialogActions,DialogContent , DialogTitle, FormControl, TextField } from '@mui/material';
// import { deleteCongeDb } from '../../service/CongeService';
// import { deleteUniteDb } from '../../service/UniteService';
// import { deleteFonctionDb } from '../../service/FonctionService';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function FonctionShowModal({open, handleClose, fonction}) {
    const [fonctionShown, setFonctionShown] = React.useState({});
    React.useEffect(() => {
      console.log(fonction)
        setFonctionShown(fonction);
    }, [fonction.nom]);

     const deleteFonctionDatabase = async () => {
        //  await deleteFonctionDb(fonction.nomFonction);
        
        handleClose();
    }
    const updateFonction = () => {
        console.log("update de la base de donnee ")
    }
  return (
    <div>
        <Dialog
         open={open}
         onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Information Fonction</DialogTitle>

        <DialogContent>
          <FormControl fullWidth>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Nom Fonction : {fonctionShown.nom}
          </Typography>

          </FormControl>

          <FormControl fullWidth>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Information : {fonctionShown.info}
          </Typography>

          </FormControl>


          <FormControl fullWidth>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Appartenant a uservice : {fonctionShown.nomUnite}
          </Typography>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteFonctionDatabase} color="primary">
            effacer
          </Button>
          <Button onClick={updateFonction} color="primary">
            modifier
          </Button>
        </DialogActions>

      </Dialog>
       
    </div>
  );
}