colors = ['#000000', '#58595B', '#808285', '#A7A9AC', '#D1D3D4']
top_space = 30;
bar_category_gap = '28%';
axis_line_color = 'rgb(135,135,135)';
backgroundColor = 'rgb(255,255,255)';
axisColor = '#000000';
labelColor = '#333';
legend_size = 10;

data = [
    [0.5, 0.4, 0.3, 0.5],
    [4.5, 2.3, 1.8, 1.9],
    [1.7, 1.2, 0.7, 1.4],
    [1.2, 0.8, 0.9, 0.9],
];
categories = ['好奇', '妈咪宝贝', '帮宝适', '花王'];
dims = ['柔软度', '吸水性', '透气度', '厚度']

option = {
    grid: {
        top: top_space,
        //width: width,
        // height: height
        // left: '0',
        // height:height,
    },
    legend: {
        bottom: '10',
        data: dims,
        icon: 'square',

        itemWidth: legend_size,
        itemHeight: legend_size,
    },
    backgroundColor: backgroundColor,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: [{
        type: 'category',
        data: categories,
        axisLine: {
            lineStyle: {
                color: axisColor,
                width: 4,
            },
        },
        axisLabel: {
            textStyle: {
                color: labelColor,
            }
        },
        axisTick:{
            show: false
        },
        z: 10,
    }],
    yAxis: [{
        nameLocation: 'middle',
        nameGap: 35,
        nameTextStyle: {
            color: labelColor,
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            formatter: '{value}%',
            textStyle: {
                color: labelColor,
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: axisColor,
            },
        },
        axisTick:{
            show: false
        },
        type: 'value',
        name: '差评占比',
    }, ],
    series: [{
        name: dims[0],
        type: 'bar',
        barCategoryGap: bar_category_gap,
        data: data[0],
        itemStyle: {
            normal: {
                color: colors[0]
            }
        },
    }, {
        name: dims[1],
        type: 'bar',
        barCategoryGap: bar_category_gap,
        data: data[1],
        itemStyle: {
            normal: {
                color: colors[1]
            }
        },
    }, {
        name: dims[2],
        type: 'bar',
        barCategoryGap: bar_category_gap,
        data: data[2],
        itemStyle: {
            normal: {
                color: colors[2]
            }
        },
    }, {
        name: dims[3],
        type: 'bar',
        barCategoryGap: bar_category_gap,
        data: data[3],
        itemStyle: {
            normal: {
                color: colors[3]
            }
        },
    }]
};

bar_2_option = option;