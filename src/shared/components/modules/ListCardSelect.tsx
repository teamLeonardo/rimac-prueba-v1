import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setOpenPlans } from '@/module/plans/store/slicePlans'
import IconAddUserLight from '@/shared/assets/icons/IconAddUserLight.svg'
import IconProtectionLight from '@/shared/assets/icons/IconProtectionLight.svg'
import { CardSelectDefault } from '../widgets/card-select'

const ListCardSelect = () => {
  const [currentIdSelect, setCurentIdSelect] = useState<null | number>(null)
  const dispatch = useDispatch()

  const dataList = [
    {
      id: 1,
      title: 'Para mi',
      icon: IconProtectionLight,
      description: 'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
    },
    {
      id: 2,
      title: 'Para alguien más',
      icon: IconAddUserLight,
      description: 'Realiza una cotización para uno de tus familiares o cualquier persona.',
    },
  ]
  return (
    <div className="flex w-full flex-wrap justify-center gap-8">
      {dataList?.map((item, idx: number) => (
        <CardSelectDefault
          isSelected={item.id === currentIdSelect}
          name={'type-plan' + idx}
          onChange={() => {
            if (item.id !== currentIdSelect) {
              setCurentIdSelect(item.id)
              dispatch(setOpenPlans(true))
            } else {
              setCurentIdSelect(null)
              dispatch(setOpenPlans(false))
            }
          }}
          iconHome={item.icon}
          data={item}
          key={idx}
        />
      ))}
    </div>
  )
}

export default ListCardSelect
