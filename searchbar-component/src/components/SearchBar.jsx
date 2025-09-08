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