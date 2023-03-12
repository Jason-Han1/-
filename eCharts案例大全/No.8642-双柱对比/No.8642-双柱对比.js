var labelData = ['2014年','2015年','2016年  ','2017年','2018年'];
var manData = [50, 28, 80, 65, 68];
var womanData = [50, 28, 40, 45, 38];
var grayBar = [100, 100, 100, 100, 100, 100];
option = {
    legend:{
        data:['地块调整面积（km²）','地块调整总数'],
        textStyle: {
            color: '#fff',
        },
    },
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
        gridIndex: 0,
        inverse: true,
        axisTick:{show: false, inside:false},
        axisLabel : {show: true},
        axisLine: {// Y轴轴线样式
            show: true,
            lineStyle:{
                color:'#fff', 
            }
        },
        splitLine: {
            show: false
        }
    },{
        type: 'value',
        gridIndex: 1,
        axisTick:{show: false}, //是否显示刻度
        axisLine: {// Y轴轴线样式
            show: true, // 是否显示X轴
            lineStyle:{
                color:'#fff', 
            }
        },
        axisLabel : {
            show: true //是否显示X轴内容
        },
        splitLine: {
            show: false
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
                show: true,
                lineStyle:{
                    color:'#fff', 
                }
            }
        },{
            type: 'category',
            gridIndex: 1,
            inverse: true,
            data: labelData,
            axisTick:{show:false},
            axisLabel : {
                interval: 0,
            },
            axisLine: {
                show: true, //是否显示轴线,
                lineStyle:{
                    color:'#fff', 
                }
            }
        },
    ],
    grid: [{
        top: 50,
        width: '40%',
        left: '4%',
        gridIndex: 0,
        bottom:'5%'
    }, {
        top: 50,
        left: '50%',
        gridIndex: 1,
        bottom:'5%',
        containLabel:true,
    }],
    color:['#2FACFA','#F5A623'],
    series: [
        /*背景*/
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'rgba(0, 246, 255, 0.5)'
                }
            },
            silent: true,
            xAxisIndex: 0,
            yAxisIndex: 0,
            barWidth: 20,
            barGap: '-100%', // Make series be overlap
            data: grayBar
        },
       {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'rgba(0, 246, 255, 0.5)'
                }
            },
            silent: true,
            xAxisIndex: 1,
            yAxisIndex: 1,
            barWidth: 20,
            barGap: '-100%', // Make series be overlap
            data: grayBar
        },
        
        /*数据*/
        {
            name: '地块调整面积（km²）',
            type: 'bar',
            z: 10,
            barWidth:'20',
            barCategoryGap:'20%',/*多个并排柱子设置柱子之间的间距*/
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle:{
                normal: {
                    show: true,
                    color: {
                        type: 'bar',
                        colorStops: [{
                            offset: 0.1,
                            color: '#FF8A00' // 0% 处的颜色
                        }, {
                            offset: 0.6,
                            color: '#FFF0A9' // 100% 处的颜色
                        }],
                        globalCoord: false, // 缺省为 false
                    },
                    label:{
                        show:true,
                        position:'left',
                        padding:-30,
                        formatter:function(v){
                            return v.value;
                        }
                    }
                }
            },
            data: womanData
        },
    
        {
            name: '地块调整总数',
            type: 'bar',
            z: 10,
            barWidth:'20',
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle:{
                normal: {
                    show: true,
                    color: {
                        type: 'bar',
                        colorStops: [{
                            offset: 0.6,
                            color: '#FFF0A9' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#FF8A00' // 100% 处的颜色
                        }],
                        globalCoord: false, // 缺省为 false
                    },
                    label:{
                        show:true,
                        position:'right',
                        padding:-30,
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
