import React, { lazy, FC, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

// Carga dinámica de los componentes
const HomePage = lazy(() => import('./home/homePage'))
const PlansPage = lazy(() => import('./plans/plansPage'))
const PlansResume = lazy(() => import('./plans/resume/resumePage'))

const PlansLayout = lazy(() => import('@/shared/components/layouts/plans.layout'))
const DefaultLayout = lazy(() => import('@/shared/components/layouts/default.layout'))

// Función para envolver componentes en Suspense
const withSuspense = (Component: FC) => {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      }
    >
      <Component />
    </Suspense>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: withSuspense(DefaultLayout),
    children: [
      {
        index: true,
        element: withSuspense(HomePage),
      },
      {
        path: 'plans',
        element: withSuspense(PlansLayout),
        children: [
          {
            index: true,
            element: withSuspense(PlansPage),
          },
          {
            path: 'resume',
            element: withSuspense(PlansResume),
          },
        ],
      },
    ],
  },
])
