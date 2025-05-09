import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import classNames from 'classnames'
import { z } from 'zod'
import { GroupInput } from '@/shared/components/widgets'
import { slep } from '@/shared/utils'

// Definir esquema de validación con Zod
const schema = z.object({
  documentType: z.string().min(1, { message: 'Selecciona un tipo de documento' }),
  documentNumber: z.string().min(1, { message: 'Ingresa un número de documento' }),
  cellPhone: z
    .string()
    .min(9, { message: 'El número de celular debe tener 9 dígitos' })
    .regex(/^[0-9]{9}$/, { message: 'El número de celular debe ser válido' }),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: 'Debes aceptar la Política de Privacidad',
  }),
  commercialPolicy: z.boolean().refine((val) => val === true, {
    message: 'Debes aceptar la Política de Comunicaciones Comerciales',
  }),
})

// Tipos generados automáticamente a partir del esquema de Zod
type FormInputs = z.infer<typeof schema>

const FormHome: React.FC = () => {
  const [isPending, setPending] = useState(false)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setValue
  } = useForm<FormInputs>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setPending(true)
    await slep(1000)
    navigate('/plans', { state: data })

  }
  return (
    <form className="w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-full gap-2">
        <label htmlFor="my-select" className="sr-only">Elige una opción</label>
        <GroupInput>
          <select
            {...register('documentType')}
            className={`select-bordered select join-item h-full border-[#5E6488] ${errors.documentType ? 'border-red-500' : ''
              }`}
            id='my-select'
          >
            <option value="">Selecciona tipo de documento</option>
            <option value="DNI">DNI</option>
            <option value="Pasaporte">Pasaporte</option>
          </select>
          <input
            type="text"
            placeholder="Nro. de documento"
            {...register('documentNumber')}
            className={`input-bordered input join-item h-full w-full border-[#5E6488] ${errors.documentNumber ? 'border-red-500' : ''
              }`}
          />
        </GroupInput>
        {errors.documentType && <p className="text-red-500">{errors.documentType.message}</p>}
        {errors.documentNumber && <p className="text-red-500">{errors.documentNumber.message}</p>}
      </div>
      <div className="grid w-full gap-2">
        <input
          type="text"
          placeholder="Celular"
          {...register('cellPhone')}
          className={`input-bordered input join-item h-[56px] w-full border-[#5E6488] ${errors.cellPhone ? 'border-red-500' : ''
            }`}
        />
        {errors.cellPhone && <p className="text-red-500">{errors.cellPhone.message}</p>}
      </div>
      <div className="space-y-2">
        <div className="form-control ">
          <div className="grid grid-cols-[auto_1fr] items-center gap-4">
            <input
              type="checkbox"
              id="$check-private"
              {...register('privacyPolicy')}
              defaultChecked
              className="checkbox"
            />
            <label htmlFor="$check-private" className="label cursor-pointer">
              <span className="label-text text-start text-xs md:text-sm">
                Acepto la Política de Privacidad
              </span>
            </label>
          </div>

          {errors.privacyPolicy && <p className="text-red-500">{errors.privacyPolicy.message}</p>}
        </div>
        <div className="form-control ">
          <div className="grid grid-cols-[auto_1fr] items-center gap-4">
            <input
              type="checkbox"
              id="$check-politic"
              {...register('commercialPolicy')}
              defaultChecked
              className="checkbox"
            />
            <label htmlFor="$check-politic" className="label cursor-pointer">
              <span className="label-text text-start text-xs md:text-sm">
                Acepto la Política Comunicaciones Comerciales
              </span>
            </label>
          </div>
          {errors.commercialPolicy && (
            <p className="text-red-500">{errors.commercialPolicy.message}</p>
          )}
        </div>
      </div>
      <p className="text-sm">
        <a href="#" className="text-xs font-bold underline">
          Aplican Términos y Condiciones.
        </a>
      </p>
      <button
        disabled={isPending}
        type="submit"
        className={classNames(
          'btn-lg btn w-full rounded-full bg-black px-10 text-white md:w-auto',
          {
            'cursor-not-allowed opacity-50': isPending,
          },
        )}
      >
        Cotiza aquí
      </button>
    </form>
  )
}

export default FormHome
