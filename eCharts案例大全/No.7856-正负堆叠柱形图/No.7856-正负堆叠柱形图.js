        option = {
            color: ['#0F7BF3', '#EF5C86'],
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                // data: ['利润', '支出', '收入'],
                data: ['支出', '收入'],
                itemGap: 50, 
                bottom: 10
            },
            grid: {
                top: 0,
                left: '3%',
                right: '4%',
                bottom: 80,
                containLabel: true
            },
            yAxis: [{
                type: 'value',
                show: false
            }],
            xAxis: [{
                type: 'category',
                axisLine: {
                    show: false //隐藏x轴线
                },
                axisTick: {
                    show: false //隐藏刻度
                },
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }],
            series: [
                // {
                //     name: '利润',
                //     type: 'bar',
                //     label: {
                //         show: true,
                //         position: 'inside'
                //     },
                //     data: [200, 170, 240, 244, 200, 220, 210]
                // },
                {
                    name: '收入',
                    type: 'bar',
                    stack: '总量', //数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置
                    itemStyle: {
                        normal: {
                            // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            //     offset: 0,
                            //     color: 'rgba(0,244,255,1)' // 0% 处的颜色
                            // }, {
                            //     offset: 1,
                            //     color: 'rgba(0,77,167,1)' // 100% 处的颜色
                            // }], false),
                            barBorderRadius: [20, 20, 0, 0],
                        }
                    },
                    label: {
                        show: true,
                        position: 'top'
                    },
                    data: [320, 302, 341, 374, 390, 450, 420]
                },
                {
                    name: '支出',
                    type: 'bar',
                    stack: '总量', //数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置
                    barWidth: 40, //最后一个设置，可全局通用
                    itemStyle: {
                        normal: {
                            // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            //     offset: 0,
                            //     color: 'rgba(0,244,255,1)' // 0% 处的颜色
                            // }, {
                            //     offset: 1,
                            //     color: 'rgba(0,77,167,1)' // 100% 处的颜色
                            // }], false),
                            barBorderRadius: [0, 0, 20, 20],
                        }
                    },
                    label: {
                        show: true,
                        position: 'bottom'
                    },
                    data: [-120, -132, -101, -134, -190, -230, -210]
                }
            ]
        };