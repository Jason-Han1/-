option = {
    title: {
        text: 'Step Line'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        x: 'right',
        data:['NO1','NO2','NO3','NO4'],
        textStyle:{
            color:"#FFFFFF",
            fontsize:5
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: [
                            {
                                boundaryGap: [0, '50%'],
                                axisLine: {
                                    lineStyle: {
                                        color:'#0B438B'
                                    }
                                },
                                type: 'value',
                                name:'体积 m',
                                position:'left',
                                offset:70,
                                splitNumber:10,
//            min:0,
//            max:300,
                                axisLabel: {
                                    formatter: '{value}',
                                    textStyle:{
                                        color:'#0B438B'
                                    }
                                },
                                splitLine:{
                                    show:false,
                                },
                            },
                            {
                                boundaryGap: [0, '50%'],
                                axisLine: {
                                    lineStyle: {
                                        color:'#0B438B'
                                    }
                                },
                                splitLine:{
                                    show:false,
                                },
                                type: 'value',
                                name:'温度 C',
                                position:'left',
//            min:0,
//            max:100,
                                axisLabel: {
                                    formatter: '{value} C'
                                }
                            },
                            {
                                boundaryGap: [0, '50%'],
                                axisLine: {
                                    lineStyle: {
                                        color:'#0B438B'
                                    }
                                },
                                splitLine:{
                                    show:false,
                                },
                                type: 'value',
                                name:'压力',
                                position:'right',
//            min:0,
//            max:600,
                                axisTick:{
                                    inside:'false',
                                    length:10,
                                }
                            },
                        ],
    series: [
        {
            name:'NO1',
            type:'line',
            step: 'middle',
            data:[120, 132, 101, 134, 90, 230, 210],
            yAxisIndex:0,
        },
        {
            name:'NO2',
            type:'line',
            step: 'start',
            data:[30, 28, 20, 23, 29, 43, 41],
            yAxisIndex:1,
        },
        {
            name:'NO3',
            type:'line',
            step: 'end',
            data:[450, 432, 401, 454, 590, 530, 510],
            yAxisIndex:2,
        }
    ]
};