const up = 'path://M13.811,7h3.918L10.874,0,4.021,7H8.036c0,5-1.568,8.5-4.993,11C7.937,17,12.833,14,13.811,7Z';
const equal =
    'path://M22.1,6.157H1.579A1.579,1.579,0,1,1,1.579,3H22.1a1.579,1.579,0,0,1,0,3.157ZM1.579,11.189H22.1a1.579,1.579,0,1,1,0,3.157H1.579a1.579,1.579,0,1,1,0-3.157Z';
const down = 'path://M13.811,11h3.918l-6.855,7L4.021,11H8.036c0-5-1.568-8.5-4.993-11C7.937,1,12.833,4,13.811,11Z';
option = {
    title: {
        text: '箭头形式标注同比增长或减少',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            // 使箭头x轴不显示文字
            axisLabel: {
                interval: 1,
            },
            data: ['第一步', '1', '第二步', '2', '第三步', '3', '第四步', '4', '第五步'],
        },
    ],
    yAxis: [
        {
            type: 'value',
        },
    ],
    series: [
        {
            name: '人数',
            type: 'bar',
            // null为箭头数据预留位置
            data: [390, null, 334, null, 220, null, 190, null, 110],
            label: {
                normal: {
                    show: true,
                    position: 'top',
                },
            },
            markPoint: {
                // symbol: up,
                symbol: down,
                symbolSize: [40, 40],
                symbolOffset: [0, 20],
                data: [
                    {
                        // 与xAxis和yAxis等价
                        coord: ['1', 390],
                        value: 56,
                        // xAxis: '1',
                        // yAxis: 390,
                        label: {
                            position: 'bottom',
                        },
                    },
                    {
                        coord: ['2', 334],
                        value: 114,
                        label: {
                            position: 'bottom',
                        },
                    },
                    {
                        value: 30,
                        xAxis: '3',
                        yAxis: 220,
                        label: {
                            position: 'bottom',
                        },
                    },
                    {
                        value: 80,
                        xAxis: '4',
                        yAxis: 190,
                        label: {
                            position: 'bottom',
                        },
                    },
                ],
            },
        },
    ],
};
