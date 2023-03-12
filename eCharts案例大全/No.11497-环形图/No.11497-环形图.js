var scaleData = [{
        'name': '蓝网',
        'value': 15
    },
    {
        'name': '红网',
        'value': 25
    },
    {
        'name': '绿网',
        'value': 10
    }, {
        'name': '黄网',
        'value': 50
    },

];
var rich = {
    white: {
        color: '#ddd',
        align: 'center',
        padding: [3, 0]
    }
};

var data = [];
var color = ['#00B5FF', '#FF0000', '#00FF4B', '#FEFF26', ]
for (var i = 0; i < scaleData.length; i++) {
    data.push({
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
            normal: {
                color:color[i]
            }
        }
    }, {
        value: 1,
        name: '',
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        }
    });
}

option = {
    backgroundColor: '#04243E',
    tooltip: {
        show: false
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: [{
        name: '',
        type: 'pie',
        // clockWise: false,
        animation: false,
        radius: [192, 200],
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'outside',
                    color: '#ddd',
                    formatter: '{d}%',
                    fontSize:30
                },
                labelLine: {
                    length: 30,
                    length2: 0,
                    show: false,
                    color: '#00ffff'
                }
            }
        },
        data: data
    }]
}