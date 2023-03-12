// Generate data
var category = ['2019-12-01','2019-12-02','2019-12-03','2019-12-04','2019-12-05',
];
var dottedBase = [];
var lineData = [2869,2657,3288
                ,3698,3878
                ];
var barData = [460,550,750
                ,850,800
                ];
var rateData = [];               
32808
for (var i = 0; i < 33; i++) {
    // var date = i+2001;
    // category.push(date)
    var rate=barData[i]/lineData[i]*1000;   //计算计划量比率
    rateData[i] = rate.toFixed(2);
}


// option
option = {
    title: {
        // text: '供气用量对比分析', 
        x: 'center',
        top: "3%",
        textStyle:{
            color:'#fff',
            fontSize:18,
            fontWeight:'normal',
        },
        
    },
    backgroundColor: '#18315A',
    tooltip: {     //鼠标滑过数据的展示形式
        trigger: 'axis',
        backgroundColor:'rgba(255,255,255,0.1)',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#7B7DDC'
            }
        }
    },
    legend: {
        data: ['实际用量', '计划量',],  // 控制标签的位置
        textStyle: {
            color: '#ccc'  //标签颜色
        },
        top:'7%',
        right:'10%'
    },
    grid:{
        left:'center',  // 控制图表的大小位置
        width:'90%',
        top:'10%',
    },
    xAxis: {
        data: category,  //x轴展示数据
        axisLine: {
            lineStyle: {
                color: '#B4B4B4'  //x轴坐标颜色
            }
        },
        axisTick:{
            show:true,  //x轴坐标标注
        },
        axisLabel:{
            textStyle:{
                color:"#ccc",
                fontSize:16
            }
        }
    },
    yAxis: [{
        name:'单位：万m³',  //y轴单位
        splitLine: {
            show: true,
            lineStyle:{
                    type:'dashed',
                    opacity:0.6  //设置透明度
                    
                }//  y轴虚线
            
        },
        axisLine: {
            lineStyle: {
                color: '#B4B4B4',  //y轴显示样式
            }
        },
        
        axisLabel:{
            formatter:'{value} ',
            textStyle:{
                 color:"#ccc",
                fontSize:16
            }
        }
    },
        {

        splitLine: {show: false},   //两个y轴，所以分别设置两个y轴的数据
        axisLine: {
            lineStyle: {
                color: '#B4B4B4',
            }
        },
        axisLabel:{
            formatter:'{value} %',
        }
    }],
    
    series: [{
        name: '计划量',   //曲线展示设置  name要和legend对应
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',  //曲线链接点的显示形式
        symbolSize: 8,
        yAxisIndex: 1,
        itemStyle: {
                normal: {
                color:'#F02FC2'},// 设置曲线颜色
        },
        data: rateData  
    }, 
    
    {
        name: '实际用量',  //柱状图显示样式
        type: 'bar',
        barWidth: 20, //设置柱状的宽度
        itemStyle: {
            normal: {
                barBorderRadius: 5,  //圆角
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#956FD4'},  //柱状图渐变颜色
                        {offset: 1, color: '#3EACE5'}
                    ]
                )
            }
        },
        data: barData
    }
   ]
};