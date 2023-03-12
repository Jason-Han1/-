var name = "生猪存栏"
xData = [
    "01月上半月",
    "01月下半月",
    "02月上半月",
    "02月下半月",
    "03月上半月",
    "03月下半月",
    "04月上半月",
    "04月下半月",
    "06月下半月",
    "05月上半月",
    "05月下半月",
    "06月上半月",
    "07月上半月",
    "07月下半月",
    "08月上半月",
    "08月下半月",
    "09月上半月",
    "09月下半月",
    "10月上半月",
    "10月下半月",
    "11月上半月",
    "11月下半月",
    "12月上半月",
    "12月下半月"
]
yData = [
    4252,
    3112,
    855,
    21183,
    7669,
    36629,
    13885,
    33934,
    43304,
    22594,
    4398,
    59371,
    4115,
    9143,
    1473,
    21287,
    960,
    3865,
    129,
    452,
    1575,
    952,
    41530,
    741
]
option = {
    backgroundColor:"#0E1327",
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            backgroundColor:'rgba(13,5,30,.6)',
            borderColor:' rgba(255,255,255,.2)',
            borderWidth: 1,
            padding:5
        },
        legend: {
            show:false
        },
        grid: {
            left: '3%',
            right: '8%',
            bottom: '5%',
            top:' 15%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : xData,
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    // interval: '0',//X轴坐标全显示
                    textStyle: {
                        color: "#fff"
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff"
                    }
                }
            }
        ],
        series : [
            {
                name:name,
                type:'bar',
                // barWidth: 20,
                barMaxWidth:20,
                barMinWidth:10,
                minWidth:5,
                xAxisIndex: 0,
                yAxisIndex: 0,
                itemStyle: {
                    barBorderRadius: 20,
                    normal: {
                        barBorderRadius: 10,
                        color: function(params) {
                            // console.log(params);
                            var maxIndex = 11;
                            if(params.dataIndex == maxIndex){
                                colors= ["#fc532d","#fe7018","#ff8706"]
                            }else{
                            colors=["#00aef2","#0077fe","#0072ff"];
                            }
                            return new echarts.graphic.LinearGradient(0, 0, 1, 0,
                                [
                                    {offset: 0, color: colors[0]},
                                    {offset: 0.5, color: colors[1]},
                                    {offset: 1, color: colors[2]}
                                ]);
                        }
                    },
                    emphasis:{
                        color:"#fc532d"
                    }
                },
                zlevel: 11,
                data:yData
            }
        ]
    };