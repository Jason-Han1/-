var scaleData = [{
        'name': '金',
        'value': 10
    },
    {
        'name': '木',
        'value': 15
    },
    {
        'name': '水',
        'value': 50
    },
    {
        'name': '火',
        'value': 46
    },
    {
        'name': '土',
        'value': 10
    },
    {
        'name': '德',
        'value': 10
    },

];

var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
};
var data = [];
//这里为里面透明边框的宽度(interval)
var interval = 1;
//每一项的颜色
let color = [
    'rgba(51, 67, 190, 1)',
    'rgba(129, 213, 250, 1)',
    'rgba(56, 164, 252, 1)',
    'rgba(46, 201, 163, 1)',
    'rgba(72, 203, 82, 1)',
    'rgba(208,210,202,1)'
];
for (var i = 0; i < scaleData.length; i++) {
    data.push({
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
            borderWidth: 10,
            color: color[i]
        }
    }, {
        value: interval,
        name: '',
        itemStyle: placeHolderStyle
    });
}
var seriesObj = [{
    name: '',
    type: 'pie',
    clockWise: false,
    radius: [180, 200],
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {
                show: false,
            },
            labelLine: {
                length: 30,
                length2: 100,
                show: true,
                color: '#00ffff'
            }
        }
    },
    data: data
}];
option = {
    backgroundColor: "#344b58",
    tooltip: {
        show: false
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: seriesObj
}