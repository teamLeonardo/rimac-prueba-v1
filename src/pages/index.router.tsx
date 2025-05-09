import React, { lazy, FC, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

// Carga dinámica de los componentes
const HomePage = lazy(() => import('./home/homePage'))
const PlansPage = lazy(() => import('./plans/plansPage'))
const PlansResume = lazy(() => import('./resume/resumePage'))
const PlansDetail = lazy(() => import('./plans/[id]/plansDetail'))

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
            path: '',
            element: withSuspense(PlansPage),
            children: [
              {
                path: ':id',
                element: withSuspense(PlansDetail),
              }
            ]
          }
        ],
      },
      {
        path: 'resume',
        element: withSuspense(PlansLayout),
        children: [
          {
            index: true,
            element: withSuspense(PlansResume),
          },
        ]
      },
    ],
  },
])
