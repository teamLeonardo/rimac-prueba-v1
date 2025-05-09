import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Plans } from '@/module/plans/types/responsePlans'
import { IUser } from '@/module/users/types/responseUser'

const CardPlansDefault = ({
  iconHome,
  data,
  userData,
}: {
  iconHome: any
  data: Plans
  userData: IUser
}) => {
  const { name, price, description } = data
  const navigate = useNavigate()
  return (
    <div className="card relative grid h-[687px] w-11/12 grid-rows-[auto,auto,1fr] border border-[#cccccc40] bg-base-100 p-[68px_32px_48px_32px]  shadow-2xl md:w-[288px]">
      <div className="grid grid-cols-[1fr,auto] gap-2">
        <div className="grid ">
          <h2 className="text-2xl font-[700] text-[#141938]">{name}</h2>
          <div className="mt-4 grid">
            <p className="text-xs uppercase text-[#7981B2]">costo del plan</p>
            <span className="text-xl font-[600] text-[#141938]">${price} al mes</span>
          </div>
        </div>
        <div>
          <img src={iconHome} alt="icono home" className="h-14 w-14" />
        </div>
      </div>
      <div className="divider" />
      <div className="relative grid">
        <div>
          <ul className="mb-8 grid list-inside list-disc gap-8">
            {description.map((item, idx: number) => (
              <li className="text-base" key={idx}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-0 right-0 flex w-full justify-end">
          <button
            className="btn-primary btn-circle btn w-full"
            onClick={() => {
              navigate('/resume', { state: { plan: data, user: userData } , preventScrollReset: false })
            }}
          >
            Seleccionar Plan
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardPlansDefault
