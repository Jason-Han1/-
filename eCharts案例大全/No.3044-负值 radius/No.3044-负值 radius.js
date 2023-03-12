option = {
    legend: {
        show: true,
        itemWidth: 15,
        selectedMode: false,
        data: [
            {
                name: '去年',
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#75CFCF',
                            },
                            {
                                offset: 1,
                                color: '#225A5E',
                            },
                        ],
                        global: false,
                    },
                },
            },
            {
                name: '本年',
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#7586CF',
                            },
                            {
                                offset: 1,
                                color: '#30407D',
                            },
                        ],
                        global: false,
                    },
                },
            },
            {
                name: '同比',
                itemStyle: {
                    color: '#9CB0FF',
                },
            },
        ],
    },
    tooltip: {
        "backgroundColor":"rgba(255,255,255,0.95)",
        trigger: 'axis',
          axisPointer: {
            type: 'none'
          },
          formatter: (item)=>{
              debugger;
              return '<p><div style="display:inline-block;background-color:blue;width:0.6rem;height:0.6rem;"></div>   名称</p><p><div style="display:inline-block;background-color:blue;width:0.6rem;height:0.6rem;"></div>   名称</p>';
          }
    },
    dataset: {
        // 用 dimensions 指定了维度的顺序。直角坐标系中，
        // 默认把第一个维度映射到 X 轴上，第二个维度映射到 Y 轴上。
        // 如果不指定 dimensions，也可以通过指定 series.encode
        // 完成映射，参见后文。
        dimensions: ['month', 'dq', 'sq', 'tb'],
        source: [
            { month: 'Matcha Latte', dq: 43.3, sq: 85.8, tb: 0.44 },
            { month: 'Milk Tea', dq: 83.1, sq: 73.4, tb: 0.44 },
            { month: 'Cheese Cocoa', dq: 86.4, sq: 65.2, tb: 0.44 },
            { month: 'Walnut Brownie', dq: 72.4, sq: 53.9, tb: 0.44 },
        ],
    },
    xAxis: { type: 'category' },
    yAxis: [
        {
                    "type":"value",
                    "scale":true,
                    "splitLine":{
                        "show":true,
                        "type":"dashed",
                        "lineStyle":{
                            "opacity":0.4
                        }
                    },
                    "splitNumber": 5
                },
                {
                    "show": false,
                    "type":"value",
                    "scale":true,
                    "splitNumber": 5
                }
    ],
    series: [
        {
            id: 'sq',
            name: '去年',
            type: 'bar',
            barWidth: 15,
            itemStyle: {
                barBorderRadius: 8,
                color: function (item) {
                    var indexValue = item.data[item.seriesId];
                    if (indexValue >= 0) {
                        return {
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            colorStops: [
                                { offset: 0, color: 'rgba(25,27,42,0)' },
                                { offset: 0.1, color: '#225A5E' },
                                { offset: 1, color: '#75CFCF' },
                            ],
                        };
                    } else {
                        return {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                { offset: 0, color: 'rgba(25,27,42,0)' },
                                { offset: 0.1, color: '#225A5E' },
                                { offset: 1, color: '#75CFCF' },
                            ],
                        };
                    }
                },
            },
        },
        {
            id: 'dq',
            name: '本年',
            type: 'bar',
            barWidth: 15,
            itemStyle: {
                barBorderRadius: 8,
                color: function (item) {
                    var indexValue = item.data[item.seriesId];
                    if (indexValue >= 0) {
                        return {
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            colorStops: [
                                { offset: 0, color: 'rgba(25,27,42,0)' },
                                { offset: 0.1, color: '#30407D' },
                                { offset: 1, color: '#7586CF' },
                            ],
                        };
                    } else {
                        return {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                { offset: 0, color: 'rgba(25,27,42,0)' },
                                { offset: 0.1, color: '#30407D' },
                                { offset: 1, color: '#7586CF' },
                            ],
                        };
                    }
                },
            },
        },
        {
            id: 'tb',
            name: '同比',
            type: 'line',
            yAxisIndex: 1,
            label: {
                show: true,
                position: 'top',
                backgroundColor: {
                    image:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAAdCAYAAAD1uwHJAAAABHNCSVQICAgIfAhkiAAAAmFJREFUWEftWDFoFFEQndlDSeCIVobsnansFKytjIRDRHJ3IEFLQavsSgpRL0QrmxQGi7skiBwpLUSyFzsLK7FRURG1EBHN7apdtLG6P749jOS4u8BuPnv7Ib/8zLx98/782fnD1GcV3eY0izVJTMdgMs5EI/1s07ovTL/A+xv4vSOhJ17N9npxhU3nKjp+gZkWmXg8rcHF5yWfWfHs2rL9bDtGhwglN6hgoxL/I+n3FBIlIvPrS/mVLbb/RSg7wRxS/0b6w9DDUIgWGjV7IURrizDlbpzJUOaBHnijUC6hTjziiZn32QPWwVeoAaNG0ddAFtnQ3P9z7DiXHP8yM9/RgGkkhFKtCxAheIi/QcHICHSQZqoz/ggfURjGdOCZiaHehCL8gAhDZgagg7VsctkNNnVAmYyxJ0LYJ+xlAkQouX4TPULW5HTeDXf0Cr/DPuEl+oQjuwEy21c+cNnx68R8zuxA4rNXQqvhdTiP63AvPozZnorkLJ+Y3hg+NJp5gV4hb3Y40dnjWf22UcudbL8iizPfT1mWrEWHMdyjRZPeio3H47+FidI1i3ne8LAi0JerXi1XDx06JktF17+OjTnUiK6xWwT0lJtKSzFX1qv2/S2iXcHiLXEam3dhYKc8msj00BN8IiWzjeXc8+3OPU984uKXoZHsvikmq4BcOYpJ7WFTp80k8hX8Xyuip4+Xco1eyiWa9tEGuXILd7Ya+bhjOCQqQsgPA93byK4rO3NNToCuwhhDxFguOwuRrAADE6F/RiQvwEBF6BZiMAIMXIR2t+oENy1L/fGq+cVYd0uD019eMLJmTFq+FgAAAABJRU5ErkJggg==',
                },
                padding: [10, 10, 15, 10],
                distance: 5,
                textStyle: {
                    color: '#FFFFFF',
                    fontSize: {
                        isFunction: true,
                        type: 'script_exp',
                        formatter: "domUtils.getPxFromRem('0.15rem')",
                    },
                }
            },
            smooth: false,
            symbolSize: 10,
            lineStyle: {
                color: '#9CB0FF',
                width: 2.5,
                shadowBlur: 5,
                shadowColor: '#1C1F2E',
                shadowOffsetY: 10,
            },
            itemStyle: {
                color: '#9CB0FF',
                borderColor: '#fff',
                borderWidth: 2,
            },
        },
    ],
};
