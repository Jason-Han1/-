option = {
    backgroundColor: '#4ba4ba',
    title: {
        text: '及格科目数',
        x: 'left',
        textStyle: {
            color: '#fff',
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },

    legend: {
        data: [{
                name: '1门',
                textStyle: {
                    color: '#fff'
                }
            },
            {
                name: '2-3门',
                textStyle: {
                    color: '#fff'
                }
            },
            {
                name: '3门以上',
                textStyle: {
                    color: '#fff'
                }
            },
        ],
    },
    grid: {
        y2: 100
    },
    xAxis: [{
        type: 'category',
        data: ["2015-2016上学期", "2015-2016下学期", "2016-2017上学期", "2016-2017下学期", "2017-2018上学期"],
        axisLine: {
            lineStyle: {
                color: '#024'
            }
        },
        splitLine: {
            show: false,
        },
        axisPointer: {
            type: 'shadow'
        },
        axisLabel: {
            rotate: -35,
            showMinLabel: 'ture',
            showMaxLabel: 'ture',
        }
    }],
    yAxis: [{
        splitLine: {
            show: false,
        },

        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#024'
            }
        },
        name: '(人)',
        min: 0,
        max: 5000,
        interval: 1000,
        axisLabel: {
            formatter: '{value}'
        }

    }],
    series: [{
        name: '1门',
        type: 'bar',
        stack: '使用情况',
        data: [1800, 1620, 1836, 1110, 1010],
        itemStyle: {
            normal: {
                color: "#74B1EB"
            },
        }

    }, {
        name: '2-3门',
        type: 'bar',
        stack: '使用情况',
        data: [1140, 1122, 1118, 1135, 1142],
        itemStyle: {
            normal: {
                color: "#FBDB7C"
            },
        }
    }, {
        name: '3门以上',
        type: 'bar',
        stack: '使用情况',
        data: [1240, 1322, 1118, 1235, 1042],
        itemStyle: {
            normal: {
                color: "#ABE37C"
            },
        }
    }]
};