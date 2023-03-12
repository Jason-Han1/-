option = {
    title: {
        text: '总账报表部单据量总趋势',
        left: 'center',
        textStyle: {fontSize: 30}
    },
    xAxis: {
        type: 'category',
        data: [2020.1,2020.2,2020.3,2020.4,2020.5,2020.6,2020.7,2020.8,2020.9,2020.1,2020.11,2020.12,2021.1],
        axisLabel: {
            left: 'center',
            textStyle: {
                fontSize: 15,
                color: 'dark'
            }
        }
    },
    yAxis: {
        type: 'value',
        yAxislabel:{
            fontSize: 15,
            textStyle: {
                left: 'center',
                fontSize: 20
                
            }
        }
    },
    series: [{
        data: [5579,5282,7124,7840,7793,8275,8632,8654,9346,10720,10641,16084,7885],
        type: 'line',
        smooth: 'false',
        lineStyle: {
                width: 5,
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#9effff'
                    },
                    {
                        offset: 1,
                        color: '#9E87FF'
                    }
                ]),
                shadowColor: 'rgba(158,135,255, 0.3)',
                shadowBlur: 10,
                shadowOffsetY: 20
            },
    }]
};