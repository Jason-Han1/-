option = {
        //   color:["#4d82de","#4b80dc","#4ebc97","#4e83df"],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                show:false,
                data:['总值','行','行辅助','商','商辅助','校','汇总值同比']
            },
            grid: {
                top:"20%",
                left: '3%',
                right: '4%',
                bottom: '10%',
            },
            grid: {
                x: '0%',
                y: '15%',
                x2: '20%',
                y2: '15%',
                height:'70%',
//                    containLabel: true
            },
            xAxis:  {
                type: 'category',
                axisLine:{
                    lineStyle:{
                        color:"#619bc1",
                        width:0,
                        type:"solid"
                    }
                },
                axisTick:{
                    show:false
                },
                axisLabel:{
                    show:true,
                    color:"#333",
                    interval: '0'
                },
                data: ['2017-04','2017-05','2017-06','2017-06']
            },
            yAxis: [
                {
                    show:false,
                    type: 'value',
//                        inverse:true
                }
               
            ],
            series : [
                  {
                    name:'总值',
                    type:'bar',
                    barWidth:30,
                    barGap:0,
                  
                    label:{
                        normal:{
                            show:true,
                            position:"top",
                            color:"#ffffff"
                        }

                    },
                
                  data:[100, 100, 100,100].map((item, i) => {
                itemStyle = {
                    color: "#ffaa3d"
                }
                return {
                    value: item,
                    itemStyle: itemStyle
                };
            }),
                },
                {
                    name:'总值',
                    type:'bar',
                    barWidth:30,
                  
                    label:{
                        normal:{
                            show:true,
                            position:"top",
                            color:"#ffffff"
                        }

                    },
                
                  data:[100, 100, 100,100].map((item, i) => {
                itemStyle = {
                    // color: i != 2 ? "#4d82de" : "#4ebc97"
                    
                }
                itemStyle = {
                    color: {
                                            type: 'linear',
                                            x: 1,
                                            y: 0,
                                            x2: 0,
                                            y2: 1,
                                            colorStops: [{
                                                offset: 0, color: '#0d95fc' // 100% 处的颜色
                                            }, {
                                                 offset: 1, color: '#65caf6' // 0% 处的颜色
                                            }],
                                        }
                }
                return {
                    value: item,
                    itemStyle: itemStyle
                };
            }),
                },
               
         
                
              

            ]
        };
     
   
        