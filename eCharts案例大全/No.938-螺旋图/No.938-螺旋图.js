/*
 此图为横向图，需要将 html 中的容器顺时针旋转90度，如：
    <div
      id="container"
      style="width: 100%; height: 1000px; transform: rotate(90deg)"
    ></div>
*/

var areas = [
    '北京',
    '天津',
    '河北',
    '山西',
    '内蒙古',
    '辽宁',
    '吉林',
    '黑龙江',
    '上海',
    '江苏',
    '浙江',
    '安徽',
    '福建',
    '江西',
    '山东',
    '河南',
    '湖北',
    '湖南',
    '广东',
    '广西',
    '海南',
    '重庆',
    '四川',
    '贵州',
    '云南',
    '西藏',
    '陕西',
    '甘肃',
    '青海',
    '宁夏',
    '新疆',
];

var colors = [
    '#B4F493',
    '#B3F393',
    '#B0F092',
    '#ACED91',
    '#AAEB91',
    '#A9EB93',
    '#A5E692',
    '#A3E492',
    '#9FE293',
    '#9DE093',
    '#9BDF92',
    '#97DB92',
    '#95DB93',
    '#92D794',
    '#8FD491',
    '#8DD394',
    '#8BD193',
    '#88D091',
    '#87CE93',
    '#83CA92',
    '#7DC794',
    '#7AC492',
    '#76C291',
    '#75C192',
    '#73BE93',
    '#6FBB93',
    '#6DB993',
    '#6AB794',
    '#67B494',
    '#62B192',
    '#5FAE93',
    '#5CAC93',
    '#59A893',
    '#56A796',
    '#53A493',
    '#50A293',
    '#4EA094',
    '#4B9C93',
    '#499A93',
    '#449992',
    '#409695',
    '#3E9494',
    '#3B9192',
    '#399193',
    '#368D94',
];

var amounts = [
    49,
    14,
    14,
    1,
    5,
    26,
    13,
    14,
    4,
    13,
    7,
    3,
    7,
    6,
    8,
    13,
    14,
    22,
    19,
    3,
    1,
    2,
    17,
    6,
    7,
    0,
    10,
    4,
    1,
    0,
    1,
];
var soureData = [];
areas.forEach(function (area, index) {
    if (amounts[index]) {
        soureData.push({
            name: area,
            amount: amounts[index],
        });
    }
});
soureData.sort(function (a, b) {
    return a.amount - b.amount;
});
var graphicChildren = [];
var mid = 3;
var max = Math.max.apply(Math, amounts),
    min = Math.min.apply(Math, amounts);
var data = [];
soureData.forEach(function (item, index) {
    var maxScale = 1,
        minScale = 0.3,
        stepRadius = (2 * Math.PI) / soureData.length,
        stepScale = (maxScale - minScale) / (max - min),
        countScale = item.amount * stepScale * 3,
        curRadius = (index + 0.5) * stepRadius,
        curScale = countScale > maxScale ? maxScale : countScale < minScale ? minScale : countScale,
        startR =
            index > mid
                ? ((item.amount * 450) / soureData.slice(-1)[0].amount) * 0.95
                : (item.amount * 460) / soureData.slice(-1)[0].amount + 20,
        curR = [
            startR,
            startR * (index > mid ? 0.75 : 1.12),
            startR * (index > mid ? 0.8 : 1.17) * (index > 11 ? 0.8 : 1.17),
        ];
    for (var j = 0; j < 2; j++) {
        var curX = Math.sin(curRadius) * curR[j],
            curY = -Math.cos(curRadius) * curR[j];
        graphicChildren.push({
            type: 'group',
            bounding: 'raw',
            // 此注释只针对横向图。调整文字的纵向位置，数字小上移，数字大下移
            x:
                index == 28
                    ? curX - 8
                    : index == 27
                    ? curX - 9
                    : index == 26
                    ? curX - 11
                    : index == 25
                    ? curX - 14
                    : index == 24
                    ? curX - 15
                    : index == 23
                    ? curX - 17
                    : index == 22
                    ? curX - 17
                    : index == 21
                    ? curX - 15
                    : index == 20
                    ? curX - 15
                    : index == 19
                    ? curX - 13
                    : index == 18
                    ? curX - 11
                    : index == 17
                    ? curX - 9
                    : index == 16
                    ? curX - 9
                    : index == 15
                    ? curX - 5
                    : index == 14
                    ? curX - 1
                    : index == 13
                    ? curX + 2
                    : index == 12
                    ? curX + 4
                    : index == 11
                    ? curX + 7
                    : index == 10
                    ? curX + 10
                    : index == 9
                    ? curX + 12
                    : index == 8
                    ? curX + 14
                    : index == 7
                    ? curX + 15
                    : index == 6
                    ? curX + 14
                    : index == 5
                    ? curX + 13
                    : index == 4 && j == 1
                    ? curX + 10
                    : index == 4
                    ? curX + 11.5
                    : index == 3 && j == 1
                    ? curX - 2.2
                    : index == 2 && j == 1
                    ? curX - 1.6
                    : index == 1 && j == 1
                    ? curX - 1
                    : index == 0 && j == 1
                    ? curX - 0.3
                    : curX,
            // 此注释只针对横向图。调整文字的横向位置，数字小靠右，数字大靠左                                                                                                                        : curX,
            y:
                index == 28
                    ? curY + 4
                    : index == 27
                    ? curY + 5
                    : index == 26 && j == 1
                    ? curY - 1
                    : index == 26
                    ? curY + 5
                    : index == 25 && j == 1
                    ? curY - 3
                    : index == 25
                    ? curY + 3
                    : index == 24 && j == 1
                    ? curY - 3
                    : index == 24
                    ? curY + 3
                    : index == 23 && j == 1
                    ? curY - 1
                    : index == 23
                    ? curY + 2
                    : index == 22 && j == 1
                    ? curY + 2
                    : index == 22
                    ? curY + 9
                    : index == 21 && j == 1
                    ? curY + 4
                    : index == 21
                    ? curY + 8
                    : index == 20 && j == 1
                    ? curY + 7
                    : index == 20
                    ? curY + 11
                    : index == 19 && j == 1
                    ? curY + 9
                    : index == 19
                    ? curY + 13
                    : index == 18 && j == 1
                    ? curY + 10
                    : index == 18
                    ? curY + 15
                    : index == 17 && j == 1
                    ? curY + 13
                    : index == 17
                    ? curY + 15
                    : index == 16
                    ? curY + 18
                    : index == 15
                    ? curY + 18
                    : index == 14
                    ? curY + 18
                    : index == 13
                    ? curY + 17
                    : index == 12
                    ? curY + 16
                    : index == 11 && j == 1
                    ? curY + 13
                    : index == 11
                    ? curY + 15
                    : index == 10 && j == 1
                    ? curY + 11
                    : index == 10
                    ? curY + 14
                    : index == 9 && j == 1
                    ? curY + 9
                    : index == 9
                    ? curY + 13
                    : index == 8 && j == 1
                    ? curY + 6
                    : index == 8
                    ? curY + 8
                    : index == 7 && j == 1
                    ? curY + 2
                    : index == 7
                    ? curY + 5
                    : index == 6 && j == 1
                    ? curY - 1
                    : index == 6
                    ? curY + 1
                    : index == 5 && j == 1
                    ? curY - 5
                    : index == 5
                    ? curY - 3
                    : index == 4 && j == 1
                    ? curY - 7
                    : index == 4
                    ? curY - 5
                    : index == 3 && j == 1
                    ? curY - 6
                    : index == 2 && j == 1
                    ? curY - 5
                    : index == 1 && j == 1
                    ? curY - 5
                    : index == 0 && j == 1
                    ? curY - 5
                    : curY,
            rotation: Math.PI / 2,
            scaleX: curScale,
            scaleY: curScale,
            children: [
                {
                    type: 'text',
                    z: 100,
                    style: {
                        fill: index > mid ? 'white' : 'black',
                        text: j == 0 ? item.name : item.amount.toString(),
                        textAlign: 'left',
                    },
                },
            ],
        });
    }
    data.push({
        name: item.name,
        value: item.amount,
        itemStyle: {
            color: colors[index],
            borderWidth: 0,
        },
        label: {
            show: false,
        },
        labelLine: {
            show: false,
        },
    });
});

function getRandomColors(n) {
    var colors = [];
    for (var index = 0; index < n; index++) {
        colors.push('#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).substr(-6));
    }
    return colors;
}
var options = {
    tooltip: {
        trigger: 'item',
    },
    toolbox: {
        left: 0,
        bottom: 0,
        show: true,
        feature: {
            mark: {
                show: true,
            },
            dataView: {
                show: true,
                readOnly: false,
            },
            restore: {
                show: true,
            },
            saveAsImage: {
                show: true,
            },
        },
    },
    graphic: {
        type: 'group',
        left: 'center',
        top: '60%',
        bounding: 'raw',
        z: 100,
        children: graphicChildren,
    },
    series: [
        {
            name: '专利授权数',
            type: 'pie',
            radius: [20, 450],
            center: ['50%', '60%'],
            label: {
                show: true,
            },
            roseType: 'area',
            data: data,
        },
    ],
};
myChart.setOption(options);
