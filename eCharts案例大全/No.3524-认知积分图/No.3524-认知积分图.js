
//统计图距离上边和下边有10%所以y从10%~90%变换
var lineData = [
    [
        {
            name: ' 全区认知最高分：9500分',
            x: '70%',
            number: 9500,
            y: 110 - 9500 / 100 + '%', //中间的为当前分数
        },
        {
            x: '60%',
            y: 110 - 9500 / 100 + '%', //中间的为当前分数
            symbolSize: [1, 1],
        },
    ],
    [
        {
            name: ' 全年级认知最高分：8500分',
            x: '70%',
            number: 8500,
            y: 110 - 8500 / 100 + '%', //中间的为当前分数
        },
        {
            x: '60%',
            y: 110 - 8500 / 100 + '%', //中间的为当前分数
            symbolSize: [1, 1],
        },
    ],
    [
        {
            name: ' 全区认知平均分：7500分',
            x: '70%',
            number: 7500,
            y: 110 - 7500 / 100 + '%', //中间的为当前分数
        },
        {
            x: '60%',
            y: 110 - 7500 / 100 + '%', //中间的为当前分数
            symbolSize: [1, 1],
        },
    ],
    [
        {
            name: ' 全年级认知平均分：6500分',
            number: 6500,
            x: '70%',
            y: 110 - 6500 / 100 + '%', //中间的为当前分数
        },
        {
            x: '60%',
            y: 110 - 6500 / 100 + '%', //中间的为当前分数
            symbolSize: [1, 1],
        },
    ],
];
var pointData = [
    {
        name: 10000, //靠左的值
        x: '42%',
        y: '10%',
    },
    {
        name: 8000, //靠左的值
        x: '34%',
        y: '30%',
    },
    {
        name: 6000, //靠左的值
        x: '24.8%',
        y: '50%',
    },
    {
        name: 2000, //靠左的值
        x: '15.6%',
        y: '70%',
    },
    {
        name: 0, //靠左的值
        x: '9%',
        y: '90%',
    },
];
//以下是固定数据，不需要改
const colors = [{
    type: 'linear',
    x: 1,
    y: 0,
    x2: 0,
    y2: 0,
    colorStops: [{
        offset: 0,
        color: '#2dbcff' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#009cff' // 100% 处的颜色
    }],
}, {
    type: 'linear',
    x: 1,
    y: 0,
    x2: 0,
    y2: 0,
    colorStops: [{
        offset: 0,
        color: '#00b99c' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#22d7bb' // 100% 处的颜色
    }],
}, {
    type: 'linear',
    x: 1,
    y: 0,
    x2: 0,
    y2: 0,
    colorStops: [{
        offset: 0,
        color: '#ff9000' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#ffc334' // 100% 处的颜色
    }],
},{
    type: 'linear',
    x: 1,
    y: 0,
    x2: 0,
    y2: 0,
    colorStops: [{
        offset: 0,
        color: '#ff7171' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#fa8d8d' // 100% 处的颜色
    }],
}];
const lineargroup = [
    {
        value: 1,
        name: 'A+',
        itemStyle:{
            height:'10%'
        }
    },
    {
        value:4,
        name: 'B+',
        itemStyle:{
            height:'30%'
        }
    },
    {
        value:4.2,
        name: 'C+',
        itemStyle:{
            height:'2%'
        }
    },
    {
        value: 7.2,
        name: 'D+',
        itemStyle:{
            height:'30%'
        }
    },
    {
        value: 10,
        name: 'E+',
        itemStyle:{
            height:'28%'
        }
    },
];
var option = {
    backgroundColor: '#000',
    color: colors,
    series: [
        {
            top: '10%',
            left: '10%',
            bottom: '10%',
            right: '40%',
            type: 'funnel',
            sort: 'ascending',
            gap: 0,
            orient: 'vertical',
            minSize: 150, //顶部最小值
            funnelAlign: 'right',
            markLine: {
                silent: true,
                lineStyle: {
                    normal: {
                        color: '#fff',
                        type: 'solid',
                    },
                },
                label: {
                    normal: {
                        position: 'start',
                        formatter: function (par) {
                            return par.name;
                        },
                    },
                },
                data: lineData,
            },
            markPoint: {
                silent: true,
                label: {
                    normal: {
                        show: true,
                        formatter: function (pt) {
                            return pt.name;
                        },
                        color: '#bbbbbb',
                        align: 'left',
                        fontSize: 14,
                    },
                },
                symbolSize: [0, 1],
                symbolOffset: [35, 0],
                data: pointData,
            },
            label: {
                show: true,
                position: 'inside',
                fontSize: '14',
                formatter: function (d) {
                    var ins = '{bb|' + d.name + '}';
                    return ins;
                },
                rich: {
                    aa: {
                        padding: [8, 0, 6, 0],
                    },
                    bb: {
                        color: '#000',
                        fontSize: 24,
                        fontWeight: 'bold',
                    },
                },
            },
            itemStyle: {
                borderWidth: 0,
            },
            data: lineargroup,
        },
    ],
};
