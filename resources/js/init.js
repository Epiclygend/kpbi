import * as MDC from 'material-components-web'

window.MDC = MDC

window.document.addEventListener('MDCAutoInit:End', () => window.console.log('MDC Loaded!'))
window.document.addEventListener('MDCAutoInit:End', () => window.drawerResponsive(), {once: true})

window.drawerResponsive = function () {
    document.querySelector('aside#navDrawer').MDCDrawer.open = window.screen.width >= window.responsiveBreakpoints.sm
}