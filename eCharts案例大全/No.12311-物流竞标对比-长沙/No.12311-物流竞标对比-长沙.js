option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        top: '2%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['Seamark',	'Amass',	'FRONTIER HUB',	'TTI',	'Translink',	'All-Link',	'K&N',]
    },
    yAxis: {
        type: 'value',
        min:3600,
        axisLabel: {
            formatter: '${value} '
            }
    },

    series: [{
        name: '2018',
        type: 'bar',
        data: [6127.65,	5776.2,	5625.03,	5536.46,	5341.74,	5324.42,	5159.15,],
        label: {
            normal: {
                show: true,
                position: 'inside'
                }
            },
        itemStyle: {
            normal: {
                color: function(params) {
                    // build a color map as your need.
                    var colorList = [
                        '#3598dc', '#3598dc', '#3598dc', '#e7505a', '#3598dc', '#3598dc', '#3598dc', '#3598dc'
                    ];
                    return colorList[params.dataIndex]
                }
            }
        }
    }]
};