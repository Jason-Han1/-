data = [{
        name: '姓名1',
        value: (Math.random() * 100).toFixed(2)
    },
    {
        name: '姓名1',
        value: (Math.random() * 100).toFixed(2)
    },
    {
        name: '姓名1',
        value: (Math.random() * 100).toFixed(2)
    }
];
data2 = [{
        name: '姓名1',
        value: 100
    },
    {
        name: '姓名1',
        value: 100
    },
    {
        name: '姓名1',
        value: 100
    }
];
var piePatternSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAyCAYAAAB/J6rzAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAAagAwAEAAAAAQAAADIAAAAAzAtO4AAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAdNJREFUOBFNlAdOA0EMRbOhCUTvnXBlLphAAqH3noTwnjWO1tKXZ/1nbI/t2apRZDwer7A8A6vguVnsqvr6r/6xVsg/9FOdOMQwVchenWhhnC5Ep06cFGKEPg+iZLRXdr+g+3lC4xIwRh+8JnHEx2whuuhBEsfFiGpcgFET/x4/AGb0BS6rqhp6YqNA4qEgyrDDxyJw0y14B/Gxi573A7kGugtiHy0xAFdgQnjCVHVxTeAxOk5soivwCu5AiAHXgbssxSMIkbBjQ+DuZxAiYeBfcIV/K9vg0ssS+pfogZRNCXf9AFNN2UnCjG7Sit5Loo//KAX+vdO+hKlegBTrtp1EJ63oZRDBv1nYtRTna80T9yBKgX+/o/8uugQ2XcXADt60RBukzLBwMEYS57jw9soC0FUQ3gEuyC2MtiEIb614yjEyTmRhS1NaLCYdjFJjcL4k7M2wiX8Xig0zcHTTrFKcRutkrMs6cVqMuuzUiRaGCIxuB8Ed8sa6+QSTN+j8OkZudH4f05WFmwNOvEPxnUQ+HF3ZmygJOkptHKvgiYEvylYawzSdxBuLqiun3R+M4vtwhifvwz54B5/yBwjCHiRh771HED58U1XesqjGMEWhZEka/wfQjBWd++oaAAAAAElFTkSuQmCC';

var piePatternImg = new Image(6,500);
piePatternImg.src = piePatternSrc;
getArrByKey = (data, k) => {
    let key = k || "value";
    let res = [];
    if (data) {
        data.forEach(function(t) {
            res.push(t[key]);
        });
    }
    return res;
};
data = data.sort((a, b) => {
    return b.value - a.value
});
option = {
    grid: {
        top: '2%',
        bottom: -15,
        right: 30,
        left: -30,
        containLabel: true
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        triggerEvent: true,
        show: true,
        inverse: true,
        data: getArrByKey(data, 'name'),
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
            interval: 0,
            color: '#666',
            align: 'left',
            margin: 80,
            fontSize: 13,
        },
    }, {
        triggerEvent: true,
        show: true,
        inverse: true,
        data: getArrByKey(data, 'name'),
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
            interval: 0,
            color: '#666',
            align: 'left',
            margin: 20,
            fontSize: 13,
            formatter: function(value, index) {
                return data[index].value + '%'
            },
        }
    }],
    series: [{
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data: data,
        barWidth: 15,
        z: 3,
        itemStyle: {
            color: {
                image: piePatternImg,
                repeat: 'repeat'
            },
            barBorderRadius: 30,
            opacity: .5,
            borderWidth: 1
        },
    }, {
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data: data,
        barWidth: 15,
        itemStyle: {
            color: {
                colorStops: [{
                    offset: 0,
                    color: '#003055' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#0a7ad1' // 100% 处的颜色
                }],
            },
            barBorderRadius: 30,
            opacity: .8,
            borderColor:'#0963b7',
            borderWidth: 1
        },
    }, {
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data: data2,
        silent: false,
        barGap: '-100%',
        barWidth: 15,
        z: 1,
        itemStyle: {
            color: '#0b7cd4',
            borderColor:'#1162B4',
            // borderColor: {
            //     type: 'linear',
            //     color: '#1162B4',
            //     // colorStops: [{
            //     //     offset: 0,
            //     //     color: '#0a7ad1' // 0% 处的颜色
            //     // }, {
            //     //     offset: 1,
            //     //     color: '#003055' // 100% 处的颜色
            //     // }],
            //     globalCoord: false // 缺省为 false
            // },
            barBorderRadius: 30,
            borderWidth: 1,
            shadowColor: '#1f8ce1',
            shadowBlur: 4
        }
    }]
};