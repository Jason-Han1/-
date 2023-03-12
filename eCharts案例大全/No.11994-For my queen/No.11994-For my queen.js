var colorMap = {
    '0.25': {
        offset: 0.25,
        color: 'RGBA(37, 172, 195, 1)'
    },
    '0.5': {
        offset: 0.5,
        color: 'RGBA(126, 197, 66, 1)'
    },
    '0.75': {
        offset: 0.75,
        color: 'RGBA(249, 142, 0, 1)'
    },
    '1': {
        offset: 1,
        color: 'RGBA(246, 49, 43, 1)'
    }
}
var colors = [
    {
        offset: 0.25,
        color: 'RGBA(37, 172, 195, .50)'
    },
    {
        offset: 0.5,
        color: 'RGBA(126, 197, 66, .50)'
    },
    {
        offset: 0.75,
        color: 'RGBA(249, 142, 0, .50)'
    },
    {
        offset: 1,
        color: 'RGBA(246, 49, 43, .50)'
    },
]

function percentFn(percent) {
    percent = percent / 100;
    console.log(percent)
    if (percent > 0.25) {
        colors.unshift(colorMap['0.25'])
    }
   
}
 

    
var axislineColor = new echarts.graphic.LinearGradient(0, 0, 1, 0, colors);

option = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            title: {
                fontWeight: 'bold',
                offsetCenter: [0, '70%'] ,
            },  
            radius: '40%',
           axisLine: {    
                show: false,// 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 10,
                    color: [
                        [1,  axislineColor]
                    ],
                    // 这个是圆环外部的阴影
                    shadowColor: 'RGBA(0, 0, 0, .50)', //'RGBA(244, 244, 244, .50)',
                    shadowBlur: 15                    
                }
            },                 
            min: 0,
            max: 100,
            pointer: {
                show: false,
                length: '0',
                width: '0'
            },     
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },            
            axisLabel: {
                formatter:function(v){
                    switch (v + '') {
                        case '0' : return '70';
                        case '1' : return '';
                        case '100' : return '100';
                    }
                },
                distance: -50,
            },            
            detail: {
                formatter: '{value}%',
                offsetCenter: [0, '5%']
            },            
            data: [{value: 50, name: 'CPU'}]
        }
    ]
};

setInterval(function () {
    var percent =  (Math.random() * 100).toFixed(2) - 0
    option.series[0].data[0].value = percent;
    percentFn(percent)
    myChart.setOption(option, true);
},2000);
