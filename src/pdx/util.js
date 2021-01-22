
export function pageInitAnimation() {
    $('.page-init-hidden').hide().addClass('page-init-animating').removeClass('page-init-hidden');
    $('.page-init-animating,.page-init-hidden').slideDown(800, function(){
        $(this).removeClass('page-init-hidden').removeClass('page-init-animating');
    });
}

export function pageViewportFromQS() {
    // location.search.split(/[\?\&]/).map(kv => {
    //     kv=kv.split('='); if(kv[0]=='vw') $('html').width(parseInt(kv[1], 10));
    // });
    if(QS('vw')) $('html').width(parseInt(QS('vw'), 10));
}

export function navigateTo(page) {
    location.href = page + '.html';
}

export function QS(key, dV) {
    if(!QS.qs) {
        QS.qs={};
        location.search.split(/[\?\&]/).map(kv => {
            kv=kv.split('=');
            QS.qs[kv[0]]=kv[1];
        });
    }
    return QS.qs[key] || dV;
}
