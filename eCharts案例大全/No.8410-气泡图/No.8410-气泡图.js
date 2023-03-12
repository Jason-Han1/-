var colors = ['#41CED4', '#78B1F2', '#52BB6C', '#69DBFF'];

var datalist = [{
    name: '天津之眼',
    value: [55, 48],
    symbolSize: 180,
    opacity: .95,
}, {
    name: '西安古城',
    value: [30, 53],
    symbolSize: 330,
    opacity: .50,
}, {
    name: '大理古镇',
    value: [65, 43],
    symbolSize: 120,
    opacity: .84,
}, {
    name: '云南民族村',
    value: [76, 36],
    symbolSize: 140,
    opacity: .8,
}, {
    name: '青岛，体验老城小巷，寻找千与千寻',
    value: [45, 40],
    symbolSize: 120,
    opacity: .75,
}, {
    name: '桂林，不一样的山水，纸钱图案打卡',
    value: [64, 50],
    symbolSize: 70,
    opacity: .7,
}, {
    name: '哈尔滨，体验冰城',
    value: [77, 73],
    symbolSize: 98,
    opacity: .68,
}, {
    name: '天津原意大利兵营',
    value: [50, 62],
    symbolSize: 200,
    opacity: .6,
}, {
    name: '亚龙湾（彩虹栈道，仙境一般）',
    value: [85, 62],
    symbolSize: 500,
    opacity: .6,
}, {


}];
var datas = [];
for (var i = 0; i < datalist.length; i++) {
    var item = datalist[i];
    const colorInex = i % (colors.length);

    datas.push({
        ...item,
        label: {
            normal: {
                textStyle: {
                    fontSize: 11
                }
            }
        },
        itemStyle: {
            normal: {
                color: colors[colorInex],
                opacity: item.opacity
            }
        },
    })
}
option = {
    grid: {
        show: false,
        top: 10,
        bottom: 10
    },
    xAxis: [{
        gridIndex: 0,
        type: 'value',
        // show: false,
        min: 0,
        max: 100,
        nameLocation: 'middle',
        nameGap: 5
    }],
    yAxis: [{
        gridIndex: 0,
        min: 0,
        // show: false,
        max: 100,
        nameLocation: 'middle',
        nameGap: 30
    }],
    series: [{
        type: 'scatter',
        symbol: 'circle',
        symbolSize: 120,
        label: {
            normal: {
                show: true,
                formatter: '{b}',
                color: '#fff',
                textStyle: {
                    fontSize: '20'
                }
            },
        },
        itemStyle: {
            normal: {
                color: '#00acea'
            }
        },
        data: datas
    }]
};