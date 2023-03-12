option = {
            backgroundColor:'rgba(10, 0, 42, 1)',
           
            
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
                left: '40%',
                itemWidth:10,  
                itemHeight:4,  
                data:['费用金额','订单数量'],
                textStyle: {
                    color: '#8c8c8c',
                }
            },
            xAxis: {
                type: "category",
                boundaryGap:  true,
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov','Dec'],
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
                splitNumber : 5,
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
                 backgroundColor:'rgba(36, 53, 135, 0.298039215686275)',
                name: '费用金额',
                type: 'line',
                smooth: true,
                stack:'使用情况',
                data: [7000, 6900, 9500, 14500, 18400, 21500,25200,26500,23300,18300,13900,9600,],
                itemStyle:{
                     normal:{color:"rgba(52,177,95,0.9)"},
                },
               

            },{
                name: '订单数量',
                type: 'line',
                smooth: true,
                stack:'使用情况',
                data: [3000, 4200, 5700, 8500, 11900, 15200,17000,16600,14200,10300,6600,4800,],
                itemStyle:{
                     normal:{color:"rgba(41,138,231,0.9)"},
                },
               
            }
            ]
        }; 