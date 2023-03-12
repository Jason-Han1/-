const backgroundData = [
    [0, 0, 0, 0, 1000]
]
const data = [200, 300, 210]
let color = ['RGBA(98, 119, 127, 1.00)', 'RGBA(0, 185, 252, 1.00)', 'RGBA(255, 194, 52, 1.00)', 'RGBA(0, 89, 121, 1.00)']


const series = [{
    name: '',
    type: 'boxplot',
    data: backgroundData,
    hoverAnimation: false,
    animation: false,
    tooltip: false,
    silent: true,
    zlevel: -1,
    markLine: {
        lineStyle: {
            color: 'RGBA(98, 119, 127, 1.00)'
        }
    },

}, ]

data.forEach((data, i) => {
    series.push({
        name: i,
        type: 'bar',
        stack: 1,
        data: [data],
        barWidth: 46,
        itemStyle: {
            color: color[i + 1]
        },
        label: {
            show: true,
            position: 'right',
            formatter: '{a} {b} {c} %',

        }
    })
})


option = {
    backgroundColor: 'RGBA(0, 31, 47, 1.00)',
    legend: {
        show: true,
        orient: 'vertical',
        right: '6%',
        top: '30%',
        itemWidth: 10,
        itemHeight: 4,
        textStyle: {
            rich: {
                b: {
                    color: '#fff',
                    fontSize: 18 * 0.4,
                },
                c: {
                    fontSize: 28 * 0.4,
                    color: 'RGBA(0, 178, 237, 1.00)',
                },
                d: {
                    color: 'RGBA(248, 196, 0, 1.00)',
                    fontSize: 16 * 0.4
                },
                hr: {
                    height: 0,
                    borderWidth: 1 * 0.4,
                    width: '100%',
                    borderColor: 'RGBA(255,255,255,0.1)',
                },
            },
        },

        // formatter: `{c|{c}} \n {hr|} \n {b|{b}} {d| {d}%}`,
        formatter: (name) => {
            return `{c|${ data[name]} W} \n {hr|} \n {b|${name}分类} {d| 33%}`
        },

    },

    color,
    xAxis: {
        data: ['Sun'],
        axisLabel: {
            formatter: '{value} \n test',
            align: 'center',

            color: '#fff',
            fontSize: 18

        }

    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '15%'
    },
    yAxis: {
        splitLine: {

            lineStyle: {
                color: 'RGBA(0, 185, 252, 0.3)'
            }
        },
        axisLine: {
            show: false
        }
    },
    series,
};