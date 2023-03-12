option = {
    tooltip: {
        trigger: 'item',
        formatter: function(val) {
            return '[' + val.value[0] + '] : ' + val.value[2]
        }
    },
    xAxis: {
        type: 'time',
        axisLabel:{
            formatter:function (value)
            {
                return echarts.format.formatTime('yyyy-MM-dd', new Date(value));
            }
        }
    },
    yAxis: {
        type: 'time',
        axisLabel:{
            formatter:function (value)
            {
                return echarts.format.formatTime('hh:mm:ss', new Date(value));
            }
        }
    },
    series: [{
        data: [
            ['2017-12-10 10:00:00', '2017-12-10 10:00:00', 820], 
            ['2018-01-10 10:10:00', '2017-12-10 10:10:00', 932], 
            ['2018-02-10 10:20:00', '2017-12-10 10:20:00', 901], 
            ['2018-03-10 10:30:00', '2017-12-10 10:30:00', 934], 
            ['2018-04-10 10:40:00', '2017-12-10 10:40:00', 1290], 
            ['2018-05-10 10:50:00', '2017-12-10 10:50:00', 1330], 
            ['2018-06-10 11:00:00', '2017-12-10 19:00:00', 1320]
        ],
        type: 'scatter',
        markLine: {
            silent: true,
            symbol: 'arrow',
            lineStyle: {
                color: '#4A9073',
                width: 2
            },
            label: {
                formatter: function(val) {
                    return val.value.substr(11, 19)
                }
            },
            data: [{
                name: '2017-12-10 12:00:00',
                symbol: 'circle',
                yAxis: '2017-12-10 12:00:00'
                
            },{
                name: '2017-12-10 13:00:00',
                symbol: 'none',
                yAxis: '2017-12-10 13:00:00'
            },{
                name: '2017-12-10 17:00:00',
                symbol: 'none',
                yAxis: '2017-12-10 17:00:00'
            },{
                name: '2017-12-10 18:00:00',
                symbol: 'none',
                yAxis: '2017-12-10 18:00:00'
            }]
        }
    }]
};
