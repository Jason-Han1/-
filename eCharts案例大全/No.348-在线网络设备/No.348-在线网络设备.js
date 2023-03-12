let xLabel =['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']
let online = ["180", "203", "198", "190", "198", "201", "190", "198", "190"]
let sum = ["200", "210", "215", "204", "210", "209", "210", "215", "204",]

option = {
    title: {
        text: '设备数量(单位:台)',
        top: 10,
        right: '4%',
        bottom: '2%',
        textStyle: {
            color: '#0099FF',
            fontSize: 12,
            fontFamily: 'Microsoft YaHei'
        }
    },
    grid: {
        top: 50,
        left: '6%',
        right: '5%',
        bottom: '8%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor:'transparent',
        axisPointer: {
            lineStyle: {
                type: 'solid',
                width: 3,
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
        <svg style="position: absolute;top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);" class="svg" xmlns="http://www.w3.org/2000/svg" width="100" height="71" viewBox="0 0 84 55">
      <defs>
        <style>
          .cls-1 {
            fill: #07172c;
            fill-opacity: 0.8;
            stroke: #a7d8ff;
            stroke-linejoin: round;
            stroke-opacity: 0.2;
            stroke-width: 1px;
            fill-rule: evenodd;
          }

        </style>
      </defs>
      <path id="矩形_419" data-name="矩形 419" class="cls-1" d="M266,595h74v50H266V624.046L261,620l5-3.984V595Z"
        transform="translate(-258.5 -592.5)" />
    </svg>
        <div style="padding: 4px 8px 4px 14px;display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;position: relative;z-index: 1;">
            <div style="margin-bottom: 4px;width:100%;display:${p[0]?'flex':'none'};justify-content:space-between;align-items:center;">
                <span style="font-size:14px;color:#7ec7ff;">${p[0]?p[0].seriesName:''}</span>
                <span style="font-size:14px;color:#fff;">${p[0]?p[0].data:''}</span>
            </div>
            <div style="width:100%;height:100%;display:${p[1]?'flex':'none'};justify-content:space-between;align-items:center;">
                <span style="font-size:14px;color:#7ec7ff;">${p[1]?p[1].seriesName:''}</span>
                <span style="font-size:14px;color:#fff;">${p[1]?p[1].data:''}</span>
            </div>
        </div>
    </div>`
            return dom
        }
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
            lineStyle: {
                color: '#0099FF'
            },
        },
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                show: true,
                color: '#DBDBDB',
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
                color: '#192a44'
            },
        },
        axisTick: {
            show: true,
            inside: true
        },
        data: xLabel
    }],
    yAxis: [{
        //name: '数量',
        nameTextStyle: {
            color: "#7ec7ff",
            fontSize: 16,
            padding: 10
        },
        min: 0,
        splitLine: {
            show: false,
            lineStyle: {
                color: '#2AF4F7'
            },
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#0099FF"
            },
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#DBDBDB',
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
        name: '在线：',
        type: 'line',
        symbol: 'circle', 
        showAllSymbol: true,
        symbolSize: 8,
        smooth: true,
        lineStyle: {
            normal: {
                width: 1,
                color: "rgba(10,219,250,1)", // 线条颜色
            },
            //borderColor: 'rgba(0,0,0,.4)',
        },
        itemStyle: {
            color: "rgba(25,163,223,1)",
            borderColor: "#646ace",
            borderWidth: 0

        },
        tooltip: {
            show: true
        },
        areaStyle: { //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(50,228,228,0.3)"


                    },
                    {
                        offset: 1,
                        color: "rgba(50,228,228,0)"
                    }
                ], false),
                shadowColor: 'rgba(25,163,223,0.5)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        data: online
    }, {
        name: '总数：',
        type: 'line',
        symbol: 'circle', 
        showAllSymbol: true,
        symbolSize: 8,
        smooth: true,
        lineStyle: {
            normal: {
                width: 1,
                color: "#19a3df", // 线条颜色
            },
            borderColor: 'rgba(0,0,0,.4)',
        },
        itemStyle: {
            color: "rgba(10,219,250,1)",
            borderColor: "#646ace",
            borderWidth: 0
        },
        tooltip: {
            show: true
        },
        areaStyle: { //区域填充样式
            normal: {
                stack: true,
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(10,810,224,0.1)"
                    },
                    {
                        offset: 1,
                        color: "rgba(10,810,224,0)"
                    }
                ], false),
                shadowColor: 'rgba(10,219,250, 0.5)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        data: sum
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
