maxArr = ['95', '95', '95', '95'];
option = {
    backgroundColor: '#000',
    color: ['rgba(17,95,234,1)', 'rgba(16,235,227,1)', 'rgba(16,169,235,1)', 'rgba(235,156,16,1)'],
    tooltip: {
        show: false,
    },
    legend: {
        show: true,
        textStyle: {
            color: '#F0F0F0',
            fontSize: 12,
        },
        right: 0,
        icon: 'rect',
        itemWidth: 10,
        itemHeight: 10,
        data: [{
            name: '北京',
        }, {
            name: '武汉',
        }],
    },
    grid: {
        top: 30,
        right: 20,
        bottom: 25,
        left: 30,
    },

    xAxis: [
        {
            data: maxArr,
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'bottom',
        },
        {
            name: '年',
            show: true,
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#F0F0F0',
                    fontSize: 12,
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(240,240,240,0.1)',
                },
            },
            splitLine: {
                show: false,
            },

            position: 'bottom',
            data: ['幼儿园', '小学', '初中', '高中'],
        },
    ],

    yAxis: {
        name: '单位: 千',
        show: true,
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            rotate: 0,
            textStyle: {
                color: 'rgba(240,240,240,0.5)',
                fontSize: 12,
            },
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(240,240,240,0.1)',
            },
        },
        nameTextStyle: {
            color: 'rgba(240,240,240,0.5)',
        },
    },
    series: [
        {
            // 该系列为背景深蓝色半胶囊
            data: maxArr,
            type: 'bar',

            xAxisIndex: 0,
            silent: true,
            itemStyle: {
                color: 'rgba(17,95,234,0.1)',
            },
            barWidth: 140,
            barGap: 140,
            tooltip: {
                show: false,
            },
            z: 0,
        },
        {
            type: 'bar',
            stack: 'one',
            xAxisIndex: 1,
            barWidth: '60px',
            barGap: '0%',
            
            data: ['95', '45', '65', '35'],
            label: {
            normal: {
                show: true,
                position: 'top',
                textStyle:{
                    color:'#f0f0f0',
                    fontSize:14
                },
                
            }
        },
            itemStyle: {
                color: {
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        {
                            offset: 1,
                            color: 'rgba(0,125,252,0.4)',
                        },
                        {
                            offset: 0,
                            color: 'rgba(0,125,252,0.05)',
                        },
                    ],
                },
            },
        },
        {
            name: '北京',
            type: 'bar',
            barWidth: '60px',
            stack: 'one',
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    borderColor: '#115fea',
                },
            },
            data: [0, 0, 0, 0, 0],
        },
        {
            type: 'bar',
            stack: 'two',
            xAxisIndex: 1,
            barWidth: '60px',
            barGap: '0%',
            
            data: ['85', '35', '55', '25'],
            label: {
            normal: {
                show: true,
                position: 'top',
                textStyle:{
                    color:'#f0f0f0',
                    fontSize:14
                }
            }
        },
            itemStyle: {
                color: {
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        {
                            offset: 1,
                            color: 'rgba(16,235,227,0.4)',
                        },
                        {
                            offset: 0,
                            color: 'rgba(16,235,227,.05)',
                        },
                    ],
                },
            },
            animation: true,
        },
        {
           name: '武汉',
            type: 'bar',
            barWidth: '60px',
            stack: 'two',
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    borderColor: '#10ebe3',
                },
            },
            data: [0, 0, 0, 0, 0],
        },
    ],
    animation: true,
        animationDuration: function (idx) {
          // 越往后的数据时长越大
          return idx * 100 + 300
        },
        animationDelay: function (idx) {
          // 越往后的数据延迟越大
          return idx * 100
        }
};
