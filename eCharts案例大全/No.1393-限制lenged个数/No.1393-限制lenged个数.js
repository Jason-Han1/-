/* 本图主要效果：折线图最多显示三条，柱状图随便显示与否 */

/* 移除数组中某个元素 */
Array.prototype.remove = function (val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};
var obj = {};
var text_data = [
    'http://www.baidu.com',
    'https://www.sogou.com',
    'http://www.333.com',
    'http://www.444.com',
    'http://www.555.com',
    'http://www.666.com',
    'http://www.777.com',
    'http://www.888.com',
    'http://www.999.com',
    '外部链接总计',
];
for (var i = 0; i < text_data.length; i++) {
    if (i > 2 && i < text_data.length - 1) {
        obj[text_data[i]] = false;
    } else {
        obj[text_data[i]] = true;
    }
}
obj[text_data[text_data.length - 1]] = true;
myChart ? myChart.clear() : '';
myChart.setOption({
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255,255,255,0.8)',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            shadowStyle: {
                color: 'rgba(150,150,150,0.2)',
            },
        },
        textStyle: {
            color: '#666',
            fontSize: '14px',
        },
        extraCssText: 'width:220px;height:200px;padding:0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);"',
        formatter: function (params) {
            var htmlStr = '';
            for (var i = 0; i < params.length; i++) {
                var tem = params[i].name;
                var val = params[i].value;
                if (tem.indexOf('/') < 0) {
                    tem > 9 ? (tem = tem + ':00 - ' + tem + ':59') : (tem = '0' + tem + ':00 - ' + '0' + tem + ':59');
                }
                val > 0 ? (val = val) : (val = '--');
                htmlStr +=
                    '<div style="height:26px;line-height:26px;overflow:hidden;padding:6px 8px;">' +
                    '<span style="float:left;max-width:160px;overflow:hidden;text-overflow: ellipsis;white-space: nowrap;">' +
                    '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' +
                    params[i].color +
                    ';"></span>' +
                    params[i].seriesName +
                    '</span>' +
                    '<span style="float:right">' +
                    val +
                    '</span>' +
                    '</div>';
            }
            var res =
                '<div><div style="height:40px;line-height:40px;padding:0 8px;background:rgba(237,233,233,0.4)">' +
                tem +
                '<span style="float:right;">' +
                $('.table-echarts ul.group li.cur').text() +
                '</span>' +
                htmlStr +
                '</div></div>';
            return res;
        },
    },
    textStyle: {
        color: 'rgb(120, 122, 125)',
    },
    color: [
        '#4fa8f9',
        '#6ec71e',
        '#f56e6a',
        '#fc8b40',
        '#818af8',
        '#31c9d7',
        '#f35e7a',
        '#ab7aee',
        '#14d68b',
        '#cde5ff',
    ],
    grid: {
        top: 30, //越大越靠下，默认60
        bottom: 70,
    },
    legend: {
        bottom: 1,
        itemGap: 15,
        itemWidth: 9,
        itemHeight: 10,
        textStyle: {
            padding: [0, 0, 0, 8],
        },
        formatter: function (name) {
            return name.length > 14 ? name.slice(0, 14) + '...' : name;
        },
        selected: obj,
        data: text_data,
    },
    xAxis: [
        {
            type: 'category',
            // boundaryGap: false,//坐标轴两边留白策略
            axisTick: {
                alignWithLabel: true,
            },
            axisLabel: {
                interval: 2,
            },
            axisLine: {
                lineStyle: {
                    color: '#ddd',
                },
            },
            data: [
                '0',
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20',
                '21',
                '22',
                '23',
            ],
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: 'transparent',
                },
            },
            splitLine: {
                lineStyle: {
                    color: '#eee',
                },
            },
        },
    ],
    series: [
        {
            name: 'http://www.baidu.com',
            type: 'line',
            symbol: 'circle',
            symbolSize: '5',
            data: [8, 1, 1, 0, 0, 3, 2, 0, 6, 3, 1, 4, 7, 3, 7, 15, 11, 3, 8, 3, 2, 5, 4, 7],
        },
        {
            name: 'https://www.sogou.com',
            type: 'line',
            symbol: 'circle',
            symbolSize: '5',
            data: [1, 1, 0, 0, 2, 1, 0, 1, 3, 1, 0, 0, 1, 0, 1, 1, 1, 0, 2, 2, 0, 4, 2, 4],
        },
        {
            name: 'http://www.333.com',
            type: 'line',
            symbol: 'circle',
            symbolSize: '5',
            data: [1, 3, 0, 0, 0, 1, 1, 0, 0, 1, 2, 1, 3, 1, 1, 1, 1, 0, 2, 0, 2, 1, 1, 1],
        },
        {
            name: 'http://www.444.com',
            type: 'line',
            symbol: 'circle',
            symbolSize: '5',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 2, 3, 0, 0, 0, 3, 1, 0, 2, 0, 1, 0, 0],
        },
        {
            name: 'http://www.555.com',
            type: 'line',
            symbol: 'circle',
            symbolSize: '5',
            data: [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 2, 0, 1, 1, 2, 0],
        },
        {
            name: 'http://www.666.com',
            type: 'line',
            symbol: 'circle',
            symbolSize: '5',
            data: [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0],
        },
        {
            name: 'http://www.777.com',
            type: 'line',
            symbol: 'circle',
            symbolSize: '5',
            data: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1],
        },
        {
            name: 'http://www.888.com',
            type: 'line',
            symbol: 'circle',
            symbolSize: '5',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        },
        {
            name: 'http://www.999.com',
            type: 'line',
            symbol: 'circle',
            symbolSize: '5',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
            name: '外部链接总计',
            type: 'bar',
            barWidth: '60%',
            data: [14, 6, 1, 0, 2, 5, 4, 1, 11, 8, 6, 7, 15, 5, 11, 21, 21, 6, 17, 7, 7, 14, 9, 14],
        },
    ],
});

let lengthSelectedArr = ['http://www.baidu.com', 'https://www.sogou.com', 'http://www.333.com'];
lengthSelectedArr.reverse();
myChart.on('legendselectchanged', function (params) {
    if (['外部链接总计'].includes(params.name)) return false;

    let selected = [];
    console.log(201, params);

    if (params.selected[params.name]) {
        lengthSelectedArr.remove(params.name);
        lengthSelectedArr.unshift(params.name);
        if (lengthSelectedArr.length > 3) {
            lengthSelectedArr.length = 3;
        }
    } else {
        lengthSelectedArr.remove(params.name);
    }
    let legend_option = this.getOption();
    for (let key in params.selected) {
        if (!['外部链接总计'].includes(key)) {
            if (lengthSelectedArr.includes(key)) {
                legend_option.legend[0].selected[key] = true;
            } else {
                legend_option.legend[0].selected[key] = false;
            }
        }
        if (params.selected[key] && !['外部链接总计'].includes(key)) {
            selected.push(key);
        }
    }
    if (selected.length < 1) {
        legend_option.legend[0].selected[params.name] = true;
        lengthSelectedArr.unshift(params.name);
    }
    this.setOption(legend_option);
});
window.onresize = () => (myChart ? myChart.resize() : '');



/* 参考地址
legend限制显示个数，溢出显示省略号，修改默认样式，tooltip动态高度(2019-08-14)
https://www.cnblogs.com/wiliam/p/11351518.html

Echarts控制至少选中一个图例(2020-12-11)
https://blog.csdn.net/DZY_12/article/details/110957084

官网：事件与行为
https://echarts.apache.org/handbook/zh/concepts/event 
*/


