var data = [{
        value: "90",
        itemStyle: {
            color: "#ffbf00"
        }
    },
    {
        value: "10",
        itemStyle: {
            color: "#fc465"

        }
    }
];
var dataTotal = Number(data[1].value) + Number(data[0].value)
var dataArr = [{
    value: Number(data[0].value),
    name: '未使用',
    itemStyle: {
        normal: {
            color: "#5a98ed"
        }
    }
}, {
    value: Number(data[1].value),
    name: '已使用',
    itemStyle: {
        normal: {
            color: "#1a3b72"
        }
    }
}]

var option = {
    title: [{
        text: '资源占用比',
        left: '49%',
        top: '40%',
        textAlign: 'center',
        textBaseline: 'middle',
        textStyle: {
            color: '#66b1ff',
            fontWeight: 'normal',
            fontSize: 30
        }
    }, {
        text: Math.floor((data[1].value / dataTotal) * 100) + '%',
        left: '49%',
        top: '55%',
        textAlign: 'center',
        textBaseline: 'middle',
        textStyle: {
            color: '#ff6702',
            fontWeight: 'normal',
            fontSize: 60
        }
    }],
    series: [{
        radius: ['60%', '70%'],
        name: '',
        type: 'pie',
        selectedOffset: 16, 
        startAngle: 90,
        z: 3,
        labelLine: {
            normal: {
                length: 30,
                length2: 10,
                lineStyle: {
                    width: 2
                }
            }
        },
        label: {
            normal: {
                textStyle: {
                    fontSize: 28
                },
                formatter: function(params) {
                    return params.name + '\n' + params.value
                }
            }
        },
        data: dataArr
    }]
};
myChart.setOption(option, true);