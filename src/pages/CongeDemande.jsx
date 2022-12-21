import React, { Suspense } from 'react'
import SpinnerLoadingComponent from '../utils/SpinnerLoadingComponent'
import Layout from './Layout'
const CongeDemandeComponent = React.lazy(() => import('../components/conge/CongeDemande'))



const CongeDemande = () => {
  return (
      <Suspense fallback={<SpinnerLoadingComponent />}>
        <Layout>
        <CongeDemandeComponent/>
        </Layout>
    </Suspense>
  )
}

export default CongeDemande