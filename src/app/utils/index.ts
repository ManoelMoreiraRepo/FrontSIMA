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
/**
 * Enviar el id sin #
 * @param id 
 */
export function inHabilitarBoton(id:string){
    let selector = <HTMLElement>document.getElementById(id);
    selector.classList.add("disabled");
    let sprinner = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
    selector.innerHTML = sprinner.concat(selector.innerText);
}

export function HabilitarBoton(id:string){
    let selector = <HTMLElement>document.getElementById(id);
    selector.classList.remove("disabled");
    let texto = selector.innerText;
    selector.children[0].remove();
    selector.innerText= texto;
}

export function inHabilitarBotonPorSegundos(id : string , segundos : number = 5){
    inHabilitarBoton(id);
    setTimeout(() => {
      HabilitarBoton(id);
    }, segundos * 1000);
}