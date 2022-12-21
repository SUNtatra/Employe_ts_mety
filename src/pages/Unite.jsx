import React, { Suspense } from 'react'
import SpinnerLoadingComponent from '../utils/SpinnerLoadingComponent'
import Layout from './Layout'
const Unitelist = React.lazy(() => import('../components/Unite/Unitelist'))


const Unite = () => {
  return (
    <Suspense fallback={<SpinnerLoadingComponent />}>
           <Layout>
        <Unitelist/>
    </Layout>
    </Suspense>
 
  );
}

export default Unite;