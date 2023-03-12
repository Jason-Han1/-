// 数据处理
// var data = [
//     {
//         name: '苹果',
//         value: 0,
//     },
//     {
//         name: '梨子',
//         value: 0,
//     },
//     {
//         name: '菠萝',
//         value: 0,
//     },
// ];
var data = [
    {
        name: '苹果',
        value: 30,
    },
    {
        name: '梨子',
        value: 33,
    },
    {
        name: '菠萝',
        value: 37,
    },
];

let apple, pear, pineapple;
if (data.every((i) => i.value === 0)) {
    apple = 0;
    pear = 0;
    pineapple = 0;
} else {
    // 柱状图叠加效果
    // 防止后端返回的数据超过100%，页面显示异常
    apple = 100 - data[1].value - data[2].value;

    pear = Number(apple) + data[1].value;

    pineapple = Number(apple) + data[1].value + data[2].value;
}


option = {
    title: {
        show: true,
        text: '柱状图叠加效果百分比',
        left: 'center',
        top: '40%',
        textStyle: {
            color: '#00D5FF',
            fontSize: 16,
        },
        // padding:  [80, 0, 0, 0]
    },
    // 图例组件
    legend: {
        bottom: '40%',
        icon: 'circle',
        itemWidth: 11, //修改icon图形大小
        itemHeight: 11, //修改icon图形大小
        itemGap: 65,
        textStyle: {
            // 文本样式
            fontSize: 12,
            color: '#FFFFFF'
            // color: '#606266',
        },
        data: ['苹果', '梨子', '菠萝'], // 图例的数据数组
        formatter: function (name) {
            let str = '';
            for (let i = 0, l = data.length; i < l; i++) {
                if (data[i].name == name) {
                    str = name + ' ' + data[i].value;
                }
            }
            return str;
        },
        selectedMode: false, //控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择
    },
    tooltip: {
        show: false,
    },
    // X轴
    xAxis: {
        //  boundaryGap: [0, 0],
        type: 'value', // 坐标轴类型,   'value' 数值轴，适用于连续数据
        // 坐标轴刻度
        axisTick: {
            show: false, // 是否显示坐标轴刻度 默认显示
        },
        // 坐标轴轴线
        axisLine: {
            // 是否显示坐标轴轴线 默认显示
            show: false, // 是否显示坐标轴轴线 默认显示
        },
        // 坐标轴在图表区域中的分隔线
        splitLine: {
            show: false, // 是否显示分隔线。默认数值轴显示
        },
        // 坐标轴刻度标签
        axisLabel: {
            show: false, // 是否显示刻度标签 默认显示
        },
    },
    yAxis: [
        // 左侧Y轴
        {
            // 坐标轴类型,  'category' 类目轴，适用于离散的类目数据
            // 为该类型时必须通过 data 设置类目数据
            type: 'category',
            // 坐标轴刻度
            axisTick: {
                show: false, // 是否显示坐标轴刻度 默认显示
            },
            // 坐标轴轴线
            axisLine: {
                // 是否显示坐标轴轴线 默认显示
                show: false, // 是否显示坐标轴轴线 默认显示
                lineStyle: {
                    // 坐标轴线线的颜色
                    color: '#cdd3ee',
                },
            },
            // 坐标轴在图表区域中的分隔线
            splitLine: {
                show: false, // 是否显示分隔线。默认数值轴显示
            },
            // 坐标轴刻度标签
            axisLabel: {
                show: true, // 是否显示刻度标签 默认显示
                fontSize: 16, // 文字的字体大小
                color: '#cdd3ee', // 刻度标签文字的颜色
                // 使用字符串模板，模板变量为刻度默认标签 {value}
                formatter: '{value}',
            },
            // 类目数据，在类目轴（type: 'category'）中有效
            data: [''],
        },
    ],
    series: [
        {
            type: 'bar', // 系列类型
            name: '苹果', // 系列名称, 用于tooltip的显示, legend 的图例筛选
            // 数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加
            zlevel: 3,
            // stack: '总量',
            barMaxWidth: 10, // 柱条的最大宽度，不设时自适应
            // 图形上的文本标签
            label: {
                show: false,
                position: 'inside',
            },
            // 图形样式
            itemStyle: {
                barBorderRadius: [5, 5, 5, 5], // 圆角半径, 单位px, 支持传入数组分别指定 4 个圆角半径
                color: '#FFCE00',
            },
            data: [apple], // 系列中的数据内容数组
        },
        {
            type: 'bar', // 系列类型
            name: '梨子', // 系列名称, 用于tooltip的显示, legend 的图例筛选
            zlevel: 2,
            // stack: '总量',
            barMaxWidth: 10, // 柱条的最大宽度，不设时自适应
            // 图形上的文本标签
            label: {
                show: false,
                position: 'inside',
            },
            data: [pear], // 系列中的数据内容数组
            // 图形样式
            itemStyle: {
                barBorderRadius: 5, // 圆角半径, 单位px, 支持传入数组分别指定 4 个圆角半径
                color: '#00D5FF',
            },
        },
        {
            type: 'bar', // 系列类型
            name: '菠萝', // 系列名称, 用于tooltip的显示, legend 的图例筛选
            zlevel: 1,
            // stack: '总量',
            barMaxWidth: 10, // 柱条的最大宽度，不设时自适应
            label: {
                show: false,
            },
            barGap: '-100%',
            // 图形样式
            itemStyle: {
                color: '#FF5959',
                barBorderRadius: 5, // 圆角半径, 单位px, 支持传入数组分别指定 4 个圆角半径
            },
            data: [pineapple], // 系列中的数据内容数组
        },
        {
            type: 'bar',
            name: '背景', // 背景
            zlevel: 0,
            barMaxWidth: 10,
            barGap: '-100%',
            // 图形样式
            itemStyle: {
                color: '#2a446a',
                barBorderRadius: 5, // 圆角半径, 单位px, 支持传入数组分别指定 4 个圆角半径
            },
            label: {
                show: false,
            },
            data: [100],
        },
    ],
};
