var fontColor = "#000";
let noramlSize = 16;
var datas = {
    dataArr: [
        97.8,
        65.5,
        246.5,
        156.5,
    ],
    leftname: [
        "北京",
        "内蒙",
        "新疆",
        "四川",
    ]
};

option = {
    grid: {
        top: "3%",
        left: "8%",
        right: "8%",
        bottom: "5%"
    },
    xAxis: {
        show: false,
        type: 'value',
        data: datas.dataArr,
    },
    yAxis: {
        type: 'category',
        axisLabel: {
            color: "#000",
            fontSize:24,
        },
        axisTick:"none",
        axisLine:{
            show:false
        },
        data: datas.leftname,
    },
    series: [{
        name: "",
        type: "bar",
        barWidth: 40,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color:'#0172e4',
                        },
                        {
                            offset: 1,
                            color: '#56abf2',
                        },
                    ])
            }
        },
        label: {
            normal: {
                show: true,
                color: fontColor,
                fontSize: noramlSize,
                position: 'right',
                formatter: function(data) {
                    return data.value;
                }
            }
        },
        data: datas.dataArr,
        animationEasing: "elasticOut"
    }]
};