var data = [
    {name: "本周事件数量", value: 120},
    {name: "本周变更数量", value: 10},
    {name: "本周问题数量", value: 5}
].sort((a, b) => b.value - a.value)

var lines = [35, -100, -150]

var colorList = [
    ['#00ffb4', '#00f0ff'],
    ['#00f0ff', '#0060ff'],
    ['#00f0ff', '#ffd200']
]

data = data.map((item, index) => {
    return {
        name: item.name,
        value: Math.log(item.value),
        val: item.value,
        itemStyle: {
            borderColor: "#000",
            borderWidth: 3,
            color: {
                type: 'line',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                    {offset: 0, color: colorList[index][0]},
                    {offset: 1, color: colorList[index][1]}
                ]
            }
        },
        labelLine: {
            length: lines[index],
            length2: 0,
            lineStyle: {
                color: '#fff'
            }
        }
    }
})

var option = {
    backgroundColor: "#000",
    series: [{
        type: 'pie',
        roseType: "area",
        clockwise: false,
        startAngle: -30,
        data: data,
        label: {
            fontSize: 16,
            color: "#fff",
            align: 'center',
            formatter: function(params) {
                return "{a|" + params.data.val + "}\n" + params.name
            },
            rich: {
                a: {
                    align: 'center',
                    fontSize: 16,
                    color: "#ffcc44"
                }
            }
        }
    }]
};