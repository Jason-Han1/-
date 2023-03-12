const grayBar = [100, 100]
const colors = ['#1fc779', '#30a3f3'];
option = {
    grid: {
        left: '-50px', // 距离dom间距
        right: '31px',
        top: '7%',
        bottom: '1%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // type: 'shadow'
        },
        padding: 10
    },
    yAxis: [{
        type: "value",
        axisPointer: {
            type: "shadow"
        },
        // 横坐标 分割线等取消显示
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false,

        }
    }],
    xAxis: [{
            show: false,
            type: "category",
            inverse: true,
            axisLabel: {
                verticalAlign: "bottom",
                align: "left",
                padding: [0, 10, 20, 10],
                textStyle: {
                    fontSize: 14,
                    color: "white",
                    fontFamily: "Source Han Sans CN"
                }
            },
            // 纵坐标数据
            data: ["外地扩张", "本地扩张"],

            yAxisIndex: 0,
            // 横坐标 分割线等取消显示
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            }
        },

        {
            show: false,
            type: "category",
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                inside: false,
                verticalAlign: "bottom",
                // 位置 上右下左
                padding: [0, 0, -20, 20],
                lineHeight: "40",
                textStyle: {
                    fontSize: 16,
                    color: "white",
                    fontFamily: "SourceHanSansCN-Regular"
                }
            },
            // 统计的总量 用纵坐标模拟
            data: [61, 12],

        },

    ],
    series: [{
            // 实值
            name: '实值',
            show: true,
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: [192, 6], //图形元素的尺寸
            symbolMargin: 2,
            symbolRepeat: 'repeat',
            barWidth: 192, // 统计条宽度
            itemStyle: {
                normal: {
                    color: function(params) {
                        return colors[params.dataIndex];
                        // 取每条数据的 index 对应 colors 中的 index 返回这个颜色
                    }
                },
            },
            z: 3,
            data: [61, 12],
            // data:[
            //     {value:61,symbol:"path://M0 0h2160.527473v180.043956H0z"},
            //     {value:12,symbol:"path://M0 0h2160.527473v180.043956H0z"},
            //     ],
            animationDelay: (dataIndex, params) => { //每个图形动画持续时间
                return params.index * 20;
            },
            animationEasing: 'quinticOut' //动画效果


        },

        {
            // 全
            name: '总值',
            show: true,
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: [192, 6], //图形元素的尺寸
            symbolMargin: 2,
            symbolRepeat: 'repeat',
            barGap: '-100%', //设置刘昂个柱子重叠
            barWidth: 192, //统计条宽度
            itemStyle: {
                normal: {
                    color: '#2B3567',
                },
            },
            z: 1,
            data: grayBar,
            animationDelay: (dataIndex, params) => { //每个图形动画持续时间
                return params.index * 20;
            },
            animationEasing: 'quinticOut' //动画效果

        },


    ]
};