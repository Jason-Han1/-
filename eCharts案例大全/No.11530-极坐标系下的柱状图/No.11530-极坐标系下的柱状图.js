option = {
    color: ['#546ef3', '#a6cb09', '#f8bd00'],

    legend: {
        x: 'center',
        // y: "bottom",

    },
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: "{a} : <br />{c}%",
    },
    polar: {
        center: ['50%', '50%'],
        radius: '300%' //图形大小
    },
    angleAxis: {
        show: false,
        startAngle: 90,
        min: 0,
        max: 100
    },
    radiusAxis: {
        type: 'category',
        show: false,
        data: ["4级权重媒体", "3级权重媒体", "5级权重媒体"]
    },
    series: [

        {
            type: "bar",
            name: "4级权重媒体",
            coordinateSystem: "polar",
            barWidth: 20, //宽度
            barCategoryGap: "40%",
            // data: ["76.25","47.09","22.09"],
            data: ["76.25"],
        },
        {
            type: "bar",
            name: "3级权重媒体",
            coordinateSystem: "polar",
            barWidth: 20,
            barCategoryGap: "40%",
            // data: ["14.09","55.09","27.09"]
            data: ["14.09"]
        },
        {
            type: "bar",
            name: "5级权重媒体",
            coordinateSystem: "polar",
            barWidth: 20,
            barCategoryGap: "40%",
            // data: ["9.66","23.09","53.09"]
            data: ["9.66"]
        }
    ]


};