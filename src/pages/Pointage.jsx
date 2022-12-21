import React, { Suspense } from 'react'
import SpinnerLoadingComponent from '../utils/SpinnerLoadingComponent'
import Layout from './Layout'
const PointageComponent = React.lazy(() => import('../components/Pointage/Pointage'))



const Pointage = () => {
  return (
      <Suspense fallback={<SpinnerLoadingComponent />}>
        <Layout>
        <PointageComponent/>
        </Layout>
    </Suspense>
  )
}

export default Pointage