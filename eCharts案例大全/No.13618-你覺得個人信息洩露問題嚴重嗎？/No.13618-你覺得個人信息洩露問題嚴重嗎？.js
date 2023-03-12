app.title = '堆叠条形图';

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    title: [{
        text: '不同年齡段感受（％）',
        left: '30%',
        top: '55%',
        textStyle: {
            color: '#315f97'
        }
    }, {
        text: '總體感受',
        subtext: '共1048575份問卷',
        left: '40%',
        top: '6%',
        textAlign: 'center',
        textStyle: {
            color: '#315f97'
        }
    }],
    legend: {
        data: ['沒有感覺', '嚴重', '非常嚴重']
    },
    grid: {
        left: '10%',
        right: '35%',
        top: '60%',
        bottom: '16%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['22歲以下', '22～35歲', '35～60歲', '60歲以上']
    },
    series: [{
            name: '沒有感覺',
            type: 'bar',
            stack: '总量',

            data: [36, 27, 24, 30]
        },
        {
            name: '嚴重',
            type: 'bar',
            stack: '总量',

            data: [40, 44, 44, 40]
        },
        {
            name: '非常嚴重',
            type: 'bar',
            stack: '总量',

            data: [24, 29, 32, 30]
        },
        {
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            type: 'pie',
            center: ['40%', '33%'],
            radius: ['20%', '39%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
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
                    value: 293601,
                    name: '沒有感覺'
                },
                {
                    value: 304087,
                    name: '嚴重'
                },
                {
                    value: 450887,
                    name: '非常嚴重'
                },
            ]
        },



    ]
};