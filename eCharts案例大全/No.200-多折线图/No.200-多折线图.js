

let xLabel = ['0','14:20','14:25', '14:30', '14:35', '14:40', '14:45', '14:50', '14:55','13:00']
let res1 = [2, 2, 2, 2, 2, 1, 1, 1,2,2];
let res2 = [11, 17, 10,12, 11, 20, 10, 15,13,11];
let res3 = [12, 20, 18, 16, 17, 18, 20, 9,11,10];
let res4 = [32, 18, 18, 40, 30, 35, 30, 36,31,33];

option = {
    backgroundColor: '#0e1c47',
    tooltip: {
        trigger: 'axis',
        backgroundColor:'transparent',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(126,199,255,0)' // 0% 处的颜色
                    }, {
                        offset: 0.5,
                        color: 'rgba(126,199,255,1)' // 100% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(126,199,255,0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
        },
        formatter: (p) => {
            let dom = `<div >
    
        <div style="padding: 4px 8px 4px 14px;display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;position: relative;z-index: 1;">
            <div style="margin-bottom: 4px;width:100%;display:${p[0]?'flex':'none'};color:rgb(243,58,57)">
                <span style="font-size:14px;color:rgb(243,58,57);">${p[0]?p[0].seriesName:''}</span>：
                <span style="font-size:14px;color:rgb(243,58,57);">${p[0]?p[0].data:''}</span>
            </div>
            <div style="width:100%;height:100%;display:${p[1]?'flex':'none'};color:rgb(255,128,0);">
                <span style="font-size:14px;color:rgb(255,128,0);">${p[1]?p[1].seriesName:''}</span>：
                <span style="font-size:14px;color:rgb(255,128,0);">${p[1]?p[1].data:''}</span>
            </div>
            <div style="width:100%;height:100%;display:${p[2]?'flex':'none'};color:rgb(252,210,84);">
                <span style="font-size:14px;color:rgb(252,210,84);">${p[2]?p[2].seriesName:''}</span>：
                <span style="font-size:14px;color:rgb(252,210,84);">${p[2]?p[2].data:''}</span>
            </div>
            <div style="width:100%;height:100%;display:${p[3]?'flex':'none'};color:rgba(25,163,223,1);">
                <span style="font-size:14px;color:rgba(25,163,223,1);">${p[3]?p[3].seriesName:''}</span>：
                <span style="font-size:14px;color:rgba(25,163,223,1);">${p[3]?p[3].data:''}</span>
            </div>
        </div>
    </div>`
            return dom
        }
    },
    legend: {
        align: "left",
        right: '10%',
        top:'10%',
        type:'plain',
        textStyle:{
            color:'#ffffff',
            fontSize:16
        },
        icon:'rect',
        itemGap:25,
        itemWidth:18,

        data: [
            {
                name: '致命'
            },
            {
                name: '严重'
            },
            {
                 name: '一般'
            },
            {
                 name: '警告'
            }
        ]
    },
    grid: {
        top: '15%',
        left: '10%',
        right: '10%',
        bottom: '15%',
        // containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap:false ,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
                color: "#rgb(77,83,141)",
                width:4
            },
        },
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                color: '#7ec7ff',
                padding: 16,
                fontSize: 14
            },
            formatter: function(data) {
                return data
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#192a44',
            },
        },
        axisTick: {
            show: false,
        },
        data: xLabel
    }],
    yAxis:[{
         min:0,
        max:50,
        interval:10,
        type: "value",
        axisLabel: {
        textStyle: {
            color: '#ffffff',
        },
        formatter: function (value, index) {
        // value大于10时除以10并拼接k，小于10按原格式显示
        if (value >= 10) {
          value = value/10  + "0";
        }else if(value < 10){
          value;
        }
        return value;
        }
        },
        nameTextStyle: {
            color: "#7ec7ff",
            fontSize: 16,
            padding: 10
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#192a44'
            },
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#rgb(77,83,141)",
                width:4
            }

        },
        axisTick: {
            show: false,
        },
    }],


    series: [{
        name: '致命',
        type: 'line',
        symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbolSize: 0,
        lineStyle: {
            normal: {
                width: 2,
                color: "rgb(243,58,57)", // 线条颜色
            },
        },
        itemStyle: {
            color: "rgb(2243,58,57)",

        },
        tooltip: {
            show: true
        },

        data: res1
    }, {
        name: '严重',
        type: 'line',
        symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbolSize: 0,
        lineStyle: {
            normal: {
                width: 2,
                color: "rgb(255,128,0)", // 线条颜色
            },
        },
        itemStyle: {
            color: "rgb(255,128,0)",

        },
        tooltip: {
            show: true
        },
      
        data: res2
    },
    {
        name: '一般',
        type: 'line',
        symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbolSize: 0,
        lineStyle: {
            normal: {
                width: 2,
                color: "rgb(252,210,84)", // 线条颜色
            },
        },
        itemStyle: {
            color: "rgb(252,210,84)",

        },
        tooltip: {
            show: true
        },
      
        data: res3
    },
    {
        name: '警告',
        type: 'line',
        symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbolSize: 0,
        lineStyle: {
            normal: {
                width: 2,
                color: "rgba(25,163,223,1)", // 线条颜色
            },
        },
        itemStyle: {
            color: "rgba(25,163,223,1)",

        },
        tooltip: {
            show: true
        },
      
        data: res4
    }]
};
let len = 0
setInterval(()=>{
    if(len === xLabel.length){
        len = 0
    }
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: len,
    })
    len ++
}, 1000)
