option = {
    xAxis:  {
         type : 'category',
            boundaryGap : false,
            data : [{
                value: '周一',
                textStyle: {
                    color: '#333'
                }
            },{
                value: '周二',
                textStyle: {
                    color: '#333'
                }
            },{
                value: '周三',
                textStyle: {
                    color: '#333'
                }
            }],
            axisLine: {
            lineStyle: {
                width: 2,
                color: 'green'
            }
        }
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            name:'最低气温',
            type:'line',
            data:[220, 182, -310],
            markLine: {
                data: [
                    {type: 'average', name: '平均值',symbol: 'circle',
                        label: {
                            normal: {
                                position: 'end',
                                formatter: '这里是一段文字描述'
                            }
                        }}
                ]
            }
        }
    ]
};
