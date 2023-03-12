const dataname = ['能力一', '能力二', '能力三', '能力四', '能力五', '能力六']
const datamax = [100, 100, 100, 100, 100, 100]
const value1 = [89, 93, 60, 59, 85, 91]
const num = 70

var indicator = []
for (var i = 0; i < dataname.length; i++) {
    indicator.push({
        name: dataname[i],
        max: 100
    })
}
option = {
    legend: {
        data: ['余大大', '张大大'],
        orient: 'horizontal',
        icon: "circle",
        left: '0',
        top: '0',
        itemWidth: 8,
        itemHeight: 8,
        textStyle: {
            fontSize: '10',
            color: '#000',
        },
    },
    title: {
        text: [`{span|${num}分}`].join(''),
        bottom: 'center',
        left: 'center',
        textStyle: {
            rich: {
                span: {
                    fontSize: 40,
                    color: '#fff'
                }
            }
        }
    },
    radar: {
        center: ["50%", "50%"],
        radius: "50%",
        splitArea: {
            areaStyle: {
                color: ['rgb(251,246,240)'].reverse(),
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#ccc"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#ccc"
            }
        },
        name: {
            formatter: function(name) {
                const i = dataname.indexOf(name)
                return `{name1|${value1[i]}}\n{name3|${name}}`
            },
            lineHeight: 20,
            rich: {
                name1: {
                    color: '#000',
                    align: 'center'
                },
                name2: {
                    color: '#DFB48F',
                    align: 'center'
                },
                name3: {
                    color: '#606266',
                    align: 'center',
                }
            }
        },
        indicator: indicator
    },

    series: [{
        name: "余大大",
        type: "radar",
        symbol: "none",
        areaStyle: {
            normal: {
                color: 'rgb(151,115,91)',
            }
        },
        itemStyle: {
            color: 'rgb(151,115,91)',
        },
        lineStyle: {
            width: 0
        },
        data: [value1]
    }]
};