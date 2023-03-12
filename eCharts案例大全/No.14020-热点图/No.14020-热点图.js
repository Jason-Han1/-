option = {
    title: {
        text: '标题',
        subtext:'副标题',
        right:'center',
        top:'1%'
    },
    legend: {
        right: 10,
        data: ['1990', '2015']
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        /*splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }*/
    },
    yAxis: {},
    series: [{
        type: 'scatter',
        name:'1990',
        symbol: 'circle',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
        symbolSize: function (data) {
            return Math.sqrt(data[1]) * 2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[2];
                },
                position: 'top'
            }
        },
        data:[
            ['Sun',50],
            ['Mon',210],
            ['Tue',90],
            ['Wed',234],
            ['Thu',100],
            ['Fri',330],
            ['Sat',400]
        ]
    }]
};