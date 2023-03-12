var echartsData = [{
        name: '安全管理',
        value: 13
    },
    {
        name: '施工用电',
        value: 25
    },
    {
        name: '高处作业',
        value: 16
    },
    {
        name: '文明施工',
        value: 12
    },
    {
        name: '未分类',
        value: 6
    }
];
var color = ["#029aff", "#00ffff", "#ec9c45", "#FFEE3F", "#e64c4c", "#06BBFF", "#90CB8B", "#48d210"];
let xdata = [];
$.each(echartsData,function(i,val){
    xdata.push(echartsData[i].name);
    
});
option = {
    backgroundColor: "#000",
    color: color,
    legend: {
        orient: "vartical",
        x: "left",
        top: "40%",
        left: "80%",
        bottom: "0%",
        data: xdata,
        itemWidth: 20,
        itemHeight: 14,
        textStyle:{
            color:'#fff'
        },
        itemGap: 15,
        formatter: function(name) {
            var legendStr = '';
            $.each(echartsData, function(i, val) {
                if (echartsData[i].name == name) {
                    legendStr = name + "   " + echartsData[i].value
                }

            });
            return legendStr;
        }
    },
    series: [{
        name: '违规次数',
        type: 'pie',
        clockwise: false, //饼图的扇区是否是顺时针排布
        minAngle: 20, //最小的扇区角度（0 ~ 360）
        radius: ["30%", "58%"],
        center: ["35%", "50%"],
        avoidLabelOverlap: false,
        itemStyle: { //图形样式
            normal: {
                borderColor: '#ffffff',
                borderWidth:0,
            },
        },
        label: {
            normal: {
                show: false,
                position: 'center',
                formatter: '{value|{d}%}\n{text|{b}}',
                rich: {
                    text: {
                        color: "#fff",
                        fontSize: 18,
                        align: 'center',
                        verticalAlign: 'middle',
                        padding: 5
                    },
                    value: {
                        color: "#4A90E2",
                        fontSize: 26,
                        align: 'center',
                        verticalAlign: 'middle',
                    },
                }
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: 46,
                }
            }
        },
        data: echartsData
    }]
};
myChart.setOption(option);

setTimeout(function() {
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: 0
    });

    myChart.on('mouseover', function(params) {
        if (params.name == echartsData[0].name) {
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
}, 1000);