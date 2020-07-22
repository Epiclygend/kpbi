import * as MDC from 'material-components-web';

window.MDC = MDC
window.mdc = MDC.autoInit()
window.drawerResponsive = drawerResponsive
window.addEventListener('resize', drawerResponsive)


document.addEventListener("MDCAutoInit:End", () => {
    console.log('MDC loaded!')
})  


function drawerResponsive() {
    document.querySelector('aside#navDrawer').MDCDrawer.open = window.screen.width >= responsiveBreakpoints.sm
}
