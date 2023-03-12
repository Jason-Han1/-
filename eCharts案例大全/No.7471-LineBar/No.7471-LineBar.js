// 设置echart的默认颜色列表
let colorList = [
    ["#4D7CFE", "#51C0F8"],
    ["#FFC078"]
];
let lengthColor = [colorList[0][0], colorList[1][0]]
// y轴单位
let yAxisOpt = [{
        "name": "个"
    },
    {
        "name": "元"
    }
]
// series数据
let seriesData = [{
        "name": "商铺数量",
        "type": "bar",
        "data": [120, 200, 150, 80, 70, 110, 130]
    },
    {
        "name": "均价",
        "type": "line",
        "data": [56, 200, 23, 110, 150, 110, 130]
    }
]

let yAxis = [];
let series = [];
let legend = [];
let yLeftMax = Math.ceil(Math.max.apply(null, seriesData[0].data)); //左轴最大值
let yRightMax2 = Math.ceil(Math.max.apply(null, seriesData[1].data)); //左轴最大值
//配置Y轴的选项
yAxisOpt.forEach((opt, index) => {
    let defaultyAxisOpt = {
        "type": "value", //设置y轴为值
        "name": "", //顶部名称 
        "min": 0,
        max: index == 0 ? yLeftMax : yRightMax2,
        "interval": null,
        "nameTextStyle": {
            fontSize: 8,
            "color": "#999",
            "padding": [0, 0, 0, -38]
        },
        //坐标轴上的刻度
        "axisTick": {
            "show": false
        },
        //坐标轴线
        "axisLine": {
            "show": false
        },
        //坐标轴上的标签
        "axisLabel": {
            "show": true,
            color: '#8998AC',
            fontSize: 10,
        },
        "splitLine": {
            show: false,
            //刻度对齐线
            "lineStyle": {
                // fontSize: 8,
                "color": ["rgba(197,208,222,0.3)"]
            }
        },
        "color": "#999999"
    }
    yAxis.push({
        ...defaultyAxisOpt,
        ...opt,
    })
})
yAxis[1].nameTextStyle.padding = [0, 0, 0, 38]

// 默认折线图配置
let defaultLineSeriesOpt = {
    "name": "",
    "type": "line",
    "yAxisIndex": 0,
    "data": [], //[5, 10, 15, 20],
    "symbolSize": 0,
    "itemStyle": {
        "normal": {
            "color": colorList[1]
        }
    }
}
let lengedInfoList = []
// 默认柱状图配置
let defaultBarSeriesOpt = {
    "name": "",
    "type": "bar",
    "data": [], //[500, 1000, 15000, 2000],
    "barMaxWidth": 16,
    "itemStyle": {
        "normal": {
            "barBorderRadius": [2, 2, 0, 0],
            "color": function() {
                let itemColor = colorList[0] ? colorList[0] : '';
                if (itemColor.length > 1) {
                    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: itemColor[0]
                    }, {
                        offset: 1,
                        color: itemColor[1]
                    }])
                } else {
                    return itemColor[0];
                }
            }
        }
    }
}
seriesData.forEach((charts, index) => {
    let opt;
    let unit = yAxisOpt[index]['name'];
    legend.push(charts.name)
    lengedInfoList.push({
        name: charts.name,
        unit
    })
    if (charts.type == "line") {
        opt = {
            ...defaultLineSeriesOpt,
            ...charts,
            unit,
            yAxisIndex:1
        }
    } else {
        opt = {
            ...defaultBarSeriesOpt,
            ...charts,
            unit,
            yAxisIndex:0
        }
    }
    series.push(opt)
});


option = {
    color: lengthColor,
    "tooltip": {
        "trigger": "axis",
        //"formatter":tooltipFormatter,
        formatter: function(tipLabel) {
            let axisValue = ''
            let contentHtml = ''

            tipLabel.forEach(label => {
                //label.value = label.value +'万元'
                let seriy = lengedInfoList.find(sery => {
                    return sery.name == label.seriesName
                })
                let unit = ''
                if (seriy) {
                    unit = seriy.unit ? `${seriy.unit}` : ''
                }
                axisValue = label.axisValue
                contentHtml += (label.seriesName + ' : ' + label.value + unit + '<br>')
            })
            return `<span>${axisValue}<br>${contentHtml}</span>`;
        },
        "textStyle": {
            "fontSize": 12,
            "color": "#fff"
        },
    },
    "legend": {
        "show": true,
        "align": "left",
        "bottom": "0%",
        "itemWidth": 12,
        "itemHeight": 6,
        "textStyle": {
            "fontSize": 10,
            "color": "#666"
        },
        "data": legend,
        "formatter": function(name) {
            let seriy = series.find(sery => {
                return sery.name == name
            })
            let unit = ''
            if (seriy) {
                unit = seriy.unit.length > 2 ? `${seriy.unit}` : ''
            }
            return name + unit
        }
    },
    "grid": {
        "top": 30,
        "left": "8%",
        "right": "8%",
        "bottom": "10%",
        "containLabel": true
    },
    //x轴选项配置
    "xAxis": [{
        "type": "category", //设置X轴分类
        //
        "axisTick": {
            "show": false
        },

        axisLine: {
            show: true,
            lineStyle: {
                color: '#D1D1D1',
                width: 1 //这里是为了突出显示加上的
            }
        },
        "axisLabel": {
            fontSize: 8,
            "color": "#999999"
        },
        "data": ['商业', '教育', '医疗健康', '主题乐园', '体育运动', '文化艺术', '养老配套']
    }],
    yAxis,
    series,

};