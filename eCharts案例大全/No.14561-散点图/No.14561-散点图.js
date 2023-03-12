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
            return Math.sqrt(data[2]) * 1;
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
            ['Sun',220,1000,'周日',1990],
            ['Mon',182,1500,'周一',1990],
            ['Tue',191,2000,'周二',1990],
            ['Wed',234,2500,'周三',1990],
            ['Thu',290,3000,'周四',1990],
            ['Fri',330,3500,'周五',1990],
            ['Sat',310,4000,'周六',1990]
        ]
    }]
};