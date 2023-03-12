var data = [];
var labelData = [];
var max = 100;
var data1 = 31; //数值大小
for (var i = 0; i < 100; ++i) {
    data.push({
        value: Math.random() * 10 + 10 - Math.abs(i - 12),
        name: i + ':00',
    });
    labelData.push({
        value: 1,
        name: i,
        itemStyle: {
            normal: {
                color: 'rgba(24,48,78,0.6)',
            },
        },
    });
}
for (var i = 0; i < labelData.length; ++i) {
    if (labelData[i].name < 60) {
        labelData[i].itemStyle = {
            normal: {
                color: 'rgba(24,48,78,0.6)',
            },
        };
    }
}
var color = ['#00FDFA', '#00B1BF', '#00F7F8'];
console.log(labelData);
option = {
    backgroundColor: '#333',
    title: [
        {
            //   text: "中度污染\n首要污染物：PM10",
            left: 'center',
            bottom: '5%',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 14,
                color: '#fff',
            },
        },
        // {
        //   text: "102",
        //   left: "center",
        //   top: "36%",
        //   textStyle: {
        //     fontWeight: "normal",
        //     fontSize: '45',
        //     color: "#fff",
        //     fontWeight:'bold'
        //   },
        // },
    ],
    series: [
        // 坐标
        {
            name: '小环',
            type: 'gauge',
            splitNumber: 12,
            radius: '42%',
            center: ['50%', '50%'],
            startAngle: 0,
            endAngle: 359.9999,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: color[1],
                    width: 1.5,
                    shadowBlur: 0.1,
                    shadowColor: color[1],
                },
                length: 7,
                splitNumber: 3,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            detail: {
                show: false,
            },
        },
        {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['35%', '42%'],
            hoverAnimation: false,
            data: [
                {
                    name: '',
                    value: 100,
                    labelLine: {
                        show: false,
                    },
                    itemStyle: {
                        color: 'rgba(24,48,78,0.6)',
                    },
                    emphasis: {
                        labelLine: {
                            show: false,
                        },
                        itemStyle: {
                            color: 'rgba(24,48,78,0.6)',
                        },
                    },
                },
            ],
        },
        {
            type: 'liquidFill',
            radius: '35%',
            center: ['50%', '50%'],
            data: [0.7, 0.7], // data个数代表波浪数
            color:['rgba(24,71,124,0.8)','rgba(37,91,127,0.8)'],
            backgroundStyle: {
                borderWidth: 2,
                shadowColor: 'rgba(48,124,211,0.6)',
                color: 'rgba(6,26,55,0.5)',
            },
            label: {
                formatter: '100\n\n 99',
                textStyle:{
                    color:'red'
                }
            },
            z: 1,
            outline: {
                show: false,
            },
        },
        {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['45%', '44%'],
            hoverAnimation: false,
            data: [
                {
                    name: '',
                    value: 300,
                    labelLine: {
                        show: false,
                    },
                    itemStyle: {
                        color: '#2EB2BB',
                    },
                    emphasis: {
                        labelLine: {
                            show: false,
                        },
                        itemStyle: {
                            color: '#162E64',
                        },
                    },
                },
                {
                    //画中间的图标
                    name: '',
                    value: 1,
                    labelLine: {
                        show: false,
                    },
                    itemStyle: {
                        color: '#ffffff',
                        normal: {
                            color: '#46D5DF',
                            borderColor: '#46D5DF',
                            borderWidth: 1,
                        },
                    },
                    label: {
                        borderRadius: '100%',
                    },
                    emphasis: {
                        labelLine: {
                            show: false,
                        },
                        itemStyle: {
                            color: '#009cff',
                        },
                    },
                },
                {
                    //画剩余的刻度圆环
                    name: '',
                    value: 0,
                    itemStyle: {
                        color: 'rgba(9,59,118,0.95)',
                    },
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    emphasis: {
                        labelLine: {
                            show: false,
                        },
                        itemStyle: {
                            color: 'rgba(255,255,255,0)',
                        },
                    },
                },
            ],
        },
    ],
};
