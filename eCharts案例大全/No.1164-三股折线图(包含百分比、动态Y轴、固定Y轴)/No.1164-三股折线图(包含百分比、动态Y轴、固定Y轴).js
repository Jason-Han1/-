// 根据需求，第一个类目轴为百分比，为固定
// 第二个类目轴为动态的，取数据中的最大值
// 第三个类目轴为固定最大值 500万元

let month = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
option = {
    title: {
        //标题
        text: '三股折线图(包含百分比、动态Y轴、固定Y轴)',
    },
    legend: {
        //图例，注：图例的名字必须跟下面series数组里面的name一致
        data: ['百分比','数据上传量','使用套餐费用'],
    },
    grid: {
        top: 80,
    },
    tooltip: {
        trigger: 'axis', //鼠标悬浮的样式
        axisPointer: {
            type: 'cross',
        },
    },
    xAxis: {
        // x轴的配置
        data: month,
    },

    yAxis: [
        {
            //第一个y轴位置在左侧
            position: 'left',
            type: 'value',
            name: '百分比',
            max: 100,
            axisLabel: {
                formatter: '{value} %',
            },
        },
        {
            //第二个y轴在右侧
            position: 'right',
            type: 'value',
            max: function (value) {
                return value.max;
            },
            name: '数据上传量',
            axisLabel: {
                formatter: '{value} 个',
            },
        },
        {
            //第三个y轴也在右侧，距第二个70个像素
            position: 'right',
            offset: 70,
            type: 'value',
            name: '使用套餐费用',
            max: 500,
            axisLabel: {
                formatter: '{value} 万元',
            },
        },
    ],
    toolbox: {
        show: true,
        feature: {
            magicType: { show: true, type: ['line'] }, //图转换
            dataView: {
                show: true,
                title: '三股折线图(包含百分比、动态Y轴、固定Y轴)',
            },
        },
        saveAsImage: { show: true }, //保存图片
        restore: { show: true }, //还原
    },
    series: [
        {
            name: '百分比',
            type: 'line',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                },
            },

            lineStyle: {
                normal: {
                    width: 8,
                    color: {
                        type: 'linear',

                        colorStops: [
                            {
                                offset: 0,
                                color: '#A9F387', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#48D8BF', // 100% 处的颜色
                            },
                        ],
                        globalCoord: false, // 缺省为 false
                    },
                    shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 20,
                },
            },
            yAxisIndex: '0', //使用第一个y轴，序号从0开始
            data: [23, 27, 28, 30, 34, 36, 39, 41, 45, 46, 56, 60],
        },
        {
            name: '数据上传量',
            type: 'line',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                },
            },
            lineStyle: {
                normal: {
                    smooth: true,
                    width: 8,
                    color: {
                        type: 'linear',

                        colorStops: [
                            {
                                offset: 0,
                                color: '#FF9A22', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#FFD56E', // 100% 处的颜色
                            },
                        ],
                        globalCoord: false, // 缺省为 false
                    },
                    shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 20,
                },
            },
            yAxisIndex: '1', //使用第二个y轴
            data: [1500, 1700, 1750, 1800, 1850, 1900, 1910, 1941, 1980, 2000, 2100, 2200],
        },
        {
            name: '使用套餐费用',
            type: 'line',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                },
            },
            lineStyle: {
                normal: {
                    width: 8,
                    color: {
                        type: 'linear',

                        colorStops: [
                            {
                                offset: 0,
                                color: '#956FD4', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#3EACE5', // 100% 处的颜色
                            },
                        ],
                        globalCoord: false, // 缺省为 false
                    },
                    shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 20,
                },
            },
            yAxisIndex: '2', //使用第三个y轴
            data: [35, 360, 420, 400, 250, 50, 40, 350, 200, 100, 60, 370],
        },
    ],
};
