var height = document.querySelector('#chart-panel').offsetHeight;
var width = document.querySelector('#chart-panel').offsetWidth;
var radiusMax = width >= height ? height : widht;
console.log(width);
var data = {
    title: '雷达图',
    ratioData: [{
            value: '95',
            name: '1'
        },
        {
            value: '90',
            name: 'rrrrrrrrrrrr'
        },
        {
            value: '85',
            name: '3'
        },
        {
            value: '63',
            name: '4'
        },
        {
            value: '48',
            name: '5'
        },
        {
            value: '35',
            name: '6'
        },
        {
            value: '32',
            name: '7'
        },
        {
            value: '26',
            name: '8'
        },
        {
            value: '17',
            name: 'hshshsrrtwywwtrwytrwy'
        },
    ]
};
var indicator = [];
var showData = [];
if (data.title !== undefined) {
    data.ratioData.map(item => {
        indicator.push({
            name: item.name,
            max: 100

        });
        showData.push(Number(item.value));
    });
}

option = {
    backgroundColor: "#000",
    title: {
        text: `{title|${data.title}}`,
        show: true,
        backgroundColor: {
            type: "linear",
            colorStops: [{
                offset: 0,
                color: "#47b1b6"
            }, {
                offset: 1,
                color: "transparent"
            }]
        },
        textStyle: {
            color: "#fff",
            rich: {
                title: {
                    color: "#fff",
                    fontSize: 18,
                    width: width
                }
            }
        },
    },
    radar: {
        indicator: indicator,
        shape: "circle",
        center: ["50%", "53%"],
        radius: "85%",
        splitNumber: 5,
        splitArea: {
            areaStyle: {
                color: ["transparent"]
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                opacity: 1,
                color: "#263c5f",
                width: 3,
            }
        },
        axisLine: {
            show: false,
        },
        name: {
            show: false,
        }
    },
    series: [{
        name: data.title,
        type: "radar",
        symbolSize: 0.1,
        areaStyle: {
            normal: {
                opacity: 1,
                color: new echarts.graphic.RadialGradient(width / 2, height / 2, radiusMax * 0.3, [{
                    offset: 0,
                    color: 'rgb(61, 171, 204,0.2)'
                }, {
                    offset: 1,
                    color: 'rgb(61, 171, 204,1)'
                }], true),
            }
        },
        lineStyle: {
            width: 0,
        },
        label: {
            normal: {
                show: true,
                position: "top",
                formatter: (params) => {
                    let dataIndex = params.data.indexOf(params.value);
                    let rang = `NO.${dataIndex+1}`;
                    let value = `${params.value}%`;
                    let name = indicator[dataIndex].name;
                    let text = '';
                    if (dataIndex < 3) {
                        text = `{value|${value}}{rang|${rang}}{name|${name}}`;
                    } else {
                        text = `{name|${name}}{value|${value}}`;
                    }
                    return text;
                },
                rich: {
                    rang: {
                        color: "#02ba5f",
                        fontSize: 16,
                    },
                    value: {
                        color: "#00FFFF",
                        fontWeight: 700,
                        fontSize: 16,
                    },
                    name: {
                        color: "#fff",
                        padding: [0, 5],
                        fontSize: 14
                    }
                }
            }
        },
        data: [showData],
    }]
};

var chart = document.getElementById('chart-panel');
echarts.init(chart);