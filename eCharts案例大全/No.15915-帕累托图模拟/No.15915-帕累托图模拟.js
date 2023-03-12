option = {
            title: {
                text: '帕累托图模拟',
                subtext:'数据纯属瞎编',
                left:'left',
            },
            tooltip: {
                trigger:'item',
                formatter:'{c}%'
                /*axisPointer:{
                    type:'line'
                }*/
            },
            legend: {
                data:['Quantity', {name:'Accumulative Share %',icon:'circle'}],
                icon:'roundRect',
                orient:'vertical',
                right:'14%',
                bottom:'60%'
            },
            xAxis: [
                {
                    splitLine:{
                        show:false
                    },
                    data: ['Issue A', 'Issue B', 'Issue C', 'Issue D', 'Issue E', 'Issue F', 'Issue G']
                },
                {
                    splitLine:{
                        show:false
                    },
                    boundaryGap:false,
                    axisLabel:{
                        show:false
                    },
                    data:['Issue A', 'Issue B', 'Issue C', 'Issue D', 'Issue E', 'Issue F', 'Issue G','total']
                }
            ],
            yAxis: [
                {
                    type:'value',
                    max:100,
                    axisLabel:{
                        show:false
                    },
                    axisTick:{
                        show:false
                    },
                    splitLine:{
                        show:false
                    }
                },
                {
                    type:'value',
                    axisLabel:{
                        show:false
                    },
                    axisTick:{
                        show:false
                    },
                    splitLine:{
                        show:false
                    }
                }
            ],
            series: [
                {
                    name:'Quantity', 
                    type:'bar',
                    xAxisIndex:0,
                    yAxisIndex:0,
                    barCategoryGap:'10%',
                    silent:true,
                    label:{
                        normal:{
                            show:true,
                            position:'top',
                            //formatter:'{c}
                            textStyle:{
                                fontWeight:'bold',
                                fontSize:20
                            }
                        }
                    },
                    data:[56, 44, 38, 25, 20, 12, 7]
                },
                {
                    name:'Accumulative Share %', 
                    type:'line',
                    xAxisIndex:1,
                    yAxisIndex:1,
                    smooth:true,
                    clipOverflow:false,
                    symbolSize:9,
                    itemStyle:{
                        normal:{
                            //color:,
                            //borderColor:,
                            borderWidth:3,
                        }
                    },
                    lineStyle:{
                        normal:{
                            //color:,
                            width:4,
                        }
                    },
                    data:[0, 28, 50, 68, 81, 91, 97,100]
                }
            ]
        };
