option= {
    backgroundColor:'#0e2147',
    grid: {
        left: '3%',
        right: '4%',
        top:'5%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisTick: {
            lineStyle:{
                color:'#ffffff',
            }
        },
        axisLine: {
            lineStyle:{
                color:'#ffffff',
            }
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '14',
            }
        },
    },
    yAxis:[{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ffffff',
            }
        },
        axisLabel: {
            formatter:function(params) {
                var newParamsName = "";
                var paramsNameNumber = params.length;
                var provideNumber = 5;  
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                if (paramsNameNumber > provideNumber) {
                    for (var p = 0; p < rowNumber; p++) {
                        var tempStr = "";
                        var start = p * provideNumber;
                        var end = start + provideNumber;
                        if (p == rowNumber - 1) {
                            tempStr = params.substring(start, paramsNameNumber);
                        } else {
                            tempStr = params.substring(start, end) + "\n";
                        }
                        newParamsName += tempStr;
                    }

                } else {
                    newParamsName = params;
                }
                return newParamsName
            },
            textStyle: {
                color: '#ffffff',
                fontSize: '14',
            },
        },
        data: ['不完整案件数','错误案件数','图片矫正案件数','分辨率未达标案件数'],
    }, {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '14',
            },
        },
        data: [35,165,60,58],
    }],
    series: [
    {
        type: 'bar',
        itemStyle: {
            normal: {
                show: true,
                color: '#21c0f9',
            },
        },
        zlevel: 2,
        barWidth: '40%',
        data: [35,165,60,58],
    },
    {
        type: 'bar',
        itemStyle: {
            normal: {
                show: true,
                color: '#094063',
                borderWidth: 1,
                borderColor: '#1897cb',
            },
        },
        zlevel: 1,
        barGap: '-100%',
        barWidth: '40%',
        data: [200,200,200,200],
    }]
};