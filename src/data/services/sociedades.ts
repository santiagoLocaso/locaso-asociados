export const sociedadesPage = {
  hero: {
    label: "Servicios",
    title: "CONSTITUCIÓN Y MODIFICACIÓN DE SOCIEDADES COMERCIALES",
    description:
      "Brindamos asesoramiento integral para constituir sociedades comerciales, inscribir administradores, realizar reformas, variaciones de capital, cesiones y trámites generales ante IGJ.",
  },

  intro: {
    label: "Alcance del servicio",
    title: "Acompañamiento completo ante IGJ",
    paragraphs: [
      "El estudio interviene en la constitución de sociedades, inscripción de administradores, modificaciones societarias, reformas estatutarias, variaciones de capital, cesiones y trámites vinculados a sociedades comerciales.",
      "También brindamos soporte a profesionales, contadores y abogados que requieren asistencia específica en trámites societarios.",
    ],
  },

  grid: {
    label: "Tipos societarios",
    title: "Principales estructuras comerciales",
    description:
      "Cada tipo societario tiene características propias. La elección depende de la cantidad de socios, el nivel de formalidad requerido, la forma de administración y los objetivos del negocio.",
    items: [
      {
        title: "Sociedad de Responsabilidad Limitada",
        badge: "S.R.L.",
        items: [
          "Entre 2 y 50 socios.",
          "Administración a cargo de uno o más gerentes.",
          "Gerente con mandato indefinido.",
          "No tiene capital mínimo.",
          "Los socios limitan su responsabilidad.",
          "La entrada o salida de un socio debe inscribirse.",
          "Puede estipularse la no incorporación de herederos.",
          "No presenta balances ante IGJ.",
        ],
      },
      {
        title: "Sociedad Anónima",
        badge: "S.A.",
        items: [
          "Requiere 2 o más socios.",
          "Administración con uno o más directores titulares y suplentes.",
          "Renovación del directorio cada 3 años.",
          "Capital mínimo: $30.000.000.",
          "Los socios limitan su responsabilidad.",
          "La entrada o salida de accionistas no requiere inscripción ante IGJ.",
          "Presenta balances ante IGJ.",
        ],
      },
      {
        title: "Sociedad por Acciones Simplificada",
        badge: "S.A.S.",
        items: [
          "Puede tener un solo socio.",
          "Administración con un titular y un suplente.",
          "Administrador con mandato indefinido.",
          "Capital mínimo equivalente a 2 salarios mínimos vitales y móviles.",
          "Los socios limitan su responsabilidad.",
          "Estatuto y libros en formato digital.",
          "La entrada o salida de socios no requiere inscripción ante IGJ.",
        ],
      },
      {
        title: "Sociedad Anónima Unipersonal",
        badge: "S.A.U.",
        items: [
          "Está compuesta por un único socio.",
          "El socio único toma las decisiones de la asamblea.",
          "Los bienes personales del socio se encuentran protegidos.",
          "Debe incluir “Sociedad Anónima Unipersonal” o “S.A.U.” en su denominación.",
          "El capital debe integrarse al 100% al momento de la constitución.",
          "Una SAU no puede constituir ni ser dueña de otra SAU.",
          "Está sujeta a fiscalización estatal permanente.",
          "Debe contar con directorio y sindicatura obligatoria.",
        ],
      },
    ],
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        question: "¿Qué tipo de sociedad conviene constituir?",
        answer:
          "Depende de la cantidad de socios, el tipo de actividad, la forma de administración y las necesidades de cada proyecto. Analizamos cada caso para recomendar la estructura más conveniente.",
      },
      {
        question: "¿Cuánto demora el trámite de constitución?",
        answer:
          "El plazo depende del tipo societario elegido y de los tiempos de procesamiento del organismo correspondiente, además de contar con toda la documentación requerida.",
      },
      {
        question: "¿Puedo modificar una sociedad ya constituida?",
        answer:
          "Sí. Asesoramos en reformas estatutarias, cambios de autoridades, variaciones de capital, cesiones de participaciones y otros trámites societarios.",
      },
    ],
  },

  cta: {
    label: "Consulta inicial",
    title: "¿Qué tipo de sociedad conviene constituir?",
    description:
      "Podemos analizar el caso concreto y orientar la elección de la estructura más adecuada según los socios, la actividad, la administración y las necesidades operativas.",
    buttonText: "Solicitar asesoramiento",
    href: "/contacto",
  },
};
