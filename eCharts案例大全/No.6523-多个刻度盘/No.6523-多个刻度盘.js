var data = [{
    name: '石泉干休所站',
    value: 41
}, {
    name: '五一广场站',
    value: 37
}, {
    name: '湖明丽景站',
    value: 35
}, {
    name: '梧村车站',
    value: 32
}, {
    name: '湖明站',
    value: 24
}, {
    name: '干休二所站',
    value: 21
}, {
    name: '湖边公园站',
    value: 17
}, {
    name: '湖边花园B区站',
    value: 10
}]

var titleArr = [],
    seriesArr = [];
colors = [
    ['#0e80ee', '#284269'],
    ['#fcac00', '#a67101'],
    ['#cb03fd', '#7f059d'],
    ['#ee0e3d', '#90011f'],
    ['#01ab21', '#005b11'],
    ['#271f9a', '#060054'],
    ['#ec4800', '#8c3007'],
    ['#430eee', '#210189']
]
data.forEach(function(item, index) {
    titleArr.push({
        text: item.name,
        x: index > 3 ? (index - 4) * 20 + 20 + '%' : (index) * 20 + 20 + '%',
        y: index > 3 ? '85%' : '35%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '16',
            color: '#284269',
            textAlign: 'center',
        },
    },{
        text: '{a|'+ parseInt(item.value) +'}\n{b|分钟}',
        x: index > 3 ? (index - 4) * 20 + 20 + '%' : (index) * 20 + 19.5 + '%',
        y: index > 3 ? '73%' : '23%',
        textAlign: 'center',
        textStyle: {
            rich:{
                a:{
                    fontSize: 48,
                    color: colors[index][0]
                },
                b:{
                    fontSize: 14,
                    color: colors[index][0]
                },
            },
        },
    });
    seriesArr.push({
        type: 'gauge',
        clockWise: false,
        radius: '20%',
        startAngle: '90',
        endAngle: '-269.9999',
        splitNumber: 25,
        detail: {
            offsetCenter: [0, -20],
            formatter: ' '
        },
        pointer: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: [
                    [0, colors[index][0]],
                    [item.value / 60, colors[index][1]],
                    [1, colors[index][0]]
                ],
                width: 15
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            length: 32,
            lineStyle: {
                color: '#bbc6fb',
                width: 6
            }
        },
        axisLabel: {
            show: false
        },
        hoverAnimation: false,
        center: [index > 3 ? (index - 4) * 20 + 20 + '%' : (index) * 20 + 20 + '%', index > 3 ? '75%' : '25%'],
    })
});


option = {
    backgroundColor: "#bbc6fb",
    title: titleArr,
    series: seriesArr
}