var names = ['华南', '华东', '华中', '华北', '华西'];
var values = [300, 200, 150, 120, 100, 50];

// 计算总数
let total = values.reduce((p, v) => {
    return p + v;
}, 0);

var colorList = [
    'rgba(134, 118, 250, 1)',
    'rgba(254, 69, 114, 1)',
    'rgba(255, 182, 106, 1)',
    'rgba(95, 148, 255, 1)',
    'rgba(96, 218, 170, 1) ',
];
var data = [];
for (var i = 0; i < names.length; i++) {
    data.push({
        name: names[i],
        value: values[i],
    });
}
data.reverse();
// 公用调整
var itemStyle = {
    normal: {
        // borderColor: '#0A1934',
        // borderWidth: 5,
        color: function (params) {
            return colorList[params.dataIndex];
        },
    },
};
var leftCenter = ['45%', '50%'];
var radius1 = ['30%', '35%']; // 饼图
var radius3 = ['40%', '41%']; // 线圈
// 公用调整-end

option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'item',
    },

    legend: {
        icon: 'circle',
        orient: 'vertical',
        top: 'center',
        right: '11%',
        itemGap: 25,
        itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
        itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
        textStyle: {
            color: '#000',
            fontSize: 12,
        },
        data: names,
    },
    title: {
        text: '发单方地域分布状况',
        x: '0%',
        y: '0%',
        textStyle: {
            color: '#001454',
            fontSize: '16',
        },
    },
    series: [
        // 左饼图
        {
            // 饼图圈
            type: 'pie',
            zlevel: 3,
            radius: radius1,
            center: leftCenter,
            // itemStyle: itemStyle,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex];
                    },
                },
            },
            labelLine: {
                show: false,
                normal: {
                    length: 5,
                    length2: 0,
                    lineStyle: {
                        color: 'transparent',
                    },
                },
            },
            label: {
                normal: {
                    formatter: (params) => {
                        return '●';
                    },
                },
            },
            data: data,
        },
        {
            // 最外圆圈
            type: 'pie',
            zlevel: 1,
            silent: true, //取消高亮
            radius: radius3,
            center: leftCenter,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex];
                    },
                },
            },
            labelLine: {
                show: false,
                normal: {
                    length: 10,
                    length2: 0,
                    lineStyle: {
                        color: 'transparent',
                    },
                },
            },
            label: {
                show: true,
                fontSize: 16,
                formatter: (params) => {
                    let percent = (params.data.value / total) * 100;
                    return `${percent.toFixed(1)}%`;
                },
            },
            data: data,
        },
    ],
};
