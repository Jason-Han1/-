var myColor =['#00B7EE','#13BB82'];
var option = {
    backgroundColor: '#fff',
        grid: {
        height: 'auto',
        top: '5%',
        left: '30',
        right: '120',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {
        show: false,
    },
    yAxis: {
        inverse: true,
        type: 'category',
        axisLabel: {
            show: true,
            color: '#666',
            fontSize: 14,
            padding: [0, 0, 0, 0]
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        data: ['数值1','数值2'],
    },
    series: [ {
        type: 'bar',
        barWidth: '20',
        data: [99.99,50],
        label: {
            normal: {
                show: true,
                position: 'right',
                color: '#fff',
                fontSize: 12,
                offset: [-45, 0],
               /* formatter: function(param) {
                    return param.value + '%';
                },*/
            }
        },
        itemStyle: {
            normal: {
                barBorderRadius: 16,
                /*color: '#68b837'*/
                color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
            },
        },
        max: 100
    }]
}