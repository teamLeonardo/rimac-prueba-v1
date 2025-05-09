import React from 'react'
import { useLocation } from 'react-router-dom'
import { SectionResume } from '@/shared/components/modules/SectionResume'
export default function PlansResume() {
  const location = useLocation()
  const { plan, user } = location.state // Recuperar los datos enviados

  return (
    <div className="mx-auto w-full md:w-8/12">
      <h1 className="mb-6 text-center text-2xl font-bold md:text-start md:text-3xl ">
        Resumen del seguro{' '}
      </h1>
      {plan && user && <SectionResume plan={plan} user={user} />}
    </div>
  )
}
