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

export default function EmployeeShowModal({open, handleClose, employee}) {
    const [employeeShown, setEmployeeShown] = React.useState({});
    React.useEffect(() => {
        setEmployeeShown(employee);
    }, [employee.codeEmployee]);

    const deleteEmployeeDatabase = async () => {
        await deleteEmployeeDb(employee.nomEmployee);
        
        handleClose();
    }
    const updateEmployee = () => {
        console.log("update de la base de donnee ")
    }
  return (
    <div>
        <Dialog
         open={open}
         onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Information employee</DialogTitle>

        <DialogContent>
          <FormControl fullWidth>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          name employee : {employeeShown.nameEmployee}
          </Typography>

          </FormControl>

          <FormControl fullWidth>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          surname employee : {employeeShown.surnameEmployee}
          </Typography>
          </FormControl>

          <FormControl fullWidth>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          email employee : {employeeShown.emailEmployee}
          </Typography>
          </FormControl>
          <FormControl fullWidth>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          telephone employee : {employeeShown.phoneNumberEmployee}
          </Typography>
          </FormControl>
          <FormControl fullWidth>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          matricule employee : {employeeShown.matriculeEmployee}
          </Typography>
          </FormControl>
          <FormControl fullWidth>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          dateNaissance employee : {employeeShown.dateNaissanceEmployee}
          </Typography>
          </FormControl>
          <FormControl fullWidth>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          sexe employee : {employeeShown.sexEmployee}
          </Typography>
          </FormControl>
          <FormControl fullWidth>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          photo employee : {employeeShown.photoEmployee}
          </Typography>
          </FormControl>
          <FormControl fullWidth>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          id Fonction : {employeeShown.idFonctionEmployee}
          </Typography>
          </FormControl>

        </DialogContent>
        <DialogActions>
          <Button onClick={deleteEmployeeDatabase} color="primary">
            effacer
          </Button>
          <Button onClick={updateEmployee} color="primary">
            modifier
          </Button>
        </DialogActions>

      </Dialog>
       
    </div>
  );
}