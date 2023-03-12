var data = [70, 34,60,78,69,95,40,50,70,95]
var titlename = ["北京分行","上海分行","广州分行","深圳分行","珠海分行",
"浙江分行","江苏分行","武汉分行","兰州分行","成都分行"]
var valdata=[683,234,234,523,345,653,677,343,635,435]

option = {
    title: {
        text: 'top 10 完成度',
        show: true
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        show: true,
        data: titlename,
        inverse: true,
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            formatter: (value, index) => {
                return [
                    
                    `{lg|${index+1}}  `+'{title|' + value + '} '
                ].join('\n')
            },
            rich: {
                lg: {
                    backgroundColor: '#339911',
                    color: '#fff',
                    borderRadius: 15,
                    // padding: 5,
                    align: 'center',
                    width:15,
                    height:15
                },
            }
        },


    }, {
        show: true,
        inverse: true,
        data: valdata,
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#33cc55',
            },
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },

    }],
    series: [{
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data: data,
        barWidth: 30,
        itemStyle: {
            normal: {
                color: '#00c1de',
                barBorderRadius: 30,
            }
        },
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: '{c}%'
            }
        },
    }, {
        name: '框',
        type: 'bar',
        yAxisIndex: 1,
        barGap: '-100%',
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
        barWidth: 40,
        itemStyle: {
            normal: {
                color: 'none',
                borderColor: '#00c1de',
                borderWidth: 5,
                barBorderRadius: 15,
            }
        }
    }, ]
};