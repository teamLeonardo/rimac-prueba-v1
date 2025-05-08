import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import BackSeccion from '../modules/BackSeccion'
import StepsPlans from '../modules/StepsPlans'

const PlansLayout = () => {
  const { pathname } = useLocation()
  const idStep: number = (() => {
    if (pathname.includes('resume')) {
      return 2
    }
    if (pathname.includes('plans')) {
      return 1
    }
    return 0
  })()
  return (
    <div className="mb-20 grid h-auto w-full gap-8">
      <StepsPlans step={idStep} />
      <BackSeccion />
      <Outlet />
    </div>
  )
}
export default PlansLayout
