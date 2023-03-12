var legendData =  ['1级风险', '3级风险'];
var ydata =  ['勐腊', '勐海', '景洪', ];
var arrData =  [85, 15, 20,];//1级风险
var arrData1  =  [20, 20, 20];//2级风险
var arrData2 = [15, 85, 80];//3级风险
option = {
    backgroundColor:'#000',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: '' // 默认为直线，可选为：'line' | 'shadow'
        },
        backgroundColor: 'rgba(7,22,50,1)',
        padding:[10,15],
         textStyle: {
            color: '#fff',
            fontSize: 22
        },
        formatter:function(params){
            
            return params[0].name+"<br>"+params[0].marker+params[0].seriesName+"<br/>"+params[2].marker+params[2].seriesName
        }
        
    },
    legend: {
        data:legendData,
        top:'1%',
         textStyle: {
            color: '#ccc',
            fontSize:22
        }
    },
    calculable: true,
    xAxis: [{
        type: 'value',
         axisLabel: {
            fontSize:22,
            color: '#fff',
            show:false

        },
        show:false,
         splitLine: {
            show: false,
             lineStyle:{
                color:'rgba(255,255,255,.4)'
            }
        }
    }],
    yAxis: [{
        type: 'category',
        data:ydata,
        show:false,
         axisLabel: {
            fontSize:22,
            color: '#fff'

        },
         splitLine: {
            show: false,
             lineStyle:{
                color:'rgba(255,255,255,.4)'
            }
        }
    }],
    series: [{
            name: '1级风险',
            type: 'bar',
            stack: '总量',
            barWidth: 80,
            hoverAnimation:false,
            emphasis:{
                itemStyle:{
                    color:'rgba(129,12,34,1)',
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(129,12,34,1)',
                    // borderColor: 'red',
                    borderWidth: 0,
                    
                    barBorderRadius:[40,0,0,40],
                    label: {
                        show: false,
                        position: 'insideRight'
                    }
                }
            },
            data:arrData
        },
        {
            name: 'test',
            type: 'bar',
            stack: '总量',
            barWidth: 80,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(129,12,34,1)' // 0% 处的颜色
                        }, {
                            offset:0.5,color:'rgba(129,12,34,1)'
                        },{
                            offset:0.5,color:'rgba(7,111,178,1)'
                        },{
                            offset: 1, color: 'rgba(7,111,178,1)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    
                    
                    label: {
                        show: false,
                        position: 'insideRight'
                    },

                }
            },
            data:arrData1
        },
        {
            name: '3级风险',
            type: 'bar',
            stack: '总量',
            emphasis:{
                itemStyle:{
                    color:'rgba(7,111,178,1)'
                }
            },
            barWidth: 80,
            itemStyle: {
                normal: {
                    color: 'rgba(7,111,178,1)',
                    // borderColor: '#22e7e9',
                    // borderWidth: 2,
                    borderWidth:0,
                    barBorderRadius:[0,40,40,0],
                    label: {
                        show: false,
                        position: 'insideRight'
                    }
                }
            },
            data: arrData2
        },
    ]
};
myChart.setOption(option);