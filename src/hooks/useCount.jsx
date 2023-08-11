// Primero, importamos useState desde 'react'. useState es un hook que permite añadir estado local a los componentes funcionales.
import { useState } from 'react';

function useCount() {
  // A continuación, definimos el estado "count" usando el hook useState. 
  // - `count` es el valor actual del estado.
  // - `setCount` es una función que nos permite actualizar el estado.
  // El argumento que se pasa a useState (en este caso 0) es el valor inicial del estado.
  const [count, setCount] = useState(0);

  // Función para incrementar el contador.
  const increment = () => {
    // Usamos setCount para actualizar el valor del contador.
    // Aquí, tomamos el valor actual de "count" y le sumamos 1.
    setCount(count + 1);
  };

  // Función para decrementar el contador.
  const decrement = () => {
    setCount(count - 1);
  };

  // Función para resetear el contador a su valor inicial (0).
  const reset = () => {
    setCount(0);
  };

  return { count, increment, decrement, reset };}


// Finalmente, exportamos el componente App para que pueda ser utilizado en otros lugares de la aplicación.
export default useCount;
