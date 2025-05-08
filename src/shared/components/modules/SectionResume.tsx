import React from 'react'
import { Plans } from '@/module/plans/types/responsePlans'

export const SectionResume = ({ plan, user }: { plan: Plans; user: any }) => {
  return (
    <section className="card mx-auto w-11/12 border border-[#cccccc40] bg-base-100 shadow-xl md:w-full">
      <div className="card-body gap-4">
        <div>
          <span className="text-xs ">Precios calculados para:</span>
          <div className="flex items-center gap-2">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.1463 13.7647H18.2309C16.1102 13.7647 14.4 15.4756 14.4 17.5972V22H20.1691C22.2898 22 24 20.2891 24 18.1675V17.62C24 15.4756 22.267 13.7647 20.1463 13.7647Z"
                  fill="#141938"
                />
                <path
                  d="M18.6 12.5882C20.2569 12.5882 21.6 11.2714 21.6 9.64706C21.6 8.02269 20.2569 6.70588 18.6 6.70588C16.9431 6.70588 15.6 8.02269 15.6 9.64706C15.6 11.2714 16.9431 12.5882 18.6 12.5882Z"
                  fill="#141938"
                />
                <path
                  d="M7.8 10.2353C10.1196 10.2353 12 8.39176 12 6.11765C12 3.84353 10.1196 2 7.8 2C5.4804 2 3.6 3.84353 3.6 6.11765C3.6 8.39176 5.4804 10.2353 7.8 10.2353Z"
                  fill="#141938"
                />
                <path
                  d="M14.4 13.3483C13.6788 12.8789 12.8134 12.5882 11.8758 12.5882H4.32721C1.94725 12.5882 0 14.399 0 16.6123V18.2442C0 20.3233 1.803 22 4.03873 22H12.1402V17.6853C12.1402 15.9416 13.0297 14.3767 14.4 13.3483Z"
                  fill="#141938"
                />
              </svg>
            </div>
            <div className="h-fit">
              <h2 className="text-xl font-bold ">
                {user.name} {user.lastName}
              </h2>
            </div>
          </div>
        </div>
        <div className="divider my-0" />
        <div>
          <span className="text-base font-bold">Responsable de pago</span>
          <p>
            {user.documentType}: {user.documentNumber}
          </p>
          <p>Celular: {user.cellPhone}</p>
        </div>
        <div>
          <span className="text-base font-bold">Plan elegido</span>
          <p>{plan.name}</p>
          <p>Costo del Plan: ${plan.price} al mes</p>
        </div>
      </div>
    </section>
  )
}
