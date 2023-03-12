option = {
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            var tar;
            if (params[1].value != '-') {
                tar = params[1];
            } else {
                tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        data: ['2020/01', '2020/02', '2020/03', '2020/04', '2020/05', '2020/06', '2020/07', '2020/08', '2020/09', '2020/10']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
            name: '',
            type: 'bar',
            stack: 'A',
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
            data: [0, 0, 10, 30, 45, 55, 57, 63, 73, 88]
        },
        {
            name: '数值',
            type: 'bar',
            stack: 'A',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter:(res)=>{
                        return res.value+'%'
                    }
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(25, 100, 150, 0.5)',
                    shadowOffsetY: 5,
                    color: '#38f'
                }
            },
            data: [100, 10, 20, 15, 10, 2, 6, 10, 15, 12]
        }
    ]
};