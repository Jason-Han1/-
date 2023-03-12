var color=['#f43f4d','#fe9100','#03b38c','#009afe'];
//红、黄、绿、蓝色
var Data= [{
                name: "Vue版本",
                value: 65
            },
            {
                name: "UI组件库",
                value: 75
            },
            {
                name: "Css预处理器",
                value: 98
            },
            {
                name: "Eslint检查",
                value: 55
            },
            {
                name: "Sornar扫描",
                value: 99
            },
            {
                name: "mock接口占比",
                value: 95
            },
            {
                name: "npm脚本规范",
                value: 100
            },
            {
                name: "前端监控接入",
                value: 95
            },
            {
                name: "复杂模块占比",
                value: 110
            },
            {
                name: "代码重复率",
                value: 85
            },
            {
                name: "构建耗时",
                value: 89
            },
            {
                name: "包大小/最大文件体积",
                value: 93
            },
            {
                name: "首页加载时间",
                value: 98
            },
            {
                name: "首页请求数",
                value: 96
            },
            {
                name: "首页请求总体积",
                value: 40
            }
        ];
    
var value=[];
var name=[];
var indicator=[];
var radarData=[];
var scatterData=[];
Data.map(function(e,i){
    value.push(e.value);
    name.push(e.name);
    var cor=color[0];
    if(e.value>95){
        cor=color[2]
    }else{
        if(95>e.value>90){
            cor=color[2]
        }else{
            if(e.value>90){
                cor=color[1]
            }else{
              cor=color[0]  
            }
        }
    }
    indicator.push({
        text:e.name,
        max:100,
        color:cor
    });
    scatterData.push({
                value:[e.value,i],
                itemStyle: {
                    normal: {
                        color: cor,
                        borderColor: cor,
                        borderWidth: 2,
                    }
                },
            },)
});
radarData.push({value:value})
option = {
    backgroundColor: '#33333C',
    tooltip: {
        trigger: 'axis'
    },
    radar: [{
        indicator: indicator,
        name: {
            show: true,
            textStyle: {
                fontWeight: "bold",
                fontSize: 14,
            }
        },
    
        center: ['50%', '50%'],
        radius: '80%',
        shape:'circle',
        axisLine: { 
            lineStyle: {
                color: 'rgba(255,255,255,0.3)'
            }
        },
        axisTick:{ 
            show:false,
            lineStyle: {
                color: 'rgba(255,255,255,0.3)'
            }
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ["transparent"] 
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                width: 1,
                color: 'rgba(255,255,255,0.3)' 
            }
        }
    }],
     polar: {},
    angleAxis: {
        type: 'category',
        data: name,
        boundaryGap: false,
        clockwise: false,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        }
    
    },
    radiusAxis: {
        min: 0,
        max: 100,
        interval: 20,
        splitLine: {
            show: false
        },
         axisTick: {
            show: false
        },
        axisLabel: {
            color:'#bfbfbe'
        },
    },
    series: [{
        name: '',
        type: 'radar',
        tooltip: {
            trigger: 'item'
        },
        //symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGBAMAAAAS4vJ7AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEUAmv4Amv4Amv4Amv4Amv4Amv4Amv4Amv7M6//E6P/F6P////+TGAszAAAAB3RSTlMGke3ukIiJnEe+1gAAAAFiS0dECx/XxMAAAAAHdElNRQfkCg0EMAu2RnTvAAAAHklEQVQI12NgVBZgcC8vZVDvLGJQ7yoCsssYGI0FADwPBSW90mIFAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTEwLTEyVDIwOjQ4OjExKzA4OjAwhPRnigAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0xMC0xMlQyMDo0ODoxMSswODowMPWp3zYAAAAgdEVYdHNvZnR3YXJlAGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnvM8dnQAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABZ0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQANolA7qMAAAAVdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgANkQuCn4AAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTYwMjUwNjg5MUjgekIAAAARdEVYdFRodW1iOjpTaXplADE1OEJCugB2PgAAAEZ0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL2FwcC90bXAvaW1hZ2VsYy9pbWd2aWV3Ml85XzE2MDAzNDMyMzI2NjQ2MzE2XzE2X1swXRt8OcgAAAAASUVORK5CYII=',
        symbol:'none',
        symbolSize: 6,
        itemStyle: {
            normal: {
                color: '#fff',
                borderColor: '#009afe',
                borderWidth: 2,
            }
        },
       lineStyle: {
                color: "#ff9100",
                width: 2
            },
        areaStyle: {
            opacity:1,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                    [{
                            offset: 1,
                            color: 'rgba(0, 154, 254, 0.6)',
                        },
                        {
                            offset: 0,
                            color: 'rgba(84, 114, 211, 0.6)',
                        }
                    ], false),
            type: 'default',
        },
        data: radarData
    },
    {
        name: '',
        type: 'scatter',
        coordinateSystem: 'polar',
        symbolSize: 10,
        data: scatterData
    }]
};