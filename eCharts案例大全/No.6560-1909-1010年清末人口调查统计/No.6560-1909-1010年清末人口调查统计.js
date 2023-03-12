// Generate data
var Data0 = ["直隶", "江苏", "安徽", "山东", "山西", "河南", "陕西", "甘肃", "福建", "浙江", "江西", "湖北", "湖南", "四川", "广东", "广西", "云南", "贵州", "奉天", "吉林", "黑龙江", "新疆", "川滇边务", "蒙古", "青海", "西藏"];
var Data1 = [29.51, 26.17, 16.23, 31.05, 10.15, 26.89, 8.07, 4.70, 12.53, 18.00, 16.73, 23.94, 21.71, 52.86, 28.06, 7.24, 7.17, 8.50, 10.70, 5.39, 1.86, 2.15, 0.23, 1.06, 0.31, 1.36];
var Data2 = [572.16, 538.54, 314.12, 538.03, 200.18, 466.16, 160.53, 90.80, 237.91, 389.13, 343.98, 493.86, 428.82, 919.04, 505.24, 138.16, 154.94, 177.15, 165.06, 73.95, 24.60, 46.59, 4.89, 23.15, 6.74, 29.32];

var icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABDCAMAAABjnP3jAAAAilBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAADT09MAAAAAAAAAAAAAAAD////8/Pz5+fnr6+v8/Pzr6+vZ2dn09PTFxcX+/v719fX6+vrf39+5ubnDw8MSEhIrKytRUVF2dnZAQEDi4uLi4uLk5OTk5OT///+tdFIzAAAALXRSTlMABQgNFBwDNS4mCxEYIyAamisoMS364t9b57qWj3b0s6mec28rJhMNDKemZ2YvJtR9AAACMUlEQVRo3u2ZaW/iMBBAaTDdxI7tOCeF0vvaY/7/39sZJ2BgKyUrxNBKfh+RyHtMJkhJZl+Ja+LqzHjJ53rvTs5OX/Gp/n350DZwZu66h+X7vwmoT5YtMNEuE0w48n/cAiO3H0NB+P2cfioYZhDmD8yEs0ABydsNMHPzllDA4Jd/gJ3fEguGADm/B3bu5xIDhgGoFthpFY2gD5iLBthpxHwbIFUOFyBX8osE4ApYuAAWl4ACaAUuE0BLMAQs4AIsYkAMiAExIAbEgBgQA2JADIgB+wF3wE5zENABO+1+gF0BOytLAdt7ww2ws6F7w93d8Sv/M6LXg9tz8wzMPJsQQFuoH4GVR007uA2gEbz8AkZ+vtAAKMAXSBpB+dQBE91TSQOQ5N+NAAvSzapr4Mw03WqToj8MoN8CX+DSqvoxjQKOKCZ+sapS5/20AeFZsaQCozPn6jodpcLO4tiPH6aj1LVzmTbkl1d9QCgQmGC0zsYpHc6qOPDj73JlNo7WBvVi5w8FiU/IrV2MY2hWabHnT11GRx7H2tzrk+APBZiglJhATqerTIvgL2msuZiAUqgP/lBACYnEiAlgJu1sXQz+mrZK4JEnINFO+utT3prJfmczKiB/1m+V/I+3Zie+N8QGJazJ3Bpg7TJjhUL7ae8Np+Mr+wJdrtel7v3+2DMWqIGuGkG7SNsnaKtZ7McFIrc2F+z+UKAUXVfM/lDg/zr8Rc3tDwUefn9I8PDrQ4Jn9q35C4Ev35B0ZZBdAAAAAElFTkSuQmCC';

// option
option = {
    title: {
        text: '1909-1910年清末人口调查统计',
        x: 'center',
        y: 10,
        textStyle: {
            color: '#fff',
            fontSize: 25,
            fontWeight: 'bolder',
        },

    },
    backgroundColor: '#444444',
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255,255,255,0.2)',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#7B7DDC'
            }
        }
    },
    legend: {
        data: ['户数(单位：/万户)', '人口数(单位：/百万人)'],
        textStyle: {
            color: '#fff',
            fontSize:15
        },
        top: '7%',
    },
    grid: {
        x: '6%',
        width: '88%',
        y: '15%',
    },
    "dataZoom": [{
        "show": true,
        "height": 20,
        "xAxisIndex": [0],
        bottom: 8,
        "start": 0,
        "end": 100,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '100%',
        handleStyle: {
            color: "#d3dee5"
        },
        textStyle: {
            color: "#fff"
        },
        borderColor: "#90979c"
    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 35
    }],

    xAxis: {
        type: 'category',
        data: Data0,
        axisLine: {
            lineStyle: {
                color: '#fff',
            },
        },
        axisTick: {
            show: false,

        },
        axisLabel: {
            show: true,
            rotate: -25,
            //interva:0,
        },
    },

    yAxis: [{
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff',
                },
                symbol: ['none', 'arrow'],
            },
            axisLabel: {
                formatter: '{value} ',
            },
            axisTick: {
                show: false,
            }
        },
        {
            min: -200,
            max: 950,

            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff',
                    type: 'dashed'
                },
                symbol: ['none', 'arrow'],
            },
            axisLabel: {
                formatter: '{value} ',
            },
            axisTick: {
                show: false,

            }
        }
    ],

    series: [{
            name: '户数(单位：/万户)',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 8,
            yAxisIndex: 1,
            label: {
                show: true,
                position: 'top',
                distance: 10,
                color: '#e3fdfd',
                fontWeight: 'bold',
                fontSize: 11,
            },
            itemStyle: {
                normal: {
                    color: '#e3fdfd',
                },
            },
            data: Data2,
            z: 1
        },
        {
            name: '人口数(单位：/百万人)',
            type: 'pictorialBar',
            barCategoryGap: '0%',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            label: {
                show: true,
                position: 'top',
                distance: 5,
                color: '#DB5E6A',
                fontWeight: 'bolder',
                fontSize: 10,
                backgroundColor: {
                    image: icon
                },
                padding: [5, 5, 8, 5],
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1.5,
                        colorStops: [{
                                offset: 0,
                                color: 'rgba(232, 94, 106, .8)' //  0%  处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(232, 94, 106, .1)' //  100%  处的颜色
                            }
                        ],
                        global: false //  缺省为  false
                    }
                },
                emphasis: {
                    opacity: 1
                }
            },
            data: Data1,
            z: 5
        }
    ]
};