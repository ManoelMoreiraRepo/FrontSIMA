export function getLogoByGerencia(gerencia: string):string {
    let url = './assets/img/logos/';
    switch (gerencia) {
        case 'GER01':
            url += 'sima.png'
            break;
        case 'GER02':
            url += 'global.png'
            break;
        case 'GER03':
            url += 'global.png'
            break;
        case 'GER04':
            url += 'sima.png'
            break;
        case 'GER05':
            url += 'lb.png'
            break;
        case 'GER06':
            url += 'eco.png'
            break;
        default:
            break;
    }
    return url;
}


export function esMovil(){
    let anchoPantalla = window.innerWidth;
    let anchoMovil = 769;
    return anchoPantalla <= anchoMovil;
}