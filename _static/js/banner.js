function createCookie(cookieName, cookieValue, daysToExpire) {
    var date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
}

function accessCookie(cookieName) {
    var name = cookieName + "=";
    var allCookieArray = document.cookie.split(';');
    for (var i = 0; i < allCookieArray.length; i++) {
        var temp = allCookieArray[i].trim();
        if (temp.indexOf(name) == 0)
            return temp.substring(name.length, temp.length);
    }
    return "";
}

function dismissBannerForAWeek() {
    createCookie("_sf_banner", "onboarding", 7);
    removeBanner();
}

function removeBanner() {
    $(".sf-banner").hide();
}

function showBanner() {
    $(".sf-banner").fadeIn(400);
}

$(document).ready(function () {
    var bannerDismissed = accessCookie("_sf_banner");
    if (bannerDismissed != "") {
        removeBanner();
    }
    else {
        showBanner();
    }
});
