
var data = [70]

option = {
    title: {
        text: '完成度',
        show: false
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        show: false,
        data: []
    }, {
        show: false,
        data: []
    }],
    series: [{
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data: data,
        barWidth: 30,
        itemStyle: {
            normal: {
                color: '#d87a7f',
                
            }},
             label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%'
                }},
    }, {
        name: '框',
        type: 'bar',
        yAxisIndex: 1,
        barGap: '-100%',
        data: [100],
        barWidth: 40,
        itemStyle: {
            normal: {
                color: 'none',
                borderColor: '#d87a7f',
                borderWidth: 5,
                barBorderRadius: 5,
            }
        }
    },]
};