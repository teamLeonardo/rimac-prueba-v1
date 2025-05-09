import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
const BackSeccion = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const handleBack = () => {
    const isPlans = location.pathname.includes('plans')
    const isResume = location.pathname.includes('resume')
    if (isPlans) {
      navigate('/')
    }
    if (isResume) {
      navigate(-1)
    }
  }

  return (
    <div className="mx-auto hidden w-8/12 md:block">
      <div
        className="flex w-fit cursor-pointer items-center gap-2 rounded-md border-2 border-solid border-white p-2 hover:border-2 hover:border-[#4F4FFF]"
        onClick={() => {
          handleBack()
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="10"
            cy="10"
            r="9"
            transform="rotate(90 10 10)"
            stroke="#4F4FFF"
            strokeWidth="2"
          />
          <path
            d="M7.55317 10L10.8094 6.74689L11.6907 7.62814L9.32192 10L11.6907 12.3719L10.8094 13.2531L7.55317 10Z"
            fill="#4F4FFF"
          />
        </svg>
        <div className="text-base font-bold text-[#4F4FFF]">Volver</div>
      </div>
    </div>
  )
}

export default BackSeccion
