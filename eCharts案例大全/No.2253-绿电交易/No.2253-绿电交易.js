var colors = [
     {
    type: 'linear',
    x: 0, x2: 1, y: 0, y2: 0,
    colorStops: [{
        offset: 0,
        color: '#218bd1'
    }, {
        offset: 0.5,
        color: '#7EC3F0'
    }, {
        offset: 0.5,
        color: '#1985cd'
    }, {
        offset: 1,
        color: '#1985cd'
    }]
},
{
    type: 'linear',
    x: 0, x2: 1, y: 0, y2: 0,
    colorStops: [{
        offset: 0,
        color: '#6DD4E5'
    }, {
        offset: 0.5,
        color: '#6DD4E5'
    }, {
        offset: 0.5,
        color: '#0EADC9'
    }, {
        offset: 1,
        color: '#218bd1'
    }]
},

 
];
 
 
var barWidth =15;
 
option = {
    backgroundColor:'010d3a',
    xAxis: {
        data: ['一月', '二月', '三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
    },
     legend: {
        data: ['风力', '电力'],
        textStyle: {
            color: 'white', //坐标的字体颜色
        },
    },
    yAxis: {
        name:'单位KW·W',
        max:3000,
        type: 'value',
        interval:'1000'
    },
    series: [
        {
        z:1,
        name:'风力',
        type: 'bar',
        barWidth:barWidth,
        data:[2200,2200,2200,2200,2200,2200,2200,2200,2200,2200,2200,2200],
        itemStyle:{
            normal:{
                color:colors[0]
            }
        },
    }
    ,
    {
        z:2,
        name:'左底部',
        type:'pictorialBar',
       data:[2200,2200,2200,2200,2200,2200,2200,2200,2200,2200,2200,2200],
        symbol :'diamond',
        symbolOffset:['-70%','50%'],
        symbolSize:[barWidth,10],
        itemStyle:{
            normal:{
                color:colors[0]
            }
        },
    }
    ,
    {
        z:3,
        name:'左上部1',
        type:'pictorialBar',
        symbolPosition:'end',
    //   data:[2200,2200,2200,2200,2200,2200,2200,2200,2200,2200,2200,2200],
        symbol :'diamond',
        symbolOffset:['-70%','-67%'],
        symbolSize:[barWidth,10],
        itemStyle:{
            normal:{
                borderColor: '#218bd1',
                borderWidth: 2,
                color:'#218bd1'
            }
        },
    },
    
    {
        name:'左上部2',
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'top',
                
                fontSize: 16,
                color: '#218bd1',
                offset: [-30, -5]
            }
        },
        itemStyle: {
            color: 'transparent'
        },
        tooltip: {
 
        },
       data:[2200,2200,2200,2200,2200,2200,2200,2200,2200,2200,2200,2200],
    },
    
    {
        z:1,
         name:'电力',
        type: 'bar',
        barWidth:barWidth,
        data:[1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500],
        itemStyle:{
            normal:{
                color:colors[1]
            }
        },
    }
    ,
    {
        z:2,
        name:'右底部',
        type:'pictorialBar',
        data :[1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500],
        symbol :'diamond',
        symbolOffset:['50%','50%'],
        symbolSize:[barWidth,10],
        itemStyle:{
            normal:{
                color:colors[1]
            }
        },
    }
    ,
    {
        z:3,
        name:'右上部1',
        type:'pictorialBar',
        symbolPosition:'end',
        data:[1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500],
        symbol :'diamond',
        symbolOffset:['50%','-50%'],
        symbolSize:[barWidth,10],
        itemStyle:{
            normal:{
                borderColor: '#2edaf8',
                borderWidth: 2,
                color:'#2edaf8'
            }
        },
    },
    
    {
        name:'右上部2',
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'top',
                
                fontSize: 16,
                color: '#2edaf8',
                offset: [-30, -5]
            }
        },
        itemStyle: {
            color: 'transparent'
        },
        tooltip: {
 
        },
        data:[1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500],
    },
    
   
    
  
    
    ]
};