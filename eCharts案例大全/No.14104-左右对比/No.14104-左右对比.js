var labelData = ['65岁以上  ','55-64岁  ','45-54岁  ','35-44岁  ','25-34岁  ','15-24岁  ','5-14岁  ','0-4岁  '];
var manData = [50, 28, 80, 65, 68];
var womanData = [-50, -28, -40, -45, -38];
option = {
    backgroundColor:'#fff',
    legend:{data:['女性年龄分布','男性年龄分布']},
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
        axisTick:{show: false, inside:false},
        axisLabel : {show: false},
        axisLine: {// Y轴轴线样式
            show: false,
            lineStyle:{
                color:'#000', 
            }
        },
        splitLine: {
            show: false
        }
    },{
        type: 'value',
        gridIndex: 1, min:0,max:100,
        axisTick:{show: false}, //是否显示刻度
        axisLine: {// Y轴轴线样式
            show: false, // 是否显示X轴
            lineStyle:{
                color:'#000', 
            }
        },
        axisLabel : {
            show: false //是否显示X轴内容
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
            name: '女性年龄分布',
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
            name: '男性年龄分布',
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
