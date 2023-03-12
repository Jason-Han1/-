option = {
    backgroundColor: '#fff',
    grid: {
        top: '45%',
        left: '6%',
        //right: '10%',
        //right: '1%',
        right: '5%',
                bottom: '11%',
        // containLabel: true
    },
    dataZoom: [{
        type: 'slider', //显示拖拽功能,X轴下的时间长度数据
    }, ],
    xAxis: {
        type: 'category',
        data: ['13:01', '13:02', '13:03', '13:04', '13:05', '13:06', '13:07', '13:08', '13:09', '13:10','13:11', '13:12', '13:13', '13:04', '13:05', '13:06', '13:07', '13:08', '13:09', '13:10','13:01', '13:02', '13:03', '13:04', '13:05', '13:06', '13:07', '13:08', '13:09', '13:10','13:01', '13:02', '13:03', '13:04', '13:05', '13:06', '13:07', '13:08', '13:09', '13:10','13:51', '13:52', '13:53', '13:54', '13:55', '13:56', '13:57', '13:58', '13:59', '13:60',],
        axisLine: {
            show: true,
            lineStyle: {
                color: '#005F97'
            },
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#005F97'
            },
        },
        splitNumber: 3,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,0,0,0.1)'
            }
        },
        axisTick: {
            show: false,
        },
    },
    series: [{
        data: [20, 22, 31, 24, 20, 30, 25, 18, 34, 19, 20, 22, 31, 24, 20, 30, 25, 18, 34, 19, 20, 22, 31, 24, 20, 30, 25, 18, 34, 19, 20, 22, 31, 24, 20, 30, 25, 18, 34, 19, 20, 22, 31, 24, 20, 30, 25, 18, 34, 19, 20, 22, 31, 24, 20, 30, 25, 18, 34, 19, ],
        type: 'line',
        smooth: 'true',
        markLine: { //最大值和最小值
            data: [{
                    name: '顶压控制值50',
                    yAxis: 20,
                    label: {
                        show: 'true',
                        position: 'end',
                        formatter: 'λ=1'
                    },
                    lineStyle: {
                        normal: {
                            width: 2,
                            color: "#FF5D1D",
                        }
                    }

                },
            ]
        },
    }]
};
