var labelData = ['监测时间','水位','流量','泄量'];
var manData = [50, 28, 80, 65];
var womanData = [-50, -28, -40, -45];
option = {
    backgroundColor:'#fff',
    legend:{data:['值1','值2']},
    // tooltip（提示框组件）
    tooltip: {
        //trigger(触发类型)，可选'item','axis','none'
        trigger: 'axis',
        axisPointer: {
            //指示器类型,可选'line','shadow','cross'
            type: 'shadow'
        },
        // 自定义提示内容
        formatter: function(a){
            var v = a[0];
            return v.name + '<br/>' + v.marker +v.seriesName + '：'+ Math.abs(v.value);
        }
    },
    xAxis: [{
        type: 'value',
        min:-100,max:0,
        gridIndex: 0,
           axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                position: 'top',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#B2B2B2',
                        fontSize: 12,
                    },
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#1F2022',
                        width: 1,
                        type: 'solid',
                    },
                }
    },{
        type: 'value',
        gridIndex: 1, min:0,max:100,
         axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                position: 'top',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#B2B2B2',
                        fontSize: 12,
                    },
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#1F2022',
                        width: 1,
                        type: 'solid',
                    },
                }
    }],
    yAxis: [{
            type: 'category',
            gridIndex: 0,
            inverse: true,
            data: labelData,
            axisTick:{show:false},
            axisLabel : {show:false},
            axisLine: {// Y轴轴线样式
                show: false,
                lineStyle:{
                    color:'#000', 
                }
            }
        },{
            type: 'category',
            gridIndex: 1,
            inverse: true,
            data: labelData,
            axisTick:{show:false},
            axisLabel : {
            },
            axisLine: {
                show: false //是否显示轴线
            }
        }
    ],
    grid: [{
        top: 50,
        width: '40%',
        left: 35,gridIndex: 0,
    }, {
        top: 50,
        left: '50%',gridIndex: 1,
    }],
    color:['#2FACFA','#F5A623'],
    series: [
        {
            name: '值1',
            type: 'bar',
            barWidth:'30',
            gridIndex: 0,
            itemStyle:{
                normal: {
                    show: true,
                    color: '#5de3e1',
                    barBorderRadius:50,
                    borderWidth:0,
                    borderColor:'#333',
                    label:{
                        show:true,position:'left',
                        formatter:function(v){
                            return (v.value * -1);
                        }
                    }
                }
            },
            data: womanData
        },
        {
            name: '值2',
            type: 'bar',
            barWidth:'30',
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle:{
                normal: {
                    show: true,
                    color: '#8A3EEB',
                    barBorderRadius:50,
                    borderWidth:0,
                    borderColor:'#333',
                    label:{
                        show:true,position:'right',
                        formatter:function(v){
                            return v.value;
                        }
                    }
                }
            },
            data: manData
        }
      
    ]
};
