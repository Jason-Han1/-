option = {
    //backgroundColor: 'rgba(63,1,233,0.7)',
    grid: {
        borderWidth: 1
    },
    legend: {
        data: ['去年同期', '增减百分比', '盈亏平衡点'],
        textStyle: {
            color: 'grey',
        },
    },
    xAxis: [
        /*横坐标*/
        {
            axisTick: {
                show: false
            },
            type: 'category',
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#f8f8f8', //左边线的颜色
                    width: '1.5' //坐标线的宽度
                },
            },
            axisLabel: {
                color: "#A7A7A7",
            },
            data: ['xa', 'xb', 'xc'],
            axisPointer: {
                type: 'shadow'
            }
        },
        /*隐藏一个不显示的横坐标，用作横线的位置*/
        {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: ['xa', 'xb', 'xc'],
        },
    ],
    yAxis: [{
        type: 'value',
        // interval: 500,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#F8F8F8'],
                width: 1,
                type: 'solid'
            }
        },
        //axisLabel: {
        //  color: ['#A7A7A7'],
        //formatter: '{value} 度'
        //}
    }],
    series: [{
            name: '去年同期',
            /*基础数据*/
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#7ca9fc'
                }
            },
            data: [10, 20, 30],
        },
        {
            /*这个bar是撑起横线的高度，并设置透明*/
            name: "盈亏平衡点",
            stack: 'breakevenEleGroup',
            /*盈亏点数据组，需要设置才能将两个bar堆积在一起*/
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)',
                    /*设置bar为隐藏，撑起下面横线*/
                }
            },
            data: [40, 40, 50],
        },
        {
            /*这个bar是横线的显示*/
            name: "盈亏平衡点",
            stack: 'breakevenEleGroup',
            /*盈亏点数据组，需要设置才能将两个bar堆积在一起*/
            type: 'bar',
            xAxisIndex: 1,
            barGap: "0",
            itemStyle: {
                normal: {
                    color: 'green'
                }
            },
            data: [1, 1, 1],
        }
    ]
};