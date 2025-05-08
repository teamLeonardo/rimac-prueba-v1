import React from 'react'
export default function LoaderListPlans() {
  const dataFacke = Array(3).fill(null)
  return (
    <div className="flex w-full flex-wrap justify-center gap-8">
      {dataFacke.map((_: any, idx: number) => (
        <div
          key={idx}
          className="card h-[687px] w-[288px] gap-4 border border-[#cccccc] p-[68px_32px_48px_32px] shadow-2xl"
        >
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-12 w-full rounded-full"></div>
        </div>
      ))}
    </div>
  )
}
