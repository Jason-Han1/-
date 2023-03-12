option = {
    backgroundColor:'#fff',
    title: {
        text: 30000,
        subtext: '总数',
        textStyle: {
            color: '#333',
            fontSize: 20,
        },
        subtextStyle: {
            fontSize: 12,
            color: ['#9e9e9e']
        },
        x: 'center',
        y: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            var val = params.value;
            val = toThousands(val.toFixed(2));
            return params.marker + params.name + ': ' + val + ' (' + params.percent + ' %)'
        }
    },

    legend: {
        orient: 'vertical',
        icon: "circle",
        show: true,
        right: 15,
        top: "42%",
    },
    series: [{
        type: 'pie',
        clockwise: false,
        startAngle: -90,
        radius: ['50%', '70%'],
        avoidLabelOverlap: true,
        name: '姓名',
        center: ['50%', '50%'],
        data: [{
                'name': '美元',
                'value': 21345,
                itemStyle: {
                    color: '#f5b970'
                }
            },
            {
                'name': '人民币',
                'value':2345,
                itemStyle: {
                    color: '#7ba1f4'
                }
            }
        ],
        itemStyle: {
            normal: {
                borderWidth: 3,
                borderColor: '#ffffff',
            },
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        label: {
            normal: {
                formatter: function(params) {
                    var val = params.value.toFixed(2);
                    return params.name + '\n' + params.percent + " %\n" + val;
                },
                color: "#666",
                fontSize: 14,
            },
            position: 'outside',
            show: true,
        }
    }]
};