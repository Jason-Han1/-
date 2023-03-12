var fontSize = (val) => {
    return val
}
option = {
    backgroundColor: '#012248',
    title: {
        left: 'center',
        top: '45%',
        text: '53',
        textStyle: {
            color: '#00b7ee',
            fontSize: fontSize(35),
        },
        subtext: 'abcdefg',
        subtextStyle: {
            color: '#ffffff',
            fontSize: fontSize(15),
        }
    },
    tooltip: {
        trigger: 'none',
        show: false
    },
    legend: {
        show: false
    },
    series: [{
        name: '',
        type: 'pie',
        radius: ['20%', '25%'],
        avoidLabelOverlap: false,
        hoverAnimation: false,
        label: {
            show: false,
            position: 'center'
        },
        itemStyle: {},
        labelLine: {
            show: false
        },
        data: [{
                value: 25,//1/4亮
                name: '亮',
                itemStyle: {
                    color: '#00b7ee'
                }
            },
            {
                value: 75,//3/4暗
                name: '暗',
                itemStyle: {
                    color: '#00b7ee',
                    opacity: 0.05
                }
            },
        ]
    }]
}