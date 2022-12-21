import * as React from 'react';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Button, Dialog, DialogActions,DialogContent , DialogTitle, FormControl, TextField } from '@mui/material';
import { deleteCongeDb } from '../../service/CongeService';
import { deleteUniteDb } from '../../service/UniteService';

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

export default function UniteShowModal({open, handleClose, unite}) {
    const [uniteShown, setUniteShown] = React.useState({});
    React.useEffect(() => {
        setUniteShown(unite);
    }, [unite.codeUnite]);

    const deleteUniteDatabase = async () => {
        await deleteUniteDb(unite.nomUnite);
        
        handleClose();
    }
    const updateUnite = () => {
        console.log("update de la base de donnee ")
    }
  return (
    <div>
        <Dialog
         open={open}
         onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Information unite</DialogTitle>

        <DialogContent>
          <FormControl fullWidth>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Code unite : {uniteShown.codeUnite}
          </Typography>

          </FormControl>
          <FormControl fullWidth>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Nom unite : {uniteShown.nomUnite}
          </Typography>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteUniteDatabase} color="primary">
            effacer
          </Button>
          <Button onClick={updateUnite} color="primary">
            modifier
          </Button>
        </DialogActions>

      </Dialog>
       
    </div>
  );
}