var option = {
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['待确认']
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        center: ["25%", "50%"],
        radius: ['30%', '50%'],
        "startAngle": 180,
        data: [{
            value: 55,
            name: '待确认',
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter: '55%',
                    fontSize: 70
                }
            },
        }, {
            value: 45,
            itemStyle:{color:"transparent"},
            label: {
                normal: {
                    show: false,
                    position: 'inside'
                }
            },
        }]
    },{
        name: '访问来源',
        type: 'pie',
        center: ["75%", "50%"],
        radius: ['30%', '50%'],
        "startAngle": 180,
        data: [{
            value: 55,
            name: '待确认',
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter: '55%',
                    fontSize: 70
                }
            },
        }, {
            value: 45,
            itemStyle:{color:"#aaa"},
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
        }]
    }]
};