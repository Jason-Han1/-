option = {
    // backgroundColor: "#fff",
    series: [{
        type: "liquidFill",
        radius: "98%",
        center: ["50%", "50%"],
        data: [0.38],
        backgroundStyle: {
            borderWidth: 2,
            borderColor: "rgba(245,127,159,.7)",
            // color: "rgba(33,67,77,0.2)"
        },
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: "rgba(73, 126, 255, 0.36)"
            },
            {
                offset: 1,
                color: "rgba(135, 241, 244, 0.7)"
            }
        ]),
        itemStyle: {
            shadowBlur: 0,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: "rgba(245,127,159,.7)"
                },
                {
                    offset: 0,
                    color: "rgba(245,127,159,.7)"
                }
            ]),
            opacity: 1
        },
        outline: {
            show: false
        },
        label: {
            fontSize: 18,
            color: '#fff',
            fontWeight: 400,
            formatter: function(v) {
                return (v.data * 100).toFixed(0) + "%";
            },
            align: "center"
        }
    }]
}