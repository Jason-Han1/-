//   x轴显示不全  
// 想要添加更多的图 让echarts 在容器中滚动 
//x轴能固定在最下面 其他的图滚动最好
    
    var rawData = [
        [
            120,
            132,
            101,
            134,
            90,
            230,
            210
        ],
        [
            150,
            232,
            201,
            154,
            190,
            330,
            410
        ],
        [
            220,
            182,
            191,
            234,
            290,
            330,
            310
        ],
        [
            320,
            332,
            301,
            334,
            390,
            330,
            320
        ],
        [
            820,
            932,
            901,
            934,
            1290,
            1330,
            1320
        ]
    ];

    var CATEGORY_DIM_COUNT = 5;
    var GAP = 3;
    var BASE_LEFT = 5;
    var BASE_TOP = 3;
    var BASE_BOTTOM = 10;
    var GRID_WIDTH = 90;
    var GRID_HEIGHT = (100 - BASE_TOP - GAP - BASE_BOTTOM) / CATEGORY_DIM_COUNT;
    var SYMBOL_SIZE = 3;

    function generateGrids(option) {
        var index = 0;

        for (var i = 0; i < 1; i++) {
            for (var j = 0; j < CATEGORY_DIM_COUNT; j++) {
                console.log(GRID_HEIGHT)
                option.grid.push({
                    left: BASE_LEFT + i * (GRID_WIDTH + GAP) + '%',
                    top: BASE_TOP + j * (GRID_HEIGHT + GAP) + '%',
                    width: GRID_WIDTH + '%',
                    height: GRID_HEIGHT + '%'
                });
                option.xAxis.push({
                    splitNumber: 3,
                    position: 'bottom',
                    axisLine: {
                        show: j === CATEGORY_DIM_COUNT - 1,
                        onZero: false
                    },
                    axisTick: {
                        show: j === CATEGORY_DIM_COUNT - 1,
                        inside: true
                    },
                    axisLabel: {
                        show: j === CATEGORY_DIM_COUNT - 1
                    },
                    type: 'category',
                    boundaryGap: false,
                    data: [
                        '周一',
                        '周二',
                        '周三',
                        '周四',
                        '周五',
                        '周六',
                        '周日'
                    ],
                    gridIndex: index

                });

                option.yAxis.push({
                    splitNumber: 3,
                    position: 'left',
                    type: 'value',
                    gridIndex: index,
                    scale: true
                });

                option.series.push({
                    name: 'sas' + index,
                    type: 'line',
                    symbolSize: SYMBOL_SIZE,
                    xAxisIndex: index,
                    yAxisIndex: index,
                    data: rawData[j]
                }, {
                    name: '2sas' + index,
                    type: 'line',
                    symbolSize: SYMBOL_SIZE,
                    xAxisIndex: index,
                    yAxisIndex: index,
                    data: rawData[j + 1]
                });


                index++;
            }
        }
    }


    var option = {
        animation: false,

        axisPointer: {
            link: { xAxisIndex: 'all' },
            label: {
                backgroundColor: '#777'
            }
        },
        legend: {
            bottom: 10,
            left: 'center',
            data: [
                'sas0',
                'sas1',
                'sas2',
                'sas3',
                'sas4',
                '2sas0',
                '2sas1',
                '2sas2',
                '2sas3',
                '2sas4'
            ]
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            },
            backgroundColor: 'rgba(245, 245, 245, 0.8)',
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            textStyle: {
                color: '#000'
            },
            position: function(pos, params, el, elRect, size) {
                var obj = { top: 10 };
                obj[[
                    'left',
                    'right'
                ][+(pos[0] < size.viewSize[0] / 2)]] = 30;
                return obj;
            },
            extraCssText: 'width: 170px'
        },

        grid: [],
        xAxis: [],
        yAxis: [],
        series: []
    };

    generateGrids(option);