 option = {
        color: ['#5470C6', '#5470C6', '#EE6666', '#EE6666'],
        legend: {
            show: true,
            data: ['现有总计', '现有密度', '现有+规划总计', '现有+规划密度'],

        },
        grid: [{
            top: '5%',
            width: '30%',
            right: '5%',
            left: '5%',
            bottom: "25%"

        }, {
            top: '5%',
            width: '30%',
            right: '5%',
            left: '35%',
            bottom: "25%"

        }
            , {
            top: '5%',
            width: '30%',
            right: '5%',
            left: '65%',
            bottom: "25%"

        },
        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow', //line
                label: {
                    show: true,
                    color: "#000"
                }
            }
        }, xAxis: [{
            type: 'category',
            gridIndex: 0,
            data: ['万博', '万顷沙', '三元里', '亚运城', '南岗'],
            axisTick: {
                length: 0,
            },
            axisLabel: {
                rotate: 75
            },
        }, {
            type: 'category',
            gridIndex: 1,
            data: ['万博', '万顷沙', '三元里', '亚运城', '南岗'],
            axisTick: {
                length: 0,
            },
            axisLabel: {
                rotate: 75
            },
        }, {
            type: 'category',
            gridIndex: 2,
            data: ['万博', '万顷沙', '三元里', '亚运城', '南岗'],
            axisTick: {
                length: 0,
            },
            axisLabel: {
                rotate: 75
            },
        }, {
            type: 'category',
            gridIndex: 0,
            data: [
                {
                    value: '产业园',
                    textStyle: {
                        fontSize: 18,
                        lineHeight: 150
                    }
                }
            ],
            position: 'bottom',
            axisTick: {
                length: 110
            },

        }, {
            type: 'category',
            gridIndex: 1,
            data: [
                {
                    value: '医院',
                    textStyle: {
                        fontSize: 18,
                        lineHeight: 150
                    }
                }
            ],
            position: 'bottom',
            axisTick: {
                length: 110
            },

        }, {
            type: 'category',
            gridIndex: 2,
            data: [
                {
                    value: '学校',
                    textStyle: {
                        fontSize: 18,
                        lineHeight: 150
                    }
                }
            ],
            position: 'bottom',
            axisTick: {
                length: 110
            },

        },], yAxis: [{
            type: 'value',
            axisLabel: {
                interval: 0,
            },
            splitLine: {
                show: false
            }
        },
        {
            show: false,
            gridIndex: 1,
            type: 'value',

        },
        {
            show: false,
            gridIndex: 2,
            type: 'value',

        },
        {
            show: false,
            gridIndex: 3,
            type: 'value',

        },], series: [
            {
                name: '现有总计',
                xAxisIndex: 0,
                yAxisIndex: 0,
                data: [7, 14, 14, 7, 5],
                type: 'bar'
            },
            {
                name: '现有密度',
                xAxisIndex: 0,
                yAxisIndex: 0,
                data: [0.30634, 0.05362, 1.18335, 0.04484, 0.23194],
                type: 'line'
            },
            {
                name: '现有+规划总计',
                xAxisIndex: 0,
                yAxisIndex: 0,
                data: [7, 22, 14, 7, 5],
                type: 'bar'
            },
            {
                name: '现有+规划密度',
                xAxisIndex: 0,
                yAxisIndex: 0,
                data: [0.30634, 0.08426, 1.18335, 0.04484, 0.23194],
                type: 'line'
            },
            {
                name: '现有总计',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: [0, 2, 3, 1, 2],
                type: 'bar'
            },
            {
                name: '现有密度',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: [0, 0.00766, 0.25357, 0.00641, 0.09278],
                type: 'line'
            },
            {
                name: '现有+规划总计',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: [0, 4, 3, 1, 2],
                type: 'bar'
            },
            {
                name: '现有+规划密度',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: [0, 0.01532, 0.25357, 0.00641, 0.09278],
                type: 'line'
            },
            {
                name: '现有总计',
                xAxisIndex: 2,
                yAxisIndex: 2,
                data: [9, 4, 6, 10, 5],
                type: 'bar'
            },
            {
                name: '现有密度',
                xAxisIndex: 2,
                yAxisIndex: 2,
                data: [0.39387, 0.01532, 0.50715, 0.06406, 0.23194],
                type: 'line'
            },
            {
                name: '现有+规划总计',
                xAxisIndex: 2,
                yAxisIndex: 2,
                data: [11, 6, 6, 11, 9],
                type: 'bar'
            },
            {
                name: '现有+规划密度',
                xAxisIndex: 2,
                yAxisIndex: 2,
                data: [0.4814, 0.02298, 0.50715, 0.07047, 0.41749],
                type: 'line'
            },]
    }