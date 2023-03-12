var ydata = [1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 4, 3, 4, 1, 1, 1, 1, 2, 2, 2, 3, 2, 2, 2, 1, 1, 1, 1, 1]
var xData = function() {
    var data = [];
    for (var i = 1; i < 31; i++) {
        data.push(i + "日");
    }
    return data;
}();

option = {
    backgroundColor: "#1A1835",

    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    grid: {
        borderWidth: 0,
        top: 110,
        bottom: 95,
        textStyle: {
            color: "#fff"
        }
    },
    calculable: true,
    xAxis: [{
        type: "category",
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
        data: xData,
    }],

    yAxis: [{
        type: "value",
        max: 20,
        min: -20,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        }
    }],
    series: [{
        name: "心电图",
        type: "line",
        showAllSymbol: false,
        symbolSize: 50,
        symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABRCAYAAABFTSEIAAAACXBIWXMAAAsSAAALEgHS3X78AAAEp0lEQVR42u3cz4sjRRTA8W9Vd3Vn8mMmjj9WQWSRZQ+CsH+B7MnDIgiCd0E8CYJ/gOAIelo8ehUP/gF6WLw5/gMueFP2sIcF0dHd2Z1kknR11fOQZJJJMtlZd03H7HtQpNOTnpn+8Lrm1etmjIig8e/DKoECKqACKqCGAiqgAiqghgIqoAIqoIYCKqACKqCGAiqgAiqghgIqoAJudKTr+osZMNPvBUQBHwHsPF9fB9R0DeHMOQ6T6WOrhEzXBM4swDOL0M6CrArRVoq3t2dGUIb9fTvatg8ZZup1PDBgzPmy98mey6qfzjLz2WaWjEUZKEvGyi9nWyneMOvGIyFQo2Sbg4MUSChpU9IeTTUpJdsEajPZOJeJG5uBZj7rLLduWS5dGm6XNLEELOFUFj54ACJCaychkpDSASK3bwsXL0YgVpWJKwM0iy9Zy8HdGru7jvt3Pbu7w0wES7drTwAbjTHMGCsQcIAnYTC1/wRx0wEnl27JNgZI8HQ6Kc1mQq83RNzaMjPzXqDbjTQaJRFLxIyyMSxAXEkWrhrQzAAmo5HOjCQf7jflILxOkohL+aUPgV4vEGNJo+E5PAy02+UIMEwBxo0CPDP7Dg5SnEtpt1PA0e87XO25FOoh8IYIH2Y5b45RzGAQBiIltZoHxqMcjbksXAVgdc2EQMYzzzdotyeZWKuleULXJtwT4SODfC2QCWR+IF9KnjuX1Xbo99Op7LVE8iXlz0YBTk5SyLEEjo5OLuccEoFUvHfO+reuUPx4zftXAIcx1hdcF+/TvFab4A0Bs0VwqyhpVnkJT89/Q4DDQ0e77YCMwIUsFMeFZD856699URRvX4nxE4A/jbnxXp7v4Zw3ReGNSDHI8wFQjIafuoyn58L/fB6sth/Ybg9fez2TRC6QZcZYvgHsazF+MP7YCyLXcM7gvSXLDGBqYDg+NhwdmSpPoTrAkub0W+f4FSB1fDucIunMHSLpO8WAH0rSy8u+19MBCHB4OHzd2pI+CEUhpigEiN+l6WcdY252jLn5s7Wf472ImPcN8pUl/tEHoV4XWq1Ke4KrLmPsTA3oODpytFoOyJKSyzHyMSIxteWngMW5cSEdDJQUhTdZVgxOz3/+jFJm4+bA2e5JpNU6WZ4Fw99JwnWMKccwpeddP+B7GZTNUPKqybJy0O+Hs1YfMz9swwvpB8fbGDG0GuGkkK7V0hxSmZQpABI8l2z0v3sJf50qpAMJCd2qCulql3LD1lRGQjm7lEsDz0rkxTQOfiPPxUBcuJTbbhss/Y1eyi3NwsmKInmkZsKk5gtPUzNhvp11507CSy/X6XYStpvFudpZw1ZWIOF4Cq6SdtbKbioJyAhRTu3u9yMJXerN+ugvaQQsjcZ8Q3VnZwxlSDhe1lB9GjrSw5b+1avT8+Jw+979nNaOI6U3KpTrWAosxVQmygK4ld8X0ZtK/7eViExD7O1NQPb3T7fsl4/4sBpwYzPwjFbTo95Yl9l9Vd1YN1X/147HebSjary1AHyc5qc+XLQEQx9ve8Kg6xr6hKoCKqACKqCGAiqgAiqghgIqoAIqoIYCKqACKqCGAiqgAiqghgIq4JrHP8fEWV8FMTmOAAAAAElFTkSuQmCC',
        lineStyle: {
            color: "#37C4D1",
            shadowColor: "rgba(55,196,209,0.9)",
            shadowBlur: 15,
            shadowOffsetY: 0
        },
        itemStyle: {
            borderWidth: 5,
            color: "#F98F02",
        },
        markPoint: {
            symbol: 'circle',
            symbolSize: 9,
            label: {
                show: false,
                normal: {
                    textStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                }
            },
            itemStyle: {
                color: "#F98F02",
                shadowColor: "rgba(249,143,2,0.8)",
                shadowBlur: 10,
                shadowOffsetY: 0
            },
            data: [{
                type: 'max',
                name: '最大值',

            }]
        },
        data: ydata,
    }]
}
 function randomData() {
     var value = Math.random() * 2;

     value = value + Math.random() * 2;

     return Math.round(value)

 }
 setInterval(function() {
     ydata.shift();

     ydata.push(randomData());
     myChart.hideLoading();

     myChart.setOption(option);

 }, 2000);