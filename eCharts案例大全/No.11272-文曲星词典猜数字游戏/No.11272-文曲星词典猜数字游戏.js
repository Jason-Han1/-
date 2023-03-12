// 准备一个 4 位数字（存在数组里）
var secretNumList = (function() {
    var numList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var res = [];
    for (var i = 0; i < 4; i++) {
        res.push(numList.splice(Math.round(Math.random() * (numList.length - 1)), 1)[0]);
    }
    return res;
})();

// 8 次机会
var times = 8;

// 提示信息列表，用于存放猜数记录
msgList = ['请猜1个四位数字（数字不重复）：', ''];

// 输入框、提示框生成函数（ 4个方块数字框 + 提示框）
function graphicObj(arr, msg) {
    var res = [];
    for (var i = 0; i < 4; i++) {
        res.push({
            type: 'group',
            id: 'textGroup' + i,
            left: 50 + i * 60,
            top: 50,
            children: [{
                    type: 'rect',
                    z: 100,
                    left: 'center',
                    top: 'center',
                    shape: {
                        width: 40,
                        height: 50
                    },
                    style: {
                        fill: '#fff',
                        stroke: '#999',
                        lineWidth: 2,
                        shadowBlur: 8,
                        shadowOffsetX: 3,
                        shadowOffsetY: 3,
                        shadowColor: 'rgba(0,0,0,0.3)'
                    }
                },
                {
                    type: 'text',
                    z: 100,
                    top: 'middle',
                    left: 'center',
                    style: {
                        text: typeof(arr[arr.length - 4 + i]) === 'undefined' ? '' : arr[arr.length - 4 + i],
                        font: '20px "STHeiti", sans-serif'
                    }
                }
            ]
        });
    }
    res.push({
        type: 'text',
        z: 100,
        top: '50',
        left: '400',
        style: {
            text: msg,
            font: '20px "STHeiti", sans-serif'
        }
    });
    return res;
}


var categoryX = ['0', '1', '2'];
var categoryY = ['0', '1', '2', '3'];

// 准备 heatmap 的按钮数据，用 '-1' 作为退格按钮、'-2'作为猜数按钮 
var btnData = (function() {
    var res = [];
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 4; j++) {
            if (j > 0) {
                res.push([i, j, '' + (j * 3 + i - 2)]);
            } else {
                res.push([i, j, '' + (0 - i)]);
            }

        }
    }
    return res;
})();

// 准备一个数组存放输入框内的数组
var inputList = [];


// option设置，通过自定义标签把 '-1'，'-2'换成 '←' 和 '猜'
function getOption() {
    option = {
        title: {
            text: '文曲星词典猜数字游戏'
        },
        tooltip: {
            show: false
        },
        grid: {
            width: '30%',
            height: '60%',
            left: '10px',
            top: '30%'
        },
        xAxis: {
            show: false,
            type: 'category',
            data: categoryX,
            splitArea: {
                show: true
            }
        },
        yAxis: {
            show: false,
            type: 'category',
            data: categoryY,
            splitArea: {
                show: true
            }
        },
        graphic: graphicObj(inputList, msgList),
        series: [{
            id: 'btnPanel',
            type: 'heatmap',
            label: {
                normal: {
                    show: true,
                    formatter: function(params) {
                        if (params.data[2] < 0) {
                            return params.data[2] == -1 ? '⬅' : '猜';
                        }
                        return params.data[2]
                    }
                }
            },
            data: btnData
        }]
    };
    return option;
}

// 渲染图表
myChart.setOption(getOption());

// 点击热力图时调用 btnClick 函数
myChart.on('click', function(params) {
    if (params.seriesId === 'btnPanel' && times > 0) {
        btnClick(params.data[2]);
    }
});

// 按钮点击响应函数
function btnClick(btnID) {
    if (btnID === '-1') {
        inputList.pop();
    } else if (btnID === '-2') {
        return inputList.length === 4 ? guess(inputList) : alert('请先填入 4 个数字再猜！');
    } else {
        inputList.length === 4 ? inputList[3] = btnID : inputList.push(btnID);
    }
    myChart.setOption({
        graphic: graphicObj(inputList, msgList.join('\n'))
    });

}

// 猜数函数
function guess(arr) {
    if (arr.length != 4) {
        return alert('请猜4位数字');
    }
    var info;
    var A = 0;
    var B = 0;
    times--;
    for (var i = 0; i < 4; i++) {
        if (secretNumList.indexOf(arr[i]) === i) {
            A++;
        } else if (secretNumList.indexOf(arr[i]) != -1) {
            B++;
        }
    }
    if (A === 4) {
        info = arr.join('') + '  猜中了！！！';
        times = 0;
    } else {
        info = arr.join('') + '  ' + A + 'A' + B + 'B , 你还有' + times + '次机会...';
    }
    msgList.push(info);
    inputList = [];
    myChart.setOption({
        graphic: graphicObj(inputList, msgList.join('\n'))
    });
}