
option = {
    title: {
        text: '未来一周气温变化',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        }
    },
    series: [{
            name: '最高气温',
            type: 'line',
            data: [6, 8, 11, 10, 12, 13, 10]
        },
        {
            name: '平行于y轴的趋势线',
            type: 'line',
            //data:[0],
            markLine: {
                lineStyle:{
                    type:'solid',
                    color:'blue'
                },
                name: 'aa',
                data: [
                {yAxis: {type : 'max', name: '最大值'},xAxis:{coord:['周三','0']}   } 
                    
                    
                    
                    
    //           [
    //     {
    //         name: '当日总资产',
    //         coord: ['周三', 0]
    //     },
    //     {
    //         coord: ['周三', '15']
    //     }
    // ]
             
             
                    //     [
                    //     {coord:['周四',0]},
                    //     {coord:['周四',maxvla]}//如何获取grid上侧最大值，目前是写死的
                    // ]
                ]
            }
        }
    ]
};