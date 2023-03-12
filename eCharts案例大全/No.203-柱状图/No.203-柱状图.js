let barData = {
        name: '温度',
        data: [120, 110, 130, 80, 160, 50,90],
        xAxis:['上', '中', '下', '平均'],
        color: ['#10a2ff', 'rgba(16, 162, 255, 0.7)', 'rgba(16, 162, 255, 0)']
    };
    let sbarData = {
        name: '湿度',
        data: [20, 40, 30, 40, 30, 60,50],
        xAxis:['上', '中', '下', '平均'],
        color: ['#3c8de9', 'rgba(16, 162, 255, 0.7)', 'rgba(16, 162, 255, 0)']
    };

option = {
            backgroundColor: '#010d14',
            title: {
                text: '单位 ℃ %',
                textStyle: {
                    fontSize: 12,
                    fontWeight: 'normal',
                    color: '#b3b3b3' //标题颜色
                },
                top: '5px',
                left: '0%',
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '5px',
                right: '5px',
                bottom: '5px',
                top: '50px',
                containLabel: true,

            },
            
            calculable: true,
            legend: {
                icon: 'roundRect',
                orient: 'horizontal',
                itemWidth:15,
                itemHeight:5,
                textStyle: {
                    fontSize: 12, //字体大小
                    color: '#b3b3b3', //字体颜色
                },
                right: '3%', //距离右侧
               
            },
            xAxis: [{
                type: 'category',
                axisLabel: {
                    interval: 0, // 解决x轴名称过长问题
                    textStyle: {
                        color: '#b3b3b3',
                        fontSize: 12,
                    }
                },
                axisLine: {
                    lineStyle: { //y轴网格线设置
                        color: '#2c2c2c',
                        width: 1,

                    }
                },                                 
                data: barData.xAxis,

            }],
            yAxis: [{
                type: 'value',
                // name: "单位/个",
                nameGap:8,
                nameTextStyle: {
                    color: "#8fd5f3",
                },

                axisTick:{
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: { //y轴网格线设置
                        color: '#2c2c2c',
                        width: 1,

                    }
                },
                splitLine: { //保留网格线
                    show: false,
                    lineStyle: { //y轴网格线设置
                        color: '#b3b3b3',
                        width: 1,

                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        fontSize: 12,
                        color: '#b3b3b3', //字体颜色
                    }
                },
            }],
            series: [

                {
                    name: barData.name,
                    type: 'bar',

                    z: 1,
                    barWidth: 12,
                    label: {
                        show: false,
                        position: 'top',
                        textStyle: {
                            color: '#969a9d'
                        }
                    },
                    itemStyle: {
                        normal: {
                            barBorderRadius:[15, 15, 0, 0],
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [{
                                    offset: 0,
                                    color: barData.color[0]
                                },
                                    {
                                        offset: 0.7,
                                        color: barData.color[1]
                                    },
                                    {
                                        offset: 1,
                                        color: barData.color[2]
                                    }
                                ]
                            )
                        },

                    },
                    data:barData.data,

                },
                 {
                    name: sbarData.name,
                    type: 'bar',

                    z: 1,
                    barWidth: 12,
                    label: {
                        show: false,
                        
                    },
                    itemStyle: {
                        normal: {
                            barBorderRadius:[15, 15, 0, 0],
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [{
                                    offset: 0,
                                    color: sbarData.color[0]
                                },
                                    {
                                        offset: 0.7,
                                        color: sbarData.color[1]
                                    },
                                    {
                                        offset: 1,
                                        color: sbarData.color[2]
                                    }
                                ]
                            )
                        },

                    },
                    data:sbarData.data,

                }
            ]
        };