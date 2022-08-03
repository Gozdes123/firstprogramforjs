const menu = [
    {
        id: 0,
        title: '間諜家家酒',
        category: '奇幻',
        img: 'img/anime/img0.jpg',
        btn: 'btn0',
        src: 'https://www.youtube.com/embed/l1uINfUshjc',
    },
    {
        id: 1,
        title: '輝夜姬想讓人告白',
        category: '愛情',
        img: 'img/anime/img1.jpg',
        btn: 'btn1',
        src: 'https://www.youtube.com/embed/1SNeGbYaZkw',
    },
    {
        id: 2,
        title: '新石記',
        category: '奇幻',
        img: 'img/anime/img2.jpg',
        btn: 'btn2',
        src: 'https://www.youtube.com/embed/oStI21bhOEA',
    },
    {
        id: 3,
        title: '炎炎消防隊',
        category: '熱血',
        img: 'img/anime/img3.jpg',
        btn: 'btn3',
        src: 'https://www.youtube.com/embed/fwtm_DVGwUQ',
    },
    {
        id: 4,
        title: '歡迎來到實力至上主義的教室',
        category: '社會寫實',
        img: 'img/anime/img4.jpg',
        btn: 'btn4',
        src: 'https://www.youtube.com/embed/oQBdbfjHvjM',
    },
    {
        id: 5,
        title: '杜鵑的婚約',
        category: '幽默搞笑',
        img: 'img/anime/img5.jpg',
        btn: 'btn5',
        src: 'https://www.youtube.com/embed/nLkXDK0WjV0',
    },
    {
        id: 6,
        title: '盾之勇者成名錄',
        category: '奇幻',
        img: 'img/anime/img6.jpg',
        btn: 'btn6',
        src: 'https://www.youtube.com/embed/VxNNQlJkOjU',
    },
    {
        id: 7,
        title: '白領羽球部',
        category: '運動',
        img: 'img/anime/img7.jpg',
        btn: 'btn7',
        src: 'https://www.youtube.com/embed/cBqbxUmI3Rc',
    },
    {
        id: 8,
        title: '國王排名',
        category: '奇幻',
        img: 'img/anime/img8.jpg',
        btn: 'btn8',
        src: 'https://www.youtube.com/embed/P_dPJBjqguo',
    },
    {
        id: 9,
        title: '進擊的巨人',
        category: '驚悚',
        img: 'img/anime/img9.jpg',
        btn: 'btn9',
        src: 'https://www.youtube.com/embed/_WwIAUXZa7k',
    },
    {
        id: 10,
        title: '86不存在的戰區',
        category: '社會寫實',
        img: 'img/anime/img10.jpg',
        btn: 'btn10',
        src: 'https://www.youtube.com/embed/DxgEqj9oTWY',
    },
    {
        id: 11,
        title: '無職轉生',
        category: '冒險',
        img: 'img/anime/img11.jpg',
        btn: 'btn11',
        src: 'https://www.youtube.com/embed/IrT9ZnXW3-Y',
    },
    {
        id: 12,
        title: '咒術迴戰',
        category: '熱血',
        img: 'img/anime/img12.jpg',
        btn: 'btn12',
        src: 'https://www.youtube.com/embed/QH--l_kJ2lE',
    },
    {
        id: 13,
        title: 'Lycoris Recoil 莉可麗絲',
        category: '愛情',
        img: 'img/anime/img13.jpg',
        btn: 'btn13',
        src: 'https://www.youtube.com/embed/uHwCrkoYh3w',
    },
    {
        id: 14,
        title: '相合之物',
        category: '幽默搞笑',
        img: 'img/anime/img14.jpg',
        btn: 'btn14',
        src: 'https://www.youtube.com/embed/5876SRv2rWM',
    },
    {
        id: 15,
        title: '魔法科高中的劣等生追憶篇',
        category: '奇幻',
        img: 'img/anime/img15.jpg',
        btn: 'btn15',
        src: 'https://www.youtube.com/embed/_C_jznWcHuA',
    },
    {
        id: 16,
        title: '鬼滅之刃遊郭篇',
        category: '熱血',
        img: 'img/anime/img16.jpg',
        btn: 'btn16',
        src: 'https://www.youtube.com/embed/teStYG1phuA',
    },
    {
        id: 17,
        title: '宿命迴響',
        category: '奇幻',
        img: 'img/anime/img17.jpg',
        btn: 'btn17',
        src: 'https://www.youtube.com/embed/VuQPngzh5f8',
    },
];
function ToggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display == '' || menu.style.display == 'block') {
        menu.style.display = 'none';
    } else menu.style.display = 'block';
}
//  輪播圖片
let index = 0;
let ImageCount = document.querySelectorAll('.carousel .container1 img').length;
const bottom = document.querySelector('.carousel .bottom');
for (let i = 0; i < ImageCount; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    indicator.id = 'num' + i;
    indicator.onclick = () => SetIndex(i);
    bottom.append(indicator);
}
// 自動輪播
function creatAuto() {
    return setInterval(() => {
        index++;
        refresh();
    }, 5000);
}
function refresh() {
    let orange = document.querySelectorAll('.indicator');
    if (index < 0) {
        index = ImageCount - 1;
    } else if (index >= ImageCount) {
        index = 0;
    }
    let ini = 'num' + index;
    let carousel = document.querySelector('.carousel');
    let width = getComputedStyle(carousel).width;
    width = Number(width.slice(0, -2));
    carousel.querySelector('.container1').style.left = index * width * -1 + 'px';
    for (let k = 0; k < ImageCount; k++) {
        orange[k].style.opacity = 0.3;
    }
    document.getElementById(ini).style.opacity = 1;
}
function LeftShift() {
    index--;
    refresh();
}
function RightShift() {
    index++;
    refresh();
}
function SetIndex(idx) {
    index = idx;
    refresh();
}
let autoTimer = creatAuto();
let refreshWrapper = func => {
    return function (...args) {
        let result = func(...args);
        autoTimer;
        refresh();
    };
};
refresh();
// 顯示天數
let date = new Date();
let weekarray = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'];
function Days() {
    let week;
    if (date.getDay() == 1) {
        week = weekarray[0];
    } else {
        week = weekarray[date.getDay() - 1];
    }
    let day = document.querySelector('.' + week);
    day.style.backgroundColor = 'black';
    day.style.color = 'white';
}
Days();
// 分類toggle
$(document).ready(function () {
    $('.gateclick').click(function () {
        $('.img_nav_content_outside').slideToggle('slow');
    });
});
// 時程表
function ScheduleVideo() {
    let targetname = event.target.textContent;
    const searchCategory = menu.filter(function (menuItems) {
        if (menuItems.title == targetname) {
            return menuItems;
        }
    });
    var myWindow = window.open('', 'MsgWindow', 'width=1200,height=800');
    myWindow.document.write(
        `<iframe width="1150" height="700" src="${searchCategory[0].src}?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
}
//圖片瀏覽
const container = document.querySelector('.btn-container');
const sectionCenter = document.querySelector('.section-center');
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `
        <article class="menu-item col">
              <img src="${item.img}" class="photo" alt=${item.title}">
              <div class="item-info">
                <header>
                  <h1>${item.title}</h1>
                  <i class="fa-solid fa-heart btncolor ${item.btn}" onclick="loveclick(${item.id})"></i>
                </header>
              </div>
            </article>`;
    });
    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
}
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
});
// 按鈕
function displayMenuButtons() {
    const categores = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ['全部']
    );
    const categoryBtns = categores
        .map(function (category) {
            return `<li>
<input type="button" class="filter-btn" value="${category}" name="按鈕名稱" data-id="${category}" style="width:150px;height:50px;"></li>`;
        })
        .join('');
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll('.filter-btn');
    filterBtns.forEach(function (btn) {
        //選擇每個按鈕
        // click事件
        btn.addEventListener('click', function (e) {
            //新增點擊事件
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItems) {
                if (menuItems.category === category) {
                    //判斷是否為被選取的類別
                    return menuItems; //回傳所需物件至menuCategory陣列中
                }
            });
            if (category === '全部') {
                displayMenuItems(menu);
                Lightbox();
                lovecolor();
            } else {
                displayMenuItems(menuCategory);
                Lightbox();
                lovecolor();
            }
        });
    });
}
// 搜尋功能
function clicked() {
    let search = document.querySelector('#search').value;
    const searchCategory = menu.filter(function (menuItems) {
        if (menuItems.title.includes(search)) {
            //判斷是否為被選取的類別
            return menuItems; //回傳所需物件至menuCategory陣列中
        }
    });
    displayMenuItems(searchCategory);
    Lightbox();
    lovecolor();
}
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu); //預設顯示所有內容
    displayMenuButtons(); //顯示按鈕與開啟其功能
});

//圖片燈箱
function Lightbox() {
    var modal = document.getElementById('myModal');
    var img = document.querySelectorAll('article img');
    for (let j = 0; j < img.length; j++) {
        var modalImg = document.getElementById('img01');
        img[j].onclick = function () {
            modal.style.display = 'block';
            modalImg.src = this.src;
            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName('close')[0];
            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = 'none';
            };
        };
    }
}
// 我的最愛
function loveclick(btnlight) {
    let btn = 'btn' + btnlight;
    let btnstyle = document.querySelector('.' + btn);
    if (btnstyle.style.color == 'white' || btnstyle.style.color == '') {
        btnstyle.style.color = 'red';
        localStorage.setItem('btn' + btnlight, 'btn' + btnlight);
    } else {
        btnstyle.style.color = 'white';
        localStorage.removeItem('btn' + btnlight);
    }
}
function lovecolor() {
    for (let i = 0; i < menu.length; i++) {
        let btn = 'btn' + i;
        let dom = document.querySelector('.' + btn);
        if (localStorage.getItem(btn) !== null && dom !== null) {
            document.querySelector('.' + btn).style.color = 'red';
        }
    }
}
// 登入
function Showname() {
    if (localStorage.getItem('root') !== null) {
        document.querySelector('.rename').textContent = localStorage.getItem('root') + '/Logout';
    } else {
        document.querySelector('.rename').textContent = 'Login';
    }
}
function Login() {
    if (localStorage.getItem('root') !== null) {
        localStorage.clear();
        document.querySelector('.rename').textContent = 'Login';
    } else {
        window.location.href = 'storge.html';
    }
}

window.addEventListener('DOMContentLoaded', function () {
    Lightbox();
    ToggleMenu();
    Showname();
    lovecolor();
});
