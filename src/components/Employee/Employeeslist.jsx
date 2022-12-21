import React, { useEffect, useState } from 'react';
import ButtonPersonalise from '../../common/ButtonPersonalise';
import LoadingHooks from '../../hooks/LoadingHooks';
import { getListeEmployeeDb } from '../../service/EmployeService';
import Spinner from '../../utils/Spinner';
import FormDialogEmployee from '../formulaireEmployee/FormDialogEmployee';


const Employeelist = () => {
    const [listeEmployee, setListeEmployee] = useState([]);
    const [showFormAdd, setShowFormAdd] = useState(false);
    const {dataIsLoading, isLoading} = LoadingHooks()
    const getListeEmployeeDatabase = async () => {
        const liste = await getListeEmployeeDb();
        setListeEmployee(liste);

    }
    useEffect(() => {
        // setListeEmployee(await getListeEmployeeDatabase());
        getListeEmployeeDatabase();
        dataIsLoading(false);
    }, [])

    const showFormAddFunction = () => {
        setShowFormAdd(true)
    }
    const hideFormAddFunction = () => {
        setShowFormAdd(false);
        getListeEmployeeDatabase();
    }

  return (

    <div>
   
        <h1 className='title'>Employee</h1>
        <h2 className='subtitle'>liste des employees</h2>
        <ButtonPersonalise titre="ajouter" functionADeclencher={() => showFormAddFunction()} />
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>Matricule</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Date_de_naissance</th>
                    <th>Email</th>
                    <th>Sexe</th>
                    <th>Telephone</th>
                    <th>Photo</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {
                isLoading ? <Spinner /> :
                listeEmployee.map(Employee => {
                    return <tr>
                        <td>{Employee.matricule}</td>
                        <td>{Employee.name}</td>
                        <td>{Employee.surname}</td>
                        <td>{Employee.phoneNumber}</td>
                        <td>{Employee.email}</td>
                        <td>{Employee.sex}</td>
                        <td>{Employee.phoneNumber}</td>
                        <td>{Employee.photo}</td>
                        <td>{Employee.idFonction}</td>
                    </tr>
                })
            }
            </tbody>
        </table>
        <FormDialogEmployee open={showFormAdd} handleClose={hideFormAddFunction} />
        {/* <EmployeeShowModal handleClose={hideEmployeeShown} open={showEmployeeInfo} employee={employeeToShow} /> */}

    </div>
  )
}

export default Employeelist