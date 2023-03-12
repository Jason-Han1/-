data = [{
    'name': '北京',
    'value': 5600
}, {
    'name': '上海',
    'value': 3600
}, {
    'name': '广州',
    'value': 1500
}]
let seriesObjs = [];
let r = 200;
let color = ['#8F99F0', '#5FC5F5', '#6DE0CF'];
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
    //            legendData.push(data[i].name)
    let seriesObj = {
        name: data[i].name,
        type: 'pie',
        clockWise: false,
        radius: [r - 1 - i * 20, r - i * 20],
        itemStyle: {
            normal: {
                label: {
                    show: false,
                    position: 'center'
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5,
                shadowBlur: 50,
                borderColor: color[i],
                shadowColor: 'rgba(142,152,241, 0.6)'
            }
            //                    emphasis: {
            //                      borderColor: 'rgb(142,152,241)',
            //                      shadowColor: 'rgba(142,152,241, 0.6)'
            //                    }
        },
        hoverAnimation: false,
        data: [{
            value: data[i].value
        }, {
            value: data[0].value * 4 / 3 - data[i].value,
            name: 'invisible',
            itemStyle: placeHolderStyle
        }]
    }
    seriesObjs.push(seriesObj)
}
option = {
    backgroundColor: '#011A2E',
    tooltip: {
        show: false,
        formatter: '{a} : {c}'
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: seriesObjs
}