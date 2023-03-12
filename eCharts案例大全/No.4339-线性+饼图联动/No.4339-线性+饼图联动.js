var xData = ['西湖区', '拱墅区', '上城区', '下城区', '江干区', '余杭区', '临安区', '富阳区', '萧山区', '滨江区', '建德市', '桐庐县', '淳安县', ];
var line1 = [10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 30];
var line2 = [20, 40, 20, 40, 20, 40, 20, 40, 20, 40, 20, 40, 20, 40];
var line3 = [30, 50, 30, 50, 30, 50, 30, 50, 30, 50, 30, 50, 30, 50];
var line4 = [40, 60, 40, 60, 40, 60, 40, 60, 40, 60, 40, 60, 40, 60];
var line5 = [50, 70, 50, 70, 50, 70, 50, 70, 50, 70, 50, 70, 50, 70];
var line6 = [60, 80, 60, 80, 60, 80, 60, 80, 60, 80, 60, 80, 60, 80];
var typeData = ["开机", "停机", "待退机", "退机", "7天0销量", "其他"];


var allSite = [{
        value: 22541,
        name: '开机',
    }, {
        value: 9541,
        name: '停机',
    }, {
        value: 954,
        name: '待退机',
    },
    {
        value: 954,
        name: '退机',
    },
    {
        value: 954,
        name: '7天0销量',
    },
    {
        value: 954,
        name: '其他',
    }

];
var colors = ["#0177ee", "#632aff", "#ffa130", "#f96f68", "#fb321c", "#4e4e4e"];
option = {
     backgroundColor:'#dbf6e9',
    title: [{

            text: '单位：元',
            x: '38%',
            y: '10%',

            textStyle: {
                color: '#333',
                fontSize: 12
            },
        },
        {
            text: '18306',
            x: '19.5%',
            y: '47%',
            textAlign: 'center',
            textStyle: {
                color: '#000',
                fontSize: 16,
                fontWeight: 'bold'
            },
            subtext: "total",
            subtextStyle: {
                color: '#2087ed',
                fontSize: 18,

            }

        },
    ],
    legend: {
        data: typeData,
        textStyle: {
            color: '#B5C9FF'
        },
        show: true,
        x: "left",
        left: 'center',
        top: '5%',
    },
    tooltip: {
        show: true,
        trigger: 'axis',
    },

    grid: {
        left: '40%',
        right: '5%',
        top: '16%',
        bottom: '5%',
        containLabel: true
    },

    xAxis: {
        type: 'category',
        axisTick: {
            "show": false
        },

        axisLabel: {
            show: true,

            textStyle: {
                fontSize: 12,
                color: '#333'
            },
        },
        axisLine: {
            lineStyle: {
                color: '#333'
            }
        },
        data: xData
    },

    yAxis: [{
            color: '#B5C9FF',
            splitLine: {
                lineStyle: {
                    color: '#eee'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#333'
                }
            },
            type: 'value'
        }

    ],
    series: [{
            name: typeData[0],
            type: "line",
            color: colors[0],
            smooth: true,
            data: line1
        },
        {
            name: typeData[1],
            type: "line",
            smooth: true,
            color: colors[1],
            data: line2
        },
        {
            name: typeData[2],
            type: "line",
            smooth: true,
            color: colors[2],
            data: line3
        },
        {
            name: typeData[3],
            type: "line",
            smooth: true,
            color: colors[3],
            data: line4
        },
        {
            name: typeData[4],
            type: "line",
            smooth: true,
            color: colors[4],
            data: line5
        },
        {
            name: typeData[5],
            type: "line",
            smooth: true,
            color: colors[5],
            data: line6
        },
        {
            name: "总站点",
            type: 'pie',
            color: colors,
            center: ['20%', '50%'],
            radius: ['25%', '30%'],
            data: allSite
        }

    ]
};