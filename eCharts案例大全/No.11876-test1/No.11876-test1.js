option = {
    tooltip: {
        trigger: 'item',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        backgroundColor: 'rgba(255,255,255,0.7)',
      
        padding: [5, 10],
        textStyle: {
            color: '#444'
        },
        formatter: function(params) {
            return  '<div style="height: 40px;line-height: 40px;">' + params.data.name + ': <span style="color: ' + params.color + ';">' + params.value + '%</span></div>';
        }
    },
    color: ['#68b837', '#c1e2ad'],
    xAxis: [{
        type: 'value',
        show: false
    }],
    yAxis: [{
        type: 'category',
        show: false,
        data: ['性别比例']
    }],
    series: [{
            type: 'bar',
            stack: '性别比例',
            barWidth: 11,
            label: {
                normal: {
                    show: true,
                    position: 'left',
                }
            },
            data: [{
                name: '女',
                value: '80',
                itemStyle: {
                    normal: {
                        color: '#68b837',
                        barBorderRadius: [5, 0, 0, 5],

                    }
                },
                label: {
                    position: 'left',
                    normal: {
                        formatter: [
                            ' 用户1'
                        ].join('\n'),
                 
                    }
                }
            }]
        },
        {
            type: 'bar',
            stack: '性别比例',
            barWidth: 11,
            label: {
                normal: {
                    show: true,
                    position: 'right'
                }
            },
            data: [{
                name: '男',
                value: '20',
                itemStyle: {
                    normal: {
                        color: '#c1e2ad',
                        barBorderRadius: [0, 5, 5, 0],

                    }

                },
                label: {
                    normal: {
                        formatter: [
                            '     用户2'
                        ].join('\n'),
                        
                    }
                }
            }]
        }
    ]
};