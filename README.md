# Nuova Vita — Sistema de gestión

Proyecto de interfaz web para el hogar de adultos mayores **Nuova Vita**.

El sistema incluye una página institucional, una pantalla de inicio de
sesión y un panel interno de gestión. La interfaz utiliza **HTML5**,
**CSS3**, **Bootstrap 5.3.3** y **JavaScript**, manteniendo la identidad
visual de la marca e incorporando funcionalidades interactivas mediante
manipulación del DOM y eventos.

## Integrantes

- Agustín Rodríguez
- Constanza Segura
- Marcos Núñez

## Descripción del proyecto

El sitio está compuesto por tres páginas principales:

- **`index.html`:** página institucional con presentación, servicios,
  roles del sistema y formulario de contacto interactivo.
- **`login.html`:** pantalla de inicio de sesión con validación,
  recuperación de acceso y opción para recordar el correo.
- **`dashboard.html`:** panel interno con estadísticas, actividad
  reciente, listado de pacientes, búsqueda y filtros.

El proyecto incorpora funcionalidades simuladas del lado del cliente.
Los formularios validan la información ingresada, el dashboard genera
contenido dinámico y algunas preferencias se conservan mediante
`localStorage`.

Al no contar todavía con un backend, el inicio de sesión, el formulario
de contacto y la recuperación de acceso representan el comportamiento
de la interfaz sin enviar información a un servidor.

## Tecnologías utilizadas

- **HTML5 semántico:** organización mediante etiquetas como `header`,
  `nav`, `main`, `section`, `article`, `aside`, `form` y `footer`.
- **CSS3:** variables CSS, estilos personalizados, transiciones, bordes,
  sombras y adaptación de la identidad visual.
- **Bootstrap 5.3.3:** sistema de grillas, componentes, utilidades,
  formularios y comportamiento responsive.
- **JavaScript:** manipulación del DOM, eventos, validación de
  formularios, renderizado dinámico, búsqueda y filtros.
- **Local Storage:** almacenamiento del correo cuando se selecciona
  la opción “Recordarme”.
- **Google Fonts:** Poppins para títulos y Nunito Sans para textos.
- **Imágenes SVG:** logo, ilustración principal y favicon.
- **Git y GitHub:** control de versiones mediante ramas, commits y
  Pull Requests.

## Estructura del proyecto

```text
NuovaVita/
├── img/
│   ├── favicon.svg
│   ├── hero.svg
│   └── logo.svg
├── js/
│   ├── dashboard.js
│   ├── index.js
│   └── login.js
├── styles/
│   └── styles.css
├── CONTEXTO-PROYECTO.md
├── dashboard.html
├── index.html
├── login.html
└── README.md
```

## Evolución del proyecto

- **TP 2:** desarrollo de la interfaz mediante HTML y CSS, utilizando
  Flexbox, CSS Grid, variables CSS y diseño responsive.
- **TP 3:** incorporación de Bootstrap para organizar las páginas,
  aplicar componentes y mejorar la adaptación a distintos tamaños de
  pantalla.
- **TP 4:** incorporación de JavaScript, manipulación del DOM,
  validaciones, eventos, contenido dinámico, búsqueda de pacientes,
  filtros y almacenamiento local.

## Funcionalidades JavaScript del TP 4

El TP 4 incorpora interactividad del lado del cliente mediante
JavaScript, manipulación del DOM y gestión de eventos.

### Página principal

El formulario de contacto incluye:

- Validación en tiempo real del nombre, correo y mensaje.
- Estados visuales válidos e inválidos mediante clases de Bootstrap.
- Contador dinámico de caracteres.
- Mensajes accesibles de error y confirmación.
- Foco automático sobre el primer campo inválido.
- Limpieza del formulario después de un envío válido.

El envío es simulado porque el proyecto todavía no dispone de backend.

### Inicio de sesión

La pantalla de acceso incluye:

- Validación del correo electrónico.
- Validación de la longitud de la contraseña.
- Botón para mostrar u ocultar la contraseña.
- Opción “Recordarme” implementada con `localStorage`.
- Recuperación simulada de acceso.
- Validación del correo de recuperación.
- Actualización de atributos ARIA durante las interacciones.
- Redirección simulada hacia el dashboard.

No se almacenan contraseñas en `localStorage`. Solamente se conserva
el correo cuando el usuario selecciona la opción “Recordarme”.

### Dashboard

El panel interno incluye:

- Cálculo dinámico de estadísticas.
- Filtrado de arreglos mediante `filter()`.
- Renderizado dinámico de actividades recientes.
- Creación de elementos mediante `document.createElement()`.
- Tabla de pacientes generada con JavaScript.
- Búsqueda de pacientes por nombre.
- Normalización de mayúsculas, minúsculas y acentos.
- Filtro de pacientes por estado.
- Contador dinámico de resultados.
- Mensajes para búsquedas sin coincidencias.
- Navegación hacia las secciones disponibles.

Los datos del dashboard se encuentran simulados mediante arreglos de
objetos. En una implementación completa serían obtenidos desde un
backend.

## Manipulación del DOM

Las funcionalidades utilizan los siguientes recursos:

- `document.getElementById()`.
- `document.createElement()`.
- `querySelector()` y `querySelectorAll()`.
- `addEventListener()`.
- `textContent`.
- `classList`.
- `setAttribute()` y `removeAttribute()`.
- `append()` y `replaceChildren()`.
- La propiedad `hidden`.

Los principales eventos utilizados son:

- `DOMContentLoaded`.
- `input`.
- `change`.
- `click`.
- `submit`.

## Almacenamiento local

La pantalla de inicio de sesión utiliza `localStorage` para conservar
el correo del usuario cuando se selecciona la opción “Recordarme”.

La clave utilizada es:

```text
nuovaVita.rememberedEmail
```

La contraseña nunca se almacena en el navegador.

## Incorporación de Bootstrap

Bootstrap 5.3.3 está incorporado en las tres páginas mediante CDN.

La hoja de estilos de Bootstrap se carga dentro del encabezado de cada
documento y `bootstrap.bundle.min.js` se carga al final del cuerpo.

La hoja personalizada `styles/styles.css` se carga después de
Bootstrap para adaptar los componentes a la identidad visual de
Nuova Vita.

### Sistema de grillas

Se utilizan las clases `container`, `container-fluid`, `row`, `col-*`
y `row-cols-*` para organizar el contenido.

- **Hero:** utiliza `row` y `col-md-6` para distribuir el texto y la
  ilustración.
- **Servicios y roles:** utilizan `row-cols-1`, `row-cols-md-2` y
  `row-cols-lg-4`.
- **Login:** utiliza columnas que se apilan en dispositivos pequeños.
- **Dashboard:** utiliza columnas responsive para organizar la barra
  lateral y el contenido.
- **Estadísticas:** utilizan diferentes cantidades de columnas según
  el ancho disponible.

### Componentes utilizados

- Barra de navegación responsive.
- Sistema `collapse` para el menú móvil.
- Tarjetas.
- Botones.
- Formularios.
- Insignias para estados de pacientes.
- Tablas responsive.
- Listas de actividades.
- Alertas de error y confirmación.
- Menú lateral con `nav-pills`.

### Utilidades utilizadas

Se aplican utilidades de Bootstrap para:

- Flexbox.
- Alineación.
- Espaciado.
- Tipografía.
- Orden responsive.
- Dimensiones.
- Visibilidad.
- Colores contextuales.

Las media queries heredadas que duplicaban comportamientos responsive
fueron eliminadas. La adaptación principal de la interfaz se resuelve
mediante clases de Bootstrap.

## Estilos e identidad visual

Los estilos personalizados se encuentran en `styles/styles.css`.

La identidad visual de Nuova Vita utiliza:

- Paleta terracota, salvia y crema.
- Poppins para encabezados.
- Nunito Sans para textos.
- Bordes redondeados.
- Sombras suaves.
- Estados de interacción.
- Estados visuales de validación.
- Logo, ilustración y favicon propios.

Las variables de CSS centralizan colores, tipografías, espaciados,
bordes y sombras para mantener una apariencia coherente.

## Diseño responsive

La interfaz se adapta mediante el sistema de grillas, breakpoints y
utilidades responsive de Bootstrap.

- Las páginas incluyen `meta viewport`.
- Las columnas se apilan en pantallas pequeñas.
- La navegación principal utiliza `navbar-expand-lg` y `collapse`.
- Las tarjetas cambian su distribución según el ancho disponible.
- El dashboard adapta la barra lateral y el contenido.
- Las tablas utilizan un contenedor responsive.
- Los formularios y controles se adaptan a dispositivos móviles.

## SEO

Las estrategias de SEO aplicadas incluyen:

- Títulos descriptivos en todas las páginas.
- Meta descripciones acordes con el contenido.
- HTML semántico.
- Jerarquía de encabezados.
- Texto alternativo en imágenes.
- Diseño responsive.
- Nombres de archivos descriptivos.
- Navegación interna mediante anclas.
- Formularios correctamente identificados.

Las páginas internas `login.html` y `dashboard.html` utilizan:

```html
<meta name="robots" content="noindex, nofollow">
```

Esto evita que las pantallas internas sean indexadas por buscadores.

## Accesibilidad

Las medidas de accesibilidad incluyen:

- Etiquetas vinculadas con los campos mediante `for` e `id`.
- Mensajes relacionados mediante `aria-describedby`.
- Estados de error mediante `aria-invalid`.
- Regiones dinámicas mediante `aria-live`.
- Estado del botón de contraseña mediante `aria-pressed`.
- Estado del panel de recuperación mediante `aria-expanded`.
- Navegaciones identificadas con `aria-label`.
- Secciones relacionadas con sus encabezados mediante
  `aria-labelledby`.
- Foco automático sobre campos inválidos.
- Textos alternativos en las imágenes.
- Opciones no disponibles señaladas mediante `aria-disabled`.

## Gestión con Git y GitHub

El proyecto utiliza las ramas:

- `main`: versión estable.
- `dev`: integración del trabajo del equipo.
- `feature/*`: desarrollo de nuevas funcionalidades.

Para el TP 4 se utiliza:

```text
feature/funcionalidades-javascript
```

Los cambios se organizan en commits claros y descriptivos. Una vez
finalizado el trabajo se crea un Pull Request desde la rama `feature`
hacia `dev`.

Commits principales del TP 4:

```text
refactor(css): eliminar media queries reemplazadas por Bootstrap
feat(home): agregar validacion e interactividad al formulario
feat(dashboard): mostrar estadisticas y actividad reciente
feat(dashboard): agregar busqueda y filtros de pacientes
seo: agregar metadatos y controlar indexacion interna
feat: completar navegacion y documentacion del TP4
```

## Cómo visualizar el proyecto

1. Clonar o descargar el repositorio.
2. Abrir `index.html` en un navegador.
3. Utilizar la navegación para acceder al login.
4. Completar credenciales válidas para ingresar al dashboard.
5. Probar las funcionalidades interactivas.

No se requiere instalar dependencias ni ejecutar un proceso de
compilación.

Se necesita conexión a Internet para cargar Bootstrap y Google Fonts,
ya que ambos recursos se incorporan mediante CDN.

## Limitaciones actuales

El proyecto representa una interfaz del lado del cliente.

Todavía no incluye:

- Backend.
- Base de datos.
- Autenticación real.
- Envío real de formularios.
- Recuperación real de contraseña.
- Datos clínicos persistentes.
- Control real de permisos por rol.

Las funcionalidades implementadas tienen fines educativos y simulan
el comportamiento esperado de una aplicación completa.