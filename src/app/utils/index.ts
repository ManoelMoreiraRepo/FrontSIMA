export function getLogoByGerencia(gerencia: string):string {
    let url = './assets/img/logos/';
    switch (gerencia) {
        case 'GER_001':
            url += 'sima.png'
            break;
        case 'GER_002':
            url += 'global.png'
            break;
        case 'GER_003':
            url += 'global.png'
            break;
        case 'GER_004':
            url += 'sima.png'
            break;
        case 'GER_005':
            url += 'lb.png'
            break;
        case 'GER_006':
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