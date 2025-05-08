module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],

  // Configuración de estilo
  printWidth: 100, // Limita las líneas a 100 caracteres
  semi: false, // No usar punto y coma al final de las líneas
  singleQuote: true, // Usar comillas simples en lugar de comillas dobles
  bracketSpacing: true, // Espacio entre llaves y el contenido ({ foo: bar })
  bracketSameLine: false, // Cerrar etiquetas de JSX en una nueva línea
  arrowParens: 'always', // Siempre usar paréntesis con las arrow functions
  trailingComma: 'all', // Añadir comas finales en objetos y arrays

  overrides: [
    {
      files: '*.jsx',
      options: {
        singleQuote: false, // En JSX, usar comillas dobles (convención estándar)
      },
    },
  ],
}
