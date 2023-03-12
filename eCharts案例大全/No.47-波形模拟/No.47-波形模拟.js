// 本质是两个柱体叠加后隐藏重叠部分形成，参考echarts实例：阶梯瀑布图（柱状图模拟）
// https://echarts.apache.org/examples/zh/editor.html?c=bar-waterfall2

let one = [],
    two = [];
let datas = {
    xData: [],
    arrStar: [],
    arrRise: [],
    tooltip: [],
    colorSet: [],
};
for (let i = 0; i < 500; i++) {
    one.push(Number((Math.random() * 100).toFixed(2)));
    two.push(Number((Math.random() * 100).toFixed(2)));
}

sets(one, two);

function sets(one, two) {
    let a = JSON.parse(JSON.stringify(one)),
        b = JSON.parse(JSON.stringify(two));
    for (let index = 0; index < a.length; index++) {
        datas.xData.push(index);
        if (Math.abs(Number(two[index])) < Math.abs(Number(one[index]))) {
            b[index] = one[index];
            a[index] = two[index];
        }

        if (datas.arrStar.length > a.length * 2 && datas.arrRise.length > a.length * 2) {
            datas.arrStar.shift();
            datas.arrRise.shift();
            datas.xData.shift();
            datas.tooltip.shift();
            datas.colorSet.shift();
            datas.xData.push(Number(datas.xData[datas.xData.length - 1]) + 1);
        }
        datas.tooltip.push([a[index], b[index]]);

        if (a[index] <= 0 && b[index] > 0) {
            datas.arrRise.push(Number(b[index]));
            datas.colorSet.push('#5470c6');
            datas.arrStar.push(Number(a[index]));
            continue;
        }

        if (a[index] > 0 && b[index] <= 0) {
            datas.arrRise.push(Number(b[index]));
            datas.colorSet.push('#5470c6');
            datas.arrStar.push(Number(a[index]));
            continue;
        }

        if (a[index] > 0 && b[index] > 0) {
            if (a[index] < b[index]) datas.arrRise.push(Number(b[index] - a[index]));
            else datas.arrRise.push(Number(a[index] - b[index]));
            datas.colorSet.push('transparent');
            datas.arrStar.push(Number(a[index]));
            continue;
        }

        if (a[index] <= 0 && b[index] <= 0) {
            if (a[index] < b[index]) datas.arrRise.push(Number(b[index] - a[index]));
            else datas.arrRise.push(Number(a[index] - b[index]));
            datas.colorSet.push('transparent');
            datas.arrStar.push(Number(a[index]));
            continue;
        }
    }
}

option = {
    animation: false,
    title: {
        text: 'Accumulated Waterfall Chart',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: function (params) {
            let tar;
            if (params[1].value !== '-') {
                tar = params[1];
            } else {
                tar = params[0];
            }
            return (
                tar.name +
                '<br/>' +
                tar.seriesName +
                ' : ' +
                tar.value.toFixed(2) +
                '<br/>' +
                datas.tooltip[tar.dataIndex][0] +
                ' ~ ' +
                datas.tooltip[tar.dataIndex][1]
            );
        },
    },
    legend: {
        data: ['Income'],
        animation: false,
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        triggerEvent: true, // 鼠标经过轴文字时事件生效
        axisTick: {
            show: true,
            alignWithLabel: true,
            interval: 'auto',
        },
        // splitNumber: 8,
        axisLabel: {
            interval: 'auto',
            // showMaxLabel: true, //强制显示最后一个数据的刻度，为true时动态添加数据会出现数据显示问题
        },
        axisLine: {
            onZero: false,
        },
        splitLine: {
            show: false,
        },
        data: datas.xData,
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: true,
        },
        axisLine: {
            onZero: false,
        },
        // data: [-2, -1, 0, 1, 2],
        axisTick: {
            show: true,
            alignWithLabel: true,
        },
    },
    dataZoom: [
        {
            show: true,
            type: 'inside',
            filterMode: 'none',
            xAxisIndex: [0],
            start: 0,
            end: 100,
        },
    ],
    series: [
        {
            name: 'Placeholder',
            type: 'bar',
            stack: 'Total',
            itemStyle: {
                borderColor: 'transparent',
                color: function (params) {
                    return datas.colorSet[params.dataIndex];
                },
            },
            data: datas.arrStar,
        },
        {
            name: '波动',
            type: 'bar',
            stack: 'Total',
            data: datas.arrRise,
            itemStyle: {
                borderColor: 'transparent',
                color: '#5470c6',
            },
        },
    ],
};
