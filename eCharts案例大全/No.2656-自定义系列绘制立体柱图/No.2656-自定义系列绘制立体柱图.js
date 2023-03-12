function renderItem(params, api) {
    const serIndex = params.seriesIndex;
    const showIndex = api.currentSeriesIndices().indexOf(serIndex);
    const serLength = api.currentSeriesIndices().length;
    const [useWith, useHeight] = api.size([api.value(0), api.value(1)]);
    const [originX, originY] = api.coord([api.value(0), api.value(1)]);
    const areaStartX = originX - useWith / 2;
    const areaStartY = originY;

    const serCenterOffsetWidth = useWith / serLength;
    
    var width = useWith * 0.2;
    var halfWidth = width / 2;

    const useCenterX = areaStartX + (showIndex + 1) * serCenterOffsetWidth - serCenterOffsetWidth / 2;
    const useCenterY = areaStartY;

    var style = api.style({
        stroke: api.visual('borderColor'),
        fill: api.visual('color'),
    });
    return {
        type: 'group',
        children: [
            {
                // 底盖
                type: 'polygon',
                shape: {
                    points: [
                        [useCenterX - halfWidth, useCenterY + useHeight],
                        [useCenterX, useCenterY + useHeight - halfWidth / 2],
                        [useCenterX + halfWidth, useCenterY + useHeight],
                        [useCenterX, useCenterY + useHeight + halfWidth / 2],
                    ],
                    smooth: 0.6,
                },
                style: style,
            },
            {
                // 顶盖
                type: 'polygon',
                morph: true,
                transition: ['shape'],
                z2: 1,
                shape: {
                    points: [
                        [useCenterX - halfWidth, useCenterY],
                        [useCenterX, useCenterY - halfWidth / 2],
                        [useCenterX + halfWidth, useCenterY],
                        [useCenterX, useCenterY + halfWidth / 2],
                    ],
                    smooth: 0.6,
                },
                style: style,
            },
            {
                // 柱体
                type: 'rect',
                morph: true,
                transition: ['shape'],
                // scaleY: 2,
                shape: {
                    x: useCenterX - halfWidth,
                    y: useCenterY,
                    width: halfWidth * 2,
                    height: useHeight,
                },
                style: {
                    ...style,
                    stroke: 'rgba(0,0,0,0)',
                },
            },
            {
                // 柱边
                type: 'line',
                transition: ['shape'],
                shape: {
                    x1: useCenterX - halfWidth,
                    y1: useCenterY,
                    x2: useCenterX - halfWidth,
                    y2: useCenterY + useHeight,
                },
                style: style,
            },
            {
                // 柱边
                type: 'line',
                transition: ['shape'],
                shape: {
                    x1: useCenterX + halfWidth,
                    y1: useCenterY,
                    x2: useCenterX + halfWidth,
                    y2: useCenterY + useHeight,
                },
                style: style,
            },
        ],
    };
}

option = {
    tooltip: {
        trigger: 'item',
    },
    legend: {
        x: 'center',
        y: 'top',
        align: 'left',
    },
    xAxis: {
        type: 'category',
        data: [1, 2, 3, 4, 5, 6, 76],
        axisLabel: {
            interval: 0,
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: [
        {
            name: 'a',
            type: 'value',
            axisLine: {
                show: true,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        }
    ],
    series: [
        {
            type: 'custom',
            name: '柱一',
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'red', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'blue', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                    borderColor: 'rgba(0,0,0,0)',
                },
            },
            renderItem: renderItem,
            encode: {
                x: 0,
                y: [1],
            },
            data: [
                [0, 3],
                [1, 2],
                [2, 2],
                [3, 2],
                [4, 2],
                [5, 2],
                [6, 2],
            ],
            z: 4,
        },
        {
            type: 'custom',
            name: '柱二',
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'red', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'green', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                    borderColor: 'rgba(0,0,0,0)',
                },
            },
            renderItem: renderItem,
            encode: {
                x: 0,
                y: [1],
            },
            data: [
                [0, 3],
                [1, 2],
                [2, 2],
                [3, 2],
                [4, 2],
                [5, 2],
                [6, 2],
            ],
            z: 4,
        },
        {
            type: 'custom',
            name: '柱三',
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'blue', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'green', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                    borderColor: 'rgba(0,0,0,0)',
                },
            },
            renderItem: renderItem,
            encode: {
                x: 0,
                y: [1],
            },
            data: [
                [0, 3],
                [1, 2],
                [2, 2],
                [3, 2],
                [4, 2],
                [5, 2],
                [6, 2],
            ],
            z: 4,
        },
    ],
};
