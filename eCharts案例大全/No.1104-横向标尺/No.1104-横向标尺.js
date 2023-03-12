var xMax = 30;
var barWidth = 20;
var kd = [];
var kdUnit = 5;
// 刻度使用柱状图模拟，短设置3，长的设置5；构造一个数据
for (var i = 0, len = xMax; i <= len; i++) {
    if (i > xMax) {
        kd.push('0');
    } else {
        if (i % kdUnit === 0) {
            kd.push('-5');
        } else {
            kd.push('-3');
        }
    }
}
var option = {
    backgroundColor: '#0e1733',
    xAxis: [
        {
            show: false,
            min: 0,
            max: xMax,
            inverse: true,
        },
        {
            show: false,
            data: [],
            min: -3,
            max: 33,
            inverse: true,
        },
    ],
    yAxis: [
        {
            show: false,
            data: [],
        },
        {
            show: false,
            data: [],
        },
        {
            show: false,
            data: [],
        },
        {
            show: false,
            min: -90,
            max: 100,
        },
    ],
    series: [
        {
            name: '急需改造',
            type: 'bar',
            barWidth: 24,
            // silent: true,
            stack: true,
            yAxisIndex: 0,
            data: [
                {
                    value: 5,
                    label: {
                        normal: {
                            show: true,
                            color: '#fff',
                            fontSize: 14,
                            formatter: function (params) {
                                return '优秀';
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#528CED',
                        },
                    },
                },
            ],
        },
        {
            name: ' ',
            type: 'bar',
            stack: true,
            barWidth: 24,
            // silent: true,
            yAxisIndex: 0,
            data: [
                {
                    value: 5,
                    label: {
                        normal: {
                            show: true,
                            color: '#fff',
                            fontSize: 14,
                            formatter: function (params) {
                                return '良好';
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#3DD7C1',
                        },
                    },
                },
            ],
        },
        {
            name: ' ',
            type: 'bar',
            stack: true,
            barWidth: 24,
            // silent: true,
            yAxisIndex: 0,
            data: [
                {
                    value: 5,
                    label: {
                        normal: {
                            show: true,
                            color: '#fff',
                            fontSize: 14,
                            formatter: function (params) {
                                return '一般';
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#E5BB3C',
                        },
                    },
                },
            ],
        },
        {
            name: ' ',
            type: 'bar',
            stack: true,
            barWidth: 5,
            // silent: true,
            yAxisIndex: 0,
            data: [
                {
                    value: 15,
                    label: {
                        normal: {
                            show: true,
                            color: '#fff',
                            fontSize: 14,
                            formatter: function (params) {
                                return '急需改造';
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#EF5286',
                        },
                    },
                },
            ],
        },
        {
            name: '刻度',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 3,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    distance: -50,
                    color: '#35F7FF',
                    fontSize: 15,
                    formatter: function (params) {
                        // 因为柱状初始化为0，温度存在负值，所以，原本的0-100，改为0-130，0-30用于表示负值
                        if (params.dataIndex < xMax && params.dataIndex % 10 === 0) {
                            return params.dataIndex - 15;
                        } else {
                            if (params.dataIndex % 10 === 0) {
                                return params.dataIndex - 15;
                            } else {
                                return '';
                            }
                        }
                    },
                },
            },
            data: kd,
            barWidth: 2,
            itemStyle: {
                normal: {
                    color: '#35F7FF',
                    barBorderRadius: 10,
                },
            },
            z: 3,
            markPoint: {
                data: [
                    {
                        value: '-5',
                        xAxis: 15 - 5,
                        y: 200,
                        // symbol: 'image://img/04.png',
                        // symbolSize: [20, 32],
                        itemStyle: {
                            normal: {
                                color: '#E5BB3C',
                                barBorderRadius: 10,
                            },
                        },
                        label: {
                            position: 'top',
                            show: true,
                            color: '#E5BB3C',
                            fontSize: 14,
                            fontWeight: 'bold',
                            formatter: function (params) {
                                return `当前能效` + params.value;
                            },
                        },
                    },
                ],
            },
        },
    ],
};
