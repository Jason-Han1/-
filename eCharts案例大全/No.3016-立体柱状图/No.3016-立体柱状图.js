const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        //中间柱子
        const xAxisPoint = shape.xAxisPoint;
        const c0 = [shape.x, shape.y - 4];
        const c1 = [shape.x - 15, shape.y - 8]; //左上
        const c2 = [xAxisPoint[0] - 15, xAxisPoint[1] - 5]; //左下
        const c3 = [xAxisPoint[0], xAxisPoint[1] - 1];
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
    },
});
const CubeRight = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c1 = [shape.x, shape.y - 4];
        const c2 = [xAxisPoint[0] + 1, xAxisPoint[1] - 1]; //右矩形左下
        const c3 = [xAxisPoint[0] + 9, xAxisPoint[1] - 9]; //右下
        const c4 = [shape.x + 10, shape.y - 9]; //右上
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
const CubeTop = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const c1 = [shape.x, shape.y - 4]; //bottom
        const c2 = [shape.x + 9, shape.y - 9]; //right
        const c3 = [shape.x - 2, shape.y - 13]; //top
        const c4 = [shape.x - 15, shape.y - 8]; //left
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);
const MAX = [6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000];
const VALUE = [2012, 1230, 3790, 2349, 1654, 1230, 3790, 2349, 1654, 3790, 2349, 1654];
option = {
    backgroundColor: '#010d27',
    title: {
        text: '',
        top: 32,
        left: 20,
        textStyle: {
            color: '#00F6FF',
            fontSize: 24,
        },
    },
    grid: {
        left: -10,
        right: 20,
        bottom: '40',
        top: 40,
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            data: [
                '德州',
                '德城区',
                '陵城区',
                '禹城市',
                '乐陵市',
                '临邑县',
                '平原县',
                '夏津县',
                '武城县',
                '庆云县',
                '宁津县',
                '齐河县',
            ],
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'white', //x轴颜色
                },
            },
            offset: 20, //x轴标签距离x轴距离
            axisTick: {
                //刻度线
                show: false,
                length: 9,
                alignWithLabel: true,
                lineStyle: {
                    color: '#7DFFFD',
                },
            },
            axisLabel: {
                fontSize: 12, //x轴标签文字 大小
            },
        },
        {
            type: 'category',
            show: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                margin: -30,
                color: '#fff',
                fontSize: '10',
            },
            data: VALUE,
        },
    ],
    yAxis: {
        type: 'value',
        axisLine: {
            show: false,
            lineStyle: {
                color: 'white', //y轴颜色
            },
        },
        splitLine: {
            show: false, //网格
        },
        axisTick: {
            show: false, //刻度
        },
        axisLabel: {
            fontSize: 16, //y轴标签文字大小
            color: 'transparent',
        },
        boundaryGap: ['10%', '10%'],
    },
    series: [
        {
            type: 'custom', //色块
            renderItem: function (params, api) {
                const location = api.coord([api.value(0), api.value(1)]);
                return {
                    type: 'group',
                    children: [
                        {
                            type: 'CubeLeft',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0]),
                            },
                            style: { stroke: '#39b8da', fill: 'rgba(1,178,245,.3)' },
                        },
                        {
                            type: 'CubeRight',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0]),
                            },
                            style: {
                                stroke: '#39b8da',
                                fill: 'rgba(1,178,245,.2)', //柱子右侧
                            },
                        },
                        {
                            type: 'CubeTop',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0]),
                            },
                            style: {
                                stroke: '#39b8da',
                                fill: 'rgba(1,178,245,.3)', //顶
                            },
                        },
                    ],
                };
            },
            data: MAX,
        },
        {
            type: 'custom',
            renderItem: (params, api) => {
                const location = api.coord([api.value(0), api.value(1)]);
                return {
                    type: 'group',
                    children: [
                        {
                            type: 'CubeLeft',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0]),
                            },
                            style: {
                                stroke: '#39b8da',
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#0195ee', //color: '#3B80E2'
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgb(2,70,118)', //'#49BEE5'
                                    },
                                ]),
                            },
                        },
                        {
                            type: 'CubeRight',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0]),
                            },
                            style: {
                                stroke: '#0195ee',
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#49BEE5',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgb(2,70,118)',
                                    },
                                ]),
                            },
                        },
                        {
                            type: 'CubeTop',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0]),
                            },
                            style: {
                                stroke: '#39b8da', //底
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#39b8da',
                                    },
                                    {
                                        offset: 1,
                                        color: '#39b8da',
                                    },
                                ]),
                            },
                        },
                    ],
                };
            },
            data: VALUE,
        },
        /*{
		           type: 'bar',
		            label: {
		                normal: {
		                    show: true,
		                    position: 'top',
							verticalAlign: 'top', 
		                    /* formatter: (e) => {
		                    switch (e.name) {
		                        case '10kV线路':
		                            return VALUE[0]
		                        case '公用配变':
		                            return VALUE[1]
		                        case '35kV主变':
		                            return VALUE[2]
		                        case '水':
		
		                    }
		                },
		                    formatter: function (VALUE) {
		                        return VALUE[3];
		                    },
		                    fontSize: 16,
		                    color: '#fff',
		                    offset: [4, -25],
		                },
		            }, // 4
		
		            itemStyle: {
		                color: 'transparent',
		            },
		            data: VALUE,
		        }, */
    ],
};
