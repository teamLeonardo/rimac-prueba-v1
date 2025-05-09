## Proyecto Prueba Rimac: Arquitectura y Librerías

La Prueba Rimac está diseñada para cumplir con requisitos de escalabilidad, mantenibilidad y eficiencia. Su estructura modular asegura una fácil expansión y mantenimiento a medida que se agreguen nuevas funcionalidades.
### Estructura del Proyecto
- **src/**: Contiene el código fuente de la aplicación.
  - **module/**: Agrupación de lógica relacionada con los planes y los usuarios, que incluye los stores y tipos necesarios para la gestión de datos.
  - **pages/**: Componentes que representan diferentes páginas de la aplicación.
    - **[id]/**: Pagina que recibe id. ejem. /pageEjemplo/1 
  - **shared/**: Recursos y utilidades compartidos, incluyendo estilos, hooks personalizados y tipos TypeScript.
    - **assets/**: Fuentes e imágenes utilizadas globalmente.
    - **hooks/**: Hooks personalizados para el manejo de lógica compartida.
    - **style/**: Archivos SCSS y Tailwind CSS globales.
    - **types/**: Definiciones TypeScript para tipado estricto.
    - **utils/**: Funciones utilitarias, como cálculos y helpers.
    - **components/**: Agrupa los componentes reutilizables de la aplicación, con una organización que sigue la metodología BEM para una mejor mantenibilidad:
      - **elements/**: Elementos básicos (ej. logos, botones).
      - **layouts/**: Estructuras de página que definen el diseño general.
      - **modules/**: Componentes específicos que implementan funcionalidades clave (ej. encabezados, pies de página, formularios).
      - **widgets/**: Componentes más complejos que encapsulan lógica y presentación.
  
### Decisiones Técnicas

El proyecto incluye varias dependencias que facilitan su desarrollo y mantenimiento:

- **React y Redux (rtk query)**: Seleccionadas por su facilidad de uso y extensibilidad, permitiendo manejar el estado de forma centralizada.
- **React Router**: Permitió crear una navegación fluida entre las diferentes vistas de la aplicación, esencial para SPA.
- **Tailwind CSS + scss**: Se opto por Tailwind por su rapidez en el diseño responsivo, lo que facilita la creación de interfaces modernas con menos código CSS.

- **Vitest**: Elegido por su integración con Vite, lo que permitió ejecutar pruebas de manera ágil sin sacrificar velocidad ni funcionalidad.

### Scripts

El archivo `package.json` incluye diversos scripts que facilitan el desarrollo:
- **dev**: Inicia el servidor de desarrollo.
  ```bash
    pnpm run dev
  ```
- **build**: Compila la aplicación para producción.
  ```bash
    pnpm run build
  ```
- **test**: Ejecuta las pruebas unitarias.
  ```bash
    pnpm run test
  ```
- **lint**: Verifica el código con ESLint para mantener su calidad.
  ```bash
    pnpm run lint
  ```
- **format**: Formatea el código con Prettier y ESLint.
  ```bash
    pnpm run format:check
  ```

