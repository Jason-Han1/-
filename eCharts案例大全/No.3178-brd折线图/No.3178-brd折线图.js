
var CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        var xAxisPoint = shape.xAxisPoint;
        var c0 = [shape.x, shape.y-4];
        var c1 = [shape.x - 9, shape.y - 9];
        var c2 = [xAxisPoint[0] - 9, xAxisPoint[1] - 5];
        var c3 = [xAxisPoint[0], xAxisPoint[1]];
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
    },
});
var CubeRight = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        var xAxisPoint = shape.xAxisPoint;
        var c1 = [shape.x, shape.y-4];
        var c2 = [xAxisPoint[0], xAxisPoint[1]];
        var c3 = [xAxisPoint[0] + 9, xAxisPoint[1] - 5];
        var c4 = [shape.x + 9, shape.y - 9];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
var CubeTop = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        var c1 = [shape.x, shape.y-4];
        var c2 = [shape.x + 9, shape.y - 9];
        var c3 = [shape.x, shape.y - 14];
        var c4 = [shape.x - 9, shape.y - 9];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);
var VALUE = [40, 20, 12, 9, 5, 2];

	
    option={
        backgroundColor:"#012366",
	grid: {
                top:20,
		left: 10,
                right:10,
                bottom:20,
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        data: ["90后", "80后", "00后", "70后", "其他", "60后"],
        axisLine: {
            show: true,
            lineStyle: {
                color: 'white',
            },
        },
        axisTick: {
            show: false,
            length: 9,
            alignWithLabel: true,
            lineStyle: {
                color: '#7DFFFD',
            },
        },
        axisLabel: {
            fontSize: 14,
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: 'white',
            },
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            fontSize: 16,
        },
    },
    series: [
        {
            type: 'custom',
            renderItem: (params, api) => {
                var location = api.coord([api.value(0), api.value(1)]);
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
                                stroke: '#3D98C4',
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgba(0,0,0,0)',
                                    },
                                    {
                                        offset: 1,
                                        color: '#378CC1',
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
                                stroke: '#3D98C4',
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgba(0,0,0,0)',
                                    },
                                    {
                                        offset: 1,
                                        color: '#378CC1',
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
                                stroke: '#3D98C4',
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#378CC1',
                                    },
                                    {
                                        offset: 1,
                                        color: '#02174B',
                                    },
                                ]),
                            },
                        },
                    ],
                };
            },
            data: VALUE,
        },
    ],
tooltip : {
        padding: 0,
        enterable: true,
        transitionDuration: 1,
        textStyle: {
            color: '#000',
            decoration: 'none',
        },
		formatter: function(params) {
            var tipHtml = '';
            tipHtml = 
			'<div style="width:100px;height:28px;background:rgba(22,80,158,0.8);border:1px solid #008DAA;">'+
            '<p style="color:#fff;font-size:14px;text-align:center;padding-top:4px">'+
			'<span style="color:#FFFFFF;margin:10px 6px;font-weight:bold">'+params.name+'</span>'
            +'<span style="color:#CECB08;margin:0 6px;font-weight:bold">'+params.data+'%'+'</span>'+'</p>'+'</div>'
            return tipHtml;
        }
		}
		}