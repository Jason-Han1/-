option = {
    backgroundColor:'#0e2147',
    grid: {
        top:'36%',
        left: '2%',
        right: '12%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLabel:{
          textStyle:{
               color: '#ffffff',
               fontSize:12,
          },
        },
        data: ['申请执行标的总数','结案标的总数','实际到位标的总数'],
        axisTick:{
            show:false
        },
        axisLine:{
            show:false
        }
    },
    yAxis:  {
        type: 'value',
        axisTick:{
            show:false
        },
        axisLine:{
            show:false
        },
        axisLabel:{
            show:false
        },
        splitLine:{
            show:false
        }
    },
    series: [
        {
            name: '申请执行标的总数',
            type: 'bar',
            stack: '总量',
            barWidth:'20%',
            itemStyle:{
                normal:{
                    color:new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 1, color: '#d96c29'},
                                    {offset: 0, color: '#d65123'}
                                ]
                            ),
                    barBorderRadius:14,
                }
            },
            label: {
                normal: {
                    show: true,
                    textStyle:{
                        fontSize:22,
                        color:"#d96b29"
                    },
                    position: 'top'
                }
            },
            data: [5743,'-','-']
        },
        {
            name: '结案标的总数',
            type: 'bar',
            itemStyle:{
                normal:{
                    color:new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 1, color: '#eaac27'},
                                    {offset: 0, color: '#f09319'}
                                ]
                            ),
                    barBorderRadius:14,
                }
            },
            label: {
                normal: {
                    show: true,
                    textStyle:{
                        fontSize:22,
                        color:"#ef971b"
                    },
                    position: 'top'
                }
            },
            stack: '总量',
            data: ['-',2114, '-']
        },
        {
            name: '实际到位标的总数',
            type: 'bar',
            stack: '总量',
            itemStyle:{
                normal:{
                    color:new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 1, color: '#2bacb2'},
                                    {offset: 0, color: '#289eb5'}
                                ]
                            ),
                    barBorderRadius:14,
                }
            },
            label: {
                normal: {
                    show: true,
                    textStyle:{
                        fontSize:22,
                        color:"#289fb5"
                    },
                    position: 'top'
                }
            },
            data: ['-', '-', 1523,]
        }
    ]
};