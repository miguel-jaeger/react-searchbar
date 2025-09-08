# react-searchbar
# 📚 Componente SearchBar - Búsqueda de Libros

Un componente React que permite buscar libros en tiempo real con filtrado optimizado usando `useMemo`.

## 🚀 Guía de Desarrollo Paso a Paso

### Paso 1: Configuración del Proyecto

#### Opción A: Crear nuevo proyecto con Vite (Recomendado)
```bash
npm create vite@latest searchbar-component -- --template react
cd searchbar-component
npm install
```

#### Opción B: Usar Create React App
```bash
npx create-react-app searchbar-component
cd searchbar-component
```

### Paso 2: Estructura del Proyecto

Organiza tu proyecto con la siguiente estructura:
```
searchbar-component/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   └── SearchBar.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx (o index.js)
├── package.json
└── README.md
```

### Paso 3: Crear el Directorio de Componentes

```bash
mkdir src/components
```

### Paso 4: Implementar el Componente SearchBar

#### 4.1 Crear `src/components/SearchBar.jsx`
```jsx
import React, { useState, useMemo } from 'react';
import './SearchBar.css';

const libros = [
  { titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien' },
  { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien' },
  { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez' },
  { titulo: '1984', autor: 'George Orwell' },
  { titulo: 'Un mundo feliz', autor: 'Aldous Huxley' },
  { titulo: 'Fundación', autor: 'Isaac Asimov' },
  { titulo: 'Neuromante', autor: 'William Gibson' },
  { titulo: 'Dune', autor: 'Frank Herbert' },
];

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLibros = useMemo(() => {
    if (!searchTerm) {
      return libros;
    }
    console.log('Filtrando libros...');
    return libros.filter(libro =>
      libro.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-container">
      <h1>Búsqueda de Libros</h1>
      <input
        className="search-input"
        type="text"
        placeholder="Escribe el título de un libro..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul className="results-list">
        {filteredLibros.length > 0 ? (
          filteredLibros.map((libro, index) => (
            <li key={index} className="book-item">
              <strong>{libro.titulo}</strong> - {libro.autor}
            </li>
          ))
        ) : (
          <p className="no-results">No se encontraron resultados.</p>
        )}
      </ul>
    </div>
  );
}
```

#### 4.2 Crear `src/components/SearchBar.css`
```css
body {
  font-family: sans-serif;
  background-color: #f4f4f9;
  color: #333;
  display: flex;
  justify-content: center;
  padding-top: 50px;
}

.search-container {
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
}

h1 {
  text-align: center;
  color: #555;
}

.search-input {
  width: 100%;
  padding: 12px 20px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
}

.results-list {
  list-style-type: none;
  padding: 0;
  max-height: 400px;
  overflow-y: auto;
}

.book-item {
  background: #eef;
  margin-bottom: 8px;
  padding: 12px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.book-item:hover {
  background-color: #e0e0f0;
}

.no-results {
  text-align: center;
  color: #888;
  font-style: italic;
}
```

### Paso 5: Integrar el Componente en la App

#### 5.1 Actualizar `src/App.jsx`
```jsx
import React from 'react';
import { SearchBar } from './components/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;
```

#### 5.2 Limpiar `src/App.css`
```css
#root {
  margin: 0;
  padding: 0;
}

.App {
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
```

### Paso 6: Desarrollo y Pruebas

#### 6.1 Ejecutar en modo desarrollo
```bash
npm run dev
```

#### 6.2 Verificar funcionalidades
- ✅ El componente se renderiza correctamente
- ✅ La búsqueda filtra en tiempo real
- ✅ Muestra todos los libros cuando no hay búsqueda
- ✅ Muestra mensaje "No se encontraron resultados" cuando corresponde
- ✅ Los estilos CSS se aplican correctamente

### Paso 7: Construcción para Producción

```bash
npm run build
```

## 🌐 Opciones de Despliegue

### Opción 1: Netlify (Recomendado para principiantes)

1. **Crear cuenta en [Netlify](https://netlify.com)**

2. **Deploy arrastrando carpeta:**
   ```bash
   npm run build
   # Arrastra la carpeta 'dist' (Vite) o 'build' (CRA) a Netlify
   ```

3. **Deploy desde Git:**
   - Sube tu código a GitHub
   - Conecta el repositorio en Netlify
   - Configuración automática

### Opción 2: Vercel

1. **Instalar Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Desplegar:**
   ```bash
   vercel --prod
   ```

### Opción 3: GitHub Pages

1. **Instalar gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Configurar package.json:**
   ```json
   {
     "homepage": "https://tu-usuario.github.io/searchbar-component",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Desplegar:**
   ```bash
   npm run deploy
   ```

## 🔧 Características Técnicas

### Hooks Utilizados
- **`useState`**: Maneja el estado del término de búsqueda
- **`useMemo`**: Optimiza el filtrado, evitando cálculos innecesarios

### Optimizaciones
- **Filtrado memoizado**: Solo recalcula cuando cambia `searchTerm`
- **Búsqueda case-insensitive**: Convierte a minúsculas para comparar
- **Scroll automático**: Lista con altura máxima y scroll

### Funcionalidades
- ✨ Búsqueda en tiempo real
- 🎨 Interfaz moderna y responsiva
- ⚡ Rendimiento optimizado
- 📱 Diseño mobile-friendly

## 🛠️ Posibles Mejoras

### Mejoras de Funcionalidad
```jsx
// Búsqueda por autor también
const filteredLibros = useMemo(() => {
  if (!searchTerm) return libros;
  
  return libros.filter(libro =>
    libro.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    libro.autor.toLowerCase().includes(searchTerm.toLowerCase())
  );
}, [searchTerm]);
```

### Mejoras de Performance
```jsx
// Debounce para búsquedas más eficientes
import { useMemo, useState, useCallback } from 'react';
import { debounce } from 'lodash';

const debouncedSearch = useCallback(
  debounce((term) => setSearchTerm(term), 300),
  []
);
```

### Mejoras de UI/UX
- Agregar loading states
- Highlighting de términos encontrados
- Paginación para listas grandes
- Filtros por género/autor
- Modo oscuro

## 📋 Comandos Útiles

```bash
# Desarrollo
npm run dev          # Iniciar servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Preview de la build

# Limpieza
rm -rf node_modules  # Limpiar dependencias
npm install          # Reinstalar dependencias
```

## 🐛 Solución de Problemas Comunes

### Error: "Module not found"
```bash
# Verificar que el archivo existe y la ruta es correcta
ls src/components/
```

### Error: CSS no se aplica
```bash
# Verificar que el import del CSS está presente
# import './SearchBar.css';
```

### Error en el build
```bash
# Limpiar cache y reinstalar
rm -rf node_modules package-lock.json
npm install
```

## 🎯 Próximos Pasos

1. **Integrar con una API real** de libros
2. **Agregar tests unitarios** con Jest/Vitest
3. **Implementar TypeScript** para mejor tipado
4. **Crear componentes reutilizables** (Input, BookItem, etc.)
5. **Agregar estado global** con Context API o Redux

---

¡Felicitaciones! 🎉 Has creado y desplegado exitosamente tu componente SearchBar.