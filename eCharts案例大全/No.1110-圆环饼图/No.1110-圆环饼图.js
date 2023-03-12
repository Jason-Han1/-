// https://www.makeapie.com/editor.html?c=xG-59LvGa9 参考母版
// https://www.makeapie.com/editor.html?c=x5RdzP7yDg 也可以参考的圆角环图
var getnhvalue = [4, 95];
var getflname = ['其他', '用餐支出', '用水支出', '用电支出'];
var getflvalue = [10, 40, 35, 15];

// 圆环值
var data1 = [];
for (var i = 0; i < getflname.length; i++) {
    data1.push({ name: getflname[i], value: getflvalue[i] });
}

// 圆环颜色
var color = ['#FDC48D', '#4A92FF', '#7464F2', '#54C7C0'];

var num = 0;
const seriesOption2 = data1.map((item, index) => {
    num += item.value;
    const a = {
        type: 'bar',
        data: ['', '', '', num],
        coordinateSystem: 'polar',
        z: 9999 - index,
        name: '抢修项目',
        roundCap: true,
        color: color[index],
        barGap: '-100%'
    };
    return a;
});

option = {
    backgroundColor: '#010818',
    color: color,
    tooltip: {
        show: false,
    },
    legend: {
        show: false,
        icon: 'circle',
        orient: 'horizontal',
        // x: 'left',
        data: ['其他', '用餐支出', '用水支出', '用电支出'],
        right: 340,
        bottom: 150,
        align: 'right',
        textStyle: {
            color: '#C1F6FF',
        },
        itemGap: 20,
    },
    angleAxis: {
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        min: 0,
        max: 100,
        boundaryGap: ['0', '100'],
        startAngle: 90,
    },
    radiusAxis: {
        type: 'category',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        data: ['a', 'b', 'c', 'd'],
        z: 10,
    },
    polar: {
        radius: '70%',
    },
    toolbox: {
        show: false,
    },
    series: [...seriesOption2],
};
