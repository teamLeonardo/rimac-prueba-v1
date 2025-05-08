import React from 'react'

const GroupInput = ({ children }: { children: React.ReactNode }) => {
  return <div className="join grid h-[56px] w-full grid-cols-[40%,1fr]">{children}</div>
}

export default GroupInput
