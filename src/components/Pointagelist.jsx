import React, {useState, useEffect} from 'react'
import { LoadingContext } from '../context/LoadingContext';
import LoadingHooks from '../hooks/LoadingHooks';
import { getAllPointage } from '../service/PointageService';
import Spinner from '../utils/Spinner';

const Pointagelist = () => {

    const [listePointage, setListePointage] = useState([]);
    const {dataIsLoading, isLoading} = LoadingHooks()
    const getListePoitageDatabase = async () => {
        const liste = await getAllPointage();
        setListePointage(liste);

    }
    useEffect(() => {
        // setListePointage(await getListePointageDatabase());
        //getListePointageDatabase();
        dataIsLoading(false);
    }, [''])

  return (
    isLoading ? <Spinner /> :
    <div>
        <h1 className='title'>Pointage</h1>
        <h2 className='subtitle'>Listes de pointage</h2>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>id pointage</th>
                    <th>Date </th>
                    <th>heure d entre</th>
                    <th>heure de sortie</th>
                </tr>
            </thead>
            <tbody>

                    {listePointage.map(pointage => {
                    return <tr>
                        <td>{pointage.codePointage}</td>
                        <td>{pointage.date}</td>
                        <td>{pointage.heuredentre}</td>
                        <td>{pointage.heuredesortie}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Pointagelist