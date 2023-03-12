let icon =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABDCAMAAABjnP3jAAAAilBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAADT09MAAAAAAAAAAAAAAAD////8/Pz5+fnr6+v8/Pzr6+vZ2dn09PTFxcX+/v719fX6+vrf39+5ubnDw8MSEhIrKytRUVF2dnZAQEDi4uLi4uLk5OTk5OT///+tdFIzAAAALXRSTlMABQgNFBwDNS4mCxEYIyAamisoMS364t9b57qWj3b0s6mec28rJhMNDKemZ2YvJtR9AAACMUlEQVRo3u2ZaW/iMBBAaTDdxI7tOCeF0vvaY/7/39sZJ2BgKyUrxNBKfh+RyHtMJkhJZl+Ja+LqzHjJ53rvTs5OX/Gp/n350DZwZu66h+X7vwmoT5YtMNEuE0w48n/cAiO3H0NB+P2cfioYZhDmD8yEs0ABydsNMHPzllDA4Jd/gJ3fEguGADm/B3bu5xIDhgGoFthpFY2gD5iLBthpxHwbIFUOFyBX8osE4ApYuAAWl4ACaAUuE0BLMAQs4AIsYkAMiAExIAbEgBgQA2JADIgB+wF3wE5zENABO+1+gF0BOytLAdt7ww2ws6F7w93d8Sv/M6LXg9tz8wzMPJsQQFuoH4GVR007uA2gEbz8AkZ+vtAAKMAXSBpB+dQBE91TSQOQ5N+NAAvSzapr4Mw03WqToj8MoN8CX+DSqvoxjQKOKCZ+sapS5/20AeFZsaQCozPn6jodpcLO4tiPH6aj1LVzmTbkl1d9QCgQmGC0zsYpHc6qOPDj73JlNo7WBvVi5w8FiU/IrV2MY2hWabHnT11GRx7H2tzrk+APBZiglJhATqerTIvgL2msuZiAUqgP/lBACYnEiAlgJu1sXQz+mrZK4JEnINFO+utT3prJfmczKiB/1m+V/I+3Zie+N8QGJazJ3Bpg7TJjhUL7ae8Np+Mr+wJdrtel7v3+2DMWqIGuGkG7SNsnaKtZ7McFIrc2F+z+UKAUXVfM/lDg/zr8Rc3tDwUefn9I8PDrQ4Jn9q35C4Ev35B0ZZBdAAAAAElFTkSuQmCC';

let pointStyle = {
    borderColor: '#ea6f21',
    color: '#fff',
    borderWidth: 2,
}
let labelStyle = {
    show: true,
    position: 'top',
    padding: [10, 15, 15],
    color: '#000000',
    backgroundColor: {
        image: icon,
    },
    fontSize: 13,
    fontWeight: 'normal',
}
let total = [{
        num: 30,
        value: 55
    },
    {
        num: 40,
        value: 65
    },
    {
        num: 20,
        value: 95
    },
    {
        num: 10,
        value: 68
    },
    {
        num: 70,
        value: 43
    },
    {
        num: 100,
        value: 88
    }
]
let seriesData = []
total = total.sort(function(a, b) {
    return a.value - b.value
})
total.forEach((item, index) => {
    let ob = {
        value: item.value,
        num: item.num,
        itemStyle: pointStyle,
        label: labelStyle,
    }
    seriesData.push(ob)
})

option = {
    title: {
        text: 'label添加箭头',
        left: 'left',
    },
    grid: {
        top: '15%',
        left: '8%',
        right: '8%',
        bottom: '15%',
    },
    tooltip: {
        trigger: "axis",
        formatter: function(params) {
            return '分数：'+params[0].value  + '<br>人数：' + params[0].data.num + '人'
        }
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: true,
        },
        splitLine: {
            show: false
        },
        data: ['1/1', '1/2', '1/3', '1/4', '1/5', '1/6'],
    }, ],

    yAxis: [{
        type: 'value',
        min: 0,
        max: 100,
        splitNumber: 3,
        axisLine: {
            show: true,
        },
        axisTick: {
            show: true,
        },
        splitLine: {
            show: false
        },
    }, ],
    series: [{
        type: 'line',
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 10,
        lineStyle: {
            normal: {
                color: '#ea6f21',
                width: 5,
            },
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: 'rgba(236, 169, 44, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(236, 169, 44,0)',
                        },
                    ],
                    false
                ),
            },
        },
        data: seriesData
    }, ],
};