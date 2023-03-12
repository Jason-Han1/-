var series = []
let n = parseInt(Math.random() * 100)
for (var i = 0; i < 10; i++) {
    series.push({
        data: [
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 0],
            [6, 0],
            [7, 0],
            [8, 0],
            [9, 0]
        ]
    })
}
series = series.map((item, index) => {
    let activeColor = 'red'
    let normalColor = '#ddd'
    let col = 0
    let row = 0
    let color = ''
    let arr = Array.from(n.toString())
    row = Number(arr[0])
    if (arr.length > 1) {
        col = Number(arr[1])
    }

    return {
        type: 'scatter',
        data: item.data.map((child, c) => {
            if (n < 100) {
                color = (index < row || (index === row && c < col)) ? activeColor : normalColor
            } else {
                color = activeColor
            }
            return {
                value: [child[0], child[1] + index],
                itemStyle: {
                    color
                }
            }
        }),
    }
})

option = {
    xAxis: {
        show: false,
        max: 10
    },
    yAxis: {
        show: false,
        max: 10
    },
    grid: {
        width: 100,
        height: 100
    },
    series: series
};