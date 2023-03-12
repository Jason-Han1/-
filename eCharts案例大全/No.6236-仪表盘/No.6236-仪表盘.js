option = {
    title: {
        show: true,
        text: '仪表盘'
    },
    animationDuration:3000,
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [{
        name: '业务指标',
        type: 'gauge',
        detail: {
            formatter: '{value}'
        }, 
        title: { //标题
            show: true,
            offsetCenter: [0, 46], // x, y，单位px
            textStyle: {
                color: "#000",
                fontSize: 14, //表盘上的标题文字大小
                fontWeight: 400,
                fontFamily: 'PingFangSC'
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: [
                    [0.2, '#ED6167'],
                    [0.4, '#FEA246'],
                    [1, '#4AC18E']
                ],
                width: 15
            },
        },
        data: [{
            value: 30,
            name: '本期排名'
        }],
    },{
        name: '',
        type: 'gauge',
        title: {
            show: false,
        },
        detail: {
          show: false,
        },
        axisLabel: {
            distance: -60,
            color: '#000',
            formatter: function(v) {
                switch (v + '') {
                    case '10':
                        return '高';
                    case '30':
                        return '中';
                    case '70':
                        return '低';
                }
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: [
                    [0.2, '#ED6167'],
                    [0.4, '#FEA246'],
                    [1, '#4AC18E']
                ],
                width: 10
            },
        },
        data: []
    }]
};
