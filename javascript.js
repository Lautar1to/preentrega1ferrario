function solicitarNotas() {
    const numAlumnos = parseInt(prompt('Ingrese el número de alumnos a evaluar:'));
  
    let suma = 0;
  
    for (let i = 1; i <= numAlumnos; i++) {
      const nota = parseFloat(prompt(`Ingrese la nota del alumno ${i}:`));
  
      suma += nota;
    }
  
    const promedio = suma / numAlumnos;
    alert(`El promedio de notas es: ${promedio}`);
  
    const repetir = confirm('¿Desea calcular el promedio de notas de otro grupo de alumnos?');
    
    if (repetir) {
      solicitarNotas();
    }
  }
  
  solicitarNotas();