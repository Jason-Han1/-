var dataArr = [{
        name: 'aaaa',
        value: 10
    },
    {
        name: 'bbbb',
        value: 20
    },
    {
        name: 'cccc',
        value: 30
    },
    {
        name: 'dddd',
        value: 40
    },
    {
        name: 'eeee',
        value: 50
    },
    {
        name: 'ffff',
        value: 60
    },
]
var legendData = []
var emptyData = []
dataArr.forEach((el, index) => {
    legendData.push(el.name)
    emptyData.push({
        name: '',
        value: 0,
        
    })
})
var seriesData = dataArr.concat(emptyData)
option = {
    color:['rgb(254,67,101)',"rgb(252,157,154)","rgb(249,205,173)","rgb(200,200,169)","rgb(182,194,154)","rgb(131,175,155)"],
    backgroundColor: 'rgb(43, 51, 59)',
    legend: {
        orient: 'vertical',
        icon: "rect",
        right: "30%",
        y: "center",
        data: legendData,
        textStyle: {
            "color": "#fff"
        }
    },
    series: [{
        name: "",
        type: "pie",
        radius: ["10%", "50%"],
        avoidLabelOverlap: false,
        startAngle: 0,
        center: ["50%", "50%"],
        roseType: "area",
        selectedMode: "single",
        label: {
            normal: {
                show: false,
            },
        },
        labelLine: {
            normal: {
                show: false,
            },
        },
        data: seriesData
    }]
};