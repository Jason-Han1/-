let data = [{
        "name": "区域01",
        "value": "106"
    },
    {
        "name": "区域02",
        "value": "70"
    },
    {
        "name": "区域03",
        "value": "64"
    },
    {
        "name": "区域04",
        "value": "52"
    },
    {
        "name": "区域05",
        "value": "40"
    },
]
var max = data.map(item => (item.value)).sort(function(a, b) {
    return b - a;
})[0];
var valueList = data.map(item => item.value)
var nameList = data.map(item => item.name)
var color = [
    '#00C7E6', "#3b55ff", "#6e6eff", "#64acff", "#bbbbbb"
];
var option = {
    backgroundColor: "#000",
    grid: {
        containLabel: true
    },
    xAxis: {
        type: "value",
        show:false
    },
    yAxis: [
        {
            type: "category",
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisPointer: {
                label: {
                    show: true,
                    //margin: 30
                }
            },
            data: nameList,
            axisLabel: {
                fontSize: '200%',
                fontFamily:'Acengy-FB',
                align: "right",
                color: function(param, index) {
                    return color[index]
                },
                formatter: function(value, index) {
                    return '0' + (index + 1)
                }
            }
        },
        {
            type: "category",
            inverse: true,
            axisTick: "none",
            axisLine: "none",
            show: true,
            axisLabel: {
                align: "left",
                textStyle: {
                    color: "#fff",
                    fontSize: "200%"
                }
            },
            data: valueList
        },
        { //名称
            type: 'category',
            offset: -10,
            position: "left",
            axisLine: {
                show: false
            },
            inverse: true,
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
                color: ["#fff"],
                align: "left",
                verticalAlign: "bottom",
                lineHeight: 32,
                fontSize: '100%'
            },
            data: nameList
        },
    ],
    series: [{
            zlevel: 1,
            name: "threatdata",
            type: "bar",
            barWidth: "15%",
            animationDuration: 1500,
            data: valueList,
            align: "center",
            itemStyle: {
                normal: {
                    barBorderRadius: 10,
                    color: function(param) {
                        return color[param.dataIndex]
                    }
                }
            },

        },
        {
            name: "threatdatabg",
            type: "bar",
            barWidth: "15%",
            barGap: "-100%",
            margin: "20",
            data: [max,max,max,max,max],
            textStyle: {
                //图例文字的样式
                fontSize: 10,
                color: "#fff"
            },
            itemStyle: {
                normal: {
                    color: "#2c2c37",
                    //width:"100%",
                    fontSize: 10,
                    barBorderRadius: 30
                },
            }
        }
    ]
};