import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { selectIsOpenPlans } from '@/module/plans/store/slicePlans'
import { RootState } from '@/shared/store/store'
import LoaderListPlans from '@/shared/components/modules/LoaderListPlans'

const PlansList = React.lazy(() => import('@/shared/components/modules/ListPlans'))
const ListCardSelect = React.lazy(() => import('@/shared/components/modules/ListCardSelect'))

const PlansPage = () => {
  // No necesitas envolver useSelector con startTransition
  const isOpen = useSelector(selectIsOpenPlans)
  const user = useSelector((state: RootState) => state.userState.user)
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
        {/* Esto puede ir sin Suspense si no está cargando asíncronamente */}
        <ListCardSelect />
      </div>
      {isOpen && (
        <div className="mx-auto w-11/12 md:w-8/12 ">
          <Suspense fallback={<LoaderListPlans />}>
            <PlansList />
          </Suspense>
        </div>
      )}
    </>
  )
}

export default PlansPage
