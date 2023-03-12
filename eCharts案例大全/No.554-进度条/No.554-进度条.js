var qysjbottom = "/asset/get/s/data-1638435346290-V95x4uUG6.png";

var tick = "/asset/get/s/data-1638435304481-PS5i9afqe.png";

let bjlxChartData = { areaName: ['苍南县', '瓯江口', '鹿城区', '龙湾区'], eventCount: [65, 3, 3, 3] };
let max = Math.max(...bjlxChartData.eventCount);
var maxArr = [];
for (var i = 0; i < bjlxChartData.eventCount.length; i++) {
    maxArr.push(max);
}
option = {
    backgroundColor: '#07284d',
    grid: {
        left: '3%',
        top: '5%',
        right: '3%',
        bottom: '0%',
        containLabel: true,
    },
    xAxis: [
        {
            show: false,
        },
    ],
    yAxis: [
        {
            axisTick: 'none',
            axisLine: 'none',
            inverse: true,
            offset: '10',
            axisLabel: {
                inside: true,
                textStyle: {
                    color: 'white',
                    fontSize: 16,
                    verticalAlign: 'bottom',
                    align: 'left',
                    padding: [0, 0, 10, 0],
                },
                formatter: function (value) {
                    console.log(value);
                    return `{warnValue|}{value|${value}}`;
                },

                rich: {
                    //这里的rich，下面有解释
                    warnValue: {
                        //这里的warnValue对应上面的标签名
                        height: 60,
                        width: 80,
                        align: 'left',
                        color: 'white',
                        backgroundColor: {
                            image: tick, //这个warnImg是上面定义的图片var warnImg = "img/warn.png";
                        },
                    },
                    value: {
                        color: 'white',
                        fontSize: 16,
                    },
                },
            },
            data: bjlxChartData.areaName,
        },
        {
            axisTick: 'none',
            axisLine: 'none',
            inverse: true,
            axisLabel: {
                textStyle: {
                    color: 'white',
                    fontSize: 18,
                    // verticalAlign: "bottom",
                    padding: [10, 10, 20, 10],
                    align: 'right',
                },
                formatter: function (value, index) {
                    return `{value|${value}件}\n{img|}`;
                },
                rich: {
                    //这里的rich，下面有解释
                    img: {
                        //这里的warnValue对应上面的标签名
                        height:2,
                        width: 20,
                        align: 'right',
                        color: 'white',
                        backgroundColor: {
                            image: qysjbottom, //这个warnImg是上面定义的图片var warnImg = "img/warn.png";
                        },
                    },
                    value: {
                        align: 'right',
                        color: 'white',
                        marginLeft: 100,
                        fontSize: 16,
                    },
                },
            },
            data: bjlxChartData.eventCount,
        },
        {
            axisLine: {
                lineStyle: {
                    color: 'rgba(0,0,0,0)',
                },
            },
            data: [],
        },
    ],
    series: [
        {
            name: '条',
            type: 'bar',
            stack: '圆',
            yAxisIndex: 0,
            // data: data,
            data: bjlxChartData.eventCount,
            barWidth: 8,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#054B60', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#00FCFF', // 100% 处的颜色
                            },
                        ],
                    },
                    barBorderRadius: 10,
                },
            },
            z: 2,
        },
        {
            name: 'XXX',
            type: 'pictorialBar',
            symbol:
                'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAMAAAApB0NrAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABC1BMVEUA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7SO/86O/86O/86O/86O/86O/86O/86O/86O/86O/86O/86O/86O/86O/86O/86O/86O/86O/86O/85K/8IT/7gM/7YP/7cs/7wB/7QH/7Vl/8cZ/7kA/7QH/7WJ/80C/7Qk/7st/7wM/7aO/84g/7oI/7Y8/78N/7aO/84E/7UA/7Q1/76O/84q/7wB/7QN/7Yp/7wD/7UB/7QR/7ct/7wa/7kg/7pr/8iO/86O/86O/86O/84A/7QAAAAmnbE7AAAAV3RSTlMAAwsQFBcYFhINBgkaDgIHGREFDwEKBAwIFRMHDRETEg8KAgsXGhkQAxUJBRgELnSThkT0riNl/rIb4U5CkhRUpTeIBs77OwFH9opI1PF6Q2NTIQgWDA6QHRcgAAAAAWJLR0RY7bXEjgAAAAd0SU1FB+ULEBQKJQdQcX4AAAITSURBVDjLbVRnY5swEBVmCMxhC2MgdrwdPJK46d5N2roJ3Stt/f//SXUnbFbeF3THk+54pwdjBWgN3TAtk9tOk90N14AcpteqM9ocQPiNptbSOm6AgdMtM7o6AA8LyaYtE1GR0jJAxJVtTQ7iqEDpgdmpVe/6RVIfuKZWx4PhaDyZzlQUgNhvdcBUlPlJorBYrijhA1cdRAJIjtU6ybE4pXIcPOLYEODj7DwpYUCNg8ASHRAo1+okqeBUVQuoMTpmVKUkiw2dYMmOLMDej7MX9y7uP3iYrce4twdtFoFZOObi0U7i8RMV4cd5smsXfLmaqeTTZzvCcxXOcY7Ql+I4h1IvXu4yvKJ4iPdF1gmgIVdTyr3eU3ZvKL5EiUAwHUJUmHJXB85bitfYKUDpnHcHznuKRzhvsGQ/qPZWNfkho1zfULjESQGX32XLVbqg5MdPivM5Vxrfa/IsiaHKfvkqGd++Z0KnNAb53VwKydhmP4EfP3/9zpYT3GzipXBIRDapzet8RhLiGDQBeLfTy+pIt7jVgBgfulQbx7EuU27JczR2qYBFErF0WaD8OSPjWqQwkYXy7na8Z8xTuqqGKqHuv5UZfHb7999gusnMI/2SO1o6Kaz5K+qBVXRqAGBrZQfGomJmFgoQeu7VVmwC+BV3M83HP4oeu2039PAvw49YHZFnHX4/wr6LQeg0Ar/v63G7VOU/Y9Ve2lDCOJ4AAAAASUVORK5CYII=',
            symbolSize: [40, 40],
            symbolPosition: 'end',
            symbolOffset: [20, 0],
            z: 12,
            itemStyle: {
                normal: {
                    color: '#fff',
                },
            },
            data: bjlxChartData.eventCount,
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 8,
            barGap: '-100%',
            data: maxArr,
            itemStyle: {
                normal: {
                    color: 'rgba(28, 128, 213, 0.19)',

                    barBorderRadius: 5,
                },
            },
        },
    ],
};
