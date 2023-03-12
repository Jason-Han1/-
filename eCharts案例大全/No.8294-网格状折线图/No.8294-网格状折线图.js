option = {
            title: {
                text: '热线人工服务时长感知',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 14,
                    color: '#000'
                },
                left: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            legend: {
                icon: 'rect',
                itemWidth: 18,
                itemHeight: 2,
                itemGap: 13,
                data: ['坐席平均通话时长'],
                right: '4%',
                textStyle: {
                    fontSize: 12,
                    color: '#000'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                splitLine: {
                    show: true,
                    lineStyle:{
                        color: ['#f2f2f2'],
                        width: 1,
                        type: 'solid'
                    }
                },
                boundaryGap: false,
                axisLabel: {
                    margin: 5,
                    interval:0,
                    color:'#999',
                    textStyle: {
                        fontSize: 12
                    }
                },
                axisPointer:{
                    show:true
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#f2f2f2'
                    }
                },
                data: ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
            },{
                type: 'category',
                splitLine: {
                    show: true,
                    lineStyle:{
                        color: ['#f2f2f2'],
                        width: 1,
                        type: 'solid'
                    }
                },
                boundaryGap: false,
                axisLabel: {
                    show:false,
                    interval:0,
                },
                axisPointer:{
                    show:false
                },
                axisLine: {
                    show:false,
                },
                axisTick: {
                    show: false
                },
                splitNumber: 20,
                z: 20,
                data: ['13:30','13:20','13:30','13:30', '13:35','13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35','13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35','13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35',]
            }],
            yAxis: [{
                type: 'value',
                name:'分钟',
                splitLine: {
                    show: true,
                    lineStyle:{
                        color: ['#f2f2f2'],
                        width: 1,
                        type: 'solid'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show:false,
                    lineStyle: {
                        color: '#999'
                    }
                },
                splitNumber: 6,
                max:30,
                axisLabel: {
                    interval:3,
                    align:'left',
                    margin:40,
                    color:'#999',
                    textStyle: {
                        fontSize: 12,
                    } ,
                    formatter(params){
                        if(params === 30){
                            return `${params}以上`
                        }
                        return params
                    },
                },
            },{
                type: 'category',
                splitLine: {
                    show: true,
                    lineStyle:{
                        color: ['#f2f2f2'],
                        width: 1,
                        type: 'solid'
                    }
                },
                boundaryGap: false,
                axisLabel: {
                    show:false,
                    interval:0,
                },
                axisPointer:{
                    show:false
                },
                axisLine: {
                    show:false,
                },
                axisTick: {
                    show: false
                },
                splitNumber: 20,
                z: 20,
                data: ['13:00','13:00','13:00', '13:05', '13:10','13:00', '13:05', '13:10','13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35','13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35',]
            }],
            series: [{
                name: '坐席平均通话时长',
                type: 'line',
                smooth: true,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        color:"#DF3017",
                        width: 1
                    }
                },
                areaStyle: {
                    normal: {
                        color:{
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgba(240,164,153, 1)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(254,249,248, 0)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        },
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#EA775B',
                    },
                    emphasis:{
                        show:true,
                        borderWidth:1,
                    } ,
                },
                data: ['2', '6', '9', '3', '26', '7', '12', '3', '20', '3', '7', '12', ],
            } ]
        };