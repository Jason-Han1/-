var clickName = '';
var option = {
    backgroundColor:'#001',
    legend: {
        right: 'center',
        top:'5%',
        itemWidth: 18,
        itemHeight: 10,
        textStyle: {
            color: '#fff',
            fontSize: 14
        },
        data: ['申请户数']
    },
    grid: {
        top:'20%',
        left: '10%',
        right: '10%',
        bottom: '5%',
        containLabel: true
    },

    tooltip: {
        show: "true",
        trigger: 'item',
    },
    yAxis: [{
        type: 'value',
        name: '单位(户)',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#0F1A2F ',
            }
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ['rgba(18,36,59,.3)', 'rgba(18,36,59,0)']
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 14
            },
        },
    }],
    xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                }
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                },
            },
            data: ['是否', '2', '3','4','5','6']
        }

    ],
    series: [{
        name: '申请户数',
        type: 'bar',
        itemStyle: {
            normal: {
                show: true,
                color: function(params){
                    if(params.name === clickName){
                        return 'rgba(0,228,255,1)'
                    }else{
                        return 'rgba(0,228,255,.3)'
                    }
                },
                borderWidth: 1,
                borderColor: '#00E4FF',

            }
        },
        label: {
            show: true,
            textStyle: {
                color: '#fff',
                fontSize: 14
            },
            position: 'top'
        },
        zlevel: 2,
        barWidth: '33%',
        barGap: '50%',
        data: [8, 15, 10,10,30,40,50,60]
    }]
};
myChart.getZr().on('click', function(params) {
    if (params.target !== undefined) { // 点击具体地市
        if (params.target.dataIndex !== undefined) {
            clickName = myChart.getOption().xAxis[0].data[params.target.dataIndex]
        }
    } else {//点击空白
        clickName = ''
    }
    myChart.setOption(option)
})