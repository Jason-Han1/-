var myColor = ['#E4700B', '#04C78D', '#3D7EFF', '##37A2DA'];
option = {
    backgroundColor: '#141845',
    title: {
        text: '学生消费情况分析',
        textStyle: {
            color: '#fff',
        },
    },
    tooltip: {
        formatter: '{b}<br/>{c}%'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        }
    },
    yAxis: {
        type: 'category',
        data: ['综合自律分析', '综合评估画像', '综合消费水平', '综合成绩水平'],
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        }
    },
    series: [{
        type: 'bar',
        barWidth: '30',
        data: [79, 89, 76, 63],
        label: {
            normal: {
                show: true,
                x: '20'
            }
        },
        itemStyle: {
            normal: {
                color: function(params) {
                    var num = myColor.length;
                    return myColor[params.dataIndex % num]
                },
                label: {
                    normal: {
                        position: 'inside',
                        formatter: '{c}%'
                    }
                }
            }
        }
    }]
};