
option = {
    backgroundColor: '#f8f7fd',
    tooltip: {
        trigger: 'axis',
    },
    xAxis: [
        {
            type: 'category',
            // data: ['1', '12', '24', '36', '48', '60', '72', '84', '...', '...'],
            boundaryGap: false,
            axisTick: {
                show: false,
                alignWithLabel: true,
            },
            axisLabel: {
                show: false,
                textStyle: {
                    fontSize: 20,
                    fontWeight: 'bold',
                },
                formatter: function (value, index) {
                    if (index == 0) {
                        return '';
                    } else {
                        return value + '月';
                    }
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#b9b5b5',
                    width:0,
                },
                // onZero: true,
                
                symbolSize: [13, 20],
                symbolOffset: [0, 40],
            },
        },
    ],
    yAxis: {
        type: 'value',
        splitNumber: 5,
        max: 12,
        splitLine: {
            show: false,
            lineStyle: {
                type: 'dashed',
                color: '#DDD',
            },
        },
         axisTick:{       //y轴刻度线
          show:false
        },
        axisLabel: {
            show: false,
            textStyle: {
                fontSize: 20,
                fontWeight: 'bold',
            },
        },
        axisLine: {
            lineStyle: {
                color: '#b9b5b5',
                width: 0,
            },
            
            symbolSize: [13, 20],
            symbolOffset: [0, 40],
        },
        nameTextStyle: {
            color: '#999',
        },
        splitArea: {
            show: false,
        },
    },

    visualMap: {
        type: 'piecewise',
        text: ['High', 'Low'],
        show: false,
        dimension: 0,
        seriesIndex: 0,
        pieces: [
            {
                gt: 0,
                lte: 1,
                color: '#d2d291',
            },
            {
                gt: 1,
                lte: 2,
                color: '#a8e4ab',
            },
            {
                gt: 2,
                lte: 3,
                color: '#8bc1f1',
                formatter: '444444444',
            },
            {
                gt: 3,
                lte: 4,
                color: '#d4929e',
            },
            {
                gt: 4,
                lte: 6,
                color: '#d5d4da',
            }
        ],
    },
    series: [
        {
            name: '成长阶段',
            type: 'line',
            // data: [0, 10, 22, 32, 40, 47, 50, 52, 53, 53, 53],
           
            showSymbol: false,
            symbolSize: 12,
            hoverAnimation: false,
            data: [
                [0, 0.5],
                [1, 1],
                [2, 4],
                [3, 5.5],
                [4, 4],
                [5, 1.5],
                [6, 0.5]
            ],
            areaStyle: {},
            

            itemStyle: {
                normal: {
                    color: '#fff',
                    // borderWidth: 24,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                shadowBlur: 100,*/
                    borderColor: '#f26264',
                },
            },
            smooth: true

            
        },
    ],
};
