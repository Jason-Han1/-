var uploadedDataURL = "/asset/get/s/data-1582093215271-2nlD0mdA.png";
let chartData = 60;
let gradient = new echarts.graphic.LinearGradient(
    0, 0, 1, 0, [{
            offset: 0,
            color: "#00FFBA",
        },
        {
            offset: 1,
            color: "#003728",
        }
    ]
);

option = {
    backgroundColor: 'rgba(19,22,24,1)',
    legend: {
        show: false
    },
    graphic: {
        elements: [{
            type: "image",
            style: {
                image: uploadedDataURL,
                width: 84 * 2,
                height: 84 * 2
            },
            left: 'center',
            top: 'center'
        }]
    },
    series: [{
        type: 'pie',
        clockwise: false,
        center: ['50%', '50%'],
        radius: [91, 96],
        hoverAnimation: false,
        label: {
            show: false,
        },
        data: [{
            value: 100 - chartData,
            itemStyle: {
                color: '#2B3136',
                borderWidth: 5,
                borderColor: '#2B3136'
            }
        }, {
            value: chartData,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    borderColor: gradient,
                    color: gradient
                }
            },
        },]
    }]

};