option = {
    backgroundColor: '#fff',
    color: '#3398DB',
    grid: {
        left: '13%',
        right: '15%',
        bottom: '53%',
        containLabel: true
    },
    
    tooltip: {
        trigger: 'axis',
        backgroundColor: '#fff',
        padding: [0, 0, 0, 0],
        textStyle: {
            color: '#333'
        },
        axisPointer: {
            type: 'line',
            animation: true,
            lineStyle: {
                color: 'transparent'
            }
        },
        extraCssText: 'box-shadow: 0px 0px 10px -4px rgba(3, 3, 3, .4)',
        formatter: (params, ticket, callback) => {
            let htmls = '',
                xaxisName = '';
            if (params.length > 0) {
                xaxisName = params[0].axisValue;
                htmls += '<div style="font-size:16px;height:32px;color:#0069FF;border-radius:4px;line-height:36px;padding-left:15px;text-align: left;">' + xaxisName + '</div><div>';
                for (let j = 0; j < params.length; j++) {
                    htmls += '<p style="font-size:14px;padding:4px 23px 6px 15px;color:#333;text-align: left;">' + params[j].seriesName + ' : ' + params[j].data + '</p>';
                }
                htmls += '</div>';
                return htmls;
            }
        }
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#000000'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#000000',
            rotate: 45
            //formatter: function (value) {
            //        //x轴的文字改为竖版显示
            //        var str = value.split("");
            //        return str.join("\n");
            //      }
        },
        data: ['零销预警','低销预警','波动大预警', '持续降低预警']
    },
    yAxis: {
        name: '占比(%)',
        type: 'value',
        nameRotate: 1,
        max: 30,
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#C0C0C5'
            }
        },
        axisTick: {
            show: true
        },
        axisLabel: {
            fontSize: 13,
            color: '#5F5F6B'
        }
    },
    series: [
        {
        name: '严重预警',
        type: 'bar',
        stack: 'a',
        barWidth: '50%',
        label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c}'
                }
            },
            
        //data: ['60', '55', '50', '40', '37', '13', '25', '15', '6'],
        data: [{
                
                value: '13',
                itemStyle: {
                    //color: '#D48265'
                }
            },{
                value: '25',
                itemStyle: {
                    //color: '#D48265'
                }
            },{
                value: '15',
                itemStyle: {
                    //color: '#D48265'
                }
            },{
                value: '16',
                itemStyle: {
                    //color: '#D48265'
                }
            },]
        }
    ]
};