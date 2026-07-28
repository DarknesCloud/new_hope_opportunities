# Análisis del Proyecto Hope - Vite + React + Tailwind + Material-UI

## 🎯 Propósito General
Sitio web institucional de **New Hope Opportunities Honduras**, una organización educativa cristiana en Rivera Hernández. El sitio promueve educación, programas comunitarios, donaciones y transparencia.

---

## 📁 Estructura del Proyecto

```
hope-project/
├── client/
│   ├── public/
│   │   ├── new-hope-logo.png
│   │   └── __manus__/
│   ├── src/
│   │   ├── pages/              # Rutas principales
│   │   ├── components/         # Componentes reutilizables
│   │   ├── contexts/           # React Contexts (Language, Theme, MUI)
│   │   ├── hooks/              # Custom hooks
│   │   ├── lib/                # Utilidades
│   │   ├── theme/              # Design tokens
│   │   ├── styles/             # Animaciones globales
│   │   ├── assets/             # Imágenes y recursos
│   │   ├── App.tsx             # Router principal
│   │   ├── main.tsx            # Entry point
│   │   └── index.css           # Sistema de diseño global
│   └── index.html
├── server/                      # Express server (placeholder)
├── shared/                      # Constantes compartidas
├── vite.config.ts              # Configuración Vite
└── package.json
```

---

## 🛣️ Rutas Principales (App.tsx)

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | Home | Landing page con hero, impacto, educación, historias, alianzas, donaciones |
| `/nosotros` | Nosotros | Historia, misión, visión, valores, equipo, línea temporal |
| `/programas` | Programas | Impacto y misiones, carrusel de programas, alojamiento, campamento |
| `/programas/la-garra` | ProgramLaGarra | Detalle del programa de deportes |
| `/programas/banda-de-la-paz` | ProgramBandaPaz | Detalle del programa de música |
| `/programas/chicos` | ProgramCHICOS | Detalle del programa CHICOS |
| `/programas/refugio` | ProgramRefugio | Detalle del programa Refugio |
| `/programas/campamento-juvenil` | ProgramCampamento | Detalle del campamento anual |
| `/programas/viajes-misioneros` | ProgramViajesMisioneros | Detalle de viajes misioneros |
| `/transparencia` | Transparencia | Rendición de cuentas, reportes, gobernanza |
| `/contacto` | Contacto | Formulario de contacto, información institucional |
| `/404` | NotFound | Página de error |

---

## 🧩 Componentes Principales

### Componentes de Página (Pages)
- **Home.tsx** (50 líneas): Composición modular del homepage
- **Nosotros.tsx** (454 líneas): Página About con hero, historia, misión/visión/valores, equipo, timeline
- **Programas.tsx** (1014 líneas): Página grande de impacto y misiones con carrusel, alojamiento, video
- **Transparencia.tsx** (16 líneas): Wrapper que monta TransparencyTrust
- **Contacto.tsx** (275 líneas): Formulario de contacto con hero, canales, alianzas
- **Program[X].tsx** (22 líneas c/u): Wrappers de programas individuales

### Componentes de Sección (Sections)
| Componente | Líneas | Función |
|-----------|--------|---------|
| HeroImpact6 | 345 | Hero principal con grid de niños, CTA, stats |
| ImpactBar | ~150 | Barra de métricas de impacto (4 cards) |
| EducationPathway | ~180 | Ruta educativa (2 cards: infancia, liderazgo) |
| SuccessStoriesWall | 132 | Slider de historias de éxito con foto grande |
| AlliancesSlider | ~150 | Carrusel de alianzas/socios |
| MosaicHope | ~120 | Mosaico visual de esperanza |
| RaicesCatrachas | ~100 | Sección de raíces comunitarias |
| DonationModule | ~350 | Módulo de donaciones con selector de montos |
| Footer | ~280 | Pie de página con newsletter, links, contacto |

### Componentes Especializados
- **Navbar.tsx**: Navegación global fija (desktop + mobile drawer)
- **TransparencyTrust.tsx** (504 líneas): Sección completa de transparencia
- **ProgramDetail.tsx**: Template reutilizable para detalles de programas
- **CommunityProgramsSlider.tsx**: Carrusel de programas comunitarios
- **AnnualYouthCamp.tsx**: Sección de campamento anual
- **TeamModule.tsx** (199 líneas): Grid de equipo/liderazgo
- **HistoricalTimeline.tsx** (209 líneas): Línea temporal de historia
- **TestimonialWall.tsx** (250 líneas): Muro de testimonios
- **MissionariesGallery.tsx**: Galería de misioneros
- **MissionaryTripsSection.tsx**: Sección de viajes misioneros
- **PartnersAlliances.tsx**: Alianzas y socios
- **ProgramPillars.tsx**: Pilares de programas
- **TransparencyTrust.tsx**: Confianza y transparencia
- **ChatbotWidget.tsx**: Widget de chat flotante
- **ErrorBoundary.tsx**: Boundary para errores
- **ScrollToTop.tsx**: Botón de scroll a top
- **Map.tsx**: Integración de Google Maps
- **ManusDialog.tsx**: Dialog personalizado

### Componentes UI (shadcn/ui + Material-UI)
- **UI Primitives**: button, card, input, select, dialog, modal, tabs, accordion, etc.
- **Material-UI Components**: Box, Container, Typography, Button, TextField, Grid, etc.

---

## 🎨 Sistema de Diseño Visual

### Paleta de Colores (designTokens.ts + index.css)

| Token | Hex | Uso |
|-------|-----|-----|
| Hope Gold | #F2B900 | Acentos, CTAs, highlights |
| Hope Gold Dark | #D8A100 | Hover states |
| Hope Gold Soft | #FFE7A3 | Backgrounds suaves |
| Hope Gold Pale | #FFF7DB | Backgrounds muy claros |
| Graphite | #343434 | Texto principal, botones |
| Graphite Dark | #242424 | Backgrounds oscuros |
| Graphite Soft | #5E5E5E | Texto secundario |
| Graphite Muted | #7B7B7B | Texto terciario |
| Ivory | #FFFDF7 | Background principal |
| Warm White | #FFFFFF | Cards, popups |
| Warm Sand | #FBF6EA | Backgrounds alternos |

### Tipografía

| Familia | Uso |
|--------|-----|
| **Geist** | Headings (h1-h6) - Display font |
| **Inter** | Body text, UI elements |

### Tamaños de Fuente (Responsive)

- **h1**: clamp(3.05rem, 7vw, 5.45rem) - Títulos principales
- **h2**: clamp(2.5rem, 5vw, 4.25rem) - Títulos de sección
- **h3**: clamp(1.85rem, 3vw, 2.75rem) - Subtítulos
- **p**: 1rem base con line-height: 1.78

### Radios de Borde

- **xs**: 0.75rem
- **sm**: 1rem
- **md**: 1.5rem
- **lg**: 2rem (default)
- **xl**: 2.75rem (cards)
- **pill**: 999px (botones, badges)

### Sombras

- **subtle**: 0 12px 30px rgba(52, 52, 52, 0.06)
- **soft**: 0 18px 44px rgba(52, 52, 52, 0.10)
- **elevated**: 0 28px 70px rgba(52, 52, 52, 0.16)
- **gold**: 0 18px 42px rgba(242, 185, 0, 0.16)
- **nav**: 0 14px 38px rgba(52, 52, 52, 0.045)

### Animaciones

- **Easing Premium**: cubic-bezier(0.23, 1, 0.32, 1) - Snappy ease-out
- **Transiciones**: 220ms-260ms para UI interactions
- **Stagger**: 30-80ms entre elementos en cascada
- **Respeta**: prefers-reduced-motion

---

## 🎯 Clases CSS Reutilizables (index.css)

| Clase | Propósito |
|-------|-----------|
| `.container` | Max-width 1200px, padding responsive |
| `.section-shell` | Padding vertical clamp(5rem, 9vw, 8rem) |
| `.editorial-eyebrow` | Badge dorado con borde y fondo |
| `.editorial-title` | Título con font display y letter-spacing |
| `.editorial-subtitle` | Subtítulo con tamaño responsive |
| `.hope-card` | Card con blur backdrop, border suave |
| `.hope-card-premium` | Card premium con shadow elevated |
| `.hope-button-solid` | Botón sólido graphite con hover |
| `.hope-button-outline` | Botón outline dorado |
| `.hope-button-ghost` | Botón transparente |

---

## 🌐 Contextos Globales

### LanguageContext
- **Lenguajes**: Spanish (es) / English (en)
- **Default**: Spanish
- **Uso**: Bilingual content en todos los componentes
- **Hook**: `useLanguage()` → `{ language, setLanguage, toggleLanguage }`

### ThemeContext
- **Temas**: light (default) / dark
- **Switchable**: false (actualmente)
- **Hook**: `useTheme()` → `{ theme, toggleTheme, switchable }`

### MuiThemeProvider
- **Tema Material-UI**: Sincronizado con design tokens
- **Paleta**: Primary (graphite), Secondary (gold), Background (ivory)
- **Tipografía**: Geist para headings, Inter para body

---

## 📦 Dependencias Clave

| Paquete | Versión | Uso |
|---------|---------|-----|
| React | 19.2.1 | Framework |
| Vite | 7.1.7 | Build tool |
| Tailwind | 4.1.14 | Utility CSS |
| Material-UI | 9.0.1 | Components |
| Wouter | 3.3.5 | Client-side routing |
| Framer Motion | 12.23.22 | Animations |
| Recharts | 2.15.2 | Charts |
| Lucide React | 0.453.0 | Icons |
| Sonner | 2.0.7 | Toast notifications |
| React Hook Form | 7.64.0 | Form management |
| Zod | 4.1.12 | Schema validation |

---

## 🔄 Flujos de Datos Principales

### 1. **Bilingual Content Flow**
```
LanguageContext (es/en)
  ↓
useLanguage() hook
  ↓
Componentes seleccionan content[language]
  ↓
Render bilingüe
```

### 2. **Design Token Flow**
```
designTokens.ts (JS/TS)
  ↓
MuiThemeProvider (Material-UI)
  ↓
index.css (CSS variables)
  ↓
Tailwind + MUI components
```

### 3. **Page Composition Flow**
```
App.tsx (Router)
  ↓
Page component (Home, Nosotros, etc.)
  ↓
Section components (Hero, ImpactBar, etc.)
  ↓
UI components (Card, Button, etc.)
```

---

## 🎬 Patrones de Interacción

### Carruseles (Sliders)
- **SuccessStoriesWall**: Auto-advance cada 5s, transición 300ms
- **AlliancesSlider**: Auto-advance cada 5s, dots de navegación
- **CommunityProgramsSlider**: Carrusel de programas con arrows

### Formularios
- **Contacto**: Email, nombre, mensaje con validación
- **DonationModule**: Selector de monto, toggle monthly/once
- **Newsletter (Footer)**: Email input con feedback

### Modales/Dialogs
- **ProgramDetail**: Gallery lightbox
- **Misiones**: Video modal + photo gallery

### Scroll Behavior
- **Smooth scroll**: Anchor links (#historia, #donar)
- **ScrollToTop**: Botón flotante al hacer scroll
- **Navbar sticky**: Fixed top con z-index

---

## 📱 Responsive Design

### Breakpoints (Tailwind)
- **xs**: 0px (mobile)
- **sm**: 640px
- **md**: 768px (tablet)
- **lg**: 1024px
- **xl**: 1280px

### Estrategia
- **Mobile-first**: Layouts simples en mobile, grids en desktop
- **Clamp functions**: Tipografía y padding escalables
- **Drawer**: Menu móvil en lugar de navbar horizontal
- **Grid responsive**: 1 columna → 2-3 columnas en desktop

---

## 🔐 Seguridad y Validación

- **Zod**: Schema validation en formularios
- **React Hook Form**: Form state management
- **CORS**: Configurado en vite.config.ts
- **CSP**: Configurado en index.html (si aplica)

---

## 📊 Contenido Institucional

### Programas Principales
1. **La Garra**: Deporte y carácter (80+ estudiantes)
2. **Banda de la Paz**: Música e identidad comunitaria
3. **CHICOS**: Programa de desarrollo
4. **Refugio**: Programa de apoyo
5. **Campamento Juvenil**: Anual
6. **Viajes Misioneros**: Voluntariado internacional

### Métricas de Impacto
- **250+** estudiantes en Escuela Esperanza
- **$150k** meta financiera 2026
- Educación, nutrición, inglés, tecnología

### Valores Institucionales
- Fe, amor, integridad, excelencia, esperanza
- Gobernanza y transparencia
- Mayordomía bíblica

---

## 🚀 Configuración de Build

### Desarrollo
```bash
npm run dev  # Vite dev server en puerto 3000
```

### Producción
```bash
npm run build  # Build Vite + esbuild server
npm run start  # Node server en puerto 3000
```

### Validación
```bash
npm run check  # TypeScript type checking
npm run format  # Prettier formatting
```

---

## 📝 Notas Importantes para Modificaciones Visuales

### Cuando recibas una referencia visual:

1. **Identifica la sección**: Hero, card, button, section, etc.
2. **Localiza el archivo**: Busca en `pages/` o `components/`
3. **Verifica el token**: Consulta `designTokens.ts` y `index.css`
4. **Revisa el contexto**: ¿Usa LanguageContext? ¿Material-UI o Tailwind?
5. **Busca clases CSS**: `.hope-card`, `.section-shell`, etc.
6. **Aplica cambios**: Mantén consistencia con el sistema de diseño

### Archivos Clave por Sección:

| Sección | Archivo Principal |
|---------|------------------|
| Hero | HeroImpact6.tsx |
| Impacto | ImpactBar.tsx |
| Educación | EducationPathway.tsx |
| Historias | SuccessStoriesWall.tsx |
| Alianzas | AlliancesSlider.tsx |
| Donaciones | DonationModule.tsx |
| Pie de página | Footer.tsx |
| Navegación | Navbar.tsx |
| Programas | Programas.tsx, ProgramDetail.tsx |
| Transparencia | TransparencyTrust.tsx |
| Contacto | Contacto.tsx |

---

**Última actualización**: 28 de junio de 2026
**Versión del proyecto**: 1.0.0
**Stack**: Vite + React 19 + Tailwind 4 + Material-UI 9 + TypeScript
