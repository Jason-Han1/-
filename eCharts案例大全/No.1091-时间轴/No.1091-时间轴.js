function formatSeconds(value) {
    var secondTime = parseInt(value); // 秒
    var minuteTime = 0; // 分
    var hourTime = 0; // 小时
    if (secondTime >= 60) {
        minuteTime = parseInt(secondTime / 60);
        secondTime = parseInt(secondTime % 60);
        if (minuteTime >= 60) {
            hourTime = parseInt(minuteTime / 60);
            minuteTime = parseInt(minuteTime % 60);
        }
    }
    var result = '' + (parseInt(secondTime) < 10 ? '0' + parseInt(secondTime) : parseInt(secondTime));
    result = '' + (parseInt(minuteTime) < 10 ? '0' + parseInt(minuteTime) : parseInt(minuteTime)) + ':' + result;
    result = '' + (parseInt(hourTime) < 10 ? '0' + parseInt(hourTime) : parseInt(hourTime)) + ':' + result;
    return result;
}

function getData() {
    let times = 24 * 60 * 60; // 24小时转化为秒
    let categoryData = [];
    let values = [];
    for (let i = 0; i < times; i++) {
        categoryData.push(formatSeconds(i));
        values.push(2); // 固定值
    }
    return {
        categoryData: categoryData,
        values: values,
    };
}
const chartsData = getData();
myChart.setOption({
    // animation: false,
    /*tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
        },
        showContent: false,
    },*/
    axisPointer: {
        link: [
            {
                xAxisIndex: 'all',
            },
        ],
        label: {
            backgroundColor: '#777',
        },
        lineStyle: {
            width: 1,
            color: 'blue',
            type: 'solid',
        },
    },
    toolbox: {
        show: false,
    },
    grid: {
        top: '40%',
        left: '10%',
        right: '8%',
        height: '20',
    },
    xAxis: {
        type: 'category',
        scale: true,
        data: chartsData.categoryData,
        boundaryGap: false,
        position: 'top',
        axisPointer: {
            show: true,
            triggerTooltip: false,
        },
    },
    yAxis: {
        scale: true,
        axisLabel: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisPointer: {
            show: false,
        },
    },
    dataZoom: [
        {
            type: 'inside',
            start: 0,
            end: 1,
            minValueSpan: 60*5,
        },
    ],
    brush: {
        xAxisIndex: 'all',
        brushLink: 'all',
        brushType: 'lineX',
        transformable: false,
        brushStyle: {
            borderWidth: 2,
            color: 'red',
            borderColor: 'red',
        },
        throttleType: 'debounce',
        throttleDelay: 'debounce',
        /*outOfBrush: {
                colorAlpha: 1
            }*/
    },
    series: [
        {
            name: 'time',
            type: 'line',
            data: chartsData.values,
            symbol: 'path://M367.0528 7.84896h291.48672v1009.95072H367.0528V7.84896z',
            smooth: true,
            symbolSize: [4,15],
            lineStyle: {
                color: '#5B9FF1',
                width: 15,
            },
             itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderColor: 'transparent', //拐点边框颜色
                    },
                },
            emphasis: {
                scale: false,
                lineStyle: {
                    color: '#5B9FF1',
                    width: 15,
                },
            },
        },
    ],
});

let len = 0;
let timeinterval = null;
let startValue = myChart.getModel().option.dataZoom[0].startValue;
let endValue = myChart.getModel().option.dataZoom[0].endValue;
function chartsSetInterval() {
    timeinterval = setInterval(function () {
        if (len === chartsData.categoryData.length) {
            return false;
        }
        // 鼠标到了最后的位置
        if (len === endValue) {
            myChart.dispatchAction({
                type: 'dataZoom',
                // 可选，dataZoom 组件的 index，多个 dataZoom 组件时有用，默认为 0
                dataZoomIndex: 0,
                // 开始位置的数值
                startValue: endValue,
                // 结束位置的数值
                endValue: endValue + (endValue - startValue),
            });
        }
        if (!mouseFlag) {
            myChart.dispatchAction({
                type: 'brush',
                areas: [
                    {
                        brushType: 'lineX',
                        coordRange: [len, len],
                        xAxisIndex: 0,
                    },
                ],
            });
        }
        len++;
    }, 1000);
}

chartsSetInterval();

myChart.on('click', function (params) {
    clearInterval(timeinterval);
    timeinterval = null;
    //debugger
    console.log(params);
    myChart.dispatchAction({
        type: 'brush',
        areas: [
            {
                brushType: 'lineX',
                coordRange: [params.dataIndex, params.dataIndex],
                xAxisIndex: 0,
            },
        ],
    });
    len = params.dataIndex;
    mouseFlag = false;
    chartsSetInterval();
    
});

myChart.on('dataZoom', function (params) {
    mouseFlag = false;
    startValue = myChart.getModel().option.dataZoom[0].startValue;
    endValue = myChart.getModel().option.dataZoom[0].endValue;
    //console.log(startValue, endValue)
});

let mouseFlag = false;

myChart.on('mousemove', function (params) {
    mouseFlag = true;
});

myChart.on('mouseout', function (params) {
    mouseFlag = false;
});
