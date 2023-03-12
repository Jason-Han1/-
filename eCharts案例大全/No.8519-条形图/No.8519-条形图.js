var fontColor = "#000";
let noramlSize = 16;
var datas = {
    data: [
        97.8,
        65.5,
        246.5,
        156.5,
    ],
    leftname: [
        "2016",
        "2017",
        "2018",
        "2019",
    ]
};
var totaldata = [];
datas.data.forEach((ele, index) => {
    totaldata.push(250);
});
option = {
    grid: {
        top: "3%",
        left: "3%",
        right: "8%",
        bottom: "5%"
    },
    xAxis: [{
        show: true,
        axisLabel: {
            color: fontColor,
            fontSize: noramlSize,
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: "dashed",
                color: "rgb(37, 43, 52)",
                width: 2,
            },
        },
        axisLine: {
            lineStyle: {
                color: "rgb(37, 43, 52)",
                width: 2,
            },
        },
        axisTick: {
            show: true,
            inside: true
        }
    }],
    yAxis: [{
        show: false,
        axisTick: "none",
        axisLine: "none",
        offset: "0",
        axisLabel: {
            show: false,
            color: fontColor,
            fontSize: noramlSize,
            position: "left"
        },
        data: datas.leftname.reverse()
    }, {
        axisTick: "none",
        axisLine: "none",
        type: "category",
        axisLabel: {
            margin: 10,
            textStyle: {
                color: fontColor,
                fontSize: noramlSize
            }
        },
        data: datas.data.reverse()
    }, {
        name: "",
        nameGap: "0",
        nameTextStyle: {
            color: fontColor,
            fontSize: noramlSize
        },
        axisLine: {
            lineStyle: {
                color: "rgba(0,0,0,0)"
            }
        },
        data: []
    }],
    series: [{
        name: "",
        type: "bar",
        barWidth: 25,
        itemStyle: {
            normal: {
                barBorderRadius: 10,
                color: "rgb(25, 128, 218)"
            }
        },
        label: {
            normal: {
                show: true,
                color: fontColor,
                fontSize: noramlSize,
                position: [0, "-20"],
                formatter: function(data) {
                    return datas.leftname[data.dataIndex];
                }
            }
        },
        data: datas.data,
        animationEasing: "elasticOut"
    }, {
        name: "外框",
        type: "bar",
        yAxisIndex: 2,
        z: 0,
        barGap: "-10%",
        barWidth: 30,
        itemStyle: {
            normal: {
                color: "transparent", //填充色
                barBorderColor: "rgb(39, 42, 47)", //边框色
                barBorderWidth: 2, //边框宽度
                barBorderRadius: 10, //圆角半径
                label: {
                    //标签显示位置
                    show: false,
                    position: "top" //insideTop 或者横向的 insideLeft
                }
            }
        },
        data: totaldata
    }]
};