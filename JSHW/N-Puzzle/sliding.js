var context = document.getElementById('puzzle').getContext('2d');

var img = new Image();

img.src = './defa.jpg';

img.addEventListener('load', drawTiles, false);

//load事件偵聽，即圖片加載完成事件

var boardSize = document.getElementById('puzzle').width;

//獲取畫板（畫布）的寬度

var tileCount = document.getElementById('scale').value;

//獲取滑塊的值

var tileSize = boardSize / tileCount;

//計算出拼塊的大小寬度

var context = document.getElementById('puzzle').getContext('2d');

var img = new Image();

img.src = 'dimetrodon.jpg';

img.addEventListener('load', drawTiles, false);

//load事件偵聽，即圖片加載完成事件

var boardSize = document.getElementById('puzzle').width;

//獲取畫板（畫布）的寬度

var tileCount = document.getElementById('scale').value;

//獲取滑塊的值

var tileSize = boardSize / tileCount;

var clickLoc = new Object();

clickLoc.x = 0;

clickLoc.y = 0;

var emptyLoc = new Object();

emptyLoc.x = 0;

emptyLoc.y = 0;

var solved = false;

//拼圖是否完成，false為未完成

var boardParts = new Object();

initBoard();

//初始化拼塊，並隨機排列

function initBoard() {

    boardParts = new Array(tileCount * tileCount);

    for (vari = 0; i < tileCount * tileCount; i++) {

        boardParts[i] = i;

    }

    shift(); //拼塊的隨機排列

}

function sortNumber(a, b) {//隨機排序函數

    returnMath.random() > 0.5 ? -1 : 1;

}

function shift() { //拼塊的隨機排列

    boardParts.sort(sortNumber);

    emptyLoc.x = 0;

    emptyLoc.y = 0;

    solved = false;

}

drawImage(image, x, y, width, height);

//繪製所有拼塊

function drawTiles() {

    context.clearRect(0, 0, boardSize, boardSize);

    for (vari = 0; i < tileCount; i++) {

        for (var j = 0; j < tileCount; j++) {

            var n = boardParts[i * tileCount + j];

            //計算出編號為n的拼塊在原圖的位置坐標（行列號）

            var x = parseInt(n / tileCount);

            //丟棄小數部分, 保留整數部分

            var y = n % tileCount;

            console.log(x + ":" + Math.floor(n / tileCount) + ":" + y);

            if (i != emptyLoc.x || j != emptyLoc.y || solved == true) {

                //不是空白拼圖的位置且遊戲未結束

                //或者if( !(i==emptyLoc.x&&j== emptyLoc.y&&solved==false))可能更容易明白

                //將編號為n的拼塊顯示在（i * tileSize, j * tileSize）處

                context.drawImage(img, x * tileSize, y * tileSize, tileSize, tileSize,

                    i * tileSize, j * tileSize, tileSize, tileSize);

            }

        }

    }

}

document.getElementById('scale').onchange = function () {

    tileCount = this.value;

    tileSize = boardSize / tileCount;//計算拼塊寬度大小

    initBoard();//重新初始化拼塊，並隨機排列

    drawTiles();//顯示各個拼塊

};

document.getElementById('puzzle').onmousemove = function (e) {

    clickLoc.x = Math.floor((e.pageX - this.offsetLeft) / tileSize);

    clickLoc.y = Math.floor((e.pageY - this.offsetTop) / tileSize);

};

document.getElementById('puzzle').onclick = function () {

    if (distance(clickLoc.x, clickLoc.y, emptyLoc.x, emptyLoc.y) == 1) {

        slideTile(emptyLoc, clickLoc);//交換被單擊的拼塊與空塊位置

        drawTiles();//顯示各個拼塊

    }

    if (solved) {//如果成功

        setTimeout(function () { alert("你成功了!"); }, 500);

    }

};

function distance(x1, y1, x2, y2) {

    returnMath.abs(x1 - x2) + Math.abs(y1 - y2);

}

setTimeout(function () { alert(" 你成功了 !"); }, 500);

function slideTile(emptyLoc, clickLoc) {

    if (!solved) {

        vart;

        t = boardParts[emptyLoc.x * tileCount + emptyLoc.y];

        boardParts[emptyLoc.x * tileCount + emptyLoc.y] = boardParts[clickLoc.x * tileCount + clickLoc.y];

        boardParts[clickLoc.x * tileCount + clickLoc.y] = t;

        emptyLoc.x = clickLoc.x; //emptyLoc重新記錄空白塊位置

        emptyLoc.y = clickLoc.y;

        checkSolved();//檢查是否成功

    }

}
function checkSolved() {

    var flag = true;

    for (vari = 0; i < tileCount * tileCount; i++) {

        if (boardParts[i] != i) //判斷元素排列順序

            flag = false;

    }

    solved = flag;

}

