import React, { Suspense } from 'react'
import SpinnerLoadingComponent from '../utils/SpinnerLoadingComponent'
import Layout from './Layout'
const EmployerListComponent = React.lazy(() => import('../components/Employee/Employeeslist'))



const Employees = () => {
  return (
      <Suspense fallback={<SpinnerLoadingComponent />}>
        <Layout>
        <EmployerListComponent/>
        </Layout>
    </Suspense>
  )
}

export default Employees