//export const URL_API = 'http://localhost:8080';
export const URL_API = 'http://localhost/api'; //con docker

export const IMAGEN_DEFAULT =  "../../../assets/img/perfil/default.png"

export const menuAdmin = [
    {
        img:"./assets/img/admin/rrhh.png",
        link:"/rrhh"
    },
    {
        img:"./assets/img/admin/dpa.png",
        link:"/dpa/parque"
    },
    {
        img:"./assets/img/admin/cred.png",
        link:"/credenciales"
    },
    {
        img:"./assets/img/admin/sumi.png",
        link:"/suministros"
    },
    {
        img:"./assets/img/admin/informes.png",
        link:"/credenciales"
    },
]

export const arrayMenuEmpleado = [
    {
        titulo:"RRHH",
        items:[
          {
            titulo:"BOLSA DE TRABAJO",
            descrip:"Reporte semanal de estado",
            img:"./assets/img/lupa.png",
            url:"/bolsa"
          }
        ]
    },
    {
        titulo:"CREDENCIALES",
        items:[
          // {
          //   titulo:"REGISTRO del VIGILADOR",
          //   descrip:"Legajo digital del Vigilador",
          //   img:"./assets/img/checkdoc.png",
          //   url:"#"
          // },
          // {
          //   titulo:"REGISTRO del VIGILADOR",
          //   descrip:"Legajo digital Exclusivo AEROPUERTOS",
          //   img:"./assets/img/checkdoc.png",
          //   url:"#"
          // }
        ],
        subItems:{
          titulo:"REGISTRO del VIGILADOR",
          descrip:"Legajo digital del Vigilador",
          icons:[
            {
              descrip:"AEP",
              img:"./assets/img/checkdoc.png",
              url:"https://forms.gle/WizffgBqnpMYEpbx8"
            },
            {
              descrip:"EZE",
              img:"./assets/img/checkdoc.png",
              url:"#"
            },
            {
              descrip:"GPS /GLOBAL",
              img:"./assets/img/checkdoc.png",
              url:"https://forms.gle/PUKJvVE7VciZdi9A9"
            },
          ]
        }
    },
    {
        titulo:"DPA",
        items:[
          {
            titulo:"REPORTE  de ESTADO Vehicular",
            descrip:"Reporte semanal de estado",
            img:"./assets/img/checkdoc.png",
            url:"https://forms.gle/4ZNC9n13Hriy8d4k9"
          },
                    {
            titulo:"REPORTE DE SINIESTROS",
            descrip:"Informe de Siniestros",
            img:"./assets/img/checkdoc.png",
            url:"https://forms.gle/B4dEfpvjg55ZMu3dA"
          }

        ]
    },
    {
        titulo:"SUMINISTROS",
        items:[
          {
            titulo:"SOLICITUD de SUMINISTROS",
            descrip:"Solicitud de Indumentaria, Equipos y Equipamiento",
            img:"./assets/img/checkdoc.png",
            url:"https://forms.gle/VjThaBax18j9xGuU6"
          }
        ]
    },
    {
        titulo:"SISTEMAS",
        items:[
          {
            titulo:"SISTEMAS Help Desk",
            descrip:"Generación de Ticket de Requerimiento",
            img:"./assets/img/checkdoc.png",
            url:"https://forms.gle/CyviPnnQYjJdJeQW6"
          }
        ]
    },
]

export const titulos = [
  {
    titulo:"RRHH",
    url:"/rrhh"
  },
  {
    titulo:"CREDENCIALES",
    url:"/credenciales"
  },
  {
    titulo:"DPA",
    url:"/dpa/parque"
  },
  {
    titulo:"SUMINISTROS",
    url:"/suministros"
  },
  {
    titulo:"NOMINA ACTIVA",
    url:"/empleado"
  },
  {
    titulo:"ORGANIGRAMA",
    url:"/rrhh"
  },
  {
    titulo:"BOLSA DE TRABAJO",
    url:"/bolsa"
  },
];
