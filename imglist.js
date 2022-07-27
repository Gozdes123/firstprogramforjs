//圖片瀏覽
const menu = [
    {
        title: '間諜家家酒',
        category: '奇幻',
        img: './img/anime/img0.jpg',
    },
    {
        title: '輝夜姬想讓人告白',
        category: '愛情',
        img: './img/anime/img1.jpg',
    },
    {

        title: '新石記',
        category: '奇幻',
        img: './img/anime/img2.jpg',
    },
    {

        title: '炎炎消防隊',
        category: '熱血',
        img: './img/anime/img3.jpg',
    },
    {

        title: '歡迎來到實力至上主義的教室',
        category: '社會寫實',
        img: './img/anime/img4.jpg',
    },
    {

        title: '杜鵑的婚約',
        category: '幽默搞笑',
        img: './img/anime/img5.jpg',
    },
    {

        title: '盾之勇者成名錄',
        category: '奇幻',
        img: './img/anime/img6.jpg',
    },
    {

        title: '白領羽球部',
        category: '運動',
        img: './img/anime/img7.jpg',
    },
    {

        title: '國王排名',
        category: '奇幻',
        img: './img/anime/img8.jpg',
    },
    {

        title: '進擊的巨人',
        category: '驚悚',
        img: './img/anime/img9.jpg',
    },
    {

        title: '86不存在的戰區',
        category: '社會寫實',
        img: './img/anime/img10.jpg',
    },
    {

        title: '無職轉生',
        category: '冒險',
        img: './img/anime/img11.jpg',
    },
    {

        title: '咒術迴戰',
        category: '熱血',
        img: './img/anime/img12.jpg',
    },
    {

        title: 'Lycoris Recoil 莉可麗絲',
        category: '愛情',
        img: './img/anime/img13.jpg',
    },
    {

        title: '相合之物',
        category: '幽默搞笑',
        img: './img/anime/img14.jpg',
    },
    {

        title: '魔法科高中的劣等生追憶篇',
        category: '奇幻',
        img: './img/anime/img15.jpg',
    },
    {
        title: '鬼滅之刃遊郭篇',
        category: '熱血',
        img: './img/anime/img16.jpg',
    },
    {

        title: '宿命迴響',
        category: '奇幻',
        img: './img/anime/img17.jpg',
    },

];
const container = document.querySelector('.btn-container');
const sectionCenter = document.querySelector('.section-center');
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `
        <article class="menu-item col-2">
              <img src="${item.img}" class="photo" alt=${item.title}">
              <div class="item-info">
                <header>
                  <h1>${item.title}</h1>
                  <i class="fa-solid fa-heart"></i>
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
            } else {
                displayMenuItems(menuCategory);
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
}
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu); //預設顯示所有內容
    displayMenuButtons(); //顯示按鈕與開啟其功能
});

