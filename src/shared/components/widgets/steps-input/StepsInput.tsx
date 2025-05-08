import React from 'react'
import classNames from 'classnames'

const StepsInput = ({ data, step }: { data: any; step: number }) => {
  return (
    <div className="flex flex-row gap-4">
      {Object.keys(data).map((key, idx) => {
        return (
          <div key={idx} className="flex flex-row items-center gap-4">
            <div
              className={classNames(
                `flex h-6 w-6 items-center justify-center rounded-full border border-solid border-[#7981B2] text-center text-[12px] font-bold text-[#7981B2]`,
                {
                  'border-[#4F4FFF] bg-[#4F4FFF] text-white': idx + 1 === step,
                },
              )}
            >
              {idx + 1}
            </div>
            <div>
              <p
                className={classNames('text-base font-bold', {
                  'text-[#3A3A3A]': idx + 1 !== step,
                })}
              >
                {data[key]}
              </p>
            </div>
            {idx + 1 !== Object.keys(data).length && (
              <div>
                <svg
                  width="32"
                  height="4"
                  viewBox="0 0 32 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1"
                    y1="1"
                    x2="31"
                    y2="0.999999"
                    stroke="#4F4FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="2 8"
                  />
                </svg>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default StepsInput
