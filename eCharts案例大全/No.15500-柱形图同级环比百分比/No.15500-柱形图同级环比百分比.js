var a = "↑10%";
var b = "↓10%";
var c = "持平";
var green = "#006000";
var red = "#CE0000";
var isGrow = [1, 0, 2, 1, 0, 1, 1];
option = {
    legend: {
        orient: 'horizontal',
        right: 0,
        bottom: 0,
        selectedMode: false,
        itemGap: 10,
        itemWidth: 12,
        itemHeight: 12,
        data: ['民警', '辅警']
    },
    grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['NO.10', 'NO.9', 'NO.8', 'NO.7', 'NO.6', 'NO.5', 'NO.4', 'NO.3', 'NO.2', 'NO.1']
    },
    series: [{
        name: '民警',
        type: 'bar',
        barGap: 0,
        silent: true,
        stack: 1,
        data: [80, 90, 120, 150, 180, 250, 280, 330, 380, 450],
        itemStyle: {
            normal: {
                barBorderRadius: [0, 5, 5, 0]
            }
        },
        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        }
    }, {
        name: '辅警',
        type: 'bar',
        barGap: 0,
        silent: true,
        stack: 2,
        data: [60, 70, 100, 130, 160, 230, 260, 310, 360, 430],
        itemStyle: {
            normal: {
                barBorderRadius: [0, 5, 5, 0]
            }
        },
        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        }
    }, {
        name: '民警',
        type: 'bar',
        barGap: 0,
        stack: 2,
        silent: true,
        data: [0, 0, 0, 0, 0, 0, 0],
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: function(params) {
                    if (isGrow[params.dataIndex] == 1) {
                        return '    ' + a;
                    } else {
                        return '';
                    }
                },
                textStyle: {
                    fontWeight: 'bolder',
                    color: red
                }
            }
        }
    }, {
        name: '民警',
        type: 'bar',
        barGap: 0,
        stack: 2,
        silent: true,
        data: [0, 0, 0, 0, 0, 0, 0],
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: function(params) {
                    if (isGrow[params.dataIndex] == 0) {
                        return "    " + b;
                    } else {
                        return '';
                    }
                },
                textStyle: {
                    fontWeight: 'bolder',
                    color: green
                }
            }
        }
    }, {
        name: '民警',
        type: 'bar',
        barGap: 0,
        stack: 2,
        silent: true,
        data: [0, 0, 0, 0, 0, 0, 0],
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: function(params) {
                    if (isGrow[params.dataIndex] == 2) {
                        return "    " + c;
                    } else {
                        return '';
                    }
                },
                textStyle: {
                    fontWeight: 'bolder',
                    color: green
                }
            }
        }
    }]
};