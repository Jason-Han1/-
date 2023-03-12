let max = 100;
let min = 0;
let xData = ['15-16-1', '15-16-2', '16-17-1', '16-17-2', '17-18-1', '17-18-2', '18-19-1', '18-19-2']
let yData = [
    [10, 30, 20, 40, 20, 60, 50, 100],
    [15, 25, 25, 35, 25, 55, 55, 95]
]
let isShowMarkLine = false
let markLine = {
    data: [{
        name: '校均值',
        // type: 'average',
        yAxis:56,
        lineStyle: {
            color: '#FF5652'
        },
        label:{
            position:'start',
            formatter: '校均值'
        }
    }],
    symbol: 'none',
    silent: true
}
let legendData = [{
        name: '个人学期教学评平均分'
    },
    {
        name: '校教师学期教学评平均分'
    }
]
let lineColor = ['#94DDFF', '#F3FFFB']
const seriesData = [];

legendData.map((item, index) => {
    seriesData.push({
        name: item.name,
        data: yData[index],
        type: "line",
        cursor: "pointer",
        lineStyle: {
            color: lineColor[index],
            shadowColor: lineColor[index],
            shadowBlur: 5
        },
        itemStyle: {
            color: lineColor[index],
            shadowColor: lineColor[index],
            shadowBlur:5
        },
        markLine: isShowMarkLine ? markLine : {},
    })
})

const xAxisData = ["2020-05-11", "2020-05-12", "2020-05-13", "2020-05-14", "2020-05-15", "2020-05-16", "2020-05-17", "2020-05-18", "2020-05-19", "2020-05-20", "2020-05-21", "2020-05-22", "2020-05-23", "2020-05-24", "2020-05-25", "2020-05-26", "2020-05-27", "2020-05-28", "2020-05-29", "2020-05-30", "2020-05-31", "2020-06-01", "2020-06-02", "2020-06-03", "2020-06-04", "2020-06-05", "2020-06-06", "2020-06-07", "2020-06-08", "2020-06-09", "2020-06-10"]
option = {
    backgroundColor: '#051523',
    legend: {
        data: legendData,
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 10,
        textStyle: {
            color: "#898989",
            lineHeight: 15
        },
        type: "scroll",
    },
    tooltip: {
        backgroundColor: "#fff",
        trigger: "axis",
        // axisPointer: {
        //     type: "none"
        // },
        textStyle: {
            color: "#565656",
            lineHeight: 28
        },
        confine: true,
        padding: 12,
        extraCssText: "box-shadow: 0px 2px 8px 0px #cacaca;border-radius: 4px;opacity: 0.9;max-height: 100%;",
        formatter: {
            _custom: {
                type: "function",
                display: "<span>ƒ</span> (params)"
            }
        }
    },
    xAxis: {
        type: "category",
        data: xData,
        axisLabel: {
            color: "#6F84BD",
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        max,
        min,
        name: "",
        nameTextStyle: {
            color: "#6F84BD"
        },
        splitLine: {
            lineStyle: {
                color: '#46C4FF',
            }
        },
        type: "value",
        axisLabel: {
            color: "#6F84BD",
            margin: 0,
            verticalAlign: "middle"
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    series: seriesData
}