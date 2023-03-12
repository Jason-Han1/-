const data =  [
    ['公司四', '公司三', '公司二', '公司一'],
    ['废弃数', 40, 30, 20, 35],
    ['异常数', 86, 92, 85, 83],
    ['正常数', 241, 172, 195, 364]
];
option = {
    legend: {},
    tooltip: {},
    xAxis: [
        { gridIndex: 0}
    ],
    yAxis: [
        {type: 'category',gridIndex: 0}
    ],
    grid: [
        {bottom: '55%'},
        {top: '55%'}
    ],
    series: [
        {
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            }, 
            itemStyle:{
                normal:{
                    color:'#bdbdbd'
                }
            },
            seriesLayoutBy: 'row'
        },
        {
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            }, 
            itemStyle:{
                normal:{
                    color:'#f44336'
                }
            },
            seriesLayoutBy: 'row'
        },
        {
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            }, 
            itemStyle:{
                normal:{
                    color:'#6cccb4'
                }
            },
            seriesLayoutBy: 'row'
        },
    ],
    dataset: {source: data}
};
