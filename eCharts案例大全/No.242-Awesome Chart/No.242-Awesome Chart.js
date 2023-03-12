// 多系列无法定位
 
 
 
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
{
    type: 'linear',
    x: 0, x2: 1, y: 0, y2: 0,
    colorStops: [{
        offset: 0,
        color: '#acace6'
    }, {
        offset: 0.5,
        color: '#acace6'
    }, {
        offset: 0.5,
        color: '#6161bd'
    }, {
        offset: 1,
        color: '#6161bd'
    }]
}
 
];
 
 
var barWidth = 35;
 
option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue']
    },
     legend: {
        data: ['高一', '高二','高三'],
        textStyle: {
            color: 'white', //坐标的字体颜色
        },
    },
    yAxis: {},
    series: [
        {
        z:1,
        name:'高一',
        type: 'bar',
        barWidth:barWidth,
        data:[320, 200, 260],
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
        data:[320, 200, 260],
        symbol :'diamond',
        symbolOffset:['-165%','-50%'],
        symbolSize:[barWidth - 4,10 * (barWidth - 4) / barWidth],
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
        data: [320, 200, 260],
    },
    
    {
        z:1,
         name:'高二',
        type: 'bar',
        barWidth:barWidth,
        data:[170, 182, 191],
        itemStyle:{
            normal:{
                color:colors[1]
            }
        },
    }
    ,
    {
        z:3,
        name:'中上部1',
        type:'pictorialBar',
        symbolPosition:'end',
        data:[170, 182, 191],
        symbol :'diamond',
        symbolOffset:['-15%','-50%'],
        symbolSize:[barWidth - 4,10 * (barWidth - 4) / barWidth],
        itemStyle:{
            normal:{
                borderColor: '#2edaf8',
                borderWidth: 2,
                color:'#2edaf8'
            }
        },
    },
    
    {
        name:'中上部2',
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
        data:[170, 182, 191],
    },
    
     {
        z:1,
        type: 'bar',
         name:'高三',
        barWidth:barWidth,
        data:[220, 182, 191],
        itemStyle:{
            normal:{
                color:colors[2]
            }
        },
    }
    ,
    {
        z:3,
        name:'右上部1',
        type:'pictorialBar',
        symbolPosition:'end',
        data:[220, 182, 191],
        symbol :'diamond',
        symbolOffset:['130%','-50%'],
        symbolSize:[barWidth - 4,10 * (barWidth - 4) / barWidth],
        itemStyle:{
            normal:{
                borderColor: '#7b7be1',
                borderWidth: 2,
                color:'#7b7be1'
            }
        },
    },
    
    {
        name:'中上部2',
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'top',
                
                fontSize: 16,
                color: '#7b7be1',
                offset: [-30, -5]
            }
        },
        itemStyle: {
            color: 'transparent'
        },
        tooltip: {
 
        },
        data:[220, 182, 191],
    },
    
  
    
    ]
};