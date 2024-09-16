// Datos de ejemplo
const data = {
    GENERAL: {
        'SUBCATEGORIA GENERAL': ['SOLMAN', 'CASOS MAL MONTADOS', 'MANTENIMIENTO PREVENTIVO A EQUIPOS'],
        SUCCESFACTOR: ['CÓMO CREAR CASO DE CAMBIO DE CONTRASEÑA', 'INGRESO DE FICHA EN SUCCESFACTORS'],
        'MILENIO PC': ['ASUNTO: Reporte de Falla en Milenio'],
        'NUEVO EMPLEADO': ['CÓMO CREAR EL CASO DE NUEVO EMPLEADO', 'CREACIÓN DE USUARIO EN DIRECTORIO ACTIVO (DA)', 'CREACIÓN DE CUENTA DE CORREO', 'CREACIÓN DE USUARIO EN PORTAL COLABORADOR', 'CREAR CASO PARA NUEVO USUARIO SAP', 'CREACIÓN USUARIO SAP'],
        TRANSPORTES: ['TRANSPORTES ARANDA-SONDA', 'TRANSPORTES DOCUNET'],
        EXCEL: ['SEPARACIÓN DE MILES Y DECIMALES', 'DECIMALES INVERTIDOS', 'REPARACIÓN DE ARCHIVO LOCAL', 'ACTIVACIÓN DE OFFICE 2016']
    }
};

const documentacion = {
    'CÓMO CREAR CASO DE CAMBIO DE CONTRASEÑA': {
        titulo: 'Cambio de Contraseña en Succesfactor',
        texto: `ASUNTO: Solicitud de Cambio de Contraseña\n\nSolución: Para generar la solicitud de cambio de contraseña en la plataforma Succesfactor, sigue estos pasos:
1. Ingresa a la plataforma de Dulce a través de la intranet.
2. Navega a la categoría SELFSERVICE.
3. Selecciona MARKETPLACE o MERCADO.
4. Accede a INFRAESTRUCTURA y selecciona la opción Fallas con sistema Succesfactors.
5. Llena la solicitud y en el campo necesidad selecciona SSFF NO SE TIENE LA CLARIDAD DE LA CONTRASEÑA SE OLVIDÓ PARA INGRESAR.
6. Envía la solicitud.
Una vez validada y lista, se informará al usuario por correo automático y Teams.`
    },
    'INGRESO DE FICHA EN SUCCESFACTORS': {
        titulo: 'Verificación de Ficha en Succesfactors',
        texto: `ASUNTO: Verificación de Ficha\n\nSolución: Se accede a la plataforma de Succesfactors y se verifica con el número de ficha del usuario. Se confirma que el usuario ingresa con la ficha y la contraseña Agosto2024.`
    },
    'ASUNTO: Reporte de Falla en Milenio': {
        titulo: 'Reporte de Falla en Milenio',
        texto: `ASUNTO: Reporte de Falla en Milenio\n\nSolución: Se informó al proveedor sobre la falla con el equipo, generando la solicitud número XXXXXX. Se estará atento al desarrollo de la misma y se procederá al cierre del caso una vez resuelto.`
    },
    'CÓMO CREAR EL CASO DE NUEVO EMPLEADO': {
        titulo: 'Creación de Nuevo Empleado',
        texto: `ASUNTO: Creación de Nuevo Empleado\n\nSolución: Para crear un nuevo empleado, sigue estos pasos:
1. Ingresa a la plataforma de Dulce a través de la intranet.
2. Navega a la categoría SELFSERVICE.
3. Selecciona MARKETPLACE o MERCADO.
4. Accede a PERSONAL y selecciona la opción INGRESO DE PERSONAL NUEVO USUARIO.
5. Completa los campos requeridos en la solicitud. Si necesitas un usuario SAP, agrégalo en la categoría correspondiente.
6. Envía la solicitud. Se generarán entre 4 y 5 solicitudes adicionales (dependiendo de si se requiere SAP o no), tales como:
   - Creación de usuario en portal de colaboradores.
   - Creación de cuenta de correo electrónico.
   - Creación de usuario en directorio activo.
   - Creación de usuario SAP (si es necesario).
   - Configuración de equipo de cómputo.
7. Todas estas solicitudes requerirán la aprobación del jefe del área, y la solicitud de SAP requerirá una aprobación adicional del jefe de seguridad.
Se podrá consultar el progreso mediante los correos que se enviarán automáticamente.`
    },
    'CREACIÓN DE USUARIO EN DIRECTORIO ACTIVO (DA)': {
        titulo: 'Creación de Usuario en Directorio Activo',
        texto: `ASUNTO: Creación de Usuario en Directorio Activo\n\nSolución: Se ha completado la creación del usuario en el directorio activo para xxxxxxxxxxx en el marco del caso REQxxxxxxx. La información de ingreso es la siguiente:
- Usuario RED: xxxxxx
- Contraseña: Se validará en el momento de la configuración del equipo
Recuerda que el uso del equipo es válido únicamente después de firmar la política de manejo de equipos del área de tecnología.`
    },
    'CREACIÓN DE CUENTA DE CORREO': {
        titulo: 'Creación de Cuenta de Correo Electrónico',
        texto: `ASUNTO: Creación de Cuenta de Correo Electrónico\n\nSolución: Se ha procedido con la creación de la cuenta solicitada en el caso REQxxxxxxx. Los detalles de ingreso son los siguientes:
- Correo Electrónico: XXXXXXXXXXXXXXXXXX`
    },
    'CREACIÓN DE USUARIO EN PORTAL COLABORADOR': {
        titulo: 'Creación de Cuenta en Portal del Colaborador',
        texto: `ASUNTO: Creación de Cuenta en Portal del Colaborador\n\nSolución: Se ha completado la creación de la cuenta solicitada para el usuario xxxxxxxxxx en el marco del caso REQxxxxxxx. Los datos de ingreso proporcionados son los siguientes:
- Portal del Colaborador: Ficha asignada
- Contraseña: 1234
Recuerda que las contraseñas asignadas son temporales y deben ser modificadas en el primer inicio de sesión. La contraseña debe contener al menos una letra mayúscula, números, caracteres especiales y una longitud mínima de 8 dígitos.`
    },
    'CREAR CASO PARA NUEVO USUARIO SAP': {
        titulo: 'Creación de Usuario SAP',
        texto: `ASUNTO: Creación de Usuario SAP\n\nSolución: Se creó un caso en la plataforma con el número xxxxx y está pendiente de la aprobación de la coordinadora de infraestructura y seguridad, Erika Jasmin Torres Criollo. El usuario XXXX tiene ya creado el correo electrónico y el usuario de Windows. El caso está en revisión para la configuración del equipo, y el usuario SAP será creado una vez se reciba la aprobación de seguridad.`
    },
    'CREACIÓN USUARIO SAP': {
        titulo: 'Creación de Usuario SAP',
        texto: `ASUNTO: CREACIÓN USUARIO SAP\n\nSOLUCIÓN: Por la presente, me complace informarle que se ha llevado a cabo la creación de la cuenta solicitada para el usuario xxxxxxxxxxxxx en el marco del caso xxxxxx. 
En este momento, su cuenta se encuentra en proceso de asignación de roles por parte del área de seguridad, una vez se finalice el proceso le llegará un correo anunciando que los permisos fueron asignados y podrá validar el acceso con las siguientes credenciales:
Usuario: XXXXX
Contraseña SAP*1234
Le recordamos que estas contraseñas son temporales y es imperativo cambiarlas en su primer inicio de sesión. Asegúrese de seguir los estándares indicados, lo que implica que contenga mínimo una letra en mayúscula, utilizar números y letras, caracteres especiales, y una longitud mínima de 8 dígitos.`
    }
};

// Variables globales
const categoriaSelect = document.getElementById('categoria');
const subcategoriaSelect = document.getElementById('subcategoria');
const solicitudSelect = document.getElementById('solicitud');

// Función para actualizar las subcategorías
function actualizarSubcategorias() {
    const categoria = categoriaSelect.value;
    const subcategorias = data[categoria] || {};
    
    subcategoriaSelect.innerHTML = '<option selected>Selecciona una subcategoría</option>';
    solicitudSelect.innerHTML = '<option selected>Selecciona una solicitud</option>';
    
    for (const subcategoria in subcategorias) {
        const option = document.createElement('option');
        option.value = subcategoria;
        option.textContent = subcategoria;
        subcategoriaSelect.appendChild(option);
    }
    
    subcategoriaSelect.disabled = false;
}

// Función para actualizar las solicitudes
function actualizarSolicitudes() {
    const categoria = categoriaSelect.value;
    const subcategoria = subcategoriaSelect.value;
    const solicitudes = data[categoria][subcategoria] || [];
    
    solicitudSelect.innerHTML = '<option selected>Selecciona una solicitud</option>';
    
    for (const solicitud of solicitudes) {
        const option = document.createElement('option');
        option.value = solicitud;
        option.textContent = solicitud;
        solicitudSelect.appendChild(option);
    }
    
    solicitudSelect.disabled = false;
}

// Función para mostrar la documentación
function mostrarDocumentacion() {
    const solicitud = solicitudSelect.value;
    const documentacionData = documentacion[solicitud] || {};
    
    document.getElementById('documentacionTitulo').textContent = documentacionData.titulo || '';
    document.getElementById('documentacionTexto').textContent = documentacionData.texto || '';
}

// Event listeners
categoriaSelect.addEventListener('change', actualizarSubcategorias);
subcategoriaSelect.addEventListener('change', actualizarSolicitudes);
solicitudSelect.addEventListener('change', mostrarDocumentacion);
document.getElementById('copyBtn').addEventListener('click', () => {
    const textArea = document.createElement('textarea');
    textArea.value = document.getElementById('documentacionTexto').textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Documentación copiada al portapapeles');
});
