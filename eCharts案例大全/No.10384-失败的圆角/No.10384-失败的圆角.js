// 指定图表的配置项和数据
option = {
    color: ['#3f89ee'],
    backgroundColor: "#20263f",
    polar: {
        center: ['50%', '50%'],
        radius: '80%' //图形大小
    },
    angleAxis: {
        show: false,
        startAngle: 90,
        min: 0,
        max: 100
    },
    radiusAxis: {
        type: 'category',
        show: true,
        data: ["4级权重媒体"]
    },
    series: [

        {
            type: "bar",
            coordinateSystem: "polar",
            barWidth: 20, //宽度
            barCategoryGap: "40%",
            borderWidth: 6,
            data: [80],
            itemStyle:{
                barBorderRadius: 2,
                color: "red",
                borderColor:"green",
                borderWidth:0
            }
        },
        

    ]


};