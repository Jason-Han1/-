let xLabel = ['3.26', '3.27', '3.28', '3.29', '3.30', '3.31']
let goToSchool = ["40", "60", "22", "85", "50", "40"]
let goOutSchool = ["20", "50", "12", "65", "30", "60"]
let days = ['9-1','9-2','9-3','9-4','9-5','9-6','9-7']

option = {
    backgroundColor:'#000237',
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
            let dom = `<div style="width: 100px;
	height: 50px;;color:#fff;position: relative;">
        <div style="padding: 4px 8px 4px 14px;display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;position: relative;z-index: 1;">
        <div style="font-size:12px;color:#fff">${days[p[0].dataIndex]}</div>
            <div style="margin-bottom: 4px;width:100%;display:${p[0]?'flex':'none'};justify-content:space-between;align-items:center;">
                <span style="background-color:#ff9b00;width:10px;height:10px;display:block;border-radius:50%;margin-right:0"></span>
                <span style="font-size:12px;color:#7ec7ff;text-align:right;">${p[0]?p[0].seriesName:''}:</span>
                <span style="font-size:12px;color:#fff;">${p[0]?p[0].data:''}</span>
            </div>
            <div style="width:100%;height:100%;display:${p[1]?'flex':'none'};justify-content:space-between;align-items:center;">
               <span style="background-color:#00ffff;width:10px;height:10px;display:block;border-radius:50%;margin-right:0"></span>
                <span style="font-size:12px;color:#7ec7ff;text-align:right;">${p[1]?p[1].seriesName:''}:</span>
                <span style="font-size:12px;color:#fff;">${p[1]?p[1].data:''}</span>
            </div>
        </div>
    </div>`
            return dom
        }
    },
    legend: {
        align: "left",
        right: '12%',
        top:'20%',
        type:'plain',
        textStyle:{
            color:'#7ec7ff',
            fontSize:16
        },
        // icon:'rect',
        itemGap:25,
        itemWidth:18,
        icon:'path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',

        data: [
            {
                name: '今日'
            },
            {
                name: '近7日'
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
        boundaryGap: false,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
                color: '#233653'
            },
        },
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                color: '#78bdf5',
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
                color: '#233653'
            },
        },
        axisTick: {
            show: false,
        },
        data: xLabel
    }],
    yAxis: [{
        min: 0,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#233653'
            },
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#233653"
            }

        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#78bdf5',
                padding: 16
            },
            formatter: function(value) {
                if (value === 0) {
                    return value
                }
                return value
            }
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
        name: '今日',
        type: 'line',
        symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbolSize:16,
        smooth: true,
        lineStyle: {
            normal: {
                width: 4,
                color: "#ff9b00", // 线条颜色
            },
        },
        itemStyle: {
            color: "#ff9b00",
        },
        areaStyle:{
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(255,155,0,.6)"


                    },
                    {
                        offset: 1,
                        color: "rgba(255,155,0, 0)"
                    }
                ], false),
            }
        },
        data: goToSchool
    }, {
        name: '近7日',
        type: 'line',
        symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbolSize:16,
        smooth: true,
        lineStyle: {
            normal: {
                width: 4,
                color: "#00ffff", // 线条颜色
            },
        },
        itemStyle: {
            color: "#00ffff",
        },
         areaStyle:{
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(0,255,255,.6)"


                    },
                    {
                        offset: 1,
                        color: "rgba(0,255,255, 0)"
                    }
                ], false),
            }
        },
        data: goOutSchool
    }]
};
