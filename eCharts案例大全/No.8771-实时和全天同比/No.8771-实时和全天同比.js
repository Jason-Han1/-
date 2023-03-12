var data=[18632,16325,23561] //今日销售，同比实时销售，同比全天销售


option = {
        backgroundColor:'#0e2147',
        grid: {
            left: '11%',
            top:'12%',
            right: '0%',
            bottom: '8%',
            containLabel: true
        },
        xAxis: [{
            show: false,
        }],
        yAxis: [{
                axisTick:'none',
                axisLine:'none',
                offset:'27',
                axisLabel: {
                        textStyle: {
                            color: '#ffffff',
                            fontSize:'16',
                        }
                    },
                data: ['同期销售','本期销售']
            }, {
                axisTick:'none',
                axisLine:'none',
                axisLabel: {
                        textStyle: {
                            color: '#ffffff',
                            fontSize:'16',
                        }
                    },
                //data: ['12567'],
                data: [data[0]+'元','同比(实时)：'+((data[0]-data[1])*100/data[1]).toFixed(2)
                                +'%\n同比(全天)：'+((data[0]-data[2])*100/data[2]).toFixed(2)+'%']
            },{
               
                axisLine:{
                  lineStyle:{
                    color:'rgba(0,0,0,0)'
                  }
                },
                data: [],
        }],
        series: [{
            name: '条',
            type: 'bar',
            stack:'圆',
            yAxisIndex: 0,
            data: [data[1],data[0]],
            barWidth: 12,
            itemStyle: {
                normal: {
                    color: '#0096f3'
                }
            },
            z: 2
        },{
            name: '内圆',
            type: 'scatter',
            stack:'圆',
            yAxisIndex: 0,
            data: [data[1]/100000,data[0]/100000],
            label:{
                  normal:{
                    show:true,
                    position:'top',
                    distance:10,
                    formatter:function(param){
                      return (param.value*100000).toFixed(0) + '元';
                    },
                    textStyle:{
                       color: '#ffffff',
                       fontSize:'16',
                    }
                  }
            },
            
            yAxisIndex: 2,
            symbolSize: 14,
            itemStyle: {
                normal: {
                     borderColor: '#fff',
                         borderWidth:3 ,
                    color: '#0096f3',
                    opacity: 1,
                }
            },
            z: 2
        }, {
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [data[2]*0.99,0],
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: '#0e2147',
                    barBorderRadius: 5,
                }
            },
            z: 1
        }, {
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: [data[2],0],
            barWidth: 24,
            itemStyle: {
                normal: {
                    color: '#0096f3',
                    barBorderRadius: 5,
                }
            },
            z: 0
        }, 
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0,0],
            yAxisIndex: 2,
            symbolSize: 30,
            itemStyle: {
                normal: {
                    color: '#0096f3',
                    opacity: 1,
                }
            },
            z: 2
        }]
    };