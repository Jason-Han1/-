option = {
    grid: {
        top: 0,
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: [{
        type : 'category',
        splitLine: {show:false},
        data : ['总费用','房租','水电费','交通费','伙食费','日用品数']
    }, {
        type: 'category',
        data: [1,2,3,4,5]
    }],
    yAxis: {
        type : 'value'
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
            barGap: '0',
            stack:  '总量',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 1700, 1700, 1200, 300, 0]
        },
        {
            name: '生活费',
            type: 'bar',
            barGap: '0',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[1700, 1200, 3000, 200, 900, 300]
        },,
        {
            name: '阴影',
            type: 'bar',
            barGap: '0',
            stack: '总量',
            itemStyle: {
                color: '#aaa'
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[500, 1200, 3000, 200, 900, 300]
        },
        
        {
            name: '标线',
            type: 'line',
            symbol: 'none',
            xAxisIndex: 1,
            
            data:[1700, 1700]
        }
    ]
};
