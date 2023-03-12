option = {
    title: {
        text: '动态加载数据',
        subtext: '作者 : 红恋落故衣'
    },
    
    color:['red','black'],
    
    tooltip: {
        trigger: 'axis',
        textStyle:{
            formatter:'parseInt({value})'
        }
    },
    //图表位置
    grid:{
        left:15,
        top:60,
        right:20,
        bottom:200,
        containLabel:true
    },
    
    legend: {
        data:['电压','电流']
    },
    
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    
    xAxis:  {
        position:'bottom',//轴位置
        offset:30,//坐标轴偏移
        name:'时间',//名称
        nameLocation:'center',//坐标轴名称居中
        nameGap:25,//距离x轴距离
        nameTextStyle:{
            color:'red',//字体颜色
            fontStyle:'oblique',//坐标轴名称文字字体的风格
            fontWeight:'bold',//坐标轴名称文字字体的粗细
            fontFamily:'楷体',
            fontSize:25,
            align:'right',
            verticalAlign: 'middle',
        },
        nameRotate :20,//名称翻转角度
        splitNumber:'10',
        inverse:true,//反向
        type: 'category',//类型
        boundaryGap: false,
        gridIndex:0,
        data:['','','','','','','']
    },
    
    yAxis: {
         
        name:'数值',
        nameGap:25,
        nameLocation:'center',
        type: 'value',
        splitNumber:10,//坐标轴的分割段数
        minInterval:1,//自动计算的坐标轴最小间隔大小
        boundaryGap: [0,0.1],
    },
    
    series: [
        {
            name:'电压',
            type:'line',
            smooth:true,
            
            
            data:[0,0,0,0,0,0,0]
           
        },
        
        {
            name:'电流',
            type:'line',
            smooth:true,
             
           
            data:[10,50,80,10,70,70,50]
           
        },
    ]
};


var i=8;
// 循环控制数据
setInterval(function(){
    
    option.xAxis.data.shift();
    option.xAxis.data.push('第'+i+'天');
    
     option.series[0].data.shift();
   
 
    option.series[1].data.shift();
    option.series[1].data.push(Math.random()*100);
    
    myChart.setOption(option);
    
    if(i==365){
        i=0;
    }else{
        i++;   
    }
    
},2000)
