var option = {
    backgroundColor: '#fff',
    tooltip: {
        hideDelay: 100,
        borderRadius: 5,
        padding: [5, 0, 5, 0],
        backgroundColor: 'rgba(50,50,50,0.7)',
        textStyle: { color: '#fff' },
    },
    xAxis: {
        type: 'time',
        position: 'top',
        axisLabel: { textStyle: { color: '#000', fontSize: 14 } },
        axisLine: { lineStyle: { color: '#000' } },
        splitLine: { show: true, lineStyle: { color: '#999', type: 'dashed' } },
    },
    dataZoom: [
        {
            type: 'slider',
            start: 0,
            minSpan: 1,
            dataBackground: { lineStyle: { color: '#95BC2F' }, areaStyle: { opacity: 1, color: '#95BC2F' } },
        },
        { type: 'inside' },
    ],
    yAxis: {
        axisLine: { lineStyle: { color: '#000' } },
        data: ['项目名称'],
        axisLabel: { textStyle: { color: '#000', fontSize: 14 }, rotate: 45 },
        splitLine: { show: true, lineStyle: { color: '#999', type: 'dashed' } },
    },
    series: [
        {
            type: 'custom',
            encode: { x: [1, 2], y: 0 },
            itemStyle: { normal: {} },
            data: [
                [0, '2021-12-21 14:48:08', '2021-12-21 14:48:19', '立项阶段', '1', 3],
                [0, '2021-12-21 14:48:19', '2021-12-21 14:51:49', '设计阶段', '1', 3],
                [0, '2021-12-21 14:51:49', '2021-12-21 14:52:45', '开发阶段', '1', 3],
                [1, '2021-12-21 14:54:13', '2021-12-21 14:54:26', '设计阶段', '2', 3],
                [1, '2021-12-21 14:54:26', '2021-12-21 14:54:47', '上线阶段', '2', 3],
                [2, '2021-12-21 14:54:47', '2021-12-21 15:01:26', '磨合阶段', '3', 3],
                [2, '2021-12-21 15:01:26', '2021-12-21 15:03:26', '运营阶段', '3', 3],
            ],
            renderItem: function (params, api) {
                var categoryIndex = api.value(0); 
                var start = api.coord([api.value(1), categoryIndex]); 
                var end = api.coord([api.value(2), categoryIndex]);
                var height = api.size([0, 1])[1]; 
                var num = api.value(5); 
                var cur = api.value(4); 
                var fixedHeight = 10; 
                var beginY = start[1] - height / 2;
                var everyH = (height - (num + 1) * fixedHeight) / num;
                var rectY = beginY + cur * fixedHeight + (cur - 1) * everyH;
                var customItemStyle = api.style();
                customItemStyle['text'] = api.value(3);
                customItemStyle['textFill'] = '#fff';
                customItemStyle['textStrokeWidth'] = 0;
                customItemStyle['textPosition'] = 'inside';
                return {
                    type: 'rect', 
                    shape: echarts.graphic.clipRectByRect(
                        {
                            x: start[0],
                            y: rectY,
                            width: end[0] - start[0],
                            height: everyH,
                        },
                        {
                            x: params.coordSys.x,
                            y: params.coordSys.y,
                            width: params.coordSys.width,
                            height: params.coordSys.height,
                        }
                    ),
                    style: customItemStyle,
                };
            },
        },
    ],
};
