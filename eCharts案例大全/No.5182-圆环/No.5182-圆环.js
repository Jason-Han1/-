data = [{
    'name': '在线',
    'value': 1800
}, {
    'name': '离线故障',
    'value': 1200
}]
const total = 3000;
const color = ['#20fdfa', '#ff9e17'];
let seriesObjs = [];
// 占位图样式
let placeHolderStyle = {
    normal: {
        label: {
            show: false,
            position: 'center'
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
}

for (let i = 0; i < data.length; i++) {
    let seriesObj = {
        name: data[i].name,
        type: 'pie',
        startAngle: 180,
        radius: [60 - i * 15 + '%', 50 - i * 12 + '%'],
        silent: true,
        itemStyle: {
            normal: {
                color: color[i]
            }
        },
        labelLine: {
            show: false
        },
        data: [{
            value: data[i].value
        }, {
            value: total - data[i].value,
            name: 'invisible',
            itemStyle: placeHolderStyle
        }]
    }
    seriesObjs.push(seriesObj)
}

option = {
    series: seriesObjs
};