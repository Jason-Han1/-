var dataList = [{
        name: '美容汽车服务',
        value: 25
    },
    {
        name: '保养服务',
        value: 75
    },
    {
        name: '安全检查服务',
        value: 125
    }
]
const colorList = ['#EFB04E', '#F2655C', '#1398EC'];


option = {
    backgroundColor:'#333',
    color: colorList,
    legend: {
        show: true,
        icon: "circle",
        top: "center",
        left: '70%',
        data: ['美容汽车服务', '保养服务', '安全检查服务'],
        width: 50,
        padding: [0, 5],
        itemGap: 25,
        formatter: function(name) {
            return '{value|'+(dataList[0].value) + "}\n{title|" + name + "}"
        },

        textStyle: {
            rich: {
                title: {
                    fontSize: 16,
                    lineHeight: 20,
                    color: "#fff"
                },
                value: {
                    fontSize: 18,
                    lineHeight: 24,
                    color: "#fff"
                }
            }
        },
    },
    series: [{
        type: 'pie',
        roseType: true,
        center: ['35%', '50%'],
        radius: ['45%', '60%'],
        startAngle: 0,
        label: {
            show: false,
        },
        labelLine: {
            show: false
        },
        data: dataList,
        silent: true
    }, {
        type: 'pie',
        roseType: true,
        center: ['35%', '50%'],
        radius: '70%',
        label: {
            show: false,
        },
        labelLine: {
            show: false
        },
        data: [{
            value: 100,
            itemStyle: {
                color: 'rgba(66, 187, 255,.1)'
            }
        }],
        z: 1,
        silent: true
    }]
};

myChart.setOption(option);
setInterval(() => {
    option.series[0].startAngle = option.series[0].startAngle + 5;
    myChart.setOption(option);
}, 40)