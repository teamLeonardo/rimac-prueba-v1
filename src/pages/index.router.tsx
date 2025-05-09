import React, { lazy, FC, Suspense } from 'react'
import { ErrorBoundary } from '@/shared/components/layouts/ErrorBoundary'
import { Load } from '@/shared/components/modules/LoaderSeccion'
import { createBrowserRouter, Navigate } from 'react-router-dom'

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
    <ErrorBoundary>
      <Suspense fallback={<Load />}>
        <Component />
      </Suspense>
    </ErrorBoundary>
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
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
])
