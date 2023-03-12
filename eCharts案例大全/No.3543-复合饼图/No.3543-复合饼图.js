let markLineData = []
let source = [
    ['product', '2015', '2016'],
    ['京东方', 103.3],
    ['北方华创', 83.1],
    ['电子城', 86.4],
    ['七星', 2.4],
    ['正东', 7.4],
    ['益泰', 3.9],
    ['燕东', 15.8],
    ['北广', 5.8],
]

let a = (source[4][1]+source[5][1]+source[6][1]+source[7][1]+source[8][1])/(source[2][1]+source[3][1]+source[4][1]+source[5][1]+source[6][1]+source[7][1]+source[8][1])*360/2
// 添加“其他”
addOtherData(source, 5);

option = {
    legend: {},
    tooltip: {},
    dataset: {
        source: source
    },
    series: [{
            type: 'pie',
            radius: "50%",
            center: ['25%', '50%'],
            label: {
                show: true,
                position: "inside",
            },
            startAngle: a, // 起始角度 45 
            clockwise: false, // 逆时针 
            markLine: {
                lineStyle: {
                    type: 'solid',
                    color: "#BFBFBF"
                },
                symbol: 'none',
                data: markLineData
            }
        },
        {
            type: 'pie',
            radius: "30%",
            center: ['75%', '50%'],
            encode: {
                itemName: 'product',
                value: '2016',
            },
            label: {
                show: true,
                position: "inside"
            },
        }
    ]
};

// 获取表标线 对应点坐标
function getMarkLineData(percent) {
    // 1.获取画布 width,height
    let height = myChart.getHeight()
    let width = myChart.getWidth()

    // 2.  根据 series[0].center 获取圆心坐标
    let x0 = width * 0.25 // 圆心x轴坐标

    //3.圆边上点坐标
    // let x1   =   x0   +   r   *   cos(ao   *   3.14   /180   )
    // let y1   =   y0   +   r   *   sin(ao   *   3.14   /180   )

    // “其他” 终点坐标series[0].startAngle 45
    let x1 = x0 + (height / 4) * Math.cos(a * 3.14 / 180)
    let y1 = (height * 0.5) - (height / 4) * Math.sin(a * 3.14 / 180)

    let ao = 360 * (percent / 100) // 扇形角度

    let ao1 = 0 // 用来计算的坐标角度
    ao1 = (ao <= a) ? (a - ao) : (360 - (ao - a))
    if (ao1 < 270 && ao1 > a) ao1 = 270 // 角度当270用，要不样式不好看

    let x2 = 0,
        y2 = 0;
    x2 = x0 + (height / 4) * Math.cos(ao1 * 3.14 / 180)
    y2 = (height * 0.5) - (height / 4) * Math.sin(ao1 * 3.14 / 180)

    return [
        [{
            x: x1,
            y: y1
        }, {
            x: "75%",
            y: "35%"
        }],
        [{
            x: x2,
            y: y2
        }, {
            x: "75%",
            y: "65%"
        }]
    ]
}
// 添加其他 
function addOtherData(datasetSource, len) {
    let percent = 0
    let sum = 0 // 总计
    datasetSource.forEach((data, rowIndex) => {
        if (rowIndex > 0) { // 第一行数据不算
            let count = 0
            for (let key of data) {
                let value = isNaN(key) ? 0 : Number(key)
                if (count === 1) sum += value
                count++
            }
        }
    })
    let endData = datasetSource.slice(datasetSource.length - len)
    let other = ["其他"]
    for (let i = 0; i < endData.length; i++) {
        let j = 0;
        for (let key of endData[i]) {
            let value = isNaN(key) ? 0 : key
            if (j) other[j] ? (other[j] += value) : other.push(value)
            j++
        }
        endData[i].splice(1, 0, "")
    }
    datasetSource.push(other)
    // "其他"占比
    percent = sum ? ((other[1] / sum) * 100).toFixed(2) : 100
    markLineData = getMarkLineData(percent)
}