var option = {
    backgroundColor: '#0f375f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: function (params) {
            // console.log(params); // 当我们想要自定义提示框内容时，可以先将鼠标悬浮的数据打印出来，然后根据需求提取出来即可
            let firstParams = params[0];
            let sndParams = params[1];
            let thrParams = params[2];
            console.log(firstParams);
            return (
                firstParams.name +
                '<br>' + firstParams.marker +
                firstParams.seriesName +
                '：' +
                firstParams.data +
                ' 亩<br>' + sndParams.marker +
                sndParams.seriesName +
                '：' +
                sndParams.data +
                ' 亩<br>' + thrParams.marker +
                thrParams.seriesName +
                '：' +
                thrParams.data +
                ' %'
            );
        },
        extraCssText: "background:rgba(21,78,239,0.8);color:#fff;box-shadow:rgb(255, 255, 255) 0px 0px 10px inset;"
    },
    grid: {
        left: '2%',
        right: '4%',
        bottom: '14%',
        top: '16%',
        containLabel: true,
    },
    legend: {
        data: ['2020年', '2021年', '环比变化'],
        left: '42%',
        top: '5%',
        textStyle: {
            color: '#fff',
        },
        itemWidth: 15,
        itemHeight: 10,
        itemGap: 25,
    },
    xAxis: {
        type: 'category',
        data: [
           '1/7',
'1/14',
'1/21',
'1/28',
'2/4',
'2/11',
'2/18',
'2/25',
'3/3',
'3/10',
'3/17',
'3/24',
'3/31',
'4/7',
'4/14',
'4/21',
'4/28',
'5/5',
'5/12',
'5/19',
'5/26',
'6/2',
'6/9',
'6/16',
'6/23',
'6/30',
'7/7',
'7/14',
'7/21',
'7/28',
'8/4',
'8/18',
'8/25',
'9/1',
'9/8',
'9/15',
'9/22',
'9/29',
'10/6',
'10/13',
'10/20',
'10/27',
'11/3',
'11/10',
'11/17',
'11/24',
'12/1',
'12/8',
'12/15',
'12/22',
'12/29'
        ],
        axisLine: {
            lineStyle: {
                color: '#cdd5e2',
            },
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
            },
        },
    },

    yAxis: [
        {
            type: 'value',
            name: '亩',
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                },
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#fff',
                },
            },
        },
        {
            type: 'value',
            name: '环比变化',
            max: '100',
            nameTextStyle: {
                color: '#fff',
            },
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: '#bbb',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#666'],
                    width: 1,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: true,
                formatter: '{value} %', //右侧Y轴文字显示
                textStyle: {
                    color: '#fff',
                },
            },
        },
    ],
    series: [
        {
            name: '2020年',
            type: 'line',
            barWidth: '15px',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(22,204,104,1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(22,204,104,0.2)',
                        },
                    ]),
                    barBorderRadius: [6, 6, 0, 0],
                },
            },
            data: [103	,
90	,
103	,
99	,
86	,
76	,
81	,
83	,
88	,
99	,
105	,
110	,
109	,
99	,
97	,
96	,
104	,
98	,
99	,
96	,
104	,
121	,
123	,
128	,
133	,
131	,
126	,
129	,
123	,
128	,
119	,
107	,
104	,
110	,
112	,
119	,
119	,
118	,
117	,
102	,
102	,
103	,
110	,
124	,
128	,
127	,
127	,
126	,
119	,
120	,
123],
        },
        {
            name: '2021年',
            type: 'line',
            barWidth: '20px',
            itemStyle: {
                normal: {
                    color: 'red'
                },
            },
            data: [114	,
118	,
119	,
124	,
122	,
123	,
128	,
125	,
112	,
117	,
118	,
118	,
116	,
110	,
100	,
96	,
100	,
121	,
119	,
121	,
118	,
112	,
114	,
117	,
115	,
101	,
98	,
98	,
93	,
112	,
116	,
115	,
110	,
110	,
109	,
117	,
117	,
119	,
107	,
101	,
99	,
91	],
        },
        {
            name: '环比变化',
            type: 'bar',
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: false, //平滑曲线显示

            symbol: 'circle', //标记的图形为实心圆
            symbolSize: 2, //标记的大小
            itemStyle: {
                normal: {
                    color: '#00E4FF',
                    borderColor: 'rgba(0, 228, 255, 0.5)', //圆点透明 边框
                    borderWidth: 5,
                },
            },
            lineStyle: {
                color: '#00E4FF',
            },

            data: [-11	,
-28	,
-16	,
-25	,
-36	,
-47	,
-47	,
-42	,
-24	,
-18	,
-13	,
-8	,
-7	,
-11	,
-3	,
0	,
4	,
-23	,
-20	,
-25	,
-14	,
9	,
9	,
11	,
18	,
30	,
28	,
31	,
30	,
16	,
3	,
-8	,
-6	,
0	,
3	,
2	,
2	,
-1	,
10	,
1	,
3	,
12	],
        },
    ],
};
