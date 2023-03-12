const myShape = {
    x: 0,
    y: 0,
    width: 13, //间距
};
// 绘制左侧面
const InclinedRoofBar = echarts.graphic.extendShape({
    shape: myShape,
    buildPath: function (ctx, shape) {
        // canvas，shape是从custom传入的
        const xAxisPoint = shape.xAxisPoint;
        const c0 = [shape.x, shape.y];
        const c1 = [shape.x - 17, shape.y - 10];
        const c2 = [xAxisPoint[0] - 17, xAxisPoint[1]];
        const c3 = [xAxisPoint[0], xAxisPoint[1]];
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
    },
});
echarts.graphic.registerShape('InclinedRoofBar', InclinedRoofBar);
option = {
    backgroundColor: "#1e3756",
    color: ['#b27e44'],
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        confine: true,
        textStyle: {
            fontSize: 14,
        },
        formatter: (params) => {
            var tar = params[0];
            this.workType = tar.name;
            return tar.name + ' : ' + '<br/>' + tar.value;
        },
    },
    legend: {
        top: 5,
        itemWidth: 16,
        itemHeight: 8,
        left: 'center',
        padding: 0,
        textStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [2, 0, 0, 0],
        },
        data: ['demo'],
    },
    grid: {
        // top: 40,
        // bottom: 10,
        // left: 20,
        // right: 20,
        containLabel: true,

        left: 0,
        bottom: 0,
        width: '100%',
        height: '85%',
    },
    xAxis: {
        type: 'category',

        axisLine: {
            show: true,
            lineStyle: {
                width: 1,
                color: 'rgb(255, 255, 255, 0.5)',
            },
        },
        axisLabel: {
            show: true,
            interval: 0,
            rotate: 30,
            textStyle: {
                color: '#fff',
                fontSize: 12,
            },
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: 'rgb(255, 255, 255, 0.3)',
                type: 'dashed',
                width: 1,
            },
        },
        axisTick: {
            show: false,
        },
        data: [],
        zlevel: 10,
    },
    yAxis: {
        type: 'value',
        name: '',
        min: 0,
        axisTick: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 12,
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgb(255, 255, 255, 0.3)',
                type: 'dashed',
                width: 0.7,
            },
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgb(52, 113, 250)',
            },
        },
        nameTextStyle: {
            color: '#fff',
            fontSize: 16,
        },
    },
    series: [
        {
            type: 'custom',
            name: 'demo',
            itemStyle: {
                borderColor: '#b27e44',
                borderWidth: 1,
                color: '#b27e44',
                normal: {
                    borderWidth: 1,
                },
            },
            renderItem: (params, api) => {
                const location = api.coord([api.value(0), api.value(1)]);
                const xlocation = api.coord([api.value(0), 0]);
                return {
                    type: 'InclinedRoofBar',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0] + 10,
                        y: location[1],
                        xAxisPoint: [xlocation[0] + 10, xlocation[1]],
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#FFA042',
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,0,0,0)',
                            },
                        ]),
                        stroke: '#b27e44',
                    },
                };
            },
            data: [],
        },
        {
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    fontSize: 14,
                    offset: [15, 0],
                },
            },
            showBackground: false,
            barWidth: 14,
            itemStyle: {
                color: 'transparent',
            },
            tooltip: {
                show: false,
            },
            data: [],
        },
    ],
};
const { xAxis, series } = option;
seriesData = [{
	"workmode": "text1",
	"censusCount": 29
}, {
	"workmode": "text2",
	"censusCount": 80
}, {
	"workmode": "text3",
	"censusCount": 34
}, {
	"workmode": "text4",
	"censusCount": 27
}, {
	"workmode": "text5",
	"censusCount": 55
}]
xAxis.data = seriesData.map((item) => item.workmode);
series[0].data = seriesData.map((item) => item.censusCount);