// 注意：数据需要自己归一化为100的百分比
const dataList = [{
        "x0": "2011-08-03",
        "y0": 10,
        "y1": 20,
        "y2": 25,
        "y3": 5,
        "y4": 30,
        "y5": 10
    },
    {
        "x0": "2009-09-03",
        "y0": 5,
        "y1": 25,
        "y2": 25,
        "y3": 5,
        "y4": 30,
        "y5": 10
    },
    {
        "x0": "1992-11-30",
        "y0": 50,
        "y1": 20,
        "y2": 15,
        "y3": 5,
        "y4": 5,
        "y5": 5
    },
    {
        "x0": "1990-04-02",
        "y0": 2,
        "y1": 6,
        "y2": 10,
        "y3": 14,
        "y4": 18,
        "y5": 50
    },
];
var option = {
    title: {
        text: '百分比堆叠柱状图',
    },
    grid: {
        top: 60,
        left: 30,
        right: 50,
        bottom: 30,
        containLabel: true,
    },
    color: ['#647af4', '#30d194', '#27b0f5', '#62708c', '#d65d3e', '#e1a50b'],
    legend: {
        top: 30,
        left: 10,
        icon: 'circle',
        selectedMode: false,
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: '#fff',
        textStyle: {
            color: '#333',
        },
        extraCssText: 'box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);',
        axisPointer: {
            type: 'shadow',
        },
        // 定义显示tooltip，参数请使用console.log(params) 查看
        formatter(params) {
            const categoryName = (params && params[0] && params[0].name) || '';
            const obj = params.map((item, index) => {
                if (item.value === undefined) {
                    // eslint-disable-next-line
                    item.value = 0;
                }
                // 小圆点显示
                const dotColor = `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:${item.color}"></span>`;
                return `${dotColor + item.seriesName}: ${item.value[item.dimensionNames[item.encode.y[0]]]}%</br>`;
            });
            return `${categoryName} </br> ${obj.join('')}`;
        },
    },
    dataset: {
        source: dataList
    },
    grid: {
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: {
        show: false,
    },
    series: [{
            name: '绿茶',
            type: 'bar',
            stack: '百分比',
            encode: {
                x: 'x0',
                y: 'y0',
            },
        },
        {
            name: '红茶',
            type: 'bar',
            stack: '百分比',
            encode: {
                x: 'x0',
                y: 'y1',
            }
        },
        {
            name: '白茶',
            type: 'bar',
            stack: '百分比',
            encode: {
                x: 'x0',
                y: 'y2',
            }
        },
        {
            name: '青茶',
            type: 'bar',
            stack: '百分比',
            encode: {
                x: 'x0',
                y: 'y3',
            }
        },
        {
            name: '黑茶',
            type: 'bar',
            stack: '百分比',
            encode: {
                x: 'x0',
                y: 'y4',
            }
        },
        {
            name: '黄茶',
            type: 'bar',
            stack: '百分比',
            encode: {
                x: 'x0',
                y: 'y5',
            }
        },

    ]
};