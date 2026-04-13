# Prueba Técnica - Catálogo de Productos

Aplicación web de catálogo de productos con autenticación, desarrollada con Angular 18 y PrimeNG.

## 🚀 Características Implementadas

### 🔐 Autenticación
- Login con usuario y contraseña
- Token almacenado en LocalStorage
- AuthGuard protegiendo rutas
- LoginGuard impidiendo acceso al login cuando ya está autenticado
- Interceptor HTTP para enviar Bearer token
- Funcionalidad de Logout

### 📦 Listado de Productos
- Tabla con PrimeNG DataTable
- Visualización de: nombre, precio, categoría e imagen
- Búsqueda en tiempo real por nombre
- Filtrado por categoría con Dropdown
- Paginación (5, 10, 20 items)
- Ordenamiento por columnas
- Imágenes con tamaño consistente y fallback

### 🔍 Detalle de Producto
- Vista individual con toda la información
- Imagen grande del producto
- Descripción completa
- Calificación con estrellas
- Botón para volver al catálogo

### 🌐 Consumo de API
- Uso de HttpClient
- Servicios separados (AuthService, ProductService, CategoryService)
- Manejo de estado con Signals
- Variables de entorno con alias @env
- Loading states
- Manejo de errores

### 🏗️ Arquitectura
- Componentes standalone
- Servicios con `providedIn: 'root'`
- Routing configurado con Guards
- Interceptor HTTP funcional
- Uso de Signals para manejo de estado reactivo
- Diseño estilo Vercel (minimalista y neutral)

## 📋 Mejoras Futuras

### Features
- **Carrito de compras** con LocalStorage/SessionStorage
- **CRUD de productos** (crear, editar, eliminar)
- **Gestión de usuarios** (perfil, historial)
- **Favoritos/Wishlist**
- **Comparador de productos**
- **Filtros avanzados** (por rango de precio, rating)

### Performance
- **Lazy loading** de módulos/rutas
- **Image lazy loading** y optimización

### Seguridad
- **Refresh tokens** con rotación
- **Validación de formularios** más robusta

### Monitoreo
- **Performance monitoring**

### Accesibilidad
- **Navegación por teclado** mejorada

### UX
- **Skeleton loaders** en lugar de spinners
- **Dark mode**

### Código
- **Validators reutilizables**

## 📋 Requisitos Previos

- Node.js (v18 o superior)
- npm (v9 o superior)

## ⚙️ Instalación

1. Clonar el repositorio (si aplica) o navegar a la carpeta del proyecto

2. Instalar dependencias:
```bash
npm install
```

## 🚀 Uso

### Iniciar la aplicación
```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200`

### Credenciales de prueba

Para hacer login, utiliza las siguientes credenciales de la API FakeStore:

**Usuario:** `mor_2314`  
**Contraseña:** `83r5^_`

> **Nota:** Estas son credenciales de prueba provistas por la API pública de FakeStore.

## 🎨 Componentes PrimeNG Utilizados

- **Button** - Botones de acción con directiva pButton
- **Table** - Listado de productos con paginación
- **InputText** - Campo de búsqueda
- **InputGroup** - Grupos de inputs con iconos (login)
- **Dropdown** - Filtro de categorías
- **Card** - Contenedores visuales
- **Tag** - Etiquetas para categorías
- **Rating** - Calificación con estrellas
- **ProgressSpinner** - Indicador de carga
- **Message** - Mensajes de error

## 💡 Características Técnicas

### Signals en Angular
Se utilizan Signals para un manejo de estado reactivo y eficiente:
- Estado de autenticación
- Lista de productos y productos filtrados
- Estados de loading y error
- Término de búsqueda
- Filtro de categoría

### Guards de Autenticación
- **authGuard**: Protege las rutas `/products` y `/products/:id`, redirigiendo al login si el usuario no está autenticado
- **loginGuard**: Redirige a `/products` si el usuario ya está autenticado e intenta acceder al login

### Interceptor HTTP
El `authInterceptor` añade automáticamente el token Bearer en las peticiones HTTP cuando el usuario está autenticado.

### Búsqueda y Filtrado Reactivo
El filtrado se implementa con signals, proporcionando búsqueda por texto y categoría en tiempo real sin necesidad de botones o debounce manual.

### Variables de Entorno
Uso de alias `@env` para importar configuración de entorno (`API_URL`) de forma limpia y centralizada.

## 🎨 Diseño

La aplicación utiliza un diseño minimalista inspirado en Vercel:
- Colores neutros (#000, #666, #fafafa, #eaeaea)
- System font stack
- Bordes sutiles y transiciones suaves
- Backdrop blur en navbar
- Badge de categorías con colores específicos

## 🛠️ Tecnologías

- **Angular 18.2.0** - Framework principal
- **PrimeNG 17** - Componentes UI
- **TypeScript 5.5.2** - Lenguaje de programación
- **RxJS 7.8.0** - Programación reactiva
- **SCSS** - Estilos
- **FakeStore API** - API de prueba

**Desarrollado con Angular 18 y PrimeNG**
