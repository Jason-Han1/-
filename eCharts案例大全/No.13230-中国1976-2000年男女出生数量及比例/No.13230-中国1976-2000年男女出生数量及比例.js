var rowdata = [-0.81, -0.31, -0.39, -0.7, -0.99, -0.96, -1.04, -1.08, -1.66, -2.59, -3.73, -3.62, -4.19, -4.94, -6.1, -7.14, -7.62, -7.05, -7.09, -3.84, -4.95, -5.49, -5.37, -4.62, -4.9, -5, -5.05]
var rowdata1 = [1.85, 1.72, 1.1, 0.91, 1.29, 1.99, 2.05, 2.42, 3.07, 3.76, 3.7, 7.74, 4.0, 4.31, 5.39, 6.31, 6.81, 7.07, 7.66, 8.16, 8.47, 9.27, 9.94, 10.17, 8.17]
var rowdata2 = [49.08, 49.14, 49.45, 49.55, 49.36, 49.0, 48.98, 48.79, 48.47, 48.12, 48.15, 46.13, 48.0, 47.84, 47.31, 46.84, 46.6, 46.47, 46.17, 45.92, 45.76, 45.36, 45.03, 44.91, 45.92]
var men = [10435196, 9119685, 9519345, 9548059, 9315481, 9752137, 11786950, 10275677, 10468201, 10598460, 12023710, 13619530, 12779621, 13110848, 13811030, 10674963, 10014222, 9590414, 8866012, 9157597, 8257145, 7897234, 7701684, 6332425, 7460206]
var women = [10056601, 8811470, 9312246, 9376763, 9078328, 9370801, 11313477, 9789371, 9845225, 9830866, 11166366, 11663114, 11796570, 12026830, 12399014, 9407063, 8737884, 8324342, 7604128, 7775962, 6967137, 6557101, 6309027, 5162822, 6333593]
var yourdata1 = []
var yourdata = []
for (var i = 0; i < rowdata.length; i++) {
    yourdata.push(Math.abs(rowdata[i]))
    yourdata1.push(rowdata1[i] + rowdata2[i])
}
option = {
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {
                pixelRatio: 5
            }
        }
    },
    title: [{
        orient: 'vertical',
        text: '中国1976-2000年男女出生数量及比例',
        left: 'left'
    }, ],
    tooltip: {
        trigger: 'axis',
        formatter: '{b}<br/>{a0}: {c0}%<br/>{a2}:  {c2}%<br/>{a3}:  {c3} 人'
    },
    legend: {
        //orient: 'vertical',
        left: 'center',
        top: '50',
        data: ['男性出生数', '女性出生数', '男性比例', '女性比例']
    },
    xAxis: {
        axisLabel: {
            rotate: 45
        },
        type: 'category',
        // name: 'Year',
        // axisTick: {
        //     alignWithLabel: true,
        //     interval: 0
        // },
        // nameLocation:'bottom',
        splitLine: {
            show: false
        },
        data: [1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000]
    },
    grid: {
        left: '3%',
        right: '4%',
        top: '15%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: [{
            type: 'value',
            scale: true,
            max: 60,
            min: 40,
            splitLine: {
                show: false
            },
            axisLabel: {
                formatter: '{value}%'
                // name: 'y'
            },
        },
        {
            type: 'value',
            name: '人',
            splitLine: {
                show: false
            }
        }
    ],
    series: [{
            name: '女性比例',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: rowdata2
        },
        {
            name: '男性比例',
            type: 'line',
            markArea: {
                zlevel: 3,
                data: [
                    [{
                        xAxis: 2000,
                    }, {
                        xAxis: 2016,
                    }]
                ]
            },
            smooth: true,
            stack: '总量',
            areaStyle: {
                normal: {
                    opacity: 0.3
                }
            },
            lineStyle: {
                normal: {
                    type: 'dashed'
                }
            },
            data: rowdata1
        },
        {
            name: '男性比例',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    type: 'dashed'
                }
            },
            data: yourdata1,
        },

        {
            name: '男性出生数',
            type: 'bar',
            itemStyle: {
                opacity: 0.3
            },
            yAxisIndex: 1,
            data: men,
        },
        {
            name: '女性出生数',
            type: 'bar',
            itemStyle: {
                opacity: 0.3
            },
            yAxisIndex: 1,
            data: women,
        },
    ]
};