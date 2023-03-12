option = {
    title: {
        text: '堆叠区域图'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
            visualMap: {
            top: 50,
            right: 10,
            pieces: [{
                gt: 0,
                lte: 50,
                  symbol: 'pin',
                color: '#93CE07'
            }, {
                gt: 50,
                lte: 100,
                 symbolSize: 4,
                 symbol: 'diamond', // 改变了visualMap的图例
                color: '#FBDB0F'
            }, {
                gt: 100,
                lte: 150,
                   symbol: 'circle',
                color: '#FC7D02'
            }, {
                gt: 150,
                lte: 200,
                color: '#FD0100'
            }, {
                gt: 200,
                lte: 300,
                  symbol: 'diamond',
                color: '#AA069F'
            }, {
                gt: 300,
                color: '#AC3B2A'
            }],
                itemSymbol: 'diamond',
                // inRange: {
                //     //inRange 与 outOfRange 连用和一起不用效果一样
                //     color: ['#121122', 'rgba(3,4,5,0.4)', 'red'],
                // },
            // outOfRange: {
            //     // 只有outOfRange的话， 显示效果不一
            //       symbol: 'pin',
            //     color: '#999'
            // }
        },
    
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            symbolSize:10,
            areaStyle: {},
            symbol: 'circle', // 设置图例的形状，图线的形状在seriers中设置
            emphasis: {
                focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};