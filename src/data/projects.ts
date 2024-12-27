import { Project } from "../types";

export const projects : Project[]= [
    {
        id: 1,
        title: "Control de Gastos",
        description: "Aplicacion desarrollada para el control de gastos, en el cual inicialmente se define un presupuesto, habilitando la vista del componente en donde se visualiza el control de los gastos en porcentaje mediante una esfera. Los gastos se aprecian en forma de lista, donde se destacan por la categoria, nombre y fecha del mismo. Se pueden filtrar estos gastos mediante un select.",
        techs: ["React", "Typescript"],
        image: "/image_control_expense.jpg",
        url: "https://glittery-shortbread-b491ae.netlify.app/",
    },
    {
        id: 2,
        title: "Pacientes Veterinaria",
        description: "Aplicación diseñada para gestionar el control de pacientes en una clínica veterinaria. Los datos se ingresan a través de un formulario, que es validado utilizando React Hook Form, permitiendo también la visualización de posibles errores. La información ingresada se muestra en una lista, junto con los botones para Editar y Eliminar, lo que facilita la manipulación de los registros. Cada acción, ya sea agregar, editar o eliminar, genera una notificación mediante 'react-toastify' para confirmar la operación. El manejo de las acciones y el estado global se gestiona con Zustand, y los identificadores de los registros se generan mediante uuid.",
        techs: ["React", "Typescript","Zustand", "React Hook Form", "React Toastify", "Tailwindcss"],
        image: "/image-veterinary.jpg",
        url: "https://clever-daffodil-493d54.netlify.app/",
    },
    {
        id: 3,
        title: "Cotzador de Criptomonedas",
        description: "Aplicación que permite consultar el valor en tiempo real de las criptomonedas, mostrando su cotización en diversas monedas. Los resultados se obtienen mediante una consulta a una API, donde los tipos de datos y esquemas son definidos con Zod, y las acciones y estados son gestionados gracias a Zustand.",
        techs: ["React", "Typescript", "Zustand", "Zod", "Axios"],
        image: "/image-crypto.jpg",
        url: "https://glowing-biscuit-2f1334.netlify.app/"
    },
    {
        id: 4,
        title: "Buscador de Clima",
        description: "Aplicación que permite consultar el clima de cualquier ciudad del mundo. Esta consulta se realiza a través de una API, cuyos estados y acciones son gestionados mediante Zustand, mientras que las respuestas y el tipado son validadas con Zod.",
        techs: ["React", "Typescript", "Zustand", "Zod", "Axios"],
        image: "/image-weather.jpg",
        url: "https://elegant-conkies-2f24a0.netlify.app/"
    },
    {
        id: 5,
        title: "Bebidas",
        description: "Se encuentran dos vistas: una destinada a la búsqueda de recetas de bebidas, en la que se muestran los resultados de búsqueda, y cada uno de los elementos tiene un botón para mostrar la receta correspondiente. Al hacer clic en dicho botón, se abre un modal que permite añadir la receta a los favoritos. Estos favoritos se visualizan en la otra vista. Para la navegación entre vistas se utiliza React Router. El manejo de las acciones y el estado de las recetas, los favoritos y las notificaciones se realiza mediante Zustand, usando una store estructurada con slices. Además, se emplea Zod para el tipado y la validación de los datos mediante esquemas.",
        techs: ["React", "Typescript", "Zustand", "Zod", "React Router", "Axios"],
        image: "/image-drinks.jpg",
        url: "https://benevolent-quokka-caa9ae.netlify.app/"
    }
]