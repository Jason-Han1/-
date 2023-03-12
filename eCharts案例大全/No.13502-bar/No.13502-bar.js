colors = ['#0C5DA5', '#408DD2', '#679FD2']
top_space = 30;
bar_category_gap = '28%';
axis_line_color = 'rgb(135,135,135)';
backgroundColor = 'rgb(255,255,255)';
axisColor = '#000000';
labelColor = '#333';
legend_size = 10;

data = [
    [31.84,34.58,26.03,13.27,73.65,30.13,26.93,26.72,38.58,61.76],
    [21.82,25.23,18.10,19.32,70.02,22.04,14.75,19.85,29.21,68.95],
    [13.26,15.39,12.55,12.11,46.39,12.36,11.16,13.14,14.41,47.90],
];
categories = ['北京市', '天津市', '石家庄市', '沧州市','赤峰市','广州市','佛山市','中山市','江门市','琼海市'];
dims = ['B1_rate', 'B2_rate', 'XGB_rate']

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
            interval: 0,
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
        name: 'RMSE占比',
    }, ],
    series: [{
        name: dims[0],
        type: 'bar',
        barCategoryGap: bar_category_gap,
        data: data[0],
        itemStyle: {
            normal: {
                color: colors[0],
                label: {show:true,position:'top'}
            }
        },
    }, {
        name: dims[1],
        type: 'bar',
        barCategoryGap: bar_category_gap,
        data: data[1],
        itemStyle: {
            normal: {
                color: colors[1],
                label: {show:true,position:'top'}
            }
        },
    }, {
        name: dims[2],
        type: 'bar',
        barCategoryGap: bar_category_gap,
        data: data[2],
        itemStyle: {
            normal: {
                color: colors[2],
                label: {show:true,position:'top'}
            }
        },
    }]
};

bar_2_option = option;