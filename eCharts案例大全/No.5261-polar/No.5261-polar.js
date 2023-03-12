//灵感来自https://gallery.echartsjs.com/editor.html?c=x2wCtJP0pQ
//使用渐变模拟相互覆盖效果，不完美，数据差异较大情况下不适用
var i_data = 100 / 6;

var series_data = [];
for (var i = 0; i < 6; i++) {
    series_data.push({
        stack: "fenshu",
        type: "bar",
        roundCap: true,
        barWidth: 40,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
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
            value: i_data,
        }, ],
        coordinateSystem: "polar",
        name: i,
        label: {
            show: true,
        },
    })
}



option = {
    backgroundColor: "#fff",
    angleAxis: {
        max: 100,
        show: true,
        startAngle:0,
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
    series:series_data,
    
};

var timer;

function doing() {
    let option = myChart.getOption();
    option.angleAxis.startAngle = option.angleAxis.startAngle + 10;
    myChart.setOption(option);

}

function startTimer() {

    timer = setInterval(doing, 100);

}

setTimeout(startTimer, 500);


