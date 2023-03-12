app.title = '热度';
var category = ['201710&201810','201711&201811','201712&201812','201801&201901','201802&201902','201803&201903','201804&201904',
'201805&201905','201806&201906']
var xdata=['201907','201908','201909']

var w1='15%',w3='8%',w4='15%',m1='45%';


option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow',        // 默认为直线，可选为：'line' | 'shadow'
            shadowStyle :{
                color:'rgba(150,150,150,.1)'
            }
        },
        formatter:function(params ){
           var html='';
           if(params.length>1){
               for(var obj of params){
                    if(obj.value>0){
                        html += obj.seriesName+'：'+obj.value+'<br>';
                    }
               }
               return html;
           }
        }
    },
    
    legend: {
        show:true,
       // data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
    },
    grid: [{
        left: '8%',
        right:'30%',
        top:80,
    }, {
        left: '70%',
        right:'5%',
        top:80,
    }, {
        left: '70%',
        right:'5%',
        top:80,
    }],
     xAxis: [
        {
            type: 'category',
            data: category,
            axisLine: {
                lineStyle: {
                    color: '#B4B4B4'
                }
            },
            axisTick:{
                show:false,
            },
            
            axisLabel: {
                show: true,
                interval :0,
                rotate:20,
                formatter: function (value, index) {
                    console.log(value.indexOf('&'));
                    if(value.indexOf('&')<0){
                        return '';
                    }else{
                        //varlue=value.replace(/&/g,'/n');
                        return value
                    }
                }
            },
            splitLine:{
                show:true,
              lineStyle:{
                  type:'dashed'
              }  
            },
            
        },
       
        {
            type: 'category',
            data: xdata,
            gridIndex:1,
            boundaryGap :true,
            axisLine: {
                lineStyle: {
                    color: '#B4B4B4'
                }
            },
            axisTick:{
                show:false,
            },
            axisLabel: {
                show: false,
            },
            z:10,
            
        },{
            type: 'category',
            data: xdata,
            gridIndex:2,
            
            boundaryGap :true,
            axisLine: {
                lineStyle: {
                    color: '#B4B4B4'
                }
            },
            axisTick:{
                show:false,
            },
            axisLabel: {
                show: true,
            },
            
            splitLine:{
                show:true,
              lineStyle:{
                  type:'dashed'
              }  
            },
            z:10,
        }
    ],
    yAxis : [
        {
            
            name: '价格',
            type : 'value',
            splitLine:{
                show:false,
            }
        },
        {
            type : 'value',
            max:1400,
            
            axisLine: {
                show:false,
            },
            axisTick:{
                show:false,
            },
            axisLabel: {
                show: false,
            },
        },
        {
            name: '热度',
            gridIndex:1,
            max:1400,
            type : 'value',
            position:'right',
            offset: 1,
        },
        {
            
            gridIndex:2,
            max:1400,
            type : 'value',
            
            axisLine: {
                show:false,
            },
            axisTick:{
                show:false,
            },
            axisLabel: {
                show: false,
            },
        },
    ],
    series : [
        {
            name:'2018一线热度',
            yAxisIndex:1,
            type:'bar',
            barWidth : w1,
            stack:'2018hot',
            // itemStyle:{
            //     shadowColor: 'rgba(0,0,0,.2)',
            //     shadowBlur: 2,
            //     shadowOffsetX :2,
            //     barBorderRadius: [20,20,0,0]
            // },
            data:[310,323,290,320, 332, 301, 270, 340, 330]
        },
        
        {
            name:'一线热度',
            yAxisIndex:1,
            type:'bar',
            barWidth :w1,
            // label:{
            //     show:true,
            //     position:'bottom',
            //     offset:[-10,25],
            //     rotate :80,
            //     formatter:'{a}'  ,
            //     color:'#000'
            // },
            stack:'2019hot',
            data:[340,320,342,345, 300, 323, 312, 359, 321]
        },
        
        {
            name:'2018二线热度',
            yAxisIndex:1,
            type:'bar',
            barWidth :w1,
            // itemStyle:{
            //     shadowColor: 'rgba(0,0,0,.2)',
            //     shadowBlur: 2,
            //     shadowOffsetX :2,
            //     barBorderRadius: [20,20,0,0]
            // },
            stack:'2018hot',
            data:[120,110,125,120, 132, 101, 134, 90, 102]
        },
        {
            name:'二线热度',
            yAxisIndex:1,
            type:'bar',
            barWidth :w1,
            // label:{
            //     show:true,
            //     position:'bottom',
            //     offset:[-10,25],
            //     rotate :80,
            //     formatter:'{a}'  ,
            //     color:'#000'
            // },
            stack:'2019hot',
            data:[220,234,234,235, 234, 236, 246, 190, 235]
        },
        
        {
            name:'2018其他热度',
            yAxisIndex:1,
            type:'bar',
            barWidth :w1,
            // itemStyle:{
            //     shadowColor: 'rgba(0,0,0,.2)',
            //     shadowBlur: 2,
            //     shadowOffsetX :2,
            //     barBorderRadius: [20,20,0,0]
            // },
            stack:'2018hot',
            data:[123,134,145,113, 142, 191, 100, 130, 90]
        },
        
        {
            name:'其他热度',
            yAxisIndex:1,
            type:'bar',
            barWidth :w1,
            // label:{
            //     show:true,
            //     position:'bottom',
            //     offset:[-10,25],
            //     rotate :80,
            //     formatter:'{a}'  ,
            //     color:'#000'
            // },
            stack:'2019hot',
            data:[143,153,132,134, 167, 123, 145, 123, 123]
        },
        
        
          //预测
        
        {
            name:'一线热度',
            barWidth : w4,
            xAxisIndex:1,
            yAxisIndex:2,
            type:'bar',
            itemStyle:{
                
                borderWidth:0,
               color:'#ef6858'  
            },
            z:10,
            data:[134, 0, 0]
        },
        
        {
            name:'二线热度',
            barWidth : w4,
            xAxisIndex:1,
            yAxisIndex:2,
            type:'bar',
            itemStyle:{
                borderWidth:0,
                    color:'#d1a810'  
                
            },
            z:10,
            data:[100, 0, 0]
        },
        
        {
            name:'其他热度',
            barWidth : w4,
            xAxisIndex:1,
            yAxisIndex:2,
            type:'bar',
            itemStyle:{
                borderWidth:0,
                color:'#da5c6c'
            },
            z:10,
            barGap:m1,
            data:[56, 0, 0]
        },
        
        
         {
            name:'一线热度',
            barWidth : w4,
            xAxisIndex:2,
            yAxisIndex:3,
            type:'bar',
            itemStyle:{
                borderType:'dashed',
                borderWidth:2,
                color:'transparent',
                borderColor:'#ef6858'
            },
            
            // label:{
            //     show:true,
            //     position:'bottom',
            //     offset:[-10,25],
            //     rotate :80,
            //     formatter:function(params){
            //         if(params.value>0){
            //         return params.seriesName;
            //         }else{
            //             return ''
            //         }
            //     } ,
            //     color:'#000'
            // },
            z:10,
            data:[194, 250, 290]
        },
        
        {
            name:'二线热度',
            barWidth : w4,
            xAxisIndex:2,
            yAxisIndex:3,
            type:'bar',
            itemStyle:{
                borderType:'dashed',
                borderWidth:2,
                color:'transparent',
                borderColor:'#d1a810'
            },
            // label:{
            //     show:true,
            //     position:'bottom',
            //     offset:[-10,25],
            //     rotate :80,
            //     formatter:function(params){
            //         if(params.value>0){
            //         return params.seriesName;
            //         }else{
            //             return ''
            //         }
            //     } ,
            //     color:'#000'
            // },
            z:10,
            data:[190, 180, 128]
        },
        
        {
            name:'其他热度',
            barWidth : w4,
            xAxisIndex:2,
            yAxisIndex:3,
            type:'bar',
            itemStyle:{
                borderType:'dashed',
                borderWidth:2,
                color:'transparent',
                borderColor:'#da5c6c'
            },
            // label:{
            //     show:true,
            //     position:'bottom',
            //     offset:[-10,25],
            //     rotate :80,
            //     formatter:function(params){
            //         if(params.value>0){
            //         return params.seriesName;
            //         }else{
            //             return ''
            //         }
            //     } ,
            //     color:'#000'
            // },
            
            z:10,
            barGap:m1,
            data:[156, 168, 145]
        },
        
        
        
        {
            name:'一线价格',
            type:'line',
            symbol: 'circle',
            symbolSize: 8,
            z:9,
            itemStyle:{
              color:'#ad123d',
              borderColor:'#fff',
              borderWidth:1,
            },
            data:[28,29,27,27, 26, 28, 25, 26, 25]
        },
        {
            name:'二线价格',
            type:'line',
            symbol: 'circle',
            symbolSize: 8,
            z:9,
            itemStyle:{
              color:'#5d403a',
              borderColor:'#fff',
              borderWidth:1,
            },
            data:[18,17,18,17, 18, 17, 19, 15, 18]
        },
        {
            name:'其他价格',
            type:'line',
            symbol: 'circle',
            symbolSize: 8,
            z:9,
            itemStyle:{
              color:'#335368',
              borderColor:'#fff',
              borderWidth:1,
            },
            data:[14,13,15,13, 14, 15, 14, 16, 14]
        },
        
        {
            name:'2018一线价格',
            type:'line',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle:{
              color:'#cc616b',
              borderColor:'#fff',
              borderWidth:1
            },
            lineStyle:{
              type:'dotted'  
            },
            z:9,
            data:[24,23,23,23, 24, 28, 22, 24, 27]
        },
        {
            name:'2018二线价格',
            type:'line',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle:{
              color:'#877667',
              borderColor:'#fff',
              borderWidth:1
            },
            lineStyle:{
              type:'dotted'  
            },
            z:9,
            data:[17,16,14,18, 17, 21, 18, 17, 19]
        },
        {
            name:'2018其他价格',
            type:'line',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle:{
              color:'#4b7194',
              borderColor:'#fff',
              borderWidth:1,
            },
            lineStyle:{
              type:'dotted'  
            },
            z:9,
            data:[15,14,15,14, 16, 14, 15, 17, 15]
        },
        
      
    ],
    color:['#f3876f','#ef6858','#fad852','#d1a810','#ee87a4','#da5c6c','#a2cbde','#63a7c6','#acd4ca','#5ea7a0','#cba7cb','#8c749e']
};
