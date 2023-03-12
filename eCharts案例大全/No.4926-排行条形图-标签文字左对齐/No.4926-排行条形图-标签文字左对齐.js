var fontSize = (val) => {
    return val * 100
}
var colorRgba = (sHex) => {
    // 十六进制颜色值的正则表达式
    let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/;
    /* 16进制颜色转为RGB格式 */
    let sColor = sHex.toLowerCase();
    let alpha = 1;
    if (sColor && reg.test(sColor)) {
        if (sColor.length === 4 || sColor.length === 5) {
            let sColorNew = "#";
            for (let i = 1; i < sColor.length; i += 1) {
                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
        }
        // 如果有透明度再执行
        if (sColor.length === 9) {
            alpha = (parseInt("0x" + sColor.slice(7, 9)) / 255).toFixed(2);
        }
        //  处理六位的颜色值
        let sColorChange = [];
        for (let i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        // console.log("rgba(" + sColorChange.join(",") + "," + alpha + ")");
        return "rgba(" + sColorChange.join(",") + "," + alpha + ")";
    } else {
        return sColor;
    }
}
let json = [{
    name: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    symbol: '正',
    value: 40
}, {
    name: "aabbbbbbbbbbbbb",
    symbol: '负',
    value: 30
}, {
    name: "cccccccccccccccccccccccccccc",
    symbol: '负',
    value: 20
}, {
    name: "ddddddd",
    symbol: '正',
    value: 10
}]

let color = ['#00feffb3', '#f08080b3']
let label = json.map((item) => item.name)
console.log(label)
let data = []
let data1 = []
for (let i = 0; i < json.length; i++) {
    let item = json[i]
    data.push({
        name: item.name,
        value: item.value,
        label: {
            backgroundColor: item.symbol == '正' ? colorRgba(color[0]) : colorRgba(color[1])
        },
        itemStyle: {
            normal: {
                color: item.symbol == '正' ? colorRgba(color[0]) : colorRgba(color[1])
            }
        }
    })
    data1.push({
        name: item.name,
        value: item.value + 1,
        itemStyle: {
            normal: {
                borderColor: item.symbol == '正' ? colorRgba(color[0]) : colorRgba(color[1])
            }
        }
    })
}
option = {
    backgroundColor: '#012248',
    grid: {
        containLabel: true,
        left: -fontSize(1)
    },
    xAxis: {
        show: false,
        type: 'value',
        min: 0,
        max: 50,
    },
    yAxis: [{
        show: true,
        type: 'category',
        data: label,
        inverse: true,
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            // formatter: '{a|{value}}',
            // rich: {
            //   a: {
            //   },
            // },
            align: 'left',
            margin: fontSize(2.5),
            color: '#fff',
            fontSize: fontSize(0.13),
        },
    }, {
        show: true,
        type: 'category',
        inverse: true,
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
    }],
    series: [{
        name: '排行',
        type: 'bar',
        yAxisIndex: 0,
        data: data,
        barWidth: fontSize(0.06),
        itemStyle: {
            normal: {
                barBorderRadius: fontSize(0.06),
                /*  color: {
                   type: 'linear',
                   colorStops: [
                     {
                       offset: 0,
                       color: 'rgba(0,77,167,1)'
                     },
                     {
                       offset: 1,
                       color: 'rgba(0,244,255,1)'
                     }]
                 }, */
                shadowColor: colorRgba(color[1]),
                shadowBlur: 5,
            }
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                lineHeight: fontSize(0.4),
                width: fontSize(0.4),
                height: fontSize(0.4),
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: fontSize(0.4),
                formatter: '{a|{c}}',
                distance: fontSize(0.2),
                rich: {
                    a: {
                        align: 'center',
                        color: '#fff',
                        fontSize: fontSize(0.12),
                        fontWeight: 'bolder',
                    }
                }
            }
        },
    }, {
        name: '外边框',
        type: 'bar',
        data: data1,
        yAxisIndex: 1,
        barWidth: fontSize(0.10),
        itemStyle: {
            normal: {
                barBorderRadius: fontSize(0.10),
                borderRadius: fontSize(0.10),
                borderWidth: 0.5,
                color: 'transparent'
            }
        },
        label: {
            normal: {
                show: false,
            }
        },
    }]
}