import React, { Suspense } from 'react'
import SpinnerLoadingComponent from '../utils/SpinnerLoadingComponent'
import Layout from './Layout'
const CongeValideListComponent = React.lazy(() => import('../components/conge/CongeValideList'))



const Employees = () => {
  return (
      <Suspense fallback={<SpinnerLoadingComponent />}>
        <Layout>
        <CongeValideListComponent/>
        </Layout>
    </Suspense>
  )
}

export default Employees