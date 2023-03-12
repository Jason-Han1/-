
   
   // 指定图表的配置项和数据
    option = {
        color: ['#3f89ee'],
 backgroundColor: "#20263f",

        // tooltip: {
        //     show: true,
        //     trigger: 'item',
        //     formatter: "{a} : <br />{c}%",
        // },
        polar: {
            center: ['50%', '50%'],
            radius: '150%' //图形大小
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
            data: ["4级权重媒体"]
        },
        series: [

            {
                type: "bar",
                name: "4级权重媒体",
                coordinateSystem: "polar",
                barWidth: 6, //宽度
                barCategoryGap: "40%",
                // data: ["76.25","47.09","22.09"],
                data: ["76.25"],
               label: {
            normal: {
                formatter: (0.1 * 100).toFixed(2) + '%',
              
            }
        }
            },

        ]


    };