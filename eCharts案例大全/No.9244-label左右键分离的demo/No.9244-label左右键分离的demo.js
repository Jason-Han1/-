var myColor = ['#276EAF', '#FF479B', '#FFAB00', '#FF794C', '#79D0FF', '#794EFD', '#4952FF'];
var datas11 = [78, 59, 15, 78];
var datas12 = [50, 68, 95, 68];
option = {
    backgroundColor: '#0e2147',
    tooltip: {
        show: true,
        formatter: function(chart) {
            var seriesName = chart.seriesName,
                name = chart.name,
                value = chart.value;
            if (seriesName.indexOf("值") > -1) {
                var html = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#276EAF;"></span>' + name + '：' + value + "家";
                return html;
            }
        }
    },
    grid: {
        width: "49%",
        left: '0',
        top: '0',
        right: '0',
        bottom: '0',
        containLabel: true
    },
    xAxis: {
        gridIndex: 0,
        show: false,
    },
    yAxis: [{
            gridIndex: 0,
            splitLine: '',
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
                verticalAlign: 'bottom',
                align: 'left',
                padding: [0, 8, 10, 0],
                textStyle: {
                    color: '#ffffff',
                    fontSize: '16',
                }
            },
            data: ['区域1', '区域2', '区域3', '区域4'],
            interval: 1
        }, {
            gridIndex: 0,
            splitLine: '',
            axisTick: 'none',
            axisLine: 'none',
            data: datas11,
            axisLabel: {
                show: true,
                verticalAlign: 'bottom',
                align: 'right',
                padding: [0, 8, 10, 0],
                textStyle: {
                    color: '#fff',
                    fontSize: '16',
                },
                formatter: '{y|{value}} {x|m2}',
                rich: {
                    y: {
                        color: '#fffa6f',
                        fontSize: 16
                    },
                    x: {
                        fontSize: 12
                    }
                }
            },
            interval: 1
        }, {
            gridIndex: 0,
            splitLine: '',
            axisTick: 'none',
            axisLine: 'none',
            data: []
        },

    ],
    series: [
        {
            name: '值',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: datas12,
            barGap: '100%',
            label: {
                normal: {
                    show: false,
                    position: 'right',
                    verticalAlign: 'bottom',
                    offset: [0, -10],
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    fontSize: 16,
                    fontFamily: 'arial',
                    formatter: '{c}%'
                }
            },
            barWidth: 6,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    barBorderRadius: 5,
                }
            },
            z: 2
        },
        {
            name: '外框',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 2,
            barGap: '-100%',
            data: [100, 100, 100, 100],
            barWidth: 6,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    opacity: .2,
                    barBorderRadius: 5,
                }
            },
            z: 0
        },

    ]
};