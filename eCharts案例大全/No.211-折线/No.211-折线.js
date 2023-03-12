

let xLabel = ['0','1220', '1230', '1240', '1250', '1300', '1310', '1320','1330']
let res1 = [2233, 3233, 4200, 4180, 2199, 3233, 4210, 2180,2240,3412];
let res2 = [3133, 2133, 3100, 4280, 3299, 2133, 4110, 3280,4251,5321];

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
            <div style="margin-bottom: 4px;width:100%;display:${p[0]?'flex':'none'};justify-content:space-between;align-items:center;color:#7ec7ff;">
                <span style="font-size:14px;color:#7ec7ff;">${p[0]?p[0].seriesName:''}</span>：
                <span style="font-size:14px;color:#7ec7ff;;">${p[0]?p[0].data:''}</span>
            </div>
            <div style="width:100%;height:100%;display:${p[1]?'flex':'none'};justify-content:space-between;align-items:center;color:rgb(255,128,0);padding-left:4px;">
                <span style="font-size:14px;color:rgb(255,128,0);">${p[1]?p[1].seriesName:''}</span>：
                <span style="font-size:14px;color:rgb(255,128,0);">${p[1]?p[1].data:''}</span>
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
                name: '政务外网区'
            },
            {
                name: '互联网区'
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
        axisLabel: {
            show: true,
            textStyle: {
                color: '#7ec7ff',
                padding: 8
            },
            formatter: function (value) {
   		        var texts = [];
   		        if(value==1000){
   		        texts.push('1000');
   		        }
   		        else if (value==2000) {
   		        texts.push('2000');
   		        }
   		        else if (value==3000) {
   		        texts.push('3000');
   		        }
   		        else if(value==4000){
   		        texts.push('4000');
   		        }
   		        else  if(value==5000){
   				texts.push('5000');
   				}
   				else if(value==0){
   					texts.push('0');
   				}
   		        return texts;
            }
        },
        axisTick: {
            show: false,
        },
    }],


    series: [{
        name: '政务外网区',
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

        data: res1
    }, {
        name: '互联网区',
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
