let _this = this;
var mockData = [
    {
        text: '指标一',
        value: 20,
    },
    {
        text: '指标一',
        value: 2,
    },
    {
        text: '指标一',
        value: 12,
    },
];
let total = mockData.reduce((prev, curr) => prev + curr.value, 0);

var minAngle = 10; // 最小角度
var indicator = [];
var data = [];
var color = ['#13518a', '#35FFF5'];
var idx = 0;
var randomArr = getRandom(360 / minAngle, mockData.length);
for (var i = 0; i < 360 / minAngle; i++) {
    if (randomArr.indexOf(i) > -1) {
        indicator.push({
            text: mockData[idx].text,
        });
        data.push(mockData[idx].value);
        idx++;
    } else {
        indicator.push({
            text: i * 10 + '`',
        });
        data.push('-');
    }
}
option = {
    backgroundColor: '#000',
    radar: [
        {
            indicator: indicator,
            center: ['50%', '50%'],
            radius: '98%',
            startAngle: 10,
            splitNumber: 2,
            shape: 'circle',
            axisName: {
                show: false,
            },
            splitArea: {
                areaStyle: {
                    color: color[0],
                },
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 255, 51, 0)',
                },
            },
            splitLine: {
                lineStyle: {
                    color: color[1],
                    width: 2,
                },
            },
        },
    ],
    title: {
        show: true,
        text: total,
        top: 'center',
        left: 'center',
        textStyle: {
            color: '#fff',
            fontSize: 36,
        },
    },
    series: [
        {
            axisName: '雷达图',
            type: 'radar',
            symbol: 'circle',
            symbolSize: 12,
            silent: true,
            animationEasing: 'quarticOut',
            animationEasingUpdate: 'quarticOut',
            animationDuration: 2000,
            animationDurationUpdate: 2000,
            itemStyle: {
                opacity: 1,
                itemStyle: {
                    color: {
                        type: 'radial',
                    },
                    borderWidth: 0,
                    opacity: 1,
                },
            },
            data: [
                {
                    value: data,
                    symbolSize: 10,
                    symbol: 'circle',
                    lineStyle: {
                        opacity: 0,
                    },
                    itemStyle: {
                        color: color[1],
                    },
                    label: {
                        show: false,
                    },
                },
            ],
        },
    ],
};

function getRandom(range, count) {
    var randomArr = [];
    for (var i = 0; i < count; i++) {
        var r = Math.round(Math.random() * (range - 1));
        randomArr.push(r);
    }
    return randomArr;
}


// css的动画

// .after{
//   content: ' ';
//   display: block;
//   background-image: linear-gradient(44deg, rgba(0, 255, 51, 0) 50%, #35FFF5 100%);
//   width: 0.82rem;
//   height: 0.82rem;
//   position: absolute;
//   top: 0.36rem;
//   left: 0.32rem;
//   animation: radar-beam 4s infinite;
//   animation-timing-function: linear;
//   transform-origin: bottom right;
//   border-radius: 100% 0 0 0;
// }
// @keyframes radar-beam {
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// }
