// LoaderListPlans.test.tsx
import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import LoaderListPlans from '../../src/shared/components/modules/LoaderListPlans'

describe('LoaderListPlans', () => {
  it('renderiza 3 tarjetas skeleton', () => {
    render(<LoaderListPlans />)

    // Verifica que hay 3 tarjetas con clase 'card'
    const cards = screen.getAllByRole('article', { hidden: true })
    expect(cards).toHaveLength(3)
  })

  it('cada tarjeta tiene 5 elementos skeleton', () => {
    render(<LoaderListPlans />)

    const cards = screen.getAllByRole('article', { hidden: true })

    cards.forEach((card) => {
      const skeletons = card.querySelectorAll('.skeleton')
      expect(skeletons.length).toBe(5)
    })
  })
})
