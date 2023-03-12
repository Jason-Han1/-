var data = {
    name: '',
    symbolSize: 0,
    itemStyle: {
        color: '#0000', //这是节点折叠时候的颜色
        borderColor: '#0000',
        borderWidth: 0,
        normal: {
            color: '#0000',
        },
    },
    children: [
        {
            name: 'animate',
            symbolSize: 16,
            label: {
                fontSize: 16,
                color: '#000', //字体颜色
            },
            itemStyle: {
                color: '#ff0000', //这是节点折叠时候的颜色
                borderColor: '#0000ff',
                borderWidth: 3,
                normal: {
                    color: '#00ff00',
                },
            },
            lineStyle: {
                color: '#0000',
                width: 0,
                type: 'solid', //'dotted'虚线 'solid'实线
            },
            children: [
                {
                    name: 'Easing',
                    value: 17010,
                },
                {
                    name: 'FunctionSequence',
                    value: 5842,
                },
                {
                    name: 'interpolate',
                    children: [
                        {
                            name: 'ArrayInterpolator',
                            value: 1983,
                        },
                        {
                            name: 'ColorInterpolator',
                            value: 2047,
                        },
                        {
                            name: 'DateInterpolator',
                            value: 1375,
                        },
                        {
                            name: 'Interpolator',
                            value: 8746,
                        },
                        {
                            name: 'MatrixInterpolator',
                            value: 2202,
                        },
                    ],
                },
                {
                    name: 'ISchedulable',
                    value: 1041,
                },
                {
                    name: 'Parallel',
                    value: 5176,
                },
                {
                    name: 'Pause',
                    value: 449,
                },
            ],
        },
        {
            name: 'data',
            category: 'tree2',
            label: {
                normal: {
                    show: true,
                },
            },
            lineStyle: {
                color: '#0000',
                width: 0,
                type: 'solid', //'dotted'虚线 'solid'实线
            },
            itemStyle: {
                normal: {
                    show: false,
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'green', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'white', // 100% 处的颜色
                            },
                        ],
                        globalCoord: false, // 缺省为 false
                    },
                    borderColor: 'blue',
                    borderWidth: 2,
                    shadowColor: 'rgba(0, 0, 0, 1)',
                    shadowBlur: 10,
                },
                emphasis: {
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'green', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'white', // 100% 处的颜色
                            },
                        ],
                        globalCoord: false, // 缺省为 false
                    },
                },
            },
            children: [
                {
                    name: 'converters',
                    children: [
                        {
                            name: 'Converters',
                            value: 721,
                        },
                        {
                            name: 'DelimitedTextConverter',
                            value: 4294,
                        },
                        {
                            name: 'GraphMLConverter',
                            value: 9800,
                        },
                        {
                            name: 'IDataConverter',
                            value: 1314,
                        },
                        {
                            name: 'JSONConverter',
                            value: 2220,
                        },
                    ],
                },
                {
                    name: 'DataField',
                    value: 1759,
                },
                {
                    name: 'DataSchema',
                    value: 2165,
                },
            ],
        },
    ],
};
option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
    },
    series: [
        {
            type: 'tree',
            initialTreeDepth: -1,
            data: [data],

            top: '1%',
            left: '7%',
            bottom: '1%',
            right: '20%',

            symbolSize: 10,
            zoom: 0.5, //当前视角的缩放比例
            roam: true, //是否开启平游或缩放
            scaleLimit: {
                //滚轮缩放的极限控制
                min: 0.5,
                max: 5,
            },

            label: {
                normal: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    color: 'black',
                },
            },

            leaves: {
                label: {
                    normal: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left',
                    },
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
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
                            globalCoord: false, // 缺省为 false
                        },
                    },
                },
            },
        },
    ],
};
