var indicator = [{
        text: '18~20岁',
        max: 6000,
        axisLabel: {
            show: true
        }
        //刻度
    },
    {
        text: '20~30岁',
        max: 5000
    }, {
        text: '30~40岁',
        max: 5000
    }, {
        text: '40~50岁',
        max: 5000,
        //  axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}
    }, {
        text: '50~60岁',
        max: 5000
    }
];

let nan = [4300, 4700, 3600, 3900, 3800, 4200];
let nv = [3200, 3000, 3400, 2000, 3900, 2000];

let legendData = ['男', '女']; //图例

let dataArr = [{
        value: nan,
        name: legendData[0],
        itemStyle: {
            normal: {
                borderWidth: 1,
                color: '#8097EF',
            },
        },
        areaStyle: {
            normal: {
                color: '#8097EF',
            },
        },
    },
    {
        value: nv,
        name: legendData[1],
        itemStyle: {
            normal: {
                borderWidth: 1,
                color: '#FAB410',
            },
        },
        areaStyle: {
            normal: {
                color: '#FAB410',
            },
        },
    }
];
var colorArr = ['#4A99FF', '#4BFFFC']; //颜色
option = {
    tooltip: {
        backgroundColor: '#FFFFFF',
        trigger: 'item',
        // trigger: 'axis',
        confine: true,
        position: function([x, y]) {
            const newX = x + 100
            // console.log(newX)
            return [newX, y]
        },
        formatter: function(params) {
            const name = params.name
            const acceptNum = params.value
            const res = ' <div class=\'tooltips\' id=\'tooltips\' style=\'position: relative;\n' +
                '        display: inline-block;\n' +
                '        background: #FFFFFF;\n' +
                '        box-shadow: 0 -3px 10px 0 rgba(206,211,212,0.45), 2px 10px 13px 0 rgba(0,0,0,0.04);\n' +
                '        padding: 0.1rem 0.2rem;\n' +
                '        border-radius: 0.04rem;\'>' +
                '<div>' +
                '<span class=\'\' style=\'opacity: 0.7;\n' +
                '        font-family: PingFangSC-Medium;\n' +
                '        font-size: 0.14rem;\n' +
                '        color: #222222;\n' +
                '        padding: 0 0 0.05rem 0;\'>' + name[0].name + '：' + '</span>' +
                '<span class=\'\' style=\'color: #2A70F1;\n' +
                '        font-family: PingFangSC-Medium;\n' +
                '        font-size: 0.13rem;\'>' + acceptNum[0] + '人</span>' +
                '</div>' +
                '<div>' +
                '<span class=\'\' style=\'opacity: 0.7;\n' +
                '        font-family: PingFangSC-Medium;\n' +
                '        font-size: 0.14rem;\n' +
                '        color: #222222;\n' +
                '        padding: 0 0 0.05rem 0;\'>' + name[1].name + '：' + '</span>' +
                '<span class=\'\' style=\'color: #2A70F1;\n' +
                '        font-family: PingFangSC-Medium;\n' +
                '        font-size: 0.13rem;\'>' + acceptNum[1] + '人</span>' +
                '</div>' +


                '<div class=\'\' style=\'width: 0;\n' +
                '        height: 0;\n' +
                '        border-left: 7px solid transparent;\n' +
                '        border-right: 7px solid transparent;\n' +
                '        border-top: 7px solid #ffffff;\n' +
                '        position: absolute;\n' +
                '        left: -8%;\n' +
                '        top: 50%;\'></div>' +
                '</div>'
            return res
        },
        padding: [
            11, // 上
            19, // 右
            13, // 下
            13 // 左
        ],
        // extraCssText: 'box-shadow:0px 1px 2px 0px rgba(134,134,134,0.45),0px -1px 2px 0px rgba(0,0,0,0.03);',
    },
    color: colorArr,
    legend: {
        // orient: 'vertical',
        data: legendData,
        top: 25,
        right: 40,
        itemWidth: 8, // 图例标记的图形宽度。[ default: 25 ]
        itemHeight: 8, // 图例标记的图形高度。[ default: 14 ]
        itemGap: 9, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
        textStyle: {
            fontSize: 14,
            color: '#74767C',
        },
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#222222',
                fontSize: 16
            },
        },
        indicator: indicator,
        splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: { // 分隔区域的样式设置。
                color: ['#F8FAFF', '#F8FAFF'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            }
        },
        axisLine: { //指向外圈文本的分隔线样式
            lineStyle: {
                color: '#E3E9FB'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#E3E9FB', // 分隔线颜色
                width: 1, // 分隔线线宽
            }
        },
    },
    series: [{
        type: 'radar',
        symbolSize: 8,
        // symbol: 'angle',
        data: dataArr
    }]
};