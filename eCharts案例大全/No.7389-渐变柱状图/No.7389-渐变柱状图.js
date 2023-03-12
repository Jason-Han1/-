option = {
                color:['#1C86F1'],
                backgroundColor:'#082560',
                legend: {
                    textStyle:{
                        color:'#9B9B9B'
                    },
                    right:37,
                    top: 22,
                },
                tooltip: {},
                xAxis: {
                    type: 'category',
                    data: ['2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12'],
                    axisLine:{
                        lineStyle:{
                            color:'#657CA8'
                        }
                    },
                    axisTick:{
                        show:false
                    },
                    axisLabel:{
                        color:'#eeeeee',
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
                        show:false
                    },
                    axisLabel:{
                        color:'#eee',
                    },
                },
                series: [
                    {
                        type: 'bar',
                        barWidth:20,
                        data: [100,78,56,124,67,65,95],
                        label: {
                            show: true,
                            position: 'top',
                            textStyle:{
                                color:'#ffffff'
                            }
                        },
                        itemStyle:{
                            normal:{
                                color: function (params){
                                    var colorList = [
                                        ['#f56868','transparent'],
                                        ['#41ccba','transparent'],
                                        ['#a582ea','transparent'],
                                        ['#f5c379','transparent'],
                                        ['#b4c6cc','transparent'],
                                        ['#74d28c','transparent'],
                                        ['#f4966e','transparent'],
                                        ['#64b2ef','transparent'],
                                    ];
                                    var index=params.dataIndex;
                                    if(params.dataIndex >= colorList.length){
                                            index=params.dataIndex-colorList.length;
                                    }
                                    return new echarts.graphic.LinearGradient(0, 0, 0, 1,
                                        [
                                            {offset: 0, color: colorList[index][0]},
                                            {offset: 0.5, color: colorList[index][0]},
                                            {offset: 1, color: colorList[index][1]},
                                        ]);
                                }
                            }
                        }
                    }
                ]
            };