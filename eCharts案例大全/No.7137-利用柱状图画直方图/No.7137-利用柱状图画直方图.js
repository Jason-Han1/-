option = {
    xAxis: {
        type: 'category',
        // data: [2, 4, 6, 8, 10, 12, 14],
        scale: true
    },
    yAxis: {
        type: 'value'
    },
    tooltip: {
        trigger: "axis",
        formatter: function(parmas){
            console.log(parmas)
            let data = parmas.filter(e => e.seriesType === "bar");
            let str = ""
            data.forEach(item => {
                str += item.seriesName + ":" + item.value[1] + "<br>";
            })
            return str
        }
    },
    color: ['#33f', '#ff4e33','#f90'],
    series: [{
        name: "series1",
        data: [[2,120], [4,200], [6,150], [8,80], [10,70], [12,110], [14,130]],
        type: 'bar',
        barWidth: "100%",
        barGap: "-100%",
        label: {
            show: true,
            position: "top",
            distance: 0
        },
        itemStyle: {
            opacity: 1,
            borderWidth: 1,
            borderColor: "#000"
        }
    },
    {
        // data: [110, 220, 10, 10, 30, 140, 100],
        name: "series2",
        data: [[2,110], [4,220], [6,10], [8,10], [10,30], [12,140],[14,100]],
        type: 'bar',
        barWidth: "100%",
        barGap: "-100%",
        label: {
            show: true,
            position: "top",
            distance: 0
        },
        itemStyle: {
            opacity: 0.4,
            borderWidth: 1,
            borderColor: "#000"
        }
    },
    {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'line',
        itemStyle: {
            color: "#33f",
            opacity: 0.4
            // color: "rgba(51,51,255,0.2)"
        },
        lineStyle: {
            opacity: 0.4
        }
    },
    {
        data: [110, 220, 10, 10, 30, 140, 100],
        type: 'line',
        itemStyle: {
            color: "#ff4e33",
            opacity: 0.4
            // color: "rgba(255,78,51,0.2)"
        },
        lineStyle: {
            opacity: 0.4
        }
    }
    ]
};
