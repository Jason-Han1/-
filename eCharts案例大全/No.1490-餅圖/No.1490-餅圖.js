var ydata = [{
        name: '运营管控指标',
        value: 18
    },
    {
        name: '电网调度主数据',
        value: 16
    },
    {
        name: '电网运行数据',
        value: 15
    },
    {
        name: '早汇报数据',
        value: 14
    },
    {
        name: '主站数据',
        value: 10
    },
    {
        name: '其他',
        value: 7.9
    },
];
var color = ["#40a9ff", "#f759ab","#597ef7","#36cfc9","#9254de","#73d13d"]
var xdata = ['运营管控指标', "电网调度主数据", "电网运行数据", "早汇报数据", '主站数据','其他'];


option = {
     backgroundColor: "#1A213E",
    color:color,
    legend: {
        orient: "vartical",
        textStyle:{
            color: "#9FACBC",
        },
        x: "left",
        top: "center",
        left: "50%",
        bottom: "0%",
        data: xdata,
        itemWidth: 8,
        itemHeight: 8,
        itemGap :16,
    },
    series: [{
        type: 'pie',
        clockwise: false, //饼图的扇区是否是顺时针排布
        minAngle: 2, //最小的扇区角度（0 ~ 360）
        radius: ["25%", "45%"],
        center: ["30%", "50%"],
        avoidLabelOverlap: false,
         itemStyle: { //图形样式
            normal: {
                borderColor: '#1A213E',
                borderWidth: 6,
            },
        },
        label: {
            normal: {
                show: false,
                position: 'center',
                formatter: '{text|{b}}\n{c} ({d}%)',
                rich: {
                    text: {
                        color: "#9FACBC",
                        fontSize: 14,
                        align: 'center',
                        verticalAlign: 'middle',
                        padding: 8
                    },
                    value: {
                        color: "#fff",
                        fontSize: 24,
                        align: 'center',
                        verticalAlign: 'middle',
                    },
                }
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: 16,
                }
            }
        },
        data: ydata
    }]
};
myChart.setOption(option);

setTimeout(function() {
    myChart.on('mouseover', function(params) {
        if (params.name == ydata[0].name) {
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: 0
            });
        } else {
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: 0
            });
        }
    });

    myChart.on('mouseout', function(params) {
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
        });
    });
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: 0
    }); 
}, 1000);




