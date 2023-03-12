let x = 100;
option = {
    color: ['#003366', '#006699', '#4cabce', '#e5323e'],
    dataset: {
        source: [
            ['type', '2012', '2013', '2014', '2015', '2016'],
            ['O', 320, 332, 301, 334, 390],
            ['H', 220, 182, 191, 234, 290],
            ['Cr', 150, 232, 201, 154, 190],
        ],
    },
    legend: {
        icon: 'rect',
        orient: 'vertical',
        itemGap: 0,
        data: [
            {
                name: 'O',
                itemStyle: {
                    borderWidth: 0,
                    borderType: [5, 10],

                    borderDashOffset: 5,
                    //  shadowBlur: 2,
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
                                offset: 0.5,
                                color: 'red', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'blue', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                },
            },
            {
                name: 'H',
                lineStyle: {
                    color: 'green',
                },
                itemStyle: {
                    borderWidth: 0,
                    //  shadowBlur: 2,
                    //  opacity:0.9,
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
                                offset: 0.5,
                                color: 'blue', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'blue', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                },
            },
            {
                name: 'Cr',
                itemStyle: {
                    borderWidth: 0,
                    // shadowBlur: 2,
                    borderColor: 'pink',
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
                                offset: 0.5,
                                color: 'pink', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'pink', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                },
            },
        ],
    },
    xAxis: {
        type: 'category',
        axisTick: {
            show: false,
        },
    },
    yAxis: {},
    series: [
        {
            type: 'line',
            seriesLayoutBy: 'row',
        },
        {
            type: 'line',
            seriesLayoutBy: 'row',
        },
        {
            type: 'line',
            seriesLayoutBy: 'row',
        },
        {
            type: 'line',
            seriesLayoutBy: 'row',
        },
    ],
    graphic: [
        {
            type: 'group',
            id: 'textGroup1',
            right: 70,
            top: 50,
            // 'raw'： 表示仅仅用自身（不包括子节点）的没经过 tranform 的包围盒进行定位
            // all 定此图形元素在定位时，对自身的包围盒计算方式,
            bounding: 'raw',
            width: 50, // 只用于定位
            height: 100, // 只用于定位
            z: 40,
            // 表示不响应事件。
            // silent: true,
            // 表示节点不显示
            // invisible: false,
            // 设置是否整体限制在父节点范围内。可选值：'raw', 'all'。
            // bouding: 'raw',
            // 是否可以被拖拽。
            draggable: true,
            children: [
                {
                    type: 'rect',
                    left: 'center',
                    top: 'center',
                    z: 50,
                    shape: {
                        // x: 0, // 上面有left 这边x 不生效， 下面的y同理
                        // y: 80,
                        width: 60,
                        height: 90,
                    },
                    style: {
                        fill: 'rgba(255,255,255,1)',
                        stroke: '#000000',
                    },
                },
                {
                    type: 'rect',
                    z: 54,
                    shape: {
                        x: 0, // 图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。
                        y: 20,
                        width: 30,
                        height: 60,
                    },
                    style: {
                        fill: {
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
                                    offset: 0.5,
                                    color: 'pink', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: 'blue', // 100% 处的颜色
                                },
                            ],
                            global: false,
                        },
                        stroke: '#fff',
                        lineWidth: 0,
                    },
                    transition: ['x', 'y', 'width'],
                },
                {
                    type: 'text',
                    left: '70%',
                    top: '15',
                    z: 105,
                    style: {
                        fill: '#000000',
                        text: 'Cr',
                        font: '  14px sans-serif',
                    },
                },
                {
                    type: 'text',
                    left: '70%',
                    top: 'center',
                    z: 105,
                    style: {
                        fill: '#000000',
                        text: 'O',
                        font: ' 14px sans-serif',
                    },
                },
                {
                    type: 'text',
                    left: '70%',
                    bottom: '15',
                    z: 105,
                    style: {
                        fill: '#000000',
                        text: 'H',
                        font: ' 14px sans-serif',
                    },
                },
            ],
        },
    ],
};
