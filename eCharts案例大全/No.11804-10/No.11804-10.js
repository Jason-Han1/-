option = {
    title: [{
        text: '10',
        x: '27.2%',
        y: '46%',
        textStyle: {
            fontSize: 36,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: '#3CF281'
        }
    }, {
        text: '正常',
        x: '28%',
        y: '51%',
        textStyle: {
            fontSize: 14,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: '#3CF281'
        }
    }],
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        top: '45%',
        left: '10%',
        itemGap: 20,
        // formatter: function (name) {
        //   return 'Legend ' + name;
        // },
        textStyle: {
            fontSize: 15,
            padding: [0, 0, 0, 4],
        },
        selectedMode:false,
         icon: "circle", 
        data: ['正常', '预警', '故障']
    },
    color: ['#3CF281', '#F6BF60', '#FF0000'],
    series: [{
        name: '',
        type: 'pie',
        center: ['30%', '50%'],
        radius: ['10%', '13%'],
        startAngle: 360,
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: false,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: 2,
                name: '正常'
            },
            {
                value: 2,
                name: '预警'
            },
            {
                value: 2,
                name: '故障'
            }
        ]
    }]
};