import React, { Suspense } from 'react'
import SpinnerLoadingComponent from '../utils/SpinnerLoadingComponent'
import Layout from './Layout'
const CongeNonValideListComponent = React.lazy(() => import('../components/conge/CongeNonValideList'))



const CongeNonValide = () => {
  return (
      <Suspense fallback={<SpinnerLoadingComponent />}>
        <Layout>
        <CongeNonValideListComponent/>
        </Layout>
    </Suspense>
  )
}

export default CongeNonValide