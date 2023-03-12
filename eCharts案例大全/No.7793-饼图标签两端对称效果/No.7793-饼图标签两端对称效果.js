var data = [{
        value: 33310.12,
        name: '邮件营销'
    },
    {
        value: 234.88,
        name: '联盟广告'
    },
    {
        value: 13544444.44,
        name: '视频广告'
    },
    {
        value: 1.00,
        name: '搜索引擎'
    },
    {
        value: 310.12,
        name: '测试文案1'
    },
    {
        value: 234.33,
        name: '测试文案2'
    },
    {
        value: 135.55,
        name: '测试文案3'
    },
    {
        value: 1548,
        name: '测试文案文字超多'
    }
];
var color = ['#000000', '#dedede', '#343434', '#dfdfdf', ];
option = {
    title: {
        text: '饼图标签两端对称效果',
        subtext: '关键词: [饼图][环形图][引导线距离饼距离][label两端对称][label距离引导线距离]',
        x: 'center'
    },
    series: [
        // 这个pie用于形成引导线和饼图间距
        {
            type: 'pie',
            radius: ['40%', '55%'],
            minAngle: 90,
            label: {
                normal: {
                    show: false,
                }
            },
            data: data,
        },
        {
            name: '访问来源',
            type: 'pie',
            minAngle: 90, // label最小扇区大小
            label: {
                normal: {
                    alignTo: 'edge', // label两端对称布局
                    //  ECharts v4.6.0 版本起，提供了 'labelLine' 与 'edge' 两种新的布局方式
                    margin: 90, // 布局为两端对称时候需要外边距防止图表变形 数值随意不要太大
                    distanceToLabelLine: 0, // label距离引导线距离
                    formatter: function(param) {
                        return '{a|' + param.name + '}\n{hr|}\n' + '{d|' + param.value + '}';
                    },
                    rich: {
                        a: {
                            padding: [4, 10, 0, 10],  // 4边距是文字和hr间距，此处的边距10用于解决label和引导线有间距问题
                            color: 'blue'
                        },
                        d: {
                            padding: [0, 10, 4, 10],
                            color: 'purple'
                        },
                        hr: {
                            borderWidth: 1,
                            width: '100%',
                            height: 0,
                            borderColor: ' '
                        }
                    }
                },

            },
            labelLine: {
                lineStyle: {
                    color: 'blue'
                }
            },
            itemStyle: {
                opacity: 0
            },
            radius: ['40%', '60%'],
            data: data,
        }
    ]
};
// 备注： 
//1.容器过小会导致hr线穿透饼图
//2. label扇区鼠标悬浮未突出显示，因为它的扇区被隐藏了,去除itemStyle内属性即可
//3.尚未找到去除10并保留4边距方案