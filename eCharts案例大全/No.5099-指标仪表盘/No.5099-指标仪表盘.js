// 指针值
var gaugeValue = [50, 60]
// 指针颜色
var gaugeColor = ['#70D5FF', '#FF5652']
// 指针名称
var pointerName = ['本校值', '同类型同性质院校平均值']
// 标题
var gaugeName = '日常运行支出'
// 最大值
var max = 100;
// 圆环进度
var gaugeList = [15, 40]
// 从大-》小
var zIndex = [10, 9]
// 圆环颜色
var colorList = ['#FF5652', '#FFBD4B']
// 圆环大小
var gaugeSize = 300
// 单位
var gaugeMeasure = '元'



const seriesData = [];
var data = [];
gaugeValue.map((item, index) => {
    data.push({
        name: pointerName[index],
        value: gaugeValue[index],
        itemStyle: {
            color: gaugeColor[index]
        }
    })
})

for (let i = 0; i < gaugeList.length; i++) {
    seriesData.push({
        type: 'bar',
        data: [{ //上层圆环，显示数据
            value: gaugeList[i],
            itemStyle: {
                color: colorList[i],
            }
        }],
        barGap: '-100%', //柱间距离,上下两层圆环重合
        coordinateSystem: 'polar',
        roundCap: true, //顶端圆角
        z: zIndex[i] //圆环层级，同zindex
    })
}

var barList = ['']
option = {
    center: ['50%', '50%'],
    backgroundColor: '#00070B',
    title: [{
        text: gaugeName,
        bottom: '30%',
        x: 'center',
        borderRadius: 15,
        padding: [7, 14],
        textStyle: {
            fontWeight: 'bold',
            fontSize: 16,
            color: '#C3F0FF',
            textAlign: 'center',
        }
    }],
    angleAxis: {
        show: false,
        max: 100 * 360 / 270, //-45度到225度，二者偏移值是270度除360度
        type: 'value',
        startAngle: 225, //极坐标初始角度
        splitLine: {
            show: false
        }
    },
    barMaxWidth: 14, //圆环宽度
    radiusAxis: {
        show: false,
        type: 'category',
    },
    //圆环位置和大小
    polar: {
        center: ['50%', '50%'],
        radius: gaugeSize
    },
    tooltip: {
        show: true,
        // formatter:params=>{
        //     console.log(params)    
        // }
    },
    series: [...seriesData,
        { //下层圆环，显示最大值
            type: 'bar',
            data: [{
                value: 100,
                itemStyle: {
                    color: '#70D5FF',
                    borderWidth: 20,
                    borderColor: 'rgba(105,200,255,0.2)',
                    shadowBlur: 20,
                }
            }],
            barGap: '-100%',
            coordinateSystem: 'polar',
            roundCap: true,
            z: 1
        },
        //仪表盘
        {
            title:{
                show:false
            },
            name: '',
            type: 'gauge',
            startAngle: 225, //起始角度，同极坐标
            endAngle: -45, //终止角度，同极坐标
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            pointer: {
                width: '12',
                length: '25%',
            },
            detail: {
                formatter: name => {
                    console.log(name)
                    return max + gaugeMeasure
                },
                offsetCenter: [0, '25%'],
                textStyle: {
                    color: '#00BAFF',
                    fontSize: 20
                }
            },
            tooltip: {
                show: true
            },
            data: data
        }
    ]
}