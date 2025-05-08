import React from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

const StepsInputMovil = ({ data, step }: { data: any; step: number }) => {
  const navigate = useNavigate()
  return (
    <div className="grid w-11/12 grid-cols-[auto,auto,1fr] gap-4 ">
      <button
        className={classNames(
          'flex h-8 w-8 items-center justify-center rounded-full border-2 border-solid border-[#7981B2] text-[#7981B2] ',
          ['hover:border-[#432EFF] hover:text-[#432EFF]'],
        )}
        onClick={() => navigate(-1)}
        // onClick={handlePrev}
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
      <div className="w-full self-center">
        <span>
          Paso {step} de {Object.keys(data).length}
        </span>
      </div>
      <div className="w-full self-center">
        <progress
          className="progress-secondary progress w-full"
          value={step === 1 ? '10' : '100'}
          max="100"
        ></progress>
      </div>
    </div>
  )
}

export default StepsInputMovil
