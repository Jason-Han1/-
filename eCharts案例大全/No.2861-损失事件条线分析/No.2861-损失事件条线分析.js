option = {
    title: {
        text: '损失事件条线分析',
    },
   
    tooltip: {
        show: true
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
       
    },
    yAxis: [{
        type: 'category',
        data: ['内部欺诈', '外部欺诈', '就业制度和工作场所安全事件', '客户产品和业务活动事件', '信息科技系统事件', '执行交易和流程管理事件', '实物资产的损坏'].reverse(),
        
    }, {
            type: 'category',
            data: [12, 15, 4, 6, 3, 9, 5].reverse(),
            
            axisLabel: {
                formatter: '{value} 个'
            }
        }],
    series: [
        {
           
            type: 'bar',
            data: [12, 15, 4, 6, 3, 9, 5].reverse(),
        },
        {
            type: 'bar',
            data: [15, 15, 15, 15, 15, 15, 15],
            barGap: '-100%',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0.3)'
                }
            }
        }
        
    ]
};