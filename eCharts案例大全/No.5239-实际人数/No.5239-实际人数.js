option = {
    title: {
        text: '实际人数',

        x: 'center',
        y: '7%',
        textStyle: {
            color: '#8f8f8f',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 24
        },

    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    legend: {
        orient: 'horizontal',
        // left: 10,
        itemWidth: 10,
        itemHeight: 8,
        y: 'bottom',
        data: ['测试1', '测试2', '测试3', '测试4', '测试5', '测试6', '测试7', '测试8']
    },
    series: [{
        name: '库存情况',
        type: 'pie',
        radius: '68%',
        center: ['50%', '50%'],
        clockwise: false,
        data: [{
                value: 45,
                name: '测试1'
            }, {
                value: 25,
                name: '测试2'
            }, {
                value: 15,
                name: '测试3'
            },
            {
                value: 8,
                name: '测试4'
            },
            {
                value: 8,
                name: '测试5'
            },
            {
                value: 8,
                name: '测试6'
            },
            {
                value: 8,
                name: '测试7'
            },
            {
                value: 7,
                name: '测试8'
            }
        ],
        label: {

            normal: {
                show: false,
                textStyle: {
                    color: '#999',
                    fontSize: 14,
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 4,
                borderColor: '#ffffff',
            },
            emphasis: {

                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }],
    color: [
        '#626162',
        '#235d91',
        '#70ad46',
        '#4372c5',
        '#ffc100',
        '#a5a5a4',
        '#ed7c2f',
        '#5a9bd5'

    ],
    backgroundColor: '#fff'
};