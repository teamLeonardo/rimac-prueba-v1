import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/shared/store/store'
import { Outlet, useLocation } from 'react-router-dom'
import { Load } from '@/shared/components/modules/LoaderSeccion'

const ListCardSelect = React.lazy(() => import('@/shared/components/modules/ListCardSelect'))

const PlansPage = () => {
  const user = useSelector((state: RootState) => state.userState.user)
  const location = useLocation()

  return (
    <>
      <div className="mx-auto grid w-full gap-4 md:w-[544px]">
        <div className="mx-auto grid w-full gap-4">
          <h1 className="text-center text-[40px] text-xl font-bold md:text-5xl">
            {user?.name} ¿Para quién deseas cotizar?
          </h1>
          <p className="mx-4 text-center text-sm md:text-base">
            Selecciona la opción que se ajuste más a tus necesidades.
          </p>
        </div>
        <Suspense fallback={<Load />}>
          <ListCardSelect data={location.state} />
        </Suspense>
      </div>
      <Outlet />
    </>
  )
}

export default PlansPage
