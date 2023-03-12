const chartData = [
    { name: '第一', value: 15 },
    { name: '第二', value: 20 },
    { name: '第三', value: 15 },
    { name: '第四', value: 30 },
];

const names = chartData.map((item) => item.name);
const values = chartData.map((item) => item.value);

const colorArray = ['#FF8A8A', '#8AFFBC', '#04E9FA', '#FDDCA5'];

option = {
    tooltip: {
        trigger: 'axis',
        show: true,
        axisPointer: {
            type: 'shadow'
        },
        textStyle: {
            fontSize: 24
        }
    },
    grid: {
        top: 30,
        bottom: 50,
        left: 10
    },
    xAxis: {
        type: 'category',
        data: names,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            fontSize: 16,
            fontWeight: 400,
            color: '#000'
        }
    },
    yAxis: [
        {
            type: 'value',
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
    ],
    series: [
        {
            type: 'bar',
            barWidth: 30,
            data: values,
            label: {
                show: true,
                position: 'top',
                fontSize: 20,
                color: 'inherit', // 关键
                fontWeight: 400,
            },
            itemStyle: {
                color(params) {
                    return colorArray[params.dataIndex];
                },
                borderRadius: 10
            }
        }
    ]
};
