var rankData = [
    {
        date: 'Flandre',
        category: 'Flandre',
        data: [
            {
                name: '迷失之牙',
                value: 65,
            },
            {
                name: '扭曲树精',
                value: 48,
            },
            {
                name: '未来守护者',
                value: 35,
            },
            {
                name: '猩红收割者',
                value: 34,
            },
            {
                name: '海洋之灾',
                value: 31,
            },
        ],
    },
    {
        date: 'Flandre 上单',
        category: 'Flandre 上单',
        data: [
            {
                name: '迷失之牙',
                value: 65,
            },
            {
                name: '扭曲树精',
                value: 48,
            },
            {
                name: '未来守护者',
                value: 35,
            },
            {
                name: '猩红收割者',
                value: 34,
            },
            {
                name: '海洋之灾',
                value: 31,
            },
        ],
    },
    {
        date: 'Jiejie 打野',
        category: 'Jiejie 打野',
        data: [
            {
                name: '盲僧',
                value: 36,
            },
            {
                name: '德玛西亚皇子',
                value: 23,
            },
            {
                name: '德邦总管',
                value: 20,
            },
            {
                name: '狂战士',
                value: 19,
            },
            {
                name: '兽灵行者',
                value: 17,
            },
        ],
    },
    {
        date: 'Scout 中单',
        category: 'Scout 中单',
        data: [
            {
                name: '沙漠皇帝',
                value: 67,
            },
            {
                name: '符文法师',
                value: 53,
            },
            {
                name: '暗黑元首',
                value: 52,
            },
            {
                name: '诡术妖姬',
                value: 45,
            },
            {
                name: '发条魔灵',
                value: 40,
            },
        ],
    },
    {
        date: 'Viper ADC',
        category: 'Viper ADC',
        data: [
            {
                name: '虚空之女',
                value: 64,
            },
            {
                name: '探险家',
                value: 56,
            },
            {
                name: '残月之肃',
                value: 31,
            },
            {
                name: '圣枪游侠',
                value: 25,
            },
            {
                name: '复仇之矛',
                value: 22,
            },
        ],
    },
    {
        date: 'Meiko 辅助',
        category: 'Meiko 辅助',
        data: [
            {
                name: '牛头酋长',
                value: 112,
            },
            {
                name: '弗雷尔卓德之心',
                value: 109,
            },
            {
                name: '魂锁典狱长',
                value: 91,
            },
            {
                name: '河流之王',
                value: 67,
            },
            {
                name: '洛',
                value: 63,
            },
        ],
    },
];
var title = '成员常用英雄和场次';
var playInterval = 2000; //时间间隔
// 排行颜色
var colorListS1 = [];
var colors = [];
for (var i = 0; i < rankData.length; i++) {
    var colorListF1 = {};
    for (var n = 0; n < rankData[i].data.length; n++) {
        // 每阶段内部循环
        var name = rankData[i].data[n].name; //排行榜上项目的名称
        colorListF1[name] = colors[n]; //排行榜上项目名称和对应的颜色，其中每个排名位置的颜色不变
    }
    colorListS1[i] = colorListF1; //每次排行榜的数据字典放入总体的列表中
}
// 基础设置
var option = {
    baseOption: {
        animationDurationUpdate: playInterval * 1.5, //数据更新动画的时长
        animationEasingUpdate: 'quinticInOut', //数据更新动画的缓动效果
        timeline: {
            //时间轴相关参数
            show: false, //隐藏时间轴
            axisType: 'category', //轴的类型：类别型
            orient: 'vertical', //摆放方式：竖直放置
            autoPlay: true, //自动播放
            loop: false, //表示是否循环播放
            playInterval: playInterval, //表示播放的速度（跳动的间隔），单位毫秒（ms）
            left: null, //timeline组件离容器左侧的距离
            right: 30, //timeline组件离容器右侧的距离
            top: 330, //timeline组件离容器上侧的距离
            bottom: 100, //timeline组件离容器下侧的距离
            height: null,
            label: {
                normal: {
                    show: true, //不显示轴线
                    color: '#ccc', //时间线的颜色
                },
            },
            checkpointStyle: {
                //当前项的图形样式，时间轴上显示
                symbol: 'none', //标记的图形样式
                color: '#bbb', //颜色
                borderColor: '#777', //边框颜色
                show: false, //不显示
                borderWidth: 1, //边框宽度
            },
            controlStyle: {
                //『控制按钮』的样式。『控制按钮』包括：『播放按钮』、『前进按钮』、『后退按钮』。
                showNextBtn: false, //是否显示『前进按钮』
                showPrevBtn: false, //是否显示『后退按钮』
                normal: {
                    color: '#666',
                    show: false,
                    borderColor: '#666',
                },
                emphasis: {
                    //高亮状态相关设置
                    color: '#aaa',
                    borderColor: '#aaa',
                },
            },
            data: rankData.map(function (ele) {
                //对列表中每个元素拿data部分
                return ele.date;
            }),
        },
        title: [
            {
                //标题相关设置
                left: 'center',
                top: '3%',
                textStyle: {
                    fontSize: 25,
                    color: 'rgba(121,121,121, 0.9)',
                },
            },
            {
                left: 'center',
                top: '5%',
            },
        ],
        grid: [
            {
                //网格相关设置
                left: '20%',
                right: '20%',
                top: '12%',
                height: 'auto',
                bottom: '25%',
            },
        ],
        xAxis: [{}],
        yAxis: [{}],
        series: [
            {
                //图表相关设置
                id: 'bar',
                type: 'bar', //条形图
                barWidth: '80',
                tooltip: {
                    show: false,
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                    },
                },
                data: [],
            },
        ],
    },
    options: [],
};
var xMaxInterval = 5;
for (var i = rankData.length - 1; i > 0; i--) {
    //外循环
    var xMax = 20;
    if (rankData[i].data[0].value > 20) {
        // 当此排行中第一个数据是否大于20
        xMax = 'dataMax'; //此时取数据在该轴上的最大值作为最大刻度
    }
    if (rankData[i].data[0].value / xMaxInterval >= 10) {
        xMaxInterval = rankData[i].data[0].value / 5; //减小最大间隔
    }
    option.options.push({
        // 数据压入options，每次循环有一个option
        backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [
            {
                //背景的径向渐变
                offset: 0,
                color: '#f7f8fa',
            },
            {
                offset: 1,
                color: '#cdd0d5',
            },
        ]),
        title: {
            text: title + ' ' + rankData[i].category, //构造标题
            color: '#bfbfbf',
        },
        xAxis: [
            {
                //x轴相关设置
                show: true,
                type: 'value',
                interval: xMaxInterval, //强制设置坐标轴分割间隔
                max: xMax,
                axisTick: {
                    show: false, //不显示坐标轴刻度
                },
                axisLabel: {
                    //坐标轴刻度标签的相关设置
                    show: true,
                    color: 'rgba(121,121,121,0.9)',
                    textStyle: {
                        color: 'rgba(121,121,121,0.9)',
                    },
                },
                axisLine: {
                    //坐标轴线相关设置
                    show: false,
                    lineStyle: {
                        color: 'rgba(121,121,121,0.3)',
                    },
                },
                splitLine: {
                    //坐标轴在 grid 区域中的分隔线
                    show: true,
                    lineStyle: {
                        color: ['rgba(121,121,121,0.3)', 'rgba(121,121,121,0)'],
                    },
                },
            },
        ],
        yAxis: [
            {
                type: 'category',
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(121,121,121,0.3)',
                    },
                },
                axisLabel: {
                    show: false,
                    textStyle: {},
                },
                data: rankData[i].data.map(function (ele) {
                    //拿到每个项目元素的名称
                    return ele.name;
                }),
            },
        ],
        series: [
            {
                id: 'bar', //组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件
                itemStyle: {
                    normal: {
                        color: function (params) {
                            //设置一个颜色数组，最好比序列内的数据点个数要大或者相等
                            //根据当前数据点在当前序列内所处的顺序序号去颜色数组内自动匹配颜色
                            var colorListr = ['#0f4471', '#00adb5', '#ff5722', '#5628b4', '#20BF55', '#f23557'];
                            return colorListr[params.dataIndex];
                        },
                        label: {
                            show: true,
                            fontSize: 18,
                            position: 'top',
                            formatter: '{c}%',
                        },
                        shadowBlur: 20,
                        shadowColor: 'rgba(40, 40, 40, 0.5)',
                    },
                },
                label: {
                    //条形图的标签
                    normal: {
                        position: 'right', //标签显示位置
                        formatter: function (p) {
                            return p.name + ': ' + p.value; //标签显示 元素名称和具体值
                        },
                    },
                },
                data: rankData[i].data
                    .map(function (ele) {
                        return ele.value;
                    })
                    .sort(function (a, b) {
                        return a > b;
                    }),
            },
        ],
    });
}
