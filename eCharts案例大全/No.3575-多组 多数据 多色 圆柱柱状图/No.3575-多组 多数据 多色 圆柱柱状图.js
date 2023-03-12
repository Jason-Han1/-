option = {
    backgroundColor: '#000',
    color: ['#59e7eb', '#38e27f', '#2f92ed', '#d0cc6f', '#e47f2e'],
    tooltip: {},
    legend: {
        itemWidth: 15,
        itemHeight: 10,
        itemGap: 30,
        padding: [2, 2, 0, 0],
        textStyle: {
            color: '#e0e0e0',
        },
        icon: "roundRect"
        // selectedMode:false,
    },
    grid: {
        top: '12%',
        left: '7%',
        right: '7%',
        bottom: '8%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            axisLine: {
                //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: '#676C7B',
                },
            },
            axisLabel: {
                //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#d1e6eb',
                    margin: 15,
                },
            },
            axisTick: {
                show: false,
            },
            data: ['克拉玛依区', '独山子区', '白碱滩区', '乌尔禾区'],
        },
        {
            type: 'category',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            splitArea: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            data: [],
        },
    ],
    yAxis: [
        {
            type: 'value',
            nameTextStyle: {
                color: '#fff',
            },
            name: '人数（人）',
            max: 200,
            min: 0,
            interval: 50,
            splitNumber: 7,
            splitLine: {
                show: false,
                lineStyle: {
                    type: 'dashed',
                    color: '#676C7B',
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#676C7B',
                },
            },
            axisLabel: {
                margin: 20,
                textStyle: {
                    color: '#d1e6eb',
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        // 国家职业资格
        {
            name: '国家职业资格', // bar图的顶部
            type: 'pictorialBar',
            symbolSize: [26, 10],
            symbolOffset: [-47, -5],
            z: 12,
            itemStyle: {
                normal: {
                    color: 'rgba(0, 168, 255, 0.7)',
                },
            },
            // label: {
            //     show: true,
            //     position: 'top',
            //     fontSize: 16,
            // },
            symbolPosition: 'end',
            data: [132, 112, 72, 82],
        },
        {
            name: '国家职业资格', // Bar图的底部
            type: 'pictorialBar',
            symbolSize: [26, 10],
            symbolOffset: [-47, 5],
            z: 12,
            itemStyle: {
                normal: {
                    color: 'rgba(0, 168, 255, 0.7)',
                },
            },
            data: [132, 112, 72, 82],
        },
        {
            name: '国家职业资格', //这个是Bar图
            type: 'bar',
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(0, 168, 255,0.8)', // 0% 处的颜色
                            },
                            {
                                offset: 0.35,
                                color: 'rgba(0, 102, 171, 0.42)', // 35% 处的颜色
                            },
                            {
                                offset: 0.65,
                                color: 'rgba(0, 102, 171, 0.42)', // 65% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(0, 168, 255,0.8)', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                    opacity: 0.8,
                },
            },
            z: 16,
            silent: true,
            barWidth: 26,
            // barGap: '-100%', // Make series be overlap
            data: [132, 112, 72, 82],
        },

        // 拥有荣誉称号
        {
            name: '拥有荣誉称号', // bar图的顶部
            type: 'pictorialBar',
            symbolSize: [26, 10],
            symbolOffset: [-16, -5],
            z: 12,
            itemStyle: {
                normal: {
                    color: 'rgba(240, 208, 60, 0.8)',
                },
            },
            // label: {
            //     show: true,
            //     position: 'top',
            //     fontSize: 16,
            // },
            symbolPosition: 'end',
            data: [110, 140, 60, 100],
        },
        {
            name: '拥有荣誉称号', // Bar图的底部
            type: 'pictorialBar',
            symbolSize: [26, 10],
            symbolOffset: [-16, 5],
            z: 12,
            itemStyle: {
                normal: {
                    color: 'rgba(240, 208, 60, 0.8)',
                },
            },
            data: [110, 140, 60, 100],
        },
        {
            name: '拥有荣誉称号', //这个是Bar图
            type: 'bar',
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(240, 208, 60, 0.9)', // 0% 处的颜色
                            },
                            {
                                offset: 0.35,
                                color: 'rgba(240, 208, 60, 0.42)', // 35% 处的颜色
                            },
                            {
                                offset: 0.65,
                                color: 'rgba(240, 208, 60, 0.42)', // 65% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(240, 208, 60, 0.9)', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                    opacity: 0.8,
                },
            },
            z: 16,
            silent: true,
            barWidth: 26,
            // barGap: '-100%', // Make series be overlap
            data: [110, 140, 60, 100],
        },

        // 突出贡献高级专家
        {
            name: '突出贡献高级专家', // bar图的顶部
            type: 'pictorialBar',
            symbolSize: [26, 10],
            symbolOffset: [16, -5],
            z: 12,
            itemStyle: {
                normal: {
                    color: "rgba(0,229,255, 0.7)",
                },
            },
            // label: {
            //     show: true,
            //     position: 'top',
            //     fontSize: 16,
            // },
            symbolPosition: 'end',
            data: [82, 101, 41, 93],
        },
        {
            name: '突出贡献高级专家',   // Bar图的底部
            type: 'pictorialBar',
            symbolSize: [26, 10],
            symbolOffset: [16, 5],
            z: 12,
            itemStyle: {
                normal: {
                    color: "rgba(0,229,255, 0.7)",
                },
            },
            data: [82, 101, 41, 93],
        },
        {
            name: '突出贡献高级专家', //这个是Bar图
            type: 'bar',
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: "rgba(0, 229, 255, 0.9)", // 0% 处的颜色
                            },
                            {
                                offset: 0.35,
                                color: "rgba(0, 165, 201, 0.42)", // 35% 处的颜色
                            },
                            {
                                offset: 0.65,
                                color: "rgba(0, 165, 201, 0.42)", // 65% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "rgba(0, 229, 255, 0.9)", // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                    opacity: 0.8,
                },
            },
            z: 16,
            silent: true,
            barWidth: 26,
            // barGap: '-100%', // Make series be overlap
            data: [82, 101, 41, 93],
        },
        
        // 立功受奖
        {
            name: '立功受奖', // bar图的顶部
            type: 'pictorialBar',
            symbolSize: [26, 10],
            symbolOffset: [47, -5],
            z: 12,
            itemStyle: {
                normal: {
                    color: "rgba(0,255,182, 0.7)",
                },
            },
            // label: {
            //     show: true,
            //     position: 'top',
            //     fontSize: 16,
            // },
            symbolPosition: 'end',
            data: [142, 92, 80, 62],
        },
        {
            name: '立功受奖',   // Bar图的底部
            type: 'pictorialBar',
            symbolSize: [26, 10],
            symbolOffset: [47, 5],
            z: 12,
            itemStyle: {
                normal: {
                    color: "rgba(0,255,182, 0.7)",
                },
            },
            data: [142, 92, 80, 62],
        },
        {
            name: '立功受奖', //这个是Bar图
            type: 'bar',
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: "rgba(0,255,182)", // 0% 处的颜色
                            },
                            {
                                offset: 0.35,
                                color: "rgba(0,255,182, 0.42)", // 35% 处的颜色
                            },
                            {
                                offset: 0.65,
                                color: "rgba(0,255,182, 0.42)", // 65% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "rgba(0,255,182)", // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                    opacity: 0.8,
                },
            },
            z: 16,
            silent: true,
            barWidth: 26,
            // barGap: '-100%', // Make series be overlap
            data: [142, 92, 80, 62],
        },
    ],
};
