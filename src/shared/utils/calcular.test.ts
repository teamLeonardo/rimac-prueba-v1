import { describe, it, expect } from 'vitest'
import { calcularEdad } from './calcular'

describe('calcularEdad', () => {
    it('debería calcular la edad correcta si el cumpleaños ya pasó este año', () => {
        const fechaNacimiento = '01-01-2000' // 1 de enero de 2000
        const añoActual = new Date().getFullYear()
        const edadEsperada = añoActual - 2000
        const resolver = calcularEdad(fechaNacimiento)
        expect(resolver).toBe(edadEsperada)
    })

    it('debería restar 1 si aún no pasó el cumpleaños este año', () => {
        const hoy = new Date()
        const mes = hoy.getMonth() + 1
        const dia = hoy.getDate()
        const añoNacimiento = 2000
        const fechaNacimiento = `${dia + 1}-${mes}-${añoNacimiento}` // cumple mañana
        const edadEsperada = new Date().getFullYear() - añoNacimiento - 1
        const resolver = calcularEdad(fechaNacimiento)
        expect(resolver).toBe(edadEsperada)
    })

    it('debería calcular correctamente para alguien que cumple hoy', () => {
        const hoy = new Date()
        const dia = hoy.getDate()
        const mes = hoy.getMonth() + 1
        const añoNacimiento = 2000
        const fechaNacimiento = `${dia}-${mes}-${añoNacimiento}`
        const edadEsperada = new Date().getFullYear() - añoNacimiento
        const resolver = calcularEdad(fechaNacimiento)
        expect(resolver).toBe(edadEsperada)
    })
})
