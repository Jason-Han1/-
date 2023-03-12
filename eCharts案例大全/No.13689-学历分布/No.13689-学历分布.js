app.title = '堆叠条形图';

option = {
    legend: {
        orient: 'horizontal',
        top: '55%',
        data: ['高中及高中以下', '本科及本科以上', '大专']
    },
    
    tooltip: {
        trigger: 'item',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderColor: '#cee5ff',
        borderWidth: 1,
        padding: [5, 10],
        textStyle: {
            color: '#444'
        },
        formatter: function(params) {
            console.log(params);
            return '<div style="height:30px;line-height: 30px;">' + params.name + '</div>' + '<div style="height: 40px;line-height: 40px;">' + params.seriesName + ': <span style="color: ' + params.color + ';">' + params.value + '%</span></div>';
        }
    },
    color: ['#3a8eff', '#e34c4c', '#fcac4d'],
    xAxis: [{
        type: 'value',
        show: false
    }],
    yAxis: [{
        type: 'category',
        show: false,
        data: ['学历分布']
    }],
    series: [{
            name: '高中及高中以下',
            type: 'bar',
            stack: '学历分布',
            barWidth: 10,
            label: {
                normal: {
                    show: true,
                    position: [0, '-25']
                }
            },
            data: [{
                value: '64.94',
                label: {
                    normal: {
                        color: '#333333',
                        formatter: [
                            '{c}' + '%'
                        ].join('\n')
                    }
                }
            }]
        },
        {
            name: '本科及本科以上',
            type: 'bar',
            stack: '学历分布',
            barWidth: 10,
            label: {
                normal: {
                    show: true,
                    position: [0, '-25']
                }
            },
            data: [{
                value: '7.22',
                label: {
                    normal: {
                        color: '#333333',
                        formatter: [
                            '{c}' + '%'
                        ].join('\n')
                    }
                }
            }]
        },
        {
            name: '大专',
            type: 'bar',
            stack: '学历分布',
            barWidth: 10,
            label: {
                normal: {
                    show: true,
                    position: [0, '-25']
                }
            },
            data: [{

                value: '27.84',
                label: {
                    normal: {
                        color: '#333333',
                        formatter: [
                            '{c}' + '%'
                        ].join('\n')
                    }
                }
            }]
        }
    ]
};

myChart.setOption(option, true);

window.addEventListener("resize", function() {
    myChart.resize();
});