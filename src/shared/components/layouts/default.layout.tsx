import React from 'react'
import { Outlet } from 'react-router-dom'

import { Footer } from '../modules/Footer'
import { Header } from '../modules/Header'

const DefaultLayout = () => {
  return (
    <div className="relative h-screen overflow-y-auto overflow-x-hidden">
      <Header />
      <main className="h-auto min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
export default DefaultLayout
