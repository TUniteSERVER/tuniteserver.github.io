console.log(`Copyright TUnite, All Rights Reserved.\nComputed by MZCompute GmbH.[wang@mingze.de].`)

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

pageParams = GetQueryString('page') * 1;

renderPagination()
var initPage = pageParams || 1
var currentPage = initPage
var slide = new slidePage({
    slidePages: '.slide-page',
    slideContainer: '#slidePage-container',
    refresh: true,
    page: initPage,
    before: function (origin, diraction, target) {
        pagepages = document.querySelectorAll('#pagination a')
        pagepages[origin - 1].classList.remove('active')
        pagepages[target - 1].classList.add('active')
        currentPage = target
    },
    after: function (origin, diraction, target) {
    },
})
window.slide = slide

// -- 由于slidePage不提供分页组件，所以以下是当前示例的分页器逻辑
pagination.querySelectorAll('a')[initPage - 1].classList.add('active')

function renderPagination() {
    var pagination = document.querySelector('#pagination');
    var len = document.querySelectorAll('.slide-page').length;
    var paginationContent = ''
    // 渲染页码
    for (var i = 1; i <= len; i++) {
        paginationContent += '<a onclick="slide.slideTo(' + i + ')"></a>';
    }
    pagination.querySelector('.pagination-page').innerHTML = paginationContent;
}


var maudio = document.getElementById("mbgm");

function togglemusic() {
    if (maudio.paused) {
        maudio.play();
        document.getElementById("nl-btn1").style = `        -webkit-mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAD/ElEQVRYhc2Yz29VRRTHP+/ySghFIApFDAY1rRAQ2BiFUIUYfjySSoiJ8S9wYTBqxYUbN7hxBbpSCRIXhgUrd7SFmEBC+FFDYgkGBcOixPiDEkBQeDX9upiZ9LzLvXPvfW0N3+Tkzb1zZs537pmZd86pSaINLAJeATYDq4BngflAJ3AXuA38DFwETgDfAdcrW5FURRqSvpXUVDU0/bjtVeyVVdwoabgioTwM+/kK7dYUd+tcYD/wJlBL9f0ADAGnvQt/A5rAbOBx7+oNwDZgXdphwJfA+8A/7bh1uaSR1KrvSzooaU0V93j9g368xYi3U8mtqyRdS000KKm7Iqm09Ph5LK55e6XILZc0agY3JfVLqk2RWJCan2/c2BiV9GQRubmSLphBdyXtmCZSaenz8weMePu55L4wyvcl7ZwhYkF2qvVa+tz229PaC5w0p7If+DR2lDOwAFiMu6QXAUuALqAH6PbPR4CPzJh+YJ85xS8Bp4AWcsPA8749BDS8chaeAfq84SVelnkS8woWcAFYa55rwADuygk8XnBU3SdspNzZU+COw2ofxzLm61HrNbNNEoln+5ZZyTfA5YLVTxT0x5DljcvebsBugAR4DNhhOj4rYaDZNrV8WLsN4NEE2AJ0+JcjXmYS/+a8t7ZnA1vqwMtGYaCkgTJx1j1gFPgF+BW4hTuZ8yNjBpk8LJvqwBrTebYkuVn+9zxwycvvwJ+4uO26aVsUkTtj2qvruPsn4FJJcnP876u4r1JlTJ5b0/a7E1pX8kdJQ8GtRXeaRTrkyoK1vzDBhdYB9yoYA7dxyyLEbTGS9hborONi/kBwDnCnhKGkWAVwm/s13N4bwrk0dpjsYu/UcclIINdFfiLyHPAIcI5y7j+Ai6ADhLu8b0TGdJn2rTpwBVjqX6wEfkwNeAL4Gtjqn68S39QAH6SIgXPnrIKxK037SoL7Iw54MaXcCXxviAE8jfuDz0MCfBjpr0f61pv2xQQXJgU0UsrvMPlVs5C1uTuI32Udkb7tpn0iAY4D4/7FWlrDmY2RiWDyMrZoEt9XefvV2m4CxxNgDDhqlN417bECcqMZ7wR8HBnzSc57a3cAuFEUz62LxGVHC2K+vSn9MUlv5OhmxnNWwWb0g5rMtt6WdFPSbSPnJS0oIIdcKvm6pF2SFubo1NSaLp4LfVapV9KEUXqvhPHpkH5jc0KmVBHLvpr6f7Ivm7+2ZF9p5ay8tW+GiFXOW9GDGf+4HpKMP8hDWysJ8pRaXSy54/6V2qsyHVLFKtNU63PHcPW5n3iwPrcCV5/bSn59bg/wd671kivv1fRWNnvL2K26Z6ZaE25UsVfk1jykq+krcIFoqKb/5V09pWr6fxe8qJOuPHXyAAAAAElFTkSuQmCC) no-repeat;
        mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAD/ElEQVRYhc2Yz29VRRTHP+/ySghFIApFDAY1rRAQ2BiFUIUYfjySSoiJ8S9wYTBqxYUbN7hxBbpSCRIXhgUrd7SFmEBC+FFDYgkGBcOixPiDEkBQeDX9upiZ9LzLvXPvfW0N3+Tkzb1zZs537pmZd86pSaINLAJeATYDq4BngflAJ3AXuA38DFwETgDfAdcrW5FURRqSvpXUVDU0/bjtVeyVVdwoabgioTwM+/kK7dYUd+tcYD/wJlBL9f0ADAGnvQt/A5rAbOBx7+oNwDZgXdphwJfA+8A/7bh1uaSR1KrvSzooaU0V93j9g368xYi3U8mtqyRdS000KKm7Iqm09Ph5LK55e6XILZc0agY3JfVLqk2RWJCan2/c2BiV9GQRubmSLphBdyXtmCZSaenz8weMePu55L4wyvcl7ZwhYkF2qvVa+tz229PaC5w0p7If+DR2lDOwAFiMu6QXAUuALqAH6PbPR4CPzJh+YJ85xS8Bp4AWcsPA8749BDS8chaeAfq84SVelnkS8woWcAFYa55rwADuygk8XnBU3SdspNzZU+COw2ofxzLm61HrNbNNEoln+5ZZyTfA5YLVTxT0x5DljcvebsBugAR4DNhhOj4rYaDZNrV8WLsN4NEE2AJ0+JcjXmYS/+a8t7ZnA1vqwMtGYaCkgTJx1j1gFPgF+BW4hTuZ8yNjBpk8LJvqwBrTebYkuVn+9zxwycvvwJ+4uO26aVsUkTtj2qvruPsn4FJJcnP876u4r1JlTJ5b0/a7E1pX8kdJQ8GtRXeaRTrkyoK1vzDBhdYB9yoYA7dxyyLEbTGS9hborONi/kBwDnCnhKGkWAVwm/s13N4bwrk0dpjsYu/UcclIINdFfiLyHPAIcI5y7j+Ai6ADhLu8b0TGdJn2rTpwBVjqX6wEfkwNeAL4Gtjqn68S39QAH6SIgXPnrIKxK037SoL7Iw54MaXcCXxviAE8jfuDz0MCfBjpr0f61pv2xQQXJgU0UsrvMPlVs5C1uTuI32Udkb7tpn0iAY4D4/7FWlrDmY2RiWDyMrZoEt9XefvV2m4CxxNgDDhqlN417bECcqMZ7wR8HBnzSc57a3cAuFEUz62LxGVHC2K+vSn9MUlv5OhmxnNWwWb0g5rMtt6WdFPSbSPnJS0oIIdcKvm6pF2SFubo1NSaLp4LfVapV9KEUXqvhPHpkH5jc0KmVBHLvpr6f7Ivm7+2ZF9p5ay8tW+GiFXOW9GDGf+4HpKMP8hDWysJ8pRaXSy54/6V2qsyHVLFKtNU63PHcPW5n3iwPrcCV5/bSn59bg/wd671kivv1fRWNnvL2K26Z6ZaE25UsVfk1jykq+krcIFoqKb/5V09pWr6fxe8qJOuPHXyAAAAAElFTkSuQmCC) no-repeat;
        -webkit-mask-size: 100%;
        mask-size: 100%;
        -webkit-mask-position: 100%;
        mask-position: center;
        width: 100%;
        height: 100%;
        transition: all .3s ease;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        transform: translateZ(0);`
    } else {
        maudio.pause();
        document.getElementById("nl-btn1").style = `        -webkit-mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEy0lEQVRYhbXYW4xeUxQH8N98RjXqlqhxzyBTFXpBXKMUqXbq9uIeFV4I0WBIPOEBT0KRoEjwoCFIihDGEHGpS5G0OurWeqAtopegBpkR42Gdk29/Z853m9F/8iXn22fvvf5nr7XX+u/dMTQ0ZByYijNxOo7E4dgDUzCE3/Et1uJdvI0t7RrpaJNcL67F2di5jXEjeA1L8cb/Te4UPIDj2iBUD5/hJnzQrGMzcrviflyNjsK7zzGAj4QLf8YwJmE/4eqTMR+zC2NH8Rhuxl/jIdeNVzAzaRvG03gQg42+qoCZuBFXZORzDOI8fN8OuSPFqhyYtA3geqxvg1QR0/CQWM0cm7L/XxY7V0om6BZBmxMbEcvfO0FisC6b52b8k7UdmNk7uNi5uHK7YiVmZP//xIV4fYKkynAunstsEi4+KbOJsSu3JCEGj+4gYvAqLhOeIeLyvrRDunJz8J6xu/JxEcx/t2BwT+wjkvRU7IsuEWs92f/ncXsypk8sCrGLT5WlmZTcp6p5bADLRW6bjNW4WMQMHCbc0pUZ3BcHZSR2a/IBg5iV/O9Av+om+RQnpOR6Vd03LFy7DkdnXzoNv+EqvIRnhEvGg7dwVqFtGr5QTTMLMJDH3HVJx2WqK7RarOYLwmXLVV0wXoyWtK3L7Oa4nli5vfGTaq2cjTUlEyzGvdgFm0VsjQdvqs1zOWaJqkN4b/8K5iXE1tQhRiTPufhhAsSo5rciUtuTMK8TpyUd+ptMvBLHYpWSpFnA39iA7/CjiNk+Ia3q4Q3VzTK3U23tXNnEIGwV+uxKET8dojY+ImJnS/bbbKyGa0bu4+T5qIrIPzm+boEckV7gAlEbuzPDv+J9fFVCLB9Tz61F+z0VtV/yS4vk8h23FseIvLifCPbbldfsYnIvQ2p/r4qQ1jlaqQIpJgn3LcQdGYE7Rc4sbppctzUiOZw8T+kUmj8nOBl/tECquDL/4i4Rs8tEqliF23CIcPGAcGlZnsuRar0/OsVhJCfXpf5BZAZ2xyfqu39AuPlZUSOfSt6NZh+xrQG5ruT5t4pajXZEyYADMqOD+FDsyAUNDGwSiqOIDuyk8YZI7a+vqJXbJxY6TxEHkrQWHipqYT1UcGuD950N3p2UPK+tCJmUo7fQ+Qbs32CysuDeWeNc1t3gXeqRdytCJeSCb5ZaOXNKg4kINxUxrHFc9QilU/yA1PYw3qqIjJ+q3RuT561NyG0oaRsVO7cehnCRCJej69jtx7Y8JSxNXixSjalG8qhfffIPlxDchkvFbl6d2fgI12TPiwrjGyrhXrEKi3G32ty2HmeIYt4IPRmZEbwjyhuRTx/MiBHC4ICER40SZuwZok/I9B2Jy/GE0IgUzhDpaqwQh5kc9+D8HUxuu9rU8pjkDqWVc+slypPqRNH2ufXPbNDGhOyLwsWtqIpW0JHN92JCbCPOSYmVkSOE4wJRhohlXyJ2Z09J/3YwLZtniao7N2X2xqSlMnLEpcoccVzLMV/otyfUqudWMBNPZvOlh5tBkejHXOIw8fu5N0Wu+sbY+7np4n7uLPXv525RcGU75HLMyUj+XzebfSI7NEQ9txaxAscLxfuyai1uFSPZuIXZPE2J0f6FdY7ibfp0IUTz2/TtwtUTuk3/DxwWSkf1S9ZlAAAAAElFTkSuQmCC) no-repeat;
        mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEy0lEQVRYhbXYW4xeUxQH8N98RjXqlqhxzyBTFXpBXKMUqXbq9uIeFV4I0WBIPOEBT0KRoEjwoCFIihDGEHGpS5G0OurWeqAtopegBpkR42Gdk29/Z853m9F/8iXn22fvvf5nr7XX+u/dMTQ0ZByYijNxOo7E4dgDUzCE3/Et1uJdvI0t7RrpaJNcL67F2di5jXEjeA1L8cb/Te4UPIDj2iBUD5/hJnzQrGMzcrviflyNjsK7zzGAj4QLf8YwJmE/4eqTMR+zC2NH8Rhuxl/jIdeNVzAzaRvG03gQg42+qoCZuBFXZORzDOI8fN8OuSPFqhyYtA3geqxvg1QR0/CQWM0cm7L/XxY7V0om6BZBmxMbEcvfO0FisC6b52b8k7UdmNk7uNi5uHK7YiVmZP//xIV4fYKkynAunstsEi4+KbOJsSu3JCEGj+4gYvAqLhOeIeLyvrRDunJz8J6xu/JxEcx/t2BwT+wjkvRU7IsuEWs92f/ncXsypk8sCrGLT5WlmZTcp6p5bADLRW6bjNW4WMQMHCbc0pUZ3BcHZSR2a/IBg5iV/O9Av+om+RQnpOR6Vd03LFy7DkdnXzoNv+EqvIRnhEvGg7dwVqFtGr5QTTMLMJDH3HVJx2WqK7RarOYLwmXLVV0wXoyWtK3L7Oa4nli5vfGTaq2cjTUlEyzGvdgFm0VsjQdvqs1zOWaJqkN4b/8K5iXE1tQhRiTPufhhAsSo5rciUtuTMK8TpyUd+ptMvBLHYpWSpFnA39iA7/CjiNk+Ia3q4Q3VzTK3U23tXNnEIGwV+uxKET8dojY+ImJnS/bbbKyGa0bu4+T5qIrIPzm+boEckV7gAlEbuzPDv+J9fFVCLB9Tz61F+z0VtV/yS4vk8h23FseIvLifCPbbldfsYnIvQ2p/r4qQ1jlaqQIpJgn3LcQdGYE7Rc4sbppctzUiOZw8T+kUmj8nOBl/tECquDL/4i4Rs8tEqliF23CIcPGAcGlZnsuRar0/OsVhJCfXpf5BZAZ2xyfqu39AuPlZUSOfSt6NZh+xrQG5ruT5t4pajXZEyYADMqOD+FDsyAUNDGwSiqOIDuyk8YZI7a+vqJXbJxY6TxEHkrQWHipqYT1UcGuD950N3p2UPK+tCJmUo7fQ+Qbs32CysuDeWeNc1t3gXeqRdytCJeSCb5ZaOXNKg4kINxUxrHFc9QilU/yA1PYw3qqIjJ+q3RuT561NyG0oaRsVO7cehnCRCJej69jtx7Y8JSxNXixSjalG8qhfffIPlxDchkvFbl6d2fgI12TPiwrjGyrhXrEKi3G32ty2HmeIYt4IPRmZEbwjyhuRTx/MiBHC4ICER40SZuwZok/I9B2Jy/GE0IgUzhDpaqwQh5kc9+D8HUxuu9rU8pjkDqWVc+slypPqRNH2ufXPbNDGhOyLwsWtqIpW0JHN92JCbCPOSYmVkSOE4wJRhohlXyJ2Z09J/3YwLZtniao7N2X2xqSlMnLEpcoccVzLMV/otyfUqudWMBNPZvOlh5tBkejHXOIw8fu5N0Wu+sbY+7np4n7uLPXv525RcGU75HLMyUj+XzebfSI7NEQ9txaxAscLxfuyai1uFSPZuIXZPE2J0f6FdY7ibfp0IUTz2/TtwtUTuk3/DxwWSkf1S9ZlAAAAAElFTkSuQmCC) no-repeat;
        -webkit-mask-size: 100%;
        mask-size: 100%;
        -webkit-mask-position: 100%;
        mask-position: center;
        width: 100%;
        height: 100%;
        transition: all .3s ease;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        transform: translateZ(0); `
    }
}

maudio.addEventListener("ended", function () {
    this.currentTime = 0;
    this.play();
});

function videobg() {
    if (window.innerWidth < 601) {
        document.querySelector(".pc-bg").src = "./assets/output.mp4"
    }
    if (window.innerWidth >= 601) {
        document.querySelector(".pc-bg").src = "./assets/output.webm"
    }
}

videobg()
window.addEventListener('resize', () => {
    videobg()
});
