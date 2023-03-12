options = [{
        title: {
            text: 'Agent Sales Indicator (2018-02)',
            top: 10,
            textStyle: {
                fontSize: 18
            },
            subtext: 'Completion Rate(left) / Contribution Rate(right)',
            subtextStyle: {
                fontSize: 16,
                fontWeight: 'bold'
            },
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} \n{b} : {c} ({d}%)"
        },
        legend: {
            x: 'center',
            y: 'bottom',
            top: '90%',
            data: ['CANANE', 'CANXYY', 'CANJLX', 'CANGJI', 'CANXDA', 'CANRNT', 'CANCOS', 'CANGAF', 'CANWTD', 'CANHMN', 'SZXNAL']
        },
        //    legend: {
        //       orient:'vertical',
        //     x : 'left',
        //   y : 'center',
        // data:['CANANE', 'CANXYY', 'CANJLX', 'CANGJI', 'CANXDA', 'CANRNT', 'CANCOS', 'CANGAF', 'CANWTD', 'CANHMN', 'SZXNAL']
        //},
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: false,
                    readOnly: false
                },
                magicType: {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore: {
                    show: false
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: true,
        series: [{
                name: 'Completion Rate',
                type: 'pie',
                radius: [50, 110],
                center: ['25%', '50%'],
                roseType: 'radius',
                label: {
                    normal: {
                        show: true,
                        formatter: '{b}：{c}%',
                        align: 'left', // 文字水平对其方式
                    },
                    emphasis: {
                        show: true
                    }
                },
                lableLine: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },

                data: [{
                        name: 'CANANE',
                        value: 90.6
                    },
                    {
                        name: 'CANXYY',
                        value: 132
                    },
                    {
                        name: 'CANJLX',
                        value: 82
                    },
                    {
                        name: 'CANGJI',
                        value: 114.1
                    },
                    {
                        name: 'CANXDA',
                        value: 123.5
                    },
                    {
                        name: 'CANRNT',
                        value: 85.4
                    },
                    {
                        name: 'CANCOS',
                        value: 102.9
                    },
                    {
                        name: 'CANGAF',
                        value: 142.3
                    },
                    {
                        name: 'CANWTD',
                        value: 91.5
                    },
                    {
                        name: 'CANHMN',
                        value: 173.3
                    },
                    {
                        name: 'SZXNAL',
                        value: 149.8
                    },
                ]
            },
            {
                name: 'Contribution Rate',
                type: 'pie',
                radius: [50, 110],
                center: ['75%', '50%'],
                roseType: 'area',
                label: {
                    normal: {
                        show: true,
                        formatter: '{b}：{c}%',
                        align: 'left', // 文字水平对其方式
                    },
                    emphasis: {
                        show: true
                    }
                },
                lableLine: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: [{
                        name: 'CANANE',
                        value: 11
                    },
                    {
                        name: 'CANXYY',
                        value: 14.6
                    },
                    {
                        name: 'CANJLX',
                        value: 8.2
                    },
                    {
                        name: 'CANGJI',
                        value: 11.2
                    },
                    {
                        name: 'CANXDA',
                        value: 12.2
                    },
                    {
                        name: 'CANRNT',
                        value: 7.9
                    },
                    {
                        name: 'CANCOS',
                        value: 9.5
                    },
                    {
                        name: 'CANGAF',
                        value: 10.9
                    },
                    {
                        name: 'CANWTD',
                        value: 3.9
                    },
                    {
                        name: 'CANHMN',
                        value: 6.8
                    },
                    {
                        name: 'SZXNAL',
                        value: 3.8
                    }
                ]
            }
        ]
    },


    // 2nd graph
    {
        title: {
            text: 'Contribution Rate Stack Graph(Jan,Feb,Mar)',
            left: 'center'
        },

        tooltip: { // 提示框组件
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        //    legend: {
        //       orient:'vertical',
        //        x : 'left',
        //        y : 'center',
        //        data:['CANANE', 'CANXYY', 'CANJLX', 'CANGJI', 'CANXDA', 'CANRNT', 'CANCOS', 'CANGAF', 'CANWTD', 'CANHMN', 'SZXNAL']
        //    },
        grid: {
            top: '8%',
            left: '3%',
            right: '4%',
            bottom: '1%',
            containLabel: true,
            show: false // 网格边框是否显示，上和右边框 
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: true, // 坐标轴两边留白
            splitLine: { // 网格线 x轴对应的是否显示
                show: true
            },
            data: ['Jan', 'Feb', 'Mar']
        },

        yAxis: [{
            type: 'value',
            min: 0,
            max: 100,
            splitLine: { // 网格线 y轴对应的是否显示
                show: true
            },
            axisLabel: {
                formatter: '{value}'
            }
        }],

        //   visualMap: {                          # 旁边会有 视觉映射组件
        //     type: 'continuous',
        //   dimension: 1,
        // text: ['High', 'Low'],
        //        inverse: true,
        //      itemHeight: 200,
        //    calculable: true,
        //  min: -2,
        //        max: 6,
        //        top: 60,
        //      left: 10,
        //    inRange: {
        //      colorLightness: [0.4, 0.8]
        //},
        //        outOfRange: {
        //          color: '#bbb'
        //    },
        //  controller: {
        //    inRange: {
        //      color: '#01949B'
        //}
        //    }
        //},


        series: [{
                name: 'CANANE',
                type: 'bar',
                //color:'#00BFFF',
                stack: '总量', // 堆叠图
                data: [15.3, 11, 12.8]
            },
            {
                name: 'CANXYY',
                type: 'bar',
                //color: '#DC143C',
                stack: '总量',
                data: [9.9, 14.6, 8.2]
            },
            {
                name: 'CANJLX',
                type: 'bar',
                //color: '#DC143C',
                stack: '总量',
                data: [11.3, 8.2, 9.7]
            },
            {
                name: 'CANGJI',
                type: 'bar',
                //color: '#DC143C',
                stack: '总量',
                data: [10.2, 11.2, 15]
            },
            {
                name: 'CANXDA',
                type: 'bar',
                //color: '#DC143C',
                stack: '总量',
                data: [12.5, 12.2, 11.5]
            },
            {
                name: 'CANRNT',
                type: 'bar',
                //color: '#DC143C',
                stack: '总量',
                data: [8.5, 7.9, 11.7]
            },
            {
                name: 'CANCOS',
                type: 'bar',
                //color: '#DC143C',
                stack: '总量',
                data: [8.7, 9.5, 8]
            },
            {
                name: 'CANGAF',
                type: 'bar',
                //color: '#DC143C',
                stack: '总量',
                data: [11.2, 10.9, 11]
            },
            {
                name: 'CANWTD',
                type: 'bar',
                //color: '#DC143C',
                stack: '总量',
                data: [5.4, 3.9, 3.6]
            },
            {
                name: 'CANHMN',
                type: 'bar',
                //color: '#DC143C',
                stack: '总量',
                data: [3.6, 6.8, 5]
            },
            {
                name: 'SZXNAL',
                type: 'bar',
                //color: '#DC143C',
                stack: '总量',
                data: [3.4, 3.8, 3.5]
            }
        ]
    }

];