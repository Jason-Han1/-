option = {
    tooltip: {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
            // shadowStyle:{
            //     opacity :0
            // }
        },
        formatter: function (params) {
            var result = params[0].name;
            params.forEach(function (item) {
                var data = item.data;
                if (item.seriesIndex == 2) {
                    data = Math.round(data * 10000) / 100.00 + '%'
                }
                result += '<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + item.color + '"></span>' + item.seriesName + ' : ' + data;
            });

            return result;
        }
    },
    legend: {
        orient: 'vertical',
        data:['蒸发量','降水量','平均温度'],
        right: 0,
        height: 60,
        color:'#747474'
    },
    grid: {
        left: '2%',
        right: '2%',
        top: '10%',
        // bottom: '15%'
    },
    color: ['#5b9bd5', '#ed7d31', '#81C26D'],
    xAxis: [
        {
            type: 'category',
            data: ['nfajsnf'],
            axisLabel: {
                interval: 0,
                fontSize: 12,
                rotate: 0,
                align: 'center'
            },
            axisTick: {
                inside: true
            },
            // triggerEvent: true,
            // z: 999
        }
    ],
    yAxis: [
        {
            type: 'log',
            show: false
        },
        {
            type: 'value',
            show: false
        },
        {
            type: 'value',
            show: false
        }
    ],
    series: [
        {
            name:'蒸发量',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#56A2EA'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#56A2EA'
                }
            },
            yAxisIndex: 1,
            data: [11,1]
        },
        {
            name:'降水量',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#FF8F3E'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#FF8F3E'
                }
            },
            yAxisIndex: 1,
            data: ['11',1]
        },
        {
            name:'平均温度',
            type: 'line',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: function (param) {
                        return Math.round(param.value * 10000) / 100.00 + '%'
                    },
                    textStyle: {
                        color: '#747474'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#81C26D'
                }
            },
            yAxisIndex: 2,
            smooth: true,
            data: [0.14]
        }
    ]
};