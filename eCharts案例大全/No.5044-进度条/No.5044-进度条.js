
let data = [{
    name: '经济管理学院',
    value: 4158,
    count:8124
},{
    name: '生命与科学学院',
    value: 6024,
    count:10268
},{
    name: '自动化学院',
    value: 7248,
    count:11489
},{
    name: '外语外贸学院',
    value: 6018,
    count:9483
},{
    name: '电子信息与科技学院',
    value: 7529,
    count:9963
}]

let yaxisData = []
let countList = []
data.map(item=>{
    yaxisData.push(item.name)
    countList.push(item.count)
})
let max = Math.max(...countList)
console.log(max)

let xData = [];
let yData = [];
let markPointData = []
let backgroundData = []
data.map((item, index) => {
    xData.push(item.name);
    yData.push({
        value:item.value/item.count * max,
        symbolBoundingData:max
    })
    backgroundData.push(max)
})

option = {
    backgroundColor: '#051523',
    xAxis: {
        show: false,
        max: max,
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },

    },
    yAxis: {
        type: 'category',
        // data: data,
        barWidth: 20,
        inverse: false,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle:{
                color:'rgba(134, 208, 255, 1)',
                fontSize:13
            }
        },
        data:yaxisData
    },
    series: [
        {
            type: 'bar',
            data: data,
            barWidth: 14,
            itemStyle: {
                normal: {
                    color: 'rgba(252,252,252,0)',
                }
            },
            z: 1
        },
        {
            type: 'pictorialBar',
            z: 3,
            symbol: 'rect',
            symbolSize: [5, 14],
            symbolMargin: 2,
            symbolClip: true,
            symbolBoundingData: max,
            data: yData,
            symbolRepeat: 'fixed',
            symbolPosition: 'start',
            itemStyle: {
                normal: {
                    color: {
                        x:0,
                        y:0,
                        x2:1,
                        y2:0,
                        colorStops:[{
                            offset:0,
                            color:'rgba(0, 102, 255, 1)'
                        },{
                            offset:1,
                            color:'rgba(0, 210, 255, 1)'
                        }]
                    }
                }
            },
        }, {
            type: 'pictorialBar',
            z: 2,
            symbol: 'rect',
            symbolSize: [5, 14],
            symbolMargin: 2,
            symbolClip: true,
            symbolBoundingData: max,
            data: backgroundData,
            symbolRepeat: 'fixed',
            symbolPosition: 'start',
            itemStyle: {
                normal: {
                    color: 'rgba(84, 217, 255, 0.3)'
                }
            }
        }
    ]
};