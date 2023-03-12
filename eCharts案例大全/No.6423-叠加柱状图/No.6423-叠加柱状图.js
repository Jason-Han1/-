option = {
      grid: {
                left: "3%",
                //   right: "2%",
                bottom: "10%",
                top: "10%",
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                backgroundColor: '#FFF',
                extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3)',
                textStyle: {
                    color:'#000',
                },
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                top: '90%',
                left: '30%',
                itemWidth:10,  
                itemHeight:10,  
                data:['可用','不可用'],
                textStyle: {
                    color: '#8c8c8c',
                }
            },
            xAxis: {
                type: "category",
                boundaryGap:  true,
                data: ['06.20', '06.21', '06.22', '06.23', '06.24', '06.25'],
                show: true,
                axisLabel: {
                    // show: true,
                    textStyle: {
                        color: "#8c8c8c",
                        fontSize:10
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#8c8c8c',
                        
                    }
                },
                axisTick: {
                    show: true,
                    alignWithLabel: true,
                },
            },
            yAxis: {
                type: 'value',
                // name: '立方米',
                splitNumber : 10,
                axisLabel: {
                    textStyle: {
                        color: '#8c8c8c',
                        fontSize:10
                    }
                },
                axisLine: {
                    lineStyle: {    
                    color: 'transparent',
                    }
                },

                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#B4B3C0',
                        type: "dashed"
                    }
                }
            },
            series: [{
                name: '不可用',
                type: 'bar',
                stack:'使用情况',
                data: [39, 42, 57, 85, 119, 152],
                itemStyle:{
                     normal:{color:"rgba(52,177,95,0.9)"},
                },
                barWidth: "55%",

            },{
                name: '可用',
                type: 'bar',
                stack:'使用情况',
                data: [70, 69, 95, 145, 184, 215],
                itemStyle:{
                     normal:{color:"rgba(41,138,231,0.9)"},
                },
                barWidth: "55%",
            }
            ]
        };