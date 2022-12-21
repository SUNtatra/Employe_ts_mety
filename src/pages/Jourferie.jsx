import React, { Suspense } from 'react'
import SpinnerLoadingComponent from '../utils/SpinnerLoadingComponent'
import Layout from './Layout'
const JourFerielist = React.lazy(() => import('../components/JourFerieList/JourFerieList'))


const JourFerie = () => {
  return (
    <Suspense fallback={<SpinnerLoadingComponent />}>
        <Layout>
            <JourFerielist/>
        </Layout>
    </Suspense>
 
  );
}

export default JourFerie;