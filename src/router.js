export function routeOnClick(el, pageWithParams) {
    $(el).click(function(){
        location.href=pageWithParams;
    });
}
