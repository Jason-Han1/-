option = {
                color:['#1C86F1'],
                backgroundColor:'rgba(7,37,96,1)',
                legend: {
                    textStyle:{
                        color:'#9B9B9B'
                    },
                    left: 'center',
                    itemGap:50,
                    top: 22,
                    data:['单位总数','接入物联设备数']
                },
                tooltip: {},
                xAxis: {
                    type: 'category',
                    data: ['华东地区1','华东地区2','华东地区3','华东地区4','华东地区5','华东地区6'],
                    axisLine:{
                        lineStyle:{
                            color:'#657CA8'
                        }
                    },
                    axisTick:{
                        show:false
                    },
                    axisLabel:{
                        color:'#F3F3F3',
                        rotate:45,
                    },
                },
                yAxis: {
                    axisLine:{
                        lineStyle:{
                            color:'#657CA8'
                        }
                    },
                    axisTick:{
                        show:false
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            opacity:0.2
                        }
                    },
                    axisLabel:{
                        color:'#F3F3F3',
                    },
                },
                series: [
                    {
                        type: 'bar',
                        barWidth:18,
                        color:'#144961',
                        data: [203,168,59,44,3,7],
                        label: {
                            show: true,
                            position: 'top',
                            color:'#fff'
                        },
                    },
                    {
                        name:'单位总数',
                        data: [203,168,59,44,3,7],
                        type: 'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 13,
                        itemStyle: {
                            color: "#228FFE",
                            borderColor: "#fff",
                            borderWidth: 1,
                        },
                        lineStyle: {
                            normal: {
                                width:1,
                                color: "#228FFE",
                            }
                        }
                    },
                    {
                        name:'接入物联设备数',
                        data: [164,120,55,2,1,7],
                        type: 'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 13,
                        itemStyle: {
                            color: "#00D98B",
                            borderColor: "#fff",
                            borderWidth: 1,
                        },
                        lineStyle: {
                            normal: {
                                width:1,
                                color: "#00D98B",
                            }
                        }
                    }
                ]
            };