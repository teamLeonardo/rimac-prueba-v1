import React from 'react'
import classNames from 'classnames'

interface CardSelectDefaultProps {
  iconHome: string // URL o ruta de la imagen
  data: any // Tipo de datos (ajústalo según lo necesario)
  name: string // Nombre del grupo de radio buttons
  isSelected?: boolean // Indica si el radio está seleccionado o no
  onChange?: () => void // Función de callback cuando se selecciona el radio
}

const CardSelectDefault: React.FC<CardSelectDefaultProps> = ({
  iconHome,
  data,
  name,
  onChange,
  isSelected,
}) => {
  const handleCardClick = () => {
    if (onChange) {
      onChange()
    }
  }

  return (
    <div
      onClick={handleCardClick}
      className={classNames(
        'card relative grid h-[212px] w-[90%] cursor-pointer border bg-base-100 shadow-xl md:w-[256px]',
        {
          'border-[3px] border-[#03050F]': isSelected,
          'border border-[#cccccc40]': !isSelected,
        },
      )}
    >
      <div className="absolute right-4 top-4">
        <div className="relative h-auto w-auto">
          <label>
            <input
              type="radio"
              value={name}
              name={name}
              className="radio-success radio"
              checked={isSelected}
              onChange={(e) => {
                e.stopPropagation()
                handleCardClick()
              }}
            />
          </label>
          <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 text-[10px] text-white ">
            <svg
              width="1em" // Hereda el tamaño de fuente del padre
              height="1em" // Hereda el tamaño de fuente del padre
              viewBox="0 0 13 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.1813 1.11293C12.5607 1.434 12.6081 2.00188 12.287 2.38133L5.687 10.1813C5.52153 10.3769 5.28058 10.4927 5.02451 10.4996C4.76844 10.5066 4.52153 10.4042 4.34564 10.2179L0.945642 6.61794C0.604351 6.25658 0.620626 5.68696 0.981992 5.34567C1.34336 5.00438 1.91297 5.02066 2.25427 5.38202L4.96311 8.25021L10.9129 1.21863C11.234 0.839189 11.8019 0.791865 12.1813 1.11293Z"
                fill="currentColor" // Hereda el color del padre
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div>
          <img width={48} height={48} src={iconHome} alt="icono home" loading='lazy' />
        </div>
        <h2 className="card-title">{data.title}</h2>
        <p className="card-compact text-xs">{data.description}</p>
      </div>
    </div>
  )
}

export default CardSelectDefault
