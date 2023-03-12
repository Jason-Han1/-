let center = '50.2,63.5'.split(',')
let startAngle = '207'
let radius = '95,100'.split(',')
let endRadius = '84,109'.split(',')
// 指针值
var gaugeValue = []
// 指针颜色
var gaugeColor = []
// 最大值
var max = 100;
// 圆环进度
var gaugeList = [15, 40]
// 从大-》小
var zIndex = [10, 9]
// 圆环颜色
var colorList = []
// 圆环大小
var gaugeSize = 650
// 单位
var gaugeMeasure = '元'

// 最大值
var max = 100
// 指针值
var value = 80
// 指针名称
var pointerName = ['使用率']
// 标题
var gaugeName = '大型设备总量'
// 使用率
var rate = ((value / max) * 100).toFixed(2)


var endValue = value * 0.65;
var pieSeriesData = [{
    value: endValue,
    itemStyle: {
        color: '#FFF4DD',
        shadowColor: 'rgb(0, 90, 160, 0.52)',
        shadowBlur: 20,
        shadowOffsetY: 6
    }
}, {
    value: max-endValue,
    itemStyle: {
        color: 'rgba(255, 206, 143, 0)',
        shadowColor: 'rgba(0, 90, 160, 0)',
        shadowBlur: 20,
        shadowOffsetY: 6
    }
}]
var endSeriesData = [{
    value: endValue - 0.2,
    itemStyle: {
        color: 'rgba(255, 206, 143, 0)',
        shadowColor: 'rgba(0, 90, 160, 0)',
        shadowBlur: 20,
        shadowOffsetY: 6
    }
}, {
    value: 0.2,
    itemStyle: {
        color: '#FFF4DD',
        shadowColor: 'rgb(0, 90, 160, 0.52)',
        shadowBlur: 20,
        shadowOffsetY: 6
    }
}, {
    value: max-endValue,
    itemStyle: {
        color: 'rgba(255, 206, 143, 0)',
        shadowColor: 'rgba(0, 90, 160, 0)',
        shadowBlur: 20,
        shadowOffsetY: 6
    }
}]



const seriesData = [];
var data = [];
pointerName.map((item, index) => {
    data.push({
        name: pointerName[index],
        value: rate,
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
var option = {
    backgroundColor: '#333',
    center: ['50%', '70%'],
    title: [{
        show:false,
        text: gaugeName,
        subtext:'89%',
        bottom: '30%',
        x: 'center',
        borderRadius: 15,
        padding: [7, 14],
        textStyle: {
            fontSize: 26,
            fontFamily: 'DIN',
            fontWeight: 400,
            color: '#FDFFDD',
            lineHeight: 26,
            textShadow: '0px 6px 10px rgba(0, 160, 136, 0.52)',
            WebkitTextStroke: '1px #FFCD8F',
            textStroke: '1px #FFCD8F',
        },
        subtextStyle:{
            fontSize: 15,
            fontFamily: 'Source Han Sans CN',
            fontWeight: 400,
            color: '#DDFEFF',
            lineHeight: 26,
            textShadow: '0px 0px 5px #00DEFF'
        },
        formatter:name=>{
            console.log(name)
            return 'name'
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
        center: ['50%', '70%'],
        radius: '60%',
    },
    tooltip: {
        show: true,
    },
    series: [{
            type: 'pie',
            radius: [radius[0] + '%', radius[1] + '%'],
            center: ['50%', '70%'],
            silent: true,
            max: max,
            startAngle: startAngle,
            data:pieSeriesData, 
            label: {
                show: false
            },
            coordinateSystem: 'polar',
            z: 1
        },
        {
            type: 'pie',
            radius: [endRadius[0] + '%', endRadius[1] + '%'],
            center: ['50%', '70%'],
            silent: true,
            startAngle: startAngle,
            max: max,
            data: endSeriesData,
            label:{
                show:false,
            },
            barGap: '-100%',
            coordinateSystem: 'polar',
            roundCap: true,
            z: 1
        },

    ]
}