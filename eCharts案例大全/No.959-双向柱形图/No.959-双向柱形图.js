var xData = ['创新指数数值', '比上年进步', '创新指数位次', '指数进步位次', '常住人口'];
var data1 = [120, 200, 150, 90, 70];
var data2 = [300, 150, 100, 40, 50];
var legend = ['2017', '2018'];
let maxData = null;
function getMaxData() {
    //合并
    let tempList = [...data1, ...data2];
    //取绝对值
    tempList.forEach((elem, index) => {
        if (elem < 0) {
            tempList[index] = -elem;
        }
    });
    //排序找出最大
    tempList.sort(function (a, b) {
        return b - a;
    });
    return tempList[0];
}
maxData = getMaxData();
option = {
    legend: {
        data: ['2017', '2018']
    },
    grid: [
        {
            show: false,
            left: '3%',
            top: '10%',
            bottom: '8%',
            containLabel: true,
            width: '40%',
        },
        {
            show: false,
            left: '50%',
            top: '10%',
            bottom: '8%',
            width: '20%',
        },
        {
            show: false,
            right: '3%',
            top: '10%',
            bottom: '8%',
            containLabel: true,
            width: '40%',
        },
    ],
    xAxis: [
        {
            gridIndex: 0,
            type: 'value',
           inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            max: maxData,
        },
        {
            gridIndex: 1,
            show: true,
        },
        {
            gridIndex: 2,
            type: 'value',
            inverse: false,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            max: maxData,
        },
    ],
    yAxis: [
        {
            type: 'category',
            gridIndex: 0,
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
        },
        {
            gridIndex: 1,
            type: 'category',
            show: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                margin: -1, //margin 配合 align 调整位置
                align: 'center',

                textStyle: {
                    color: '#000',

                    align: 'center',
                },
            },
            data: xData,
        },
        {
            type: 'category',
            gridIndex: 2,
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
        },
    ],
    series: [
        {
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: data1,
            type: 'bar',
            barWidth: '20',
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)',
            },
            label: {
                show: true,
                position: 'left',
            },
        },
        {
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
                normal: {},
            },
            barWidth: '20',
            // data: [120, 200, 150, 80, 70]
        },
        {
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: data2,
            type: 'bar',
            barWidth: '20',
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)',
            },
            label: {
                show: true,
                position: 'right',
            },
        },
    ],
};
