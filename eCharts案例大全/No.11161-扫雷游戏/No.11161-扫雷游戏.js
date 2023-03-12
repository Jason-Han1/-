/**
 扫雷区域 x * y，雷数 mines
 sizeX = 9;
 sizeY = 9;
 mines = 10;
*/

// 定义扫雷区域和雷数
conf = {
    'sizeX': 10,
    'sizeY': 10,
    'mines': 20
};

// 剩余地雷数（未标记的地雷数）
minesLeft = conf.mines;

// 剩余待翻开砖块数
bricksLeft = conf.sizeX * conf.sizeY - conf.mines;

// 游戏是否结束（胜利/失败）
var flag = 0;

/** 随机生成地雷数组函数
    生成二维数组地雷数据，格式为 res[x][y] = value ，x、y 代表位置，value 含义如下：
    value:  10-18   代表周围的地雷数为 0-8（未翻开），
            0-8     代表周围地雷数为 0-8（已翻开）
            20-28   代表周围的地雷数为 0-8（已标记），
            
            19      代表此处有地雷（未翻开）
            9       代表此处有地雷（已翻开）
            29      代表此处有地雷（已标记）
            
    备注：为了省事，就用了一个变量的不同取值表示所有情况
*/
function generateMinesData(sizeX, sizeY, mines) {
    var size = sizeX * sizeY;
    var numList = [];
    var minesList = [];
    var res = [];
    
    // 准备一个 0 到 sizeX * sizeY - 1 的自然数列表（即所有砖块的顺序编号）
    for (var k = 0; k < size; k++) {
        numList.push(k);
    }
    
    // 从 numList 自然数列表中抽地雷
    for (var m = 0; m < mines; m++) {

        // 从 numList 中随机抽取一个元素，通过 splice 将其删除，并存入 minesList
        minesList.push(numList.splice(Math.floor(Math.random() * numList.length), 1)[0]);
    }

    // 生成二维数组地雷数据，格式为 res[x][y] = value 先全部置 10
    for (var i = 0; i < sizeX; i++) {
        res[i] = [];
        for (var j = 0; j < sizeY; j++) {
            res[i].push(10);
        }
    }

    // 遍历地雷列表，更新二维数组地雷数据，标记地雷 + 更新地雷周围的数字（砖块的附近地雷数）
    for (var n = 0; n < minesList.length; n++) {

        // 地雷顺序号换算 x,y 坐标
        x = Math.floor(minesList[n] / sizeX);
        y = minesList[n] % sizeY;

        // 标记地雷
        res[x][y] = 19;

        // 雷周围砖块数字加 1
        typeof(res[x][y + 1]) != 'undefined' && (res[x][y + 1] != 19) && (res[x][y + 1] += 1);
        typeof(res[x][y - 1]) != 'undefined' && (res[x][y - 1] != 19) && (res[x][y - 1] += 1);

        if (typeof(res[x + 1]) != 'undefined') {
            typeof(res[x + 1][y]) != 'undefined' && (res[x + 1][y] != 19) && (res[x + 1][y] += 1);
            typeof(res[x + 1][y + 1]) != 'undefined' && (res[x + 1][y + 1] != 19) && (res[x + 1][y + 1] += 1);
            typeof(res[x + 1][y - 1]) != 'undefined' && (res[x + 1][y - 1] != 19) && (res[x + 1][y - 1] += 1);

        }

        if (typeof(res[x - 1]) != 'undefined') {
            typeof(res[x - 1][y]) != 'undefined' && (res[x - 1][y] != 19) && (res[x - 1][y] += 1);
            typeof(res[x - 1][y + 1]) != 'undefined' && (res[x - 1][y + 1] != 19) && (res[x - 1][y + 1] += 1);
            typeof(res[x - 1][y - 1]) != 'undefined' && (res[x - 1][y - 1] != 19) && (res[x - 1][y - 1] += 1);
        }


        /** 最开始通过 sizeX 和 sizeY 判断，后来换掉了……
        y - 1 >= 0 && (res[x][y - 1] != 19) && (res[x][y - 1] += 1);
        y + 1 < sizeY - 1 && (res[x][y + 1] != 19) && (res[x][y + 1] += 1);

        x - 1 >= 0 && (res[x - 1][y] != 19) && (res[x - 1][y] += 1);
        x + 1 < sizeX - 1 && (res[x + 1][y] != 19) && (res[x + 1][y] += 1);

        x - 1 >= 0 && y - 1 >= 0 && (res[x - 1][y - 1] != 19) && (res[x - 1][y - 1] += 1);
        x + 1 < sizeX - 1 && y + 1 <= sizeY && (res[x + 1][y + 1] != 19) && (res[x + 1][y + 1] += 1);

        x - 1 >= 0 && y + 1 <= sizeY && (res[x - 1][y + 1] != 19) && (res[x - 1][y + 1] += 1);
        x + 1 < sizeX - 1 && y - 1 >= 0 && (res[x + 1][y - 1] != 19) && (res[x + 1][y - 1] += 1);
        */

    }

    return res;
}

// 地雷数组转换为 heatmap 数据：[[value,value,value,value,...],...] => [[x,y,value],...]
function covertData(arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            
            // 调换一下 x、y，这样横着看是 (0,0),(0,1),(0,2),个人感觉比较舒服……
            res.push([j, i, arr[i][j]]);
        }
    }
    return res;
}

// 使用 conf 配置生成地雷数据
var minesData = generateMinesData(conf.sizeX, conf.sizeY, conf.mines);

// 使用地雷数据生成 heatmap数据
var heatmapData = covertData(minesData);


// option设置，通过回调函数自定义标签文字（P 代表标记，* 代表地雷，数字代表周围地雷数）和砖块颜色（浅色代表翻开）
function getOption(data) {
    option = {
        title: {
            text: '扫雷游戏',
            subtext: '剩余雷数：' + minesLeft
        },
        tooltip: {
            show: false
        },
        grid: {
            width: '80%',
            height: '80%',
            left: '10px',
            top: '15%'
        },
        xAxis: {
            show: false,
            type: 'category',
            splitArea: {
                show: true
            }
        },
        yAxis: {
            show: false,
            type: 'category',
            splitArea: {
                show: true
            }
        },
        series: [{
            id: 'btnPanel',
            type: 'heatmap',
            label: {
                normal: {
                    show: true,
                    color: '#000',
                    
                    // 回调函数自定义标签文字
                    formatter: function(params) {
                        if (params.data[2] >= 20) {
                            return 'P';
                        } else if (params.data[2] >= 10 || params.data[2] === 0) {
                            return '';
                        } else if (params.data[2] === 9) {
                            return '*';
                        } else {
                            return params.data[2];
                        }
                    }
                }
            },
            itemStyle: {
                
                // 回调函数自定义砖块颜色
                color: function(params) {
                    if (params.data[2] >= 10) {
                        return '#ddd';
                    }
                    return '#fff';
                },
                borderColor: '#AAA',
                borderWidth: 2
            },
            data: data
        }]
    };
    return option;
}


// 渲染图表
myChart.setOption(getOption(heatmapData));


// 点击热力图时调用 btnClick 函数 (翻开砖块)
myChart.on('click', function(params) {
    if (params.seriesId === 'btnPanel' && flag === 0) {

        // 因为调换了 x、y，这里也要把 params.data[1] 放在前面
        btnClick(params.data[1], params.data[0]);
    }
});


// 按钮点击响应函数
function btnClick(btnX, btnY) {

    // 点中已标记的砖块，不做操作，退出
    if (minesData[btnX][btnY] > 19) {
        return;
    }

    // 如果点中地雷（19），则游戏结束（失败）
    if (minesData[btnX][btnY] === 19) {
        flag = 1;
        minesData[btnX][btnY] -= 10;
        
        // 更新地图数据，修改自定义标签规则，把所有地雷显示出来
        return myChart.setOption({
            title: {
                subtext: '游戏结束…'
            },
            series: {
                label: {
                    formatter: function(params) {

                        if (params.data[2] >= 20) {
                            return 'P';
                        } else if (params.data[2] === 9 || params.data[2] === 19) {
                            return '*';
                        } else if (params.data[2] >= 10 || params.data[2] === 0) {
                            return '';
                        } else {
                            return params.data[2];
                        }

                    }
                },
                data: covertData(minesData)
            }
        });

    // 翻到附近有地雷的砖块，更新 value 值，更新剩余待翻开砖块数，显示数字（更新 heatmap 数据）   
    } else if (minesData[btnX][btnY] > 10) {

        minesData[btnX][btnY] -= 10;
        bricksLeft--;
        
        // 三元表达式，如果剩余带翻开砖块为 0 则提示胜利，否则正常更新 heatmap 数据
        bricksLeft === 0 ?
        myChart.setOption({
            title:{
                subtext:'胜利'
            },
            series: {
                data: covertData(minesData)
            }
        }) :
        myChart.setOption({
            series: {
                data: covertData(minesData)
            }
        });

    // 翻到附近没有地雷的砖块，自动翻开周围的砖块（更新其 value 值），然后更新
    } else if (minesData[btnX][btnY] === 10) {

        // 调用自动翻开周围砖块的函数
        autoClick(btnX, btnY);
        
        // 三元表达式，如果剩余带翻开砖块为 0 则提示胜利，否则正常更新 heatmap 数据
        bricksLeft === 0 ?
        myChart.setOption({
            title:{
                subtext:'胜利'
            },
            series: {
                data: covertData(minesData)
            }
        }) :
        myChart.setOption({
            series: {
                data: covertData(minesData)
            }
        });
    }

}

// 对 minesData[x][y] 周围的砖块进行递归验证、翻开
function autoClick(x, y) {

    // 定义子函数,翻开某些砖块，并判断该砖块是否需要递归处理，返回 true/false
    function check(x1, y1) {

        // 如果 minesData[x1] 未定义（目标砖块不存在）则退出
        if (typeof(minesData[x1]) == 'undefined') {
            return false;
        }

        // 如砖块未翻开并且未标记，则翻开判断周围有没有地雷，没有雷返回 true
        if (minesData[x1][y1] > 10 && minesData[x1][y1] < 20) {
            minesData[x1][y1] -= 10;
            bricksLeft--;
            return false;
        }
        
        if (minesData[x1][y1] === 10) {
            return true;
        }
    }

    // 翻开当前砖块
    minesData[x][y] -= 10;
    bricksLeft--;

    // 判断周围砖块，根据情况递归
    check(x, y + 1) && autoClick(x, y + 1);
    check(x, y - 1) && autoClick(x, y - 1);

    check(x + 1, y) && autoClick(x + 1, y);
    check(x - 1, y) && autoClick(x - 1, y);

    check(x + 1, y + 1) && autoClick(x + 1, y + 1);
    check(x + 1, y - 1) && autoClick(x + 1, y - 1);

    check(x - 1, y + 1) && autoClick(x - 1, y + 1);
    check(x - 1, y - 1) && autoClick(x - 1, y - 1);

}


// 去除默认的鼠标事件
document.oncontextmenu = function() {
    return false;
};

// 新加上鼠标右击事件(标记地雷 / 取消标记)
myChart.on('contextmenu', function(params) {

    if (params.seriesId === 'btnPanel' && flag === 0) {

        // 如果 value 大于 19 ，将已标记的砖块取消标记
        if (minesData[params.data[1]][params.data[0]] > 19) {
            minesData[params.data[1]][params.data[0]] -= 10;
            minesLeft++;
        
        // 或者如果 value 大于等于 10 ，标记砖块
        } else if (minesData[params.data[1]][params.data[0]] >= 10) {
            minesData[params.data[1]][params.data[0]] += 10;
            minesLeft--;
        }
        
        // 更新 heatmap 数据
        myChart.setOption({
            title:{
                subtext: '剩余雷数：' + minesLeft
            },
            series: {
                data: covertData(minesData)
            }
        });
    }
    console.log(params);
});