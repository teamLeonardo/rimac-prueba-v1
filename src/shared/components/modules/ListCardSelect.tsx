import React from 'react'
import IconAddUserLight from '@/shared/assets/icons/IconAddUserLight.svg'
import IconProtectionLight from '@/shared/assets/icons/IconProtectionLight.svg'
import { CardSelectDefault } from '../widgets/card-select'
import { useNavigate, useParams } from 'react-router-dom'

const ListCardSelect = ({ data }: any) => {
  const navigate = useNavigate()
  
  const { id } = useParams()

  const state = data || {}
  const currentIdSelect = id ? parseInt(id) : null
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

  const handleSelectPath = (id: number | null) => {
    if (id === null) {
      navigate('/plans', { state })
    } else {
      navigate('/plans/' + id, { state })
    }
  }
  return (
    <div className="flex w-full flex-wrap justify-center gap-8">
      {dataList?.map((item, idx: number) => (
        <CardSelectDefault
          isSelected={item.id === currentIdSelect}
          name={'type-plan' + idx}
          onChange={() => {
            if (item.id !== currentIdSelect) {
              handleSelectPath(item.id);
            } else {
              handleSelectPath(null);
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
