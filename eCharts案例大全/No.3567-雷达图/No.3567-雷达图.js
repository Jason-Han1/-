const man = [0, 3, 8, 12, 0];
const woman = [0, 0, 2, 0, 0];

const total = [];
woman.forEach((item, index) => {
    let max = item > man[index] ? index : man[index];
    max = max > 0 ? max * 1.5 : 10;
    total.push(max);
});
const indicator = [
    { name: '养老保险', max: total[0] },
    { name: '失业保险', max: total[1] },
    { name: '医疗保险', max: total[2] },
    { name: '工伤保险', max: total[3] },
    { name: '生育保险', max: total[4] },
    { name: '住房公积金', max: total[4] },
];
option = {
    backgroundColor: '#045685',
    color: ['#2ECBFF', '#FF7F00'],
    legend: {
        icon: 'circle',
        // left: '47%',
        top: '95%',
        show: true,
        padding: [3, 5],
        // right: '50',
        y: '1',
        center: 0,
        itemWidth: 10,
        itemHeight: 20,
        itemGap: 26,
        z: 3,
        itemGap: 21,
        // orient: 'horizontal',
        data: ['男', '女'],
        textStyle: {
            fontSize: 14,
            color: '#F1F7FF',
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: function (param) {
            let html =
                '<div style="padding: 10px;border-right: 3px;background: rgba(127,122,122,0.4);"><div style="font-size: 14px;color: #FFF;">' +
                param.seriesName +
                '(' +
                param.name +
                ') </div>';
            indicator.forEach((item, index) => {
                html +=
                    '<div style="padding: 4px 0;font-size: 13px;color: #cee0f3;">' +
                    item.name +
                    '：' +
                    param.value[index] +
                    '人</div>';
            });
            html += '</div>';
            return html;
        },
    },
    radar: {
        name: {
            textStyle: {
                color: '#F1F7FF',
                fontSize: 15,
                fontFamily: 'Source Han Sans CN',
                fontWeight: 400,
            },
        },
        nameGap: 3, // 图中工艺等字距离图的距离
        indicator: indicator,
        splitArea: {
            show: true,
            areaStyle: {
                color: ['#001D44', '#001D44'], // 画布颜色
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                width: 1,
                color: ['#1781BA', '#1781BA'],
                // 图表背景网格线的颜色
            },
        },
    },
    series: [
        {
            name: '人员年龄',
            type: 'radar',
            areaStyle: {},
            data: [
                {
                    value: man,
                    name: '男',
                    label: {
                        show: true,
                        formatter: function (params) {
                            return params.value;
                        },
                    },
                },
                {
                    value: woman,
                    name: '女',
                    label: {
                        show: true,
                        formatter: function (params) {
                            return params.value;
                        },
                    },
                },
            ],
        },
    ],
};
