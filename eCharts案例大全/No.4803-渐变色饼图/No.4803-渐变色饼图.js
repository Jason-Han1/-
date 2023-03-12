const startAlpha = 1;
const endAlpha = 1;

const color = [{
        r: 252,
        g: 208,
        b: 149
    },
    {
        r: 152,
        g: 246,
        b: 246
    },
    {
        r: 195,
        g: 248,
        b: 181
    },
    {
        r: 238,
        g: 186,
        b: 255
    },
    {
        r: 240,
        g: 108,
        b: 162
    },
    {
        r: 103,
        g: 186,
        b: 243
    }
]

const color1 = [{
        r: 143,
        g: 89,
        b: 43
    },
    {
        r: 98,
        g: 182,
        b: 182
    },
    {
        r: 108,
        g: 208,
        b: 89
    },
    {
        r: 131,
        g: 87,
        b: 157
    },
    {
        r: 190,
        g: 48,
        b: 117
    },
    {
        r: 73,
        g: 56,
        b: 126
    }
]

function getCoordinates(startArc, endArc) {
    const posi = [
        Math.sin(startArc),
        -Math.cos(startArc),
        Math.sin(endArc),
        -Math.cos(endArc)
    ]
    const dx = posi[2] - posi[0]
    const dy = posi[3] - posi[1]

    return getLocation(dx, dy)
}

function getLocation(dx, dy) {
    const tanV = dx / dy
    const directSign = Math.abs(tanV) < 1
    const t = directSign ? tanV : 1 / tanV

    const sign1 = t > 0 ? 1 : -1
    const sign2 = dx > 0 ? 1 : -1
    const sign = directSign ? sign1 * sign2 : sign2

    const group1 = [0.5 - sign * t / 2, 0.5 + sign * t / 2]
    const group2 = sign > 0 ? [0, 1] : [1, 0]
    const group = [...group1, ...group2]
    const keys = directSign ? ['x', 'x2', 'y', 'y2'] : ['y', 'y2', 'x', 'x2']

    let res = {}
    keys.forEach((k, idx) => {
        res[k] = group[idx]
    })
    return res
}


function setGradientColorInItemSyle(datas, colorlist, colorlist1, startAlpha, endAlpha) {
    for (let i = 0; i < datas.length; i++) {
        const color = colorlist[i];
        const color1 = colorlist1[i];

        const startArc = datas[i]._startArc;
        const endArc = datas[i]._endArc;
        // 这里计算了 线性渐变的起止方向
        const coordinates = getCoordinates(startArc, endArc);
        datas[i].itemStyle = {
            color: {
                ...coordinates,
                "type": "linear",
                "global": false,
                // 这里给了 线性渐变的起止颜色
                "colorStops": [{
                    offset: 0,
                    color: `rgba(${color.r}, ${color.g}, ${color.b}, ${startAlpha})`
                }, {
                    offset: 1,
                    color: `rgba(${color1.r}, ${color1.g}, ${color1.b}, ${endAlpha})`
                }]
            }
        }
    }
    return datas
}

const dataArr = [{
        value: 10,
        name: '问题1',
        "_startArc": 0,
        "_endArc": 1,
    },
    {
        value: 20,
        name: '问题2',
        "_startArc": 0,
        "_endArc": 1,
    },
    {
        value: 30,
        name: '问题3',
        "_startArc": 0,
        "_endArc": 1,
    },
    {
        value: 40,
        name: '问题4',
        "_startArc": 0,
        "_endArc": 1,
    },
    {
        value: 50,
        name: '问题5',
        "_startArc": 0,
        "_endArc": 1,
    },
    {
        value: 60,
        name: '问题6',
        "_startArc": 0,
        "_endArc": 1,
    }
]

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    backgroundColor: "rgba(73,129,173,.2)",
    legend: {
        orient: 'vertical',
        x: '70%',
        y: "center",
        itemWidth: 30,
        itemHeight: 10,
        formatter: function(name) {
            const oa = option.series[0].data;
            const num = oa.reduce((prev, curr) => {
                return prev + curr.value
            }, 0)
            for (let i = 0; i < option.series[0].data.length; i++) {
                if (name == oa[i].name) {
                    return name + '   ' + ((oa[i].value / num * 100).toFixed(1)) + '%';
                }
            }
        },
        textStyle: {
            color: "#FFFFFF",
            fontSize: 18,
            lineHeight: 20
        }
    },
    title: {
        x: "30%",
        y: "center",
        text: "每日问题\n发现情况",
        textStyle: {
            color: "#FFFFFF",
            fontSize: 30,
            lineHeight: 40
        }
    },
    series: [{
        name: '',
        type: 'pie',
        radius: ['55%', '70%'],
        center: ['35%', '50%'],
        data: setGradientColorInItemSyle(dataArr, color, color1, startAlpha, endAlpha),
        itemStyle: {
            normal: {
                label: {
                    show: false,
                    formatter: '{c} ({d}%)'
                }
            },
            labelLine: {
                show: true
            }
        }
    }]
}