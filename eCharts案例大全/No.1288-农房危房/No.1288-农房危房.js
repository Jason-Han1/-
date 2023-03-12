var data1 = [
    { name: "个人贷记卡利息收入", value: 100000 },
    { name: "违约金", value: 13000 },
    { name: "分期收入", value: 150000 }
].sort( (a, b) => {
    return b.value - a.value
})

var data2 = [
    { name: "发卡方收入", value: 90000 },
    { name: "年费", value: 20000 },
    { name: "取现费", value: 40000 },
    { name: "收单业务", value: 600 },
    { name: "其他收入", value:-11000 }
].sort( (a, b) => {
    return b.value - a.value
})

var data = data1.concat(data2)
console.log(data)
function getNum(num, d) {
    let maxX = data[0].value
    let minX = data[data.length - 1].value
    let maxY = 5
    let minY = 1
    let a = (maxX - minX) / (maxY - minY)
    let b = maxY - maxX / a
    // console.log(maxX, minX, maxY, minY, a, b)
    return +(num / a + b).toFixed(2)
}

function sum(start, end){
    let num = 0
    let d = data.slice(start, end)
    for (let i = 0; i < d.length; i++) {
        num += d[i].value
    }

    return num
}

var getColor1 = function (x, y, r) {
    return {
        type: "radial",
        x,
        y,
        r,
        colorStops: [
            { offset: 0, color: "rgba(0, 42, 254, 0)" },
            { offset: 1, color: "rgba(0, 180, 255, 0.3)" }
        ]
    }
}
var getColor2 = function (x, y, r) {
    return {
        type: "radial",
        x,
        y,
        r,
        colorStops: [
            { offset: 1, color: "rgba(0, 245, 254, 0.3)" },
            { offset: 0, color: "rgba(0, 180, 255, 0)" }
        ]
    }
}

// var colorList = ["yellow", "blue", "red"]
var colorList = [
    getColor1(0.18, 1.1, 0.8), 
    getColor1(-0.1, 0.26, 0.8), 
    getColor1(0, 0, 0.8),
    getColor2(0.8, 0, 0.8),
    getColor2(0.8, 0.35, 0.8), 
    getColor2(0.8, 0.65, 0.8),
    getColor2(0.6, 0.75, 0.8),
    getColor2(0.6, 0.65, 0.8)
]

var lineLength = [[10, 0],[-20, -0],[-100, 0],[-30, 0],[-60, 0],[-100, 0],[-120, 0],[-130, 0]]

var text = ["个人贷记卡利息收入", "违约金", "分期收入", "发卡方收入", "年费", "取现费", "收单业务", "其他收入"]

data = data.map( (item, index) => {
    return {
        name: item.name,
        value: getNum(item.value),
        value1: item.value,
        itemStyle: {
            color: colorList[index]  
        },
        labelLine: {
            length: lineLength[index][0],
            length2 : lineLength[index][1]
        }
    }
})

var option = {
    backgroundColor: "#000",
    // color: colorList,
    // color: ["yellow", "blue", "red"],
    color: ["yellow", "blue", "red","rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,0)"],
    series: [
    {
        type: 'pie',
        radius: ["28%", "31%"],
        startAngle: 100,
        data: [
            {
                name: "利息收入",
                value: sum(0, 3),
                value1: 2100000,
                itemStyle: {
                    color: "#00d8ff"    
                }
            }, 
            {
                name: "中间业务收入",
                // value: 1150500,
                value: sum(3),
                value1: 1150500,
                itemStyle: {
                    color: "#00fe5e"    
                }
              
            }
        ],
        label: {
            formatter: function(params) {
                return "{n|" +  params.name + "}\n{hr|}\n{d|" + params.data.value1 + "}{unit| 万元}"
            },
            rich: {
                hr: {
                    borderColor: "#fff",
                    width: "100%",
                    borderWidth: 2,
                    height: 0
                },
                n: {
                    fontSize: 16,
                    color: "#fff",
                    padding: 7
                },
                d: {
                    fontSize: 23,
                    color: "#ffb400",
                    fontFamily: "DINCond-Regular",
                    fontWeight: "bold",
                    padding: 4
                },
                unit: {
                    fontSize: 9,
                    color: "#ffb400"
                }
            }
        },
        labelLine: {
            show: true,
            lineStyle: {
                color: "#fff"
            }
        },
        z: 3
    },
    {
        type: "pie",
        startAngle: 100,
        radius: ["31%", "75%"],
        roseType: 'radius',
        labelLine: {
            show: false,
        },
        label: {
            color: '#fff',
            formatter: function(params) {
                return "{n|" +  params.name + "}\n{d|" + params.data.value1 + "}"
            },
            rich: {
                n: {
                    fontSize: 10,
                    color: "#fff",
                    // padding: 7
                },
                d: {
                    fontSize: 12,
                    color: "#fff",
                    // fontFamily: "DINCond-Regular",
                    // fontWeight: "bold",
                    padding: [4, 0]
                },
                unit: {
                    fontSize: 9,
                    color: "#ffb400"
                }
            }
        },
        itemStyle: {
            color: colorList
        },
        data: data
    },
    {
        type: 'pie',
        roseType: 'radius',
        // clockwise: false,
        radius: ["80%", "84%"],
        data: [
            data.map( item => {
                return {
                    value: item.value,
                    itemStyle: {
                        color: "rgba(0,0,0,0)",
                        borderColor: "black",
                        borderWidth: 2
                    }
                }
            })[0], 
            { 
                value: 3250500 - data[0].value,
                itemStyle: {
                    borderWidth: 20,
                    borderColor: "black",
                    color: "rgba(0,0,0,0)",
                    opacity: 0
                }
            }
        ],
        labelLine: {
            show: false
        },
        label: {
            show: false,
        },
    }
    ]
};