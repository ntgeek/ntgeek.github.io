/*添加图片懒加载*/
const imgs = document.getElementsByTagName('img');
function lazyLoad(imgs) {
    const clientH = document.documentElement.clientHeight;
    const clientT = document.documentElement.scrollTop || document.body.scrollTop;
    for (let i = 0; i < imgs.length; i++) {
        if (clientH + clientT > imgs[i].offsetTop && !imgs[i].src) {
            imgs[i].src = imgs[i].dataset.src;
        }
    }
};
lazyLoad(imgs);
window.onscroll = () => lazyLoad(imgs);
// 设置节流函数
function throttle(fn, delay) {
    let timer = null;
    return () => {
        if (timer) {
            return;
        };
        timer = setTimeout(() => {
            fn(imgs);
            timer = null;
        }, delay)
    }
}
// 监听滚动事件，加载后面的图片；
window.onscroll = throttle(lazyLoad, 500);

/*问答 */
var ul = document.getElementById("QA-ul");
var ulChildren = ul.children;
for (var i = 0; i < ulChildren.length; i++) {
    ulChildren[i].onclick = function (event) {
        event = event || window.event;
        if (event.target.className == "QA-a") {
            if (this.children[1].style.display == "none") {
                this.children[1].style.display = "block";
            } else {
                this.children[1].style.display = "none";
            }
        };
    };
}

/*问答 */
var ul = document.getElementById("QA-ul");
var ulChildren = ul.children;
for (var i = 0; i < ulChildren.length; i++) {
    ulChildren[i].onclick = function (event) {
        event = event || window.event;
        if (event.target.className == "QA-a") {
            if (this.children[1].style.display == "none") {
                this.children[1].style.display = "block";
            } else {
                this.children[1].style.display = "none";
            }
        };
    };
};
/*复制邮箱链接 */
var btn = document.getElementById("email");
var content = "newthread_geek@outlook.com";
btn.onclick = function copyToClip() {
    var aux = document.createElement("input");
    aux.setAttribute("value", content);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    alert("Geek的邮箱已经复制到剪贴板了！♡(*´∀｀*)人(*´∀｀*)♡");
};


/**旋转木马**/
if (screen.width > 1000) {
    var json = [{ //  0
        width: 25,
        top: 7,
        left: 7,
        opacity: 0.7,
        zIndex: 2
    }, { // 1
        width: 25,
        top: 7,
        left: 18,
        opacity: 0.9,
        zIndex: 3
    }, { // 2
        top: 7,
        width: 26,
        left: 36,
        opacity: 1,
        zIndex: 4
    }, { // 3
        width: 25,
        top: 7,
        left: 55,
        opacity: 0.9,
        zIndex: 3
    }, { //4
        width: 25,
        top: 7,
        left: 68,
        opacity: 0.7,
        zIndex: 2
    }];
    //根据json的内容把图片缓动到相应位置，同时缓动
    var liArr = document.getElementsByClassName('aboutslide');
    var next = document.getElementById('next');
    var prev = document.getElementById('prev');
    function move() {
        for (var i = 0; i < liArr.length; i++) {
            animation(liArr[i], json[i]);
        }
    };
    move();
    next.onclick = function () {
        var last = json.pop();
        json.unshift(last);
        move();
    };
    prev.onclick = function () {
        var first = json.shift();
        json.push(first);
        move();
    };

    function animation(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            //json里面有几个属性就要执行几次
            var target = 0; //记录目标位置
            var current = 0; //记录当前位置
            var speed = 0; //记录速度
            for (var key in json) {
                if (key == 'opacity') {
                    target = Math.round(json['opacity'] * 10) //0-100
                    current = getStyle(obj, 'opacity') * 2 //0-100                  
                } else {
                    target = parseInt(json[key]);
                    current = parseInt(getStyle(obj, key));
                };
                // speed = (target - current) / 10;
                speed = (target - current) / 1;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                current = current + speed; //0-100
                if (key == 'opacity') {
                    // obj.style.opacity = current / 100;
                    obj.style.opacity = current / 10;
                    obj.style.filter = "alpha(opacity=" + current + ")";
                } else if (key == "zIndex") {
                    obj.style.zIndex = json['zIndex'];
                } else {
                    obj.style[key] = current + "%";
                };

                if (current != target) {
                    flag = false
                };
            };
            if (flag) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                };
            };

        }, 20)
    }

    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr]
        } else {
            return obj.currentStyle[attr];
        };
    };

    /*模态框*/
    const showModal1 = document.getElementById("card1");
    const showModal2 = document.getElementById("card2");
    const showModal3 = document.getElementById("card3");
    const showModal4 = document.getElementById("card4");
    const close1 = document.getElementById("close1");
    const close2 = document.getElementById("close2");
    const close3 = document.getElementById("close3");
    const close4 = document.getElementById("close4");
    const modal1 = document.getElementById("modal1");
    const modal2 = document.getElementById("modal2");
    const modal3 = document.getElementById("modal3");
    const modal4 = document.getElementById("modal4");
    showModal1.addEventListener("click", () => {
        modal1.classList.toggle("show");
    });
    close1.addEventListener('click', () => {
        modal1.classList.toggle("show");
    });

    showModal2.addEventListener("click", () => {
        modal2.classList.toggle("show");
    });
    close2.addEventListener('click', () => {
        modal2.classList.toggle("show");
    });

    showModal3.addEventListener("click", () => {
        modal3.classList.toggle("show");
    });
    close3.addEventListener('click', () => {
        modal3.classList.toggle("show");
    });

    showModal4.addEventListener("click", () => {
        modal4.classList.toggle("show");
    });
    close4.addEventListener('click', () => {
        modal4.classList.toggle("show");
    });

    /*链接跳转*/
    const pointer2 = document.getElementById("pointer2");
    const homepage = document.getElementById("homepage");
    pointer2.onclick = function () {
        homepage.scrollIntoView({ behavior: "smooth" });
    };
    const intro = document.getElementById("introplace");
    const aintro = document.getElementById("introduction");
    aintro.onclick = function () {
        intro.scrollIntoView({ behavior: "smooth" });
    };
    const about = document.getElementById("aboutplace");
    const aabout = document.getElementById("about");
    aabout.onclick = function () {
        about.scrollIntoView({ behavior: "smooth" });
    };
    const contact = document.getElementById("contactplace");
    const acontact = document.getElementById("contact");
    acontact.onclick = function () {
        contact.scrollIntoView({ behavior: "smooth" });
    };
    const qa = document.getElementById("qaplace");
    const aqa = document.getElementById("qa");
    aqa.onclick = function () {
        qa.scrollIntoView({ behavior: "smooth" });
    };
    /*屋顶*/
    window.addEventListener('scroll', (move) => {
        const evt = move || window.event
        evt.preventDefault()
        let homeinner = document.getElementById("homeinner");
        let scrollTop = document.documentElement.scrollTop;
        let homeouter = document.getElementById("homeouter");
        if (scrollTop >= document.documentElement.scrollHeight / 13 &&
            scrollTop < document.documentElement.scrollHeight * 13 / 13) {
            document.getElementById("homeouter").classList.add("topOfTheMiddle3")
        }
        if (scrollTop == 0 || scrollTop >= document.documentElement.scrollHeight * 2.5 / 13) {
            let dom = document.getElementById("homeouter")
            dom.classList.remove("topOfTheMiddle3")
        }
    })
    const pointer = document.getElementById("pointer")
    // 监听鼠标滚轮事件
    window.addEventListener('scroll', () => {
        // 获取网页整体高度
        const pageHeight = document.documentElement.scrollHeight;

        // 获取滚动条当前位置
        const scrollPosition = window.scrollY;

        // 判断是否滚动到指定位置（800px之后）
        if (scrollPosition >= 800 && scrollPosition < pageHeight) {
            // 设置div的样式为可见
            pointer.style.display = 'block';
        } else {
            // 设置div的样式为不可见
            pointer.style.display = 'none';
        }
    });
};
console.log("要保持好奇心，虽然不一定每次都会有满意的结果。");
