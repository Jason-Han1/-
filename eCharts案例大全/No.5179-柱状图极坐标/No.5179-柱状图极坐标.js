option = {
    title: {
        text: '总数',
        textStyle: {
            color: 'rgba(121, 52, 243, 1)',
            fontSize: 12,
            fontWeight: '600',
        },
        subtext: '1111',
        subtextStyle: {
            color: 'rgba(121, 52, 243, 1)',
            fontSize: 18,
            fontWeight: '600',
        },
        itemGap: 2,
        left: 'center',
        top: '47%'
    },
    color: ['#ff9e17', '#20fdfa'],
    polar: {
        center: ['50%', '50%'],
        radius: '300%' //图形大小
    },
    angleAxis: {
        show: false,
        startAngle: 180,
        min: 0,
        max: 100
    },
    radiusAxis: {
        type: 'category',
        show: false,
        data: ["4级权重媒体", "3级权重媒体"]
    },
    silent: true,
    series: [
        {
            type: "bar",
            name: "4级权重媒体",
            coordinateSystem: "polar",
            barWidth: '4%', //宽度
            barCategoryGap: "40%",
            roundCap: 1,
            data: ["10"],
        },
        {
            type: "bar",
            name: "3级权重媒体",
            coordinateSystem: "polar",
            barWidth: '7%',
            barCategoryGap: "40%",
            roundCap: 1,
            data: ["90"]
        }
    ]


};