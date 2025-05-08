import React from 'react'
import { Logo } from '../elements/Logo/Logo'
export const Footer = () => (
  <footer className="bg-black p-4 text-center text-white">
    <div className="flex flex-col items-center justify-between px-8 py-4 md:flex-row">
      <div>
        <Logo color="#ffffff" />
      </div>
      <div className="divider md:hidden"></div>
      <p className="mb-4 text-sm md:mb-0">© 2023 RIMAC Seguros y Reaseguros.</p>
    </div>
  </footer>
)
