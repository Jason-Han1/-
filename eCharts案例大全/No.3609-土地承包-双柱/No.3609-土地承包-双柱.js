option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            textStyle: {
                color: '#fff',
                fontSize: '26',
            },
        },
    },
    legend: {
        show: false,
    },
    grid: {
        top: 60,
        left: 50,
        bottom: 60,
        right: 60,
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#C9DCE4',
                },
            },
            axisLabel: {
                color: '#516F95',
                fontSize: 12,
            },
            data: ['二九零', '江滨', '宝泉岭', '新华', '友谊', '八五二'],
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#C9DCE4',
                },
            },
            axisLabel: {
                color: '#2880A1',
                fontSize: 12,
                margin: 5,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#ADCAD5',
                    width: 0.5,
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '水田',
            type: 'bar',
            label: {
                show: false,
                position: 'top',
                fontSize: 14,
                color: '#3DC3F0',
                fontWeight: 'bold',
            },
            //barMaxWidth:60,
            // itemStyle:{
            //     color: {
            //         type: 'linear',
            //         x: 0,
            //         y: 0,
            //         x2: 0,
            //         y2: 1,
            //         colorStops: [{
            //             offset: 0, color: '#3DC3F0' // 0% 处的颜色
            //         }, {
            //             offset: 1, color: '#CCF2FF' // 100% 处的颜色
            //         }]
            //     }
            // },
            itemStyle: {
                color: '#FFE180',
            },
            data: [60, 110, 180, 100, 30, 30],
        },
        {
            name: '旱田',
            type: 'bar',
            label: {
                show: false,
                position: 'top',
                fontSize: 14,
                color: '#3D8BF0',
                fontWeight: 'bold',
            },
            barMaxWidth: 60,
            // itemStyle:{
            //     color: {
            //         type: 'linear',
            //         x: 0,
            //         y: 0,
            //         x2: 0,
            //         y2: 1,
            //         colorStops: [{
            //             offset: 0, color: '#3D8BF0' // 0% 处的颜色
            //         }, {
            //             offset: 1, color: '#CCE2FF' // 100% 处的颜色
            //         }]
            //     }
            // },
            itemStyle: {
                color: '#4CD698',
            },
            data: [90, 130, 170, 130, 20, 20],
        },
    ],
};
