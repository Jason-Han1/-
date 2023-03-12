//灵感来自https://gallery.echartsjs.com/editor.html?c=x2wCtJP0pQ
//使用渐变模拟相互覆盖效果，不完美，数据差异较大情况下不适用
var data = [25, 25, 25, 25];
let sumArr = [];
for (var i = 0; i < data.length; i++) {
    let arr = data.slice(0, i);
    console.log(arr);
    let sum = 0;
    arr.forEach((item) => {
        sum += item;
    });
    sumArr.push(sum);
}
option = {
    backgroundColor: "#fff",
    angleAxis: {
        max: 100,
        show: false,
    },
    tooltip: {
        trigger: "item",
        formatter: "{c}%",
    },
    radiusAxis: {
        type: "category",
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    polar: {
        radius: ["50%", "65%"],
        center: ["50%", "50%"],
    },
    series: [{
            stack: "fenshu",
            type: "bar",
            roundCap: true,
            barWidth: 40,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: "rgba(255,0,0,0)",
                        }, {
                            offset: 0.05,
                            color: "rgba(255,0,0,0)",
                        },
                        {
                            offset: 1,
                            color: "rgba(255,0,0,1)",
                        },
                    ]),
                }
            },
            data: [{
                value: data[0],
            }, ],
            coordinateSystem: "polar",
            name: "A",
            label: {
                show: true,
            },
        },
        //2
        {
            stack: "fenshu",
            type: "bar",
            roundCap: true,
            barWidth: 40,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(82,196,26,0)",
                        },
                        {
                            offset: 0.05,
                            color: "rgba(82,196,26,0)",
                        },
                        {
                            offset: 1,
                            color: "rgba(82,196,26,1)",
                        },
                    ]),
                }
            },
            data: [{
                value: data[1],
            }, ],
            coordinateSystem: "polar",
            name: "B",
            label: {
                show: true,
            },
        },
        //3
        {
            stack: "fenshu",
            type: "bar",
            roundCap: true,
            barWidth: 40,
            itemStyle: {
                normal:

                {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: "rgba(0,0,255,0)",
                        },
                        {
                            offset: 0.05,
                            color: "rgba(0,0,255,0)",
                        },

                        {
                            offset: 1,
                            color: "rgba(0,0,255,1)",
                        },
                    ]),
                }

            },
            data: [{
                value: data[2],
            }, ],
            coordinateSystem: "polar",
            name: "C",
            label: {
                show: true,
            },
        },
        //4
        {
            stack: "fenshu",
            type: "bar",
            roundCap: true,
            barWidth: 40,
            itemStyle: {
                normal:

                {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: "rgba(114,46,209,0)",
                        },
                        {
                            offset: 0.05,
                            color: "rgba(114,46,209,0)",
                        },
                        {
                            offset: 1,
                            color: "rgba(114,46,209,1)",
                        },
                    ]),
                }

            },
            data: [{
                value: data[3],
            }, ],
            coordinateSystem: "polar",
            name: "D",
            label: {
                show: true,
            },
        },
    ],
};