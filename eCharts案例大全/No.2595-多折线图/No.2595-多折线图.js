this.XData = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
var charts = {
    unit: '单位(km)',
    names: ['碧海金沙', '渔人码头', '东海观音寺', '滨海古园', '海湾园'],
    lineX: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    value: [
        [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
        [2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3],
        [3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4],
        [4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5],
        [5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6],
    ],
};
var color = ['#0077FF', '#02CDAC', '#FF0096', '#FFDB00', '#FF8600'];
var lineY = [];

for (var i = 0; i < charts.names.length; i++) {
    var x = i;
    if (x > color.length - 1) {
        x = color.length - 1;
    }
    var data = {
        name: charts.names[i],
        type: 'line',
        // color: color[x],
        symbolSize: 8,
        itemStyle: {
            normal: {
                color: color[x],
                lineStyle: {
                    width: 2,
                },
            },
        },

        data: charts.value[i],
    };
    lineY.push(data);
}
var option = {
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        icon: `path://M881.387 297.813c38.08 65.387 57.28 136.747 57.28 214.187s-19.094 148.8-57.28 214.187c-38.187 65.28-89.92 117.12-155.2 155.2S589.44 938.667 512 938.667s-148.8-19.094-214.187-57.28c-65.28-38.08-117.013-89.814-155.306-155.307C104.427 660.8 85.333 589.44 85.333 512c0-77.333 19.094-148.693 57.28-214.187 38.08-65.28 89.814-117.013 155.307-155.306C363.2 104.533 434.56 85.333 512 85.333c77.333 0 148.693 19.094 214.187 57.28 65.28 38.187 117.013 89.92 155.2 155.2z m-217.707-47.36C617.387 223.467 566.827 209.92 512 209.92s-105.387 13.547-151.68 40.533-82.987 63.68-109.973 109.974c-26.987 46.293-40.534 96.853-40.534 151.68s13.547 105.386 40.534 151.68c26.986 46.293 63.68 82.986 109.973 109.973 46.293 26.987 96.853 40.533 151.68 40.533s105.387-13.546 151.68-40.533c46.293-26.987 82.987-63.68 109.973-109.973 26.987-46.294 40.534-96.854 40.534-151.68s-13.547-105.387-40.534-151.68c-27.093-46.294-63.786-82.987-109.973-109.974z`,
        itemWidth:10,
        itemHeight:10,
        x:"center",
        itemStyle: {
            normal: {
                color: '#000',
                borderColor: color,
                borderWidth: 1,
            },
        },
        top: '4%',
        data: charts.names,
        textStyle: {
            fontSize: 16,
            color: '#262626',
        },
        right: '4%',
    },
    grid: {
        top: '10%',
        bottom: '10%',
    },
    xAxis: {
        type: 'category',
        boundaryGap: true, //坐标轴两边留白
        data: this.XData,
        axisLabel: {
            //坐标轴刻度标签的相关设置。
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            //	margin:15,
            textStyle: {
                color: 'rgba(38, 38, 38, 0.5)',
                fontStyle: 'normal',
                fontSize: 16,
            },
        },
        axisTick: {
            //坐标轴刻度相关设置。
            show: false,
        },
        axisLine: {
            //坐标轴轴线相关设置
            lineStyle: {
                color: '#E8E8E8',
            },
        },
        splitLine: {
            //坐标轴在 grid 区域中的分隔线。
            show: true,
            lineStyle: {
                color: '#E8E8E8',
            },
        },
    },
    yAxis: [
        {
            type: 'value',
            splitNumber: 5,
            axisLabel: {
                textStyle: {
                    color: 'rgba(38, 38, 38, 0.5)',
                    fontStyle: 'normal',
                    fontSize: 16,
                },
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#E8E8E8',
                },
            },
        },
    ],
    series: lineY,
    dataZoom: [
        {
            type: 'slider',
            show: false,
            xAxisIndex: [0],
            endValue: 8,
            startValue: 0,
        },
    ],
};
