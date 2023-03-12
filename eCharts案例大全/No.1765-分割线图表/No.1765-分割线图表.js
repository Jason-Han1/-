const list = [
        {
            name: '杭州',
            value: '100',
        },
        {
            name: '宁波',
            value: '60',
        },
        {
            name: '温州',
            value: '60',
        },
        {
            name: '嘉兴',
            value: '60',
        },
        {
            name: '湖州',
            value: '60',
        },
        {
            name: '绍兴',
            value: '60',
        },
        {
            name: '金华',
            value: '60',
        },
        {
            name: '衢州',
            value: '60',
        },
        {
            name: '舟山',
            value: '60',
        },

        {
            name: '台州',
            value: '60',
        },
        {
            name: '丽水',
            value: '60',
        },


    ];
const list2 = [
        {
            name: '杭州',
            value: '70',
        },
        {
            name: '宁波',
            value: '40',
        },
        {
            name: '温州',
            value: '50',
        },
        {
            name: '嘉兴',
            value: '60',
        },
        {
            name: '湖州',
            value: '40',
        },
        {
            name: '绍兴',
            value: '50',
        },
        {
            name: '金华',
            value: '40',
        },
        {
            name: '衢州',
            value: '60',
        },
        {
            name: '舟山',
            value: '60',
        },

        {
            name: '台州',
            value: '60',
        },
        {
            name: '丽水',
            value: '60',
        },


    ];

    const datas = [
        '杭州',
        '宁波',
        '温州',
        '嘉兴',
        '湖州',
        '绍兴',
        '金华',
        '衢州',
        '舟山',
        '台州',
        '丽水',
    ];

    const values = [
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,

    ];

option = {
        backgroundColor:'black',
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {
                // console.log(params)
                return params[0].name + ': '+params[0].value
            }
        },
        xAxis: {
            splitLine: { show: false },
            axisLabel: { 
                show: true ,
                textStyle: {
                    fontSize: 12,
                    color: '#fff',
                },
            },
            axisTick: {
                show: true
            },
            axisLine: { show: false },
        },
        grid: {
            containLabel: true,
            left: '3%',
            top: '3%',
            right: '10%',
            bottom: '3%',
        },
        yAxis: [
            {
                data: datas,
                inverse: true,
                axisLine: { show: false },
                axisTick: { show: false },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    // margin: ,
                    textStyle: {
                        fontSize: 12,
                        color: '#fff',
                    },
                },
            },
        ],
        series: [
            //蓝
             {
                //内
                type: 'bar',
                barWidth: 15,
                // legendHoverLink: false,
                // symbolRepeat: true,
                silent: true,
                itemStyle: {
                    color: 'transparent',
                    // borderWidth:2
                    borderColor: 'transparent',
                },
                data: list,
                z: 1,
                // animationEasing: 'elasticOut',
            },
            {
                type: 'pictorialBar',
                animationDuration: 0,
                symbolRepeat: 'fixed',
                symbolMargin: '20%',
                symbol: 'rect',
                symbolSize: [4, 15],
                symbolMargin: 2,
                symbolBoundingData: 2000,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                    },
                },

                data: values,
                z: 0,
                animationEasing: 'elasticOut',
            },
            {
                //分隔
                type: 'pictorialBar',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(68, 225, 223, 1)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(66, 176, 244, 1)' // 100% 处的颜色
                        }], false)
                    }
                },
                symbolRepeat: 'fixed',
                symbolMargin: 1,
                symbol: 'rect',
                symbolClip: true,
                symbolSize: [3, 12],
                symbolPosition: 'start',
                symbolOffset: [0, -12],
                // symbolBoundingData: 2000,
                data: list,
                z: 2,
                animationEasing: 'elasticOut',
            },
            {
                // name: "外框",
                type: "bar",
                barGap: "-140%", // 设置外框粗细
                data: [100, 100, 100,100,100,100,100,100,100,100,100],
                barWidth: 16,
                itemStyle: {
                    normal: {
                        color: "RGBA(11, 17, 39, 1)", // 填充色
                        barBorderColor: "#1C4B8E", // 边框色
                        barBorderWidth: 1, // 边框宽度
                        // barBorderRadius: 0, //圆角半径
                        label: {
                            // 标签显示位置
                            show: false,
                            position: "top" // insideTop 或者横向的 insideLeft
                        }
                    }
                },
                z: 0
            },
            //黄
            {
                //内
                // name:'黄',
                type: 'bar',
                barWidth: 30,
                // legendHoverLink: false,
                // symbolRepeat: true,
                // silent: true,
                itemStyle: {
                    color: 'transparent',
                    // borderWidth:2
                    borderColor: 'transparent',
                },
                data: list2,
                z: 1,
                // animationEasing: 'elasticOut',
            },
            {
                //分隔
                type: 'pictorialBar',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(245, 154, 35, 1)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(247, 224, 124, 1)' // 100% 处的颜色
                        }], false)
                    }
                },
                symbolRepeat: 'fixed',
                symbolMargin: 1,
                symbol: 'rect',
                symbolClip: true,
                symbolSize: [3, 12],
                symbolPosition: 'start',
                symbolOffset: [0, 6],
                // symbolBoundingData: 2000,
                data: list2,
                z: 2,
                animationEasing: 'elasticOut',
            },
            {
                name: "外框2",
                type: "bar",
                // barGap: "-132%", // 设置外框粗细
                // barCategoryGap: "152%", // 设置外框粗细
                data: [100, 100, 100,100,100,100,100,100,100,100,100],
                barWidth: 16,
                itemStyle: {
                    normal: {
                        color: "RGBA(11, 17, 39, 1)", // 填充色
                        barBorderColor: "#1C4B8E", // 边框色
                        barBorderWidth: 1, // 边框宽度
                        // barBorderRadius: 0, //圆角半径
                        
                        label: {
                            // 标签显示位置
                            show: false,
                            position: "top" // insideTop 或者横向的 insideLeft
                        }
                    }
                },
                z: 0
            },
        ],
    };