# Nuova Vita — Sistema de gestión

Proyecto de interfaz web para el hogar de adultos mayores **Nuova Vita**.
Incluye una página institucional, una pantalla de inicio de sesión y un
panel interno de gestión.

La interfaz utiliza **HTML5**, **CSS3** y **Bootstrap 5.3.3**, manteniendo
la identidad visual de la marca mediante estilos personalizados.

## Integrantes

- Agustín Rodríguez
- Constanza Segura
- Marcos Núñez

## Descripción del proyecto

El sitio está compuesto por tres páginas:

- **`index.html`:** página institucional con presentación, servicios,
  roles del sistema y formulario de contacto.
- **`login.html`:** pantalla de inicio de sesión con campos de correo
  electrónico, contraseña y opción para recordar al usuario.
- **`dashboard.html`:** panel interno con menú lateral, tarjetas de
  estadísticas y una sección de actividad reciente.

Actualmente, el proyecto representa la interfaz visual del sistema.
Los formularios no procesan información y el dashboard contiene
marcadores de posición.

## Tecnologías utilizadas

- **HTML5 semántico:** organización del contenido mediante etiquetas
  como `header`, `nav`, `main`, `section`, `article`, `aside` y `footer`.
- **CSS3:** variables CSS, Flexbox, CSS Grid, Media Queries y transiciones.
- **Bootstrap 5.3.3:** sistema de grillas, componentes y utilidades
  responsive, incorporado mediante CDN.
- **JavaScript de Bootstrap:** comportamiento del menú desplegable
  de la página principal.
- **Google Fonts:** Poppins para títulos y Nunito Sans para textos.
- **Imágenes SVG:** logo, ilustración principal y favicon.
- **Git y GitHub:** control de versiones y trabajo en equipo.

## Estructura del proyecto

```text
NuovaVita/
├── img/
│   ├── logo.svg
│   ├── hero.svg
│   └── favicon.svg
├── styles/
│   └── styles.css
├── index.html
├── login.html
├── dashboard.html
└── README.md
```

## Evolución del proyecto

- **TP 2:** desarrollo de la interfaz mediante HTML y CSS, utilizando
  Flexbox, CSS Grid, variables CSS y diseño responsive.
- **TP 3:** incorporación de Bootstrap para organizar las páginas,
  aplicar componentes y mejorar la adaptación a distintos tamaños
  de pantalla, conservando la identidad visual de Nuova Vita.

Varias reglas de distribución del TP 2 fueron reemplazadas por clases
de Bootstrap y permanecen comentadas en la hoja de estilos como
referencia de la implementación anterior.

## Incorporación de Bootstrap

Bootstrap 5.3.3 está incorporado en las tres páginas mediante CDN.
Se carga su hoja de estilos en el encabezado de cada documento y
`bootstrap.bundle.min.js` al final del cuerpo.

La hoja personalizada **`styles/styles.css`** se carga después de
Bootstrap para adaptar la apariencia de los componentes a la marca.

### Sistema de grillas

Se utilizan `container`, `container-fluid`, `row`, `col-*` y
`row-cols-*` para organizar el contenido.

- **Hero de la página principal:** `row` y `col-md-6` distribuyen el
  texto y la imagen en dos columnas desde el breakpoint `md`.
  En pantallas pequeñas se apilan y la imagen aparece primero.
- **Servicios y roles:** `row-cols-1`, `row-cols-md-2` y
  `row-cols-lg-4` muestran una, dos o cuatro tarjetas por fila,
  según el ancho disponible.
- **Login:** `col-md-5` y `col-md-7` distribuyen el panel de bienvenida
  y el formulario. En pantallas pequeñas se apilan.
- **Dashboard:** `container-fluid`, `row` y columnas responsive
  organizan la barra lateral y el contenido principal.
- **Estadísticas:** `row-cols-1`, `row-cols-sm-2` y
  `row-cols-xl-4` permiten mostrar una, dos o cuatro tarjetas por fila.

### Componentes utilizados

- **Barra de navegación:** `navbar`, `navbar-expand-lg`,
  `navbar-toggler` y `collapse`.
- **Tarjetas:** `card`, combinada con estilos propios y la utilidad
  `h-100` para mantener alturas uniformes dentro de cada fila.
- **Formularios:** `form-label`, `form-control`, `form-check`,
  `form-check-input` y `form-check-label`.
- **Botones:** `btn`, `btn-primary` y `btn-secondary`.
- **Menú lateral:** `nav`, `nav-pills` y `nav-link`.

### Utilidades utilizadas

Se aplican clases de Bootstrap para controlar la distribución,
alineación, espaciado y presentación de los elementos:

- **Flexbox:** `d-flex`, `flex-column`, `flex-wrap`,
  `justify-content-between` y `align-items-center`.
- **Espaciado:** `p-4`, `p-lg-5`, `mb-3`, `mb-4`, `gap-*` y `g-*`.
- **Texto:** `text-center`, `text-md-start` y `fw-semibold`.
- **Dimensiones:** `w-100`, `h-100` y `min-vh-100`.
- **Orden responsive:** `order-first` y `order-md-last`.
- **Posicionamiento:** `sticky-top` para mantener visible el
  encabezado de la página principal.

### Menú desplegable

La navegación de la página principal utiliza un botón que permite
abrir y cerrar el menú en pantallas pequeñas.

Este comportamiento se implementa mediante el componente `collapse`,
los atributos `data-bs-toggle` y `data-bs-target`, y el JavaScript
incluido en Bootstrap.

## Estilos personalizados e identidad visual

Los estilos propios se encuentran en **`styles/styles.css`**.

Se conserva la identidad visual de Nuova Vita mediante:

- **Paleta de colores:** terracota, salvia y crema.
- **Tipografías:** Poppins y Nunito Sans.
- **Bordes redondeados y sombras:** aplicados a tarjetas y paneles.
- **Efectos de interacción:** cambios de color y transiciones
  en botones y enlaces.
- **Personalización de formularios:** colores propios en el foco
  de los campos y en el checkbox del login.
- **Recursos gráficos:** logo, ilustración principal y favicon.

Bootstrap aporta la estructura y los componentes, mientras que el
CSS personalizado adapta su apariencia al proyecto.

## Variables CSS

Las variables están definidas en `:root` dentro de
`styles/styles.css` y se reutilizan mediante `var()`.

Incluyen:

- **Colores:** `--color-primary`, `--color-secondary`, `--color-bg`,
  `--color-bg-alt`, `--color-text` y otras variantes.
- **Tipografías:** `--font-heading` y `--font-body`.
- **Espaciados:** `--space-xs`, `--space-sm`, `--space-md`,
  `--space-lg` y `--space-xl`.
- **Bordes y sombras:** `--radius`, `--radius-sm`, `--border`,
  `--shadow` y `--shadow-lg`.
- **Ancho máximo de referencia:** `--max-width`, utilizado en la
  implementación anterior del contenedor.

Centralizar estos valores facilita mantener una apariencia coherente
y modificar los estilos de la marca.

## Flexbox y CSS Grid

En la implementación inicial se utilizaron Flexbox y CSS Grid para
distribuir la navegación, el hero, las tarjetas, el login y el dashboard.

Actualmente, gran parte de esa distribución se resuelve mediante
el sistema de grillas y las utilidades de Bootstrap.

- **Flexbox:** se utiliza a través de las filas y utilidades de
  Bootstrap, además de reglas propias como la distribución del logo.
- **CSS Grid:** se mantiene en reglas específicas, como el centrado
  del contenido del hero y de los íconos de las tarjetas.

El sistema de grillas de Bootstrap utilizado en el proyecto se basa
en Flexbox.

## Diseño responsive

La interfaz adapta su distribución a distintos tamaños de pantalla
mediante las columnas, los breakpoints y las utilidades responsive
de Bootstrap.

- Las páginas incluyen la etiqueta **meta viewport**.
- Las columnas se apilan en pantallas pequeñas.
- La cantidad de tarjetas por fila cambia según el ancho disponible.
- El menú principal se transforma en una navegación desplegable
  por debajo del breakpoint `lg`.
- El footer cambia su distribución entre columna y fila mediante
  `flex-column` y `flex-sm-row`.
- Se utilizan unidades relativas y tamaños fluidos en los estilos
  personalizados.
- Se mantiene una Media Query propia para reducir el espaciado de
  las secciones en pantallas de hasta `480px`.
- Se aplica `box-sizing: border-box` para facilitar el control
  de las dimensiones de los elementos.

## Estrategias SEO y accesibilidad

Se mantienen las estrategias trabajadas en las entregas anteriores:

- **Títulos descriptivos:** cada página utiliza una etiqueta `title`
  relacionada con su contenido.
- **Meta descripción:** se incluyen descripciones del propósito
  de las páginas.
- **HTML semántico:** las etiquetas estructurales ayudan a interpretar
  la organización del contenido.
- **Encabezados:** se utilizan títulos para identificar las páginas
  y sus secciones.
- **Texto alternativo:** las imágenes informativas incluyen atributos
  `alt`.
- **Diseño responsive:** la distribución se adapta a dispositivos
  móviles y pantallas de mayor tamaño.
- **Nombres de archivos claros:** `index.html`, `login.html` y
  `dashboard.html`.
- **Formularios identificados:** los campos tienen etiquetas
  vinculadas mediante los atributos `for` e `id`.
- **Navegación identificada:** se utilizan atributos como `aria-label`
  y `aria-current` donde corresponde.

## Gestión con Git y GitHub

- Se utilizan las ramas `main` y `dev` para organizar el proyecto.
- Los cambios se integran mediante Pull Requests.
- Se solicita la revisión de los compañeros antes de integrar
  los cambios.
- Se realizan commits con mensajes claros y descriptivos.

## Cómo visualizar el proyecto

1. Clonar o descargar el repositorio.
2. Abrir `index.html` en un navegador web.
3. Acceder a las demás páginas mediante sus enlaces.

No se requiere un proceso de compilación ni instalación de paquetes.

Se necesita conexión a Internet para cargar Bootstrap y las
tipografías de Google Fonts, ya que se incorporan desde servicios
externos.