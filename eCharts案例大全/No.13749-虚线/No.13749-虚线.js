option = {
    title: {
        text: '线',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
    },
    xAxis: {
        type: 'category',
        name: 'x',
        splitLine: {show: false},
        data: ['一', '二', '三', '四', '五', '六', '七']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'log',
        name: 'y'
    },
    series: [
        {
            type: 'line',
            data: [ ['一', 13], [ '二', 23], ['三', 53], ['四', 133],['五', 33]]
        },
       {
            type: 'line',
          itemStyle:{
                normal:{
                    lineStyle:{
                        width:2,
                        type:'dotted'  //'dotted'虚线 'solid'实线
                    }
                }
            },         
            data: [ ['五', 33], [ '六', 43], ['七', 53], ]
        },
    ]
};
