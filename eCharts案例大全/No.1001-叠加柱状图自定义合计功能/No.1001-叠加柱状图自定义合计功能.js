option = {
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            let tipStr = params[0].axisValueLabel + '</br>';
            let totalNum = 0;
            for (let i = 0; i < params.length; i++) {
                totalNum += params[i].value;
                if (params[i].seriesName !== '合计') {
                    tipStr += params[i].seriesName + '：' + params[i].value + '</br>';
                }
            }
            for (let i = 0; i < params.length; i++) {
                totalNum += params[i].value;
                if (params[i].seriesName === '合计') {
                    tipStr += '合计：' + totalNum;
                }
            }
            return tipStr;
        },
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    legend: {
        top: 10,
        left: 10,
        icon: 'rect',
        itemWidth: 4, // 图例图表宽度
        itemHeight: 12, // 图例图标高度
        data: ['餐费', '打车费', '零食', '日用品'],
    },
    grid: {
        left: '3%',
        right: '13%',
        bottom: '8%',
        top: '25%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        name: '日期',
        axisLabel: {
            fontSize: 12,
            interval: 0,
            rotate: 40,
            formatter: function (params, index) {
                var date = new Date(params);
                var yy = date.getFullYear();
                var mm = date.getMonth() + 1;
                return yy + '-' + (mm < 10 ? '0' + mm : mm);
            },
        },
        axisLine: {
            lineStyle: {
                // color: '#cbeaf6', // x坐标轴线颜色
            },
        },
        data: ['2022-01-01', '2022-01-02', '2022-01-03', '2022-01-04', '2022-01-05', '2022-01-06'],
    },
    yAxis: [
        {
            type: 'value',
            name: '花费',
            axisLabel: {
                // color: '#cbeaf6', // 坐标轴label文字颜色
            },
            axisLine: {
                lineStyle: {
                    // color: '#cbeaf6', // y坐标轴线颜色
                },
            },
            splitLine: {
                // 网格线
                lineStyle: {
                    // type: 'dashed', // 设置网格线类型 dotted：虚线   solid:实线
                    // color: '#395367',
                },
                show: true, // 隐藏或显示
            },
        },
    ],
    series: [
        {
            name: '餐费',
            type: 'bar',
            barWidth: 13,
            stack: '分类',
            itemStyle: {
                color: '#ffc254',
            },
            data: [40, 35, 40, 30, 35, 50],
        },
        {
            name: '打车费',
            type: 'bar',
            barWidth: 13,
            stack: '分类',
            itemStyle: {
                color: '#b3d465',
            },
            data: [12, 13, 15, 12, 11, 12],
        },
        {
            name: '零食',
            type: 'bar',
            barWidth: 13,
            stack: '分类',
            itemStyle: {
                color: '#00b7ee',
            },
            data: [25, 23, 19, 20, 22, 30],
        },
        {
            name: '日用品',
            type: 'bar',
            barWidth: 13,
            stack: '分类',
            itemStyle: {
                color: '#ec6941',
            },
            data: [12, 13, 12, 50, 10, 16],
        },
        {
            name: '合计',
            type: 'bar',
            stack: '分类',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#ffffff',
                    },
                    formatter: '',
                },
            },
            data: [0, 0, 0, 0, 0, 0],
        },
    ],
};

var series = option.series;
var tooltip = option.tooltip;
// 提示框自定义内容包括总合及文字
function formatFun(params) {
    // console.log('params====>', params)
    let tipStr = params[0].axisValueLabel + '</br>'; // 初始化提示框文字默认当前轴名称并换行
    let totalNum = 0; // 用于存储当前列总数
    // params为当前柱状图数组数量 遍历求和并添加类目label：value
    for (let i = 0; i < params.length; i++) {
        if (params[i].seriesName !== '合计') {
            const dotHtml = `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params[i].color}"></span>`;
            totalNum += params[i].value;
            tipStr += dotHtml + params[i].seriesName + '：' + params[i].value + '</br>';
        }
    }
    // 添加最后的合计行 数据为每列总合
    for (let i = 0; i < params.length; i++) {
        if (params[i].seriesName === '合计') {
            tipStr += '合计：' + totalNum;
        }
    }
    return tipStr;
}
tooltip.formatter = formatFun;
// 指定函数计算总合
function fun(params) {
    var dataSum = 0;
    for (var i = 0; i < series.length; i++) {
        dataSum += series[i].data[params.dataIndex];
    }
    return dataSum;
}
// 加载页面时候替换最后一个series的formatter
series[series.length - 1].label.normal.formatter = fun;
