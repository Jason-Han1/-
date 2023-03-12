option = {
    title: {
        text: 'Awesome Chart',
    },
    legend: {
        data: [
            {
                name: '体重',
                // 强制设置图形为圆。
                icon: 'circle',
            },
            {
                name: '体脂率',
                // 强制设置图形为圆。
                icon: 'diamond',
            },
            {
                name: '肌肉量',
                // 强制设置图形为圆。
                icon: 'rect',
            },
            {
                name: '内脏脂肪',
                // 强制设置图形为圆。
                icon: 'triangle',
            },
        ],
    },

    xAxis: {
        type: 'category',
        data: ['听短对话', '听长对话', '单项选择', '完形填空', '阅读理解', '改错题', '选词填空'],
    },
    yAxis: [
        {
            type: 'value',
            name: '体重、体脂率、肌肉量',
        },
        {
            type: 'value',
            name: '内脏脂肪',
        },
    ],
    series: [
        {
            type: 'line',
            name: '体重',
            symbol: 'circle',
            symbolSize: 15,
            color: '#333333',
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#00b3f4',
                },
            },
            lineStyle: {
                type: 'dashed',
                color: '#333333',
            },
            data: [220, 182, 45, 37, 78, 95, 34],
        },
        {
            type: 'line',
            name: '体脂率',
            symbol: 'diamond',
            symbolSize: 15,
            color: '#333333',
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#00b3f4',
                },
            },
            lineStyle: {
                type: 'dotted',
                color: '#333333',
            },
            data: [120, 33, 44, 66, 45, 13, 44],
        },
        {
            type: 'line',
            name: '肌肉量',
            symbol: 'rect',
            symbolSize: 15,
            color: '#333333',
            lineStyle: {
                // type: 'dotted',
                color: '#333333',
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#00b3f4',
                },
            },
            data: [10, 84, 191, 45, 67, 88, 39],
        },
        {
            type: 'line',
            name: '内脏脂肪',
            yAxisIndex: 1,
            symbol: 'triangle',
            symbolSize: 15,
            color: '#333333',
            lineStyle: {
                type: 'dashed',
                dashOffset: 0,
                cap: 'round',
                join: 'round',
                miterLimit: 0,
                width:4,
            },
            itemStyle: {
                borderMiterLimit: 6,
            },
            label: {
                color: '#333333',
                show: true,
                position: 'top',
                textStyle: {
                    color: '#00b3f4',
                },
            },
            data: [12, 12, 12, 12, 32, 22, 1],
        },
    ],
};
