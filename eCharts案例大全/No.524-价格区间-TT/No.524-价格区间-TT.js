var jigouPrice1 = [[2600, 3500, ],[3000, 4000, ],[3500, 4000,],[3300, 3600,]];
var jigouPrice2 = [[2600, 3500, ],[3000, 4000, ],[3500, 5000,],[3300, 3600,]];
var jigouPrice3 = [[2600, 3500, ],[3000, 4000, ],[3500, 4000,],[3300, 3600,]];
var option = setOption();

function setOption() {
    let option;

    const category = ['1', '2', '3', '4'];
    const name = ['一级', '二级', '三级'];
    const data = [jigouPrice1, jigouPrice2, jigouPrice3];

    let series = [];
    data.forEach((item, i) => {
        series = [...series, ...createSeries(item, name[i], true)];
    });

    let yAxis = {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#fff',
            },
        },
    };

    let xAxis = {
        type: 'category',
        splitLine: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#fff',
            },
        },
        data: category,
    };

    if (false) {
        [xAxis, yAxis] = [yAxis, xAxis];
    }

    option = {
        backgroundColor: '#0e1c47',
        title: {
            text: '价格区间(元)',
            top: '19',
            textStyle: {
                color: '#fff',
                fontSize: '14',
            },
            // subtext: 'From ExcelHome',
            // sublink: 'http://e.weibo.com/1341556070/AjQH99che'
        },
        color: ['#c63c26', '#65AC3A', '#36cfc9'],
        legend: {
            data: name,
            top: '33',
            textStyle: {
                color: '#fff',
            },
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params) {
                var html = '';
                var axisValue = '';
                params.forEach((item) => {
                    axisValue = item.axisValue;
                    const range = item.data.range;
                    html += item.marker + item.name + range[0] + ' - ' + range[1] + '<br/>';
                });
                const {
                    name,
                    data: { range },
                } = params[0];
                return axisValue + '<br/>' + html;
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: xAxis,
        yAxis: yAxis,
        series: series,
    };

    return option;
}

// 轴数据处理
function dataFormat(data, name, isReverse) {
    let min = []; // 区间的最小值
    let max = []; // 区间的最大值
    let minLabel = []; // 显示区间的最小值的 label 数据，在 max 上通过 markpoint 实现，以控制 label 颜色值和显示的柱子颜色值一致，并且显示隐藏有效

    data.forEach((item, i) => {
        min.push(item[0]);

        // 横向：coord: [offsetx，y]，等同于 xAxis: offsetx, yAxis: y。其中，offsetx 表示偏移值，y 表示bar的索引。
        // 竖向：[x, offsety]
        const coord = isReverse ? [item[0], i] : [i, item[0]];
        minLabel.push({
            value: item[0], // 对值进行格式化
            coord: item[0] ? coord : [],
        });

        max.push({
            value: item[1] - item[0], // 差值作为叠加值
            range: item, // tooltip 显示
            name, // legend 显示
            label: {
                formatter: '' + item[1], // 最终值作为显示值
            },
            itemStyle: {
                color: item[2],
            },
        });
    });

    return {
        min,
        max,
        minLabel,
    };
}

// 生成序列数据
function createSeries(arr, name, showLabel, isReverse) {
    let newSeries = [];

    const { min, max, minLabel } = dataFormat(arr, name, isReverse);

    const maxPosition = isReverse ? 'right' : 'top';
    const minPosition = isReverse ? 'left' : 'bottom';

    newSeries = [
        {
            type: 'bar',
            stack: name,
            tooltip: {
                show: false,
            },
            // 透明
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)',
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)',
                },
            },
            label: {
                show: false,
            },
            data: min,
        },
        {
            type: 'bar',
            stack: name,
            name: name,
            tooltip: {
                show: true,
            },
            label: {
                show: showLabel,
                position: maxPosition,
            },
            markPoint: {
                symbol: 'rect',
                // 图形上面的小头隐藏
                symbolSize: 0.000000000000001,
                label: {
                    show: showLabel,
                    position: minPosition,
                },
                data: minLabel,
            },
            data: max,
        },
    ];

    return newSeries;
}
