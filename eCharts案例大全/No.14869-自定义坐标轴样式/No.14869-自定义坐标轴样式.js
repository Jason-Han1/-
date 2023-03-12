option = {
    backgroundColor: '#000',
    color: ['#00a8ff'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: 5,
        top: 30,
        right: 30,
        bottom: 5,
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        name: '( % )',
        nameGap: 0,
        nameTextStyle: {
            color: '#fff',
        },
        data: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: 'rgba(255,255,255,0.8)'
            }
        },

    }],
    yAxis: [{
        type: 'value',
        name: '设备数量',
        nameTextStyle: {
            color: '#fff'
        },
        boundaryGap: [0, '10%'],
        offset: 5,
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: 'rgba(255,255,255,0.8)'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: '#fff'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.2)'
            }
        },
        z: 10
    }],
    series: [{
        name: '直接访问',
        type: 'bar',
        barWidth: '60%',
        itemStyle: {
            normal: {
                color: function(params) {
                    if(params.dataIndex%2===0){
                        return 'red'
                    }else{
                        return 'green'
                    }
                }
            }
   		},
        data: [10, 52, 200, 334, 390, 330, 220, 100, 200, 300, 400, ]
    }]
};