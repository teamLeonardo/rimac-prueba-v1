export function calcularEdad(fechaNacimiento: string): number {
  const [dia, mes, año] = fechaNacimiento.split('-').map(Number) // Descomponemos el string
  const nacimiento: Date = new Date(año, mes - 1, dia) // Creamos la fecha, restando 1 al mes
  const hoy: Date = new Date()
  let edad: number = hoy.getFullYear() - nacimiento.getFullYear()
  const diferenciaMes: number = hoy.getMonth() - nacimiento.getMonth()

  if (diferenciaMes < 0 || (diferenciaMes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--
  }

  return edad
}
