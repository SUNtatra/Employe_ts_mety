import React, { Suspense } from 'react'
import SpinnerLoadingComponent from '../utils/SpinnerLoadingComponent'
import Layout from './Layout'
const FonctionComponent = React.lazy(() => import('../components/Fonction/Fonction'))



const FonctionSuspense = () => {
  return (
    <Suspense fallback={<SpinnerLoadingComponent />}>
           <Layout>
        <FonctionComponent/>
    </Layout>
    </Suspense>
 
  );
}

export default FonctionSuspense;