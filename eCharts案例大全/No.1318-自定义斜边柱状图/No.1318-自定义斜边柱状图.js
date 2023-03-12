const dataSource = [
    {
        value: '8',
        unit: '个',
        name: '千金',
    },
    {
        value: '1',
        unit: '个',
        name: '南浔',
    },
    {
        value: '2',
        unit: '个',
        name: '双林',
    },
    {
        value: '3',
        unit: '个',
        name: '和孚',
    },
    {
        value: '3',
        unit: '个',
        name: '善琏',
    },
    {
        value: '1',
        unit: '个',
        name: '开发区',
    },
    {
        value: '6',
        unit: '个',
        name: '石淙',
    },
    {
        value: '3',
        unit: '个',
        name: '练市',
    },
    {
        value: '5',
        unit: '个',
        name: '菱湖',
    },
];

const img =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAVCAYAAACzK0UYAAACyUlEQVRIiY2VzWoUQRDHf9U7+cIsahIj0ajgwaNi1JNHSRQ3ePMk+AyKd30BQfQFFDzrRWOMJBdBEEUEPQVMiHgQjWA2Jtns7E63dM/MTs/MJqSgpqq7q/9V1VU9LSzNHwPuAdPACPANeAI8AJp4NHbk0r6K4VwkHAcGgPWKYTESvgKRtayY2D6SWLdSWJpbdeACWANxHzt4B1LDUHe7BKpjUzd7NP2U6Rcw21KEgzqLrKViGSCtkRSkI+NoLgLzCJPAmp3fiOjvNRBK3omBwwI1ImY2IOwsRLFQSBvHtPIy5vNIewHVHrJjY6M0OOkzsX7IaKaNpq+4rpCQmFuebJLNhxMQzkM4TALoMvVlxiNoamj6/HmVATYL4Ln5s0hzgfZ61W2MEoCo5MR31O85CQvg210cOT5D4+Vtonp1RydRd0dxJqpZyCTRlcd2TP0ozee3MGGvAzQJcMr+WDNMxFUiApUBbntyOwbG404wa+O0Zy97YN0ySXWb0enAgZpCCztdg6hOj+banJULaF7k+rjQ1p09cDJAGomBJBexCxUBaB1wkXYucAnY3zMYxIVODSTJVfxLmSgqkfaiVNec2d5oI0A1ysdlCtFL4cjapz6kt7l0ZMVsDMvxcaWRlzYZEMl0S/rgd7ZuvNlTJobfCF+8mqSkssI7w7RWCvT+H6zfeUQ0EHZOcedM/gCvbd5xTXax9AL4zN/7T2mNbnbNOk/WwUz6VATIVmFdZVlk9AmYpDl6vVschfFq4iBM15Ka7EofgSn3u9f5BizdH1sDeOUceA0UBDknpSzeA1faUA/s4SYdXKpFTLbIsQO/OzUE49Kw3keVgZ5kVrubHr1VpnJNS1RvUXErKxob0UAHJJM/EeYwiYN8LQmGZHNCGbmLUNNi7Cu5rI08VmIe2l+0fc5sFomTZ8AEcALjnuF/wCLGvfE6l2GqA/8Bnpdx0cUesngAAAAASUVORK5CYII=';

const obliqueRectangle = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        offset: 10,
    },
    buildPath: (ctx, shape) => {
        ctx.moveTo(shape.x + shape.offset, shape.y);
        ctx.lineTo(shape.x + shape.width + shape.offset, shape.y);
        ctx.lineTo(shape.x + shape.width, shape.y + shape.height);
        ctx.lineTo(shape.x, shape.y + shape.height);
        ctx.closePath();
    },
});
echarts.graphic.registerShape('obliqueRectangle', obliqueRectangle);

option = {
    backgroundColor: '#000',
    grid: [
        {
            left: 50,
            top: 0,
            right: 20,
            bottom: 20,
            containLabel: true,
        },
    ],
    xAxis: [
        {
            gridIndex: 0,
            type: 'value',
            axisLabel: { show: false },
            axisLine: { show: false },
            splitLine: { show: false },
            axisTick: { show: false },
        },
        {
            gridIndex: 0,
            type: 'value',
            max: 100,
            axisLabel: { show: false },
            axisLine: { show: false },
            splitLine: { show: false },
            axisTick: { show: false },
        },
    ],
    yAxis: [
        {
            gridIndex: 0,
            type: 'category',
            inverse: true,
            data: dataSource.map((item) => item.name),
            axisTick: { show: false },
            axisLine: { show: false },
            splitLine: { show: false },
            axisLabel: {
                width: 80,
                padding: [0, 0, 0, -80],
                align: 'left',
                formatter: (name, index) => {
                    const _index = index + 1;
                    const id = _index > 9 ? _index : `0${_index}`;
                    return `{icon|}{num|${id}}{value|${name}}`;
                },
                rich: {
                    icon: {
                        width: 14,
                        height: 11,
                        backgroundColor: {
                            image: img,
                        },
                    },
                    num: {
                        padding: [0, 0, 0, 5],
                        width: 25,
                        color: '#7FE5FF',
                        align: 'left',
                        fontSize: 15,
                        fontFamily: 'Oswald',
                        fontWeight: 400,
                        fontStyle: 'italic',
                    },
                    value: {
                        // width:
                        fontSize: 15,
                        color: '#fff',
                        fontFamily: 'SourceHanSerifSC-Bold',
                        fontWeight: 500,
                    },
                },
            },
        },
        {
            gridIndex: 0,
            type: 'category',
            inverse: true,
            margin: 20,
            data: dataSource.map((item) => item.name),
            axisTick: { show: false },
            axisLine: { show: false },
            splitLine: { show: false },
            axisLabel: {
                padding: [0, 0, 0, 10],
                formatter: (_, index) => {
                    return `{value|${dataSource[index].value}}{unit|个}`;
                },
                rich: {
                    unit: {
                        color: '#fff',
                        fontSize: 8,
                        verticalAlign: 'bottom',
                    },
                    value: {
                        color: '#fff',
                        fontSize: 15,
                        fontWeight: 500,
                    },
                },
            },
        },
    ],
    series: [
        {
            type: 'custom',
            xAxisIndex: 1,
            yAxisIndex: 0,
            data: dataSource.map(() => 100),
            renderItem: (params, api) => {
                const barLayout = api.barLayout({
                    count: 1,
                    barWidth: 8,
                });
                const { bandWidth, offsetCenter, width } = barLayout[0];
                const x = params.coordSys.x;
                const y = bandWidth * (params.dataIndex + 1 / 2) + offsetCenter + params.coordSys.y - width / 2;
                return {
                    type: 'obliqueRectangle',
                    shape: {
                        x: x,
                        y: y + 2,
                        width: api.size([api.value()])[0],
                        height: width,
                        offset: width * 0.5,
                    },
                    style: api.style(),
                };
            },
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#22324A', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#1C3D57', // 100% 处的颜色
                        },
                    ],
                    global: false, // 缺省为 false
                },
            },
            silent: true,
        },
        {
            type: 'custom',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: dataSource.map((item) => item.value),
            silent: true,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#2FC7FF', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#73F3FF', // 100% 处的颜色
                        },
                    ],
                    global: false, // 缺省为 false
                },
            },
            renderItem: (params, api) => {
                const barLayout = api.barLayout({
                    barWidth: 11,
                    count: 1,
                });
                const { bandWidth, offsetCenter, width } = barLayout[0];
                const x = params.coordSys.x;
                const y = bandWidth * (params.dataIndex + 1 / 2) + offsetCenter + params.coordSys.y - width / 2;
                return {
                    type: 'obliqueRectangle',
                    shape: {
                        x: x,
                        y: y,
                        width: api.size([api.value()])[0],
                        height: width,
                        offset: width * 0.5,
                    },
                    style: api.style(),
                };
            },
        },
        {
            type: 'pictorialBar',
            data: dataSource.map((item) => item.value),
            xAxisIndex: 0,
            yAxisIndex: 0,
            symbol: 'path://M15,0L5,20L0,20L10,0Z',
            symbolRotate: null,
            symbolSize: [13, 12],
            symbolPosition: 'end',
            symbolOffset: [10, 0],
            itemStyle: {
                color: 'white',
                shadowColor: 'rgba(115, 243, 255, 0.2)',
                shadowBlur: 10,
            },
        },
    ],
};
