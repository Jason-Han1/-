option = {
    center: ["45%", "60%"],
    series: [{
        name: "目前完成量",
        type: "liquidFill",
        radius: "75%",
        center: ["50%", "50%"],
        data: [0.74],
        color: "rgba(67,209,100,1)",
        itemStyle: {
            color: "rgba(67,209,100,1)",
            // opacity: 0.6,
        },
        label: {
            normal: {
                color: "#fff",
                insideColor: "transparent",
                textStyle: {
                    fontSize: 16,
                    fontWeight: "bold",
                    fontFamily: "Microsoft YaHei",
                },
            },
        },
        outline: {
            show: true,
            borderDistance: 5,
            itemStyle: {
                borderColor: "rgba(67,209,100,1)",
                borderWidth: 2,
            },
        },
        backgroundStyle: {
            color: "#bae6c5",
        },
    }, ],
}