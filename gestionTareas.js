// Declaración de variables y constantes
const tareas = [];


// Función para agregar una tarea
function agregarTarea() {
    const nuevaTarea = prompt("Ingrese una nueva tarea");
    if (nuevaTarea){
        tareas.push(nuevaTarea);
        alert("Tarea agregada correctamente");
    }else{
        alert("No se ingreso ninguna tarea.");
    }
}

// Función para ver todas las tareas
function verTareas() {
    if (tareas.length === 0) {
        alert("No hay tareas en la lista.");
    } else {
        let mensaje = "Tareas actuales:\n";
        for (let i = 0; i < tareas.length; i++) {
            mensaje += `${i + 1}. ${tareas[i]}\n`;
        }
        alert(mensaje);
    }
}

// Función para Eliminar Tareas
function eliminarTarea() {
    if (tareas.length === 0) {
        alert("No hay tareas para eliminar.");
        return;
    }

    const numeroTarea = parseInt(prompt("Ingrese el número de la tarea a eliminar:"));
    if (isNaN(numeroTarea) || numeroTarea < 1 || numeroTarea > tareas.length) {
        alert("Número de tarea inválido.");
    } else {
        const confirmacion = confirm(`¿Está seguro de que desea eliminar la tarea ${numeroTarea}: "${tareas[numeroTarea - 1]}"?`);
        if (confirmacion) {
            tareas.splice(numeroTarea - 1, 1);
            alert("Tarea eliminada exitosamente.");
        }
    }
}

// Función principal que maneja el menú de opciones
function menu () {
    let salir = false;
    while (!salir){
        const opcion = prompt ("Seleccione una opción:\n1. Agregar tarea\n2. Ver tareas\n3. Eliminar tarea\n4. Salir");
        switch (opcion) {
            case "1":
                agregarTarea();
                break
            case "2":
                verTareas();
                break
            case "3":
                eliminarTarea();
                break
            case "4":
                salir = true;
                alert("Gracias por usar el simulador de gestión de tareas.");
                break
            default:
                alert("Opción inválida. Por favor, seleccione una opción del 1 al 4.")
        }
    }
}

// Llamada a la función principal para iniciar el programa
menu();