option = {
    backgroundColor: '#030F35',
    angleAxis: {
        type: "value",
        min: 0,
        max: 100,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    radiusAxis: {
        type: "category",
        data: ["支付进度", "工程进度"],
        z: 20,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            margin: 6,
            fontSize: 10,
            textStyle: {
                color: "#96F5F6"
            },
            interval: 0
        }
    },
    polar: {
        center: ["50%", "50%"],
        radius:["20%", "50%"]
    },
    tooltip: {
        show: true
    },
    series: [{
            type: "bar",
            barWidth: "30",
            data: [12],
            coordinateSystem: "polar",
            stack: "a",
            roundCap: true,
            itemStyle: {
                color: "#FFB400",
            },
            showBackground: true,
            backgroundStyle: {
                //color: 'rgba(20,24,95,0.1)',
                color: 'rgba(64, 71, 100, 0.1)'
            }
        },
        {
            type: "bar",
            data: [0, 25],
            coordinateSystem: "polar",
            stack: "a",
            roundCap: true,
            itemStyle: {
                color: "#9BFF00"
            },
            showBackground: true,
            backgroundStyle: {
                //color: "#27333F"
                 color: 'rgba(64, 71, 100, 0.1)'
            }
        },
    ],
}