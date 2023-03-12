//灵感来自https://gallery.echartsjs.com/editor.html?c=x2wCtJP0pQ
var data = [25, 25, 25, 10, 15];
var legendName = ['A', 'B', 'C', 'D', 'E'];
option = {
    color :["red", "green", "blue", "yellow", 'deepskyblue'],
    backgroundColor: "#fff",
    angleAxis: {
        max: 100,
        show: false,
    },
    legend: {
        data: ['A', 'B', 'C', 'D', 'E']
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
    series: []
};
for (var i = 0; i < data.length; i++) {
    let arr = data.slice(0, i)
    let sum = 0;
    arr.forEach(item => {
        sum += item;
    })
    option.series.push({
        stack: 'fenshu',
        type: 'bar',
        roundCap: true,
        barWidth: 40,
        showBackground: true,
        backgroundStyle: {
            color: "#f0f0f0"
        },
        data: [{
            value: data[i],
        }],
        coordinateSystem: 'polar',
        name: legendName[i],
        label: {
            show: true,
        },
    })
}