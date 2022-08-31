fetch('./json/json.json')
.then(function (response) {
    return response.json();
})
.then(function (menus) {
    //時程表
    var button = document.querySelectorAll('h2');
    button.forEach(function (btn) {
        btn.addEventListener(
            'click',
            function ScheduleVideo() {
                let targetname = event.target.textContent;
                const searchCategory = menus.filter(function (menuItems) {
                    if (menuItems.title == targetname) {
                        return menuItems;
                    }
                });
                var myWindow = window.open('', 'MsgWindow', 'width=1200,height=800');
                myWindow.document.write(
                    `<iframe width="1150" height="700" src="${searchCategory[0].src}?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
                );
            },
            false
        );
    });
    //圖片瀏覽
    const sectionCenter = document.querySelector('.section-center');
    function displayMenuItems(menuItems) {
        let displayMenu = menuItems.map(function (item) {
            return `
                        <article class="menu-item col">
        <div class="img-heart"><img src="${item.img}" class="photo" alt="${item.title}" id="${item.id}">
        <i class="fa-solid fa-heart btncolor ${item.btn}" onclick="loveclick(${item.id})"></i></div>
              <div class="item-info">
                <header>
                  <h1>${item.title}</h1>
                </header>
              </div>
            </article>`;
        });
        displayMenu = displayMenu.join('');
        sectionCenter.innerHTML = displayMenu;
    }
    displayMenuItems(menus);
    // 按鈕
    const container = document.querySelector('.btn-container');
    function displayMenuButtons() {
        const categores = menus.reduce(
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
                const menuCategory = menus.filter(function (menuItems) {
                    if (menuItems.category === category) {
                        //判斷是否為被選取的類別
                        return menuItems; //回傳所需物件至menuCategory陣列中
                    }
                });
                if (category === '全部') {
                    displayMenuItems(menus);
                    lovecolor();
                } else {
                    displayMenuItems(menuCategory);
                    lovecolor();
                }
            });
        });
    }
    displayMenuButtons();
    // 搜尋功能
    let search_btn = document.querySelector('.search-btn');
    search_btn.addEventListener('click', function () {
        let search = document.querySelector('#search').value.trim();
        const searchCategory = menus.filter(function (menuItems) {
            if (menuItems.title.includes(search)) {
                return menuItems;
            }
        });
        displayMenuItems(searchCategory);
        lovecolor();
    });

    // 燈箱
    $(document.body).on('click', '.photo', function () {
        let number = this.id;
        var modal = document.getElementById('myModal');
        var modalImg = document.getElementById('img01');
        const pictureCategory = menus.filter(function (menuItems) {
            if (menuItems.id == number) {
                return menuItems;
            }
        });
          if (pictureCategory[0] !== undefined) {
              var modalImg = document.getElementById('img01');
              let modalContent = pictureCategory[0].content;
              modal.style.display = 'block';
              modalImg.src = pictureCategory[0].img;
              document.querySelector('#caption').innerHTML = modalContent;
              var span = document.getElementsByClassName('close')[0];
              span.onclick = function () {
                  modal.style.display = 'none';
              };
          }
        showLow();
    });
    // 燈箱文字
    var text;
    function showLow() {
        text = document.getElementById('caption').innerHTML;
        document.getElementById('caption').innerHTML = `<div id="subText"></div><a id="btn"></a>`;
        document.getElementById('subText').style.float = 'left';
        document.getElementById('btn').style.float = 'left';
        if (text.length > 9) {
            document.getElementById('subText').innerHTML = text.substring(0, 50);
            document.getElementById('btn').innerHTML = '...顯示全部';
        } else {
            document.getElementById('subText').innerHTML = text;
            document.getElementById('btn').innerHTML = '';
        }
    }
    //燈箱文字
    $(document.body).on('click', '#btn', function () {
        var t = document.getElementById('btn');
        var tt = document.getElementById('subText');
        if (t.innerHTML == '...顯示全部') {
            tt.innerHTML = text;
            t.innerHTML = '收起';
        } else {
            tt.innerHTML = text.substring(0, 50);
            t.innerHTML = '...顯示全部';
        }
    });
    function lovecolor() {
        for (let i = 0; i < menus.length; i++) {
            let btn = 'btn' + i;
            let dom = document.querySelector('.' + btn);
            if (localStorage.getItem(btn) !== null && dom !== null) {
                document.querySelector('.' + btn).style.color = 'red';
            }
        }
    }lovecolor();
})
.catch((err) => {
console.log('錯誤:', err);
})
//menu
$(document).ready(function () {
    $('.burgar_btn').click(function () {
        $('#menu').slideToggle('slow');
    });
});
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
    date.getDay();
    if (date.getDay() == 1) {
        week = weekarray[0];
    } else if (date.getDay() == 0) {
        week = weekarray[6];
    } else {
        week = weekarray[date.getDay() - 1];
    }
    let day = document.querySelector('.' + week);
    day.style.backgroundColor = 'rgba(42, 134, 239, 0.63)';
    day.style.color = 'white';
}
Days();
// 分類toggle
$(document).ready(function () {
    $('.gateclick').click(function () {
        $('.img_nav_content_outside').slideToggle('slow');
    });
});
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


// 登入
function Showname() {
    if (localStorage.getItem('root') !== null) {
        document.querySelector('.rename').textContent = localStorage.getItem('root') + '/Logout';
        document.querySelector('.renamephone').textContent = localStorage.getItem('root') + '/Logout';
    } else {
        document.querySelector('.rename').textContent = 'Login';
        document.querySelector('.renamephone').textContent = 'Login';
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
function Favorite() {
    if (localStorage.getItem('root') !== null) {
        window.location.href = 'myfavorite.html';
    } else {
        window.location.href = 'storge.html';
    }
}
window.addEventListener('DOMContentLoaded', function () {
    Showname();
});
