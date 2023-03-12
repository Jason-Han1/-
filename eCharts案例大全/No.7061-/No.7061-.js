let data, dataTotal = 0,
    colorList = [],
    richData = {
        blue: {
            color: '#8fd5f3',
            padding: [0, 10, 0, 0]
        }
    },
    baryAxis = [],
    pictorialBarData = [],
    pictorialBarData1 = [];


data = {
    "区域一": 340,
    "区域二": 100,
    "区域三": 150,
    "区域四": 180,
    "区域2五": 160,
    "区域3五": 160,
    "区域4五": 160,
    "区域5五": 160,
    "区域6五": 160,
    "区域7五": 160,
    "区域8五": 160,
    "区域9五": 160,
    "区域98五": 160,
}
colorList = ['#28ddf1', '#6bb2e0', '#3386cf', '#d8c483', '#e2a46e'];

colorList.forEach(e => {
    richData[e.replace("#", "color")] = {
        color: e,
        fontStyle: "italic",
        fontWeight: "bold"
    }
})
console.log(richData)

for (let j in data) { //获取y轴标签名
    baryAxis.push(j)
}

for (let i in data) { //获取每条bar值
    dataTotal += data[i];
    pictorialBarData.push(data[i]);
    pictorialBarData1.push({
        value: data[i],
        symbolPosition: 'end'
    })
}

option = {
    backgroundColor: '#00101d',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '100px',
        right: '0',
        bottom: '-15px',
        top: '5px',
        containLabel: true //grid 区域是否包含坐标轴的刻度标签。
    },
    xAxis: {
        type: 'value',
        show: false,
    },
    yAxis: {
        type: 'category',
        zlevel: 1,
        axisLine: {
            lineStyle: {
                color: '#50dbee',
                width: 5, //这里是为了突出显示加上的
            }
        },
        axisTick: { //隐藏刻度
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#8fd5f3" //字体颜色
            },
            inside: true //y轴标签朝内
        },
        data: baryAxis,
    },
    dataZoom: [
         {
                show: true,
                yAxisIndex: 0,
                filterMode: 'filter',
                start: 0,
                end: 50,
                width: 30,
                height: '80%',
                showDataShadow: false,
                top:'center',
                left: '3%',
                backgroundColor:'rgba(0, 21, 41,0.8)',
                dataBackground:{
                lineStyle:{
                    color:'#fff9c1',
                    width:1
                }
            },
            fillerColor:'rgba(53,204,251,0.2)',
            borderColor: 'rgba(53,204,251,0.9)',
            textStyle:{
                color:"#fff"
            },
            handleSize: '80%',
            handleStyle: {
                color: '#a0f1fb',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            },
            }
      
        ],
    series: [{
            name: '',
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: [3, 30],
            symbolOffset: [0, 0],
            z: 2,
            tooltip: {
                show: false
            },
            label: {
                normal: {
                    show: true,
                    position: 'insideRight',
                    distance: 12,
                    formatter: function(params) {
                        console.log(params.value / dataTotal)
                        return "{blue|" + Math.round((params.value / dataTotal) * 100) + "%" + "}" + "{" + params.color.replace("#", "color") + "|" + params.value + "}"
                    },
                    textStyle: {
                        color: "#fff",
                        fontStyle: "italic",
                        rich: richData
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        return colorList[params.dataIndex]
                    }
                }
            },
            data: pictorialBarData1
        },
        {
            name: '摄像头',
            type: 'bar',
            barWidth: 30,
            z: 0,
            label: {
                normal: {
                    show: false,

                }
            },
            itemStyle: {
                normal: {
                    color: "#001629"
                },
            },
            data: pictorialBarData
        },

    ]
}