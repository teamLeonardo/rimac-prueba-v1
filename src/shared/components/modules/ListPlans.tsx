import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { useGetAllPlansQuery } from '@/module/plans/store/apiPlans'
import { useGetUserQuery } from '@/module/users/store/apiUser'
import { setUser } from '@/module/users/store/sliceUser'
import iconHome from '@/shared/assets/icons/iconHome.svg'
import { calcularEdad } from '@/shared/utils/calcular'
import { RootState } from '@/shared/store/store'
import { CardPlansDefault } from '../widgets/card-plans'
import LoaderListPlans from './LoaderListPlans'

const PlansList = () => {
  const [stateView, setStateView] = useState(0)
  const scrollContainerRef = useRef(null)

  const location = useLocation()
  const dispatch = useDispatch()

  const { data: plansData, isLoading: isLoadingPlans } = useGetAllPlansQuery()
  const { data: userData, isLoading: isLoadingUser } = useGetUserQuery()
  const user = useSelector((state: RootState) => state.userState.user)

  useEffect(() => {
    // Solo ejecutar si hay datos de usuario y estado de ubicación
    if (userData && location.state) {
      dispatch(setUser({ ...userData, ...location.state }))
    }
  }, [userData, location.state]) // Asegúrate de incluir dispatch en las dependencias

  // Cargar estado
  if (isLoadingPlans || isLoadingUser) {
    return <LoaderListPlans />
  }

  // Calcular edad
  const currentAge = userData ? calcularEdad(userData.birthDay || '02-04-1990') : 0
  const dataFiltered =
    plansData && Array.isArray(plansData.list)
      ? plansData.list.filter((item: any) => item.age <= currentAge)
      : []

  const scrollToItem = (index: number) => {
    const container: any = scrollContainerRef.current
    if (!container) return
    const selectedItem = container.children?.[index]
    container.scrollTo({
      left: selectedItem.offsetLeft,
      behavior: 'smooth',
    })
    setStateView(index)
  }

  const handleNext = () => {
    if (stateView < dataFiltered.length - 1) {
      scrollToItem(stateView + 1)
    }
  }

  const handlePrev = () => {
    if (stateView > 0) {
      scrollToItem(stateView - 1)
    }
  }
  return (
    <div className=" w-full">
      <div
        ref={scrollContainerRef}
        className="carousel-center carousel w-full py-16 md:justify-center md:gap-8 md:py-8"
      >
        {userData &&
          plansData &&
          dataFiltered.map((item, idx: number) => (
            <div className="carousel-item w-full md:w-auto" key={idx}>
              <CardPlansDefault iconHome={iconHome} userData={user as any} data={item} />
            </div>
          ))}
      </div>
      <div className="flex w-full items-center justify-center gap-4 md:hidden">
        <button
          className={classNames(
            'flex h-10 w-10 items-center justify-center rounded-full border-2 border-solid border-[#7981B2] text-[#7981B2] ',
            ['hover:border-[#432EFF] hover:text-[#432EFF]'],
          )}
          onClick={handlePrev}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.29496 13.2049L4.08496 7.99992L9.29496 2.79492L10.705 4.20492L6.91496 7.99992L10.705 11.7949L9.29496 13.2049Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <span>
          {stateView + 1} / {dataFiltered.length}
        </span>
        <button
          className={classNames(
            'flex h-10 w-10 items-center justify-center rounded-full border-2 border-solid border-[#7981B2] text-[#7981B2] ',
            ['hover:border-[#432EFF] hover:text-[#432EFF]'],
          )}
          onClick={handleNext}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.70493 13.2049L5.29492 11.7949L9.08492 7.99992L5.29492 4.20492L6.70493 2.79492L11.9149 7.99992L6.70493 13.2049Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default PlansList
