//自定义echarts脚本，为环形饼图端头添加roundCap（弧形）效果
//https://github.com/a413107719/echarts-pie-roundcap
var color = ['#2AD9BE', '#F8B553', '#57C9FF'];
var echartData =[
    {name:'听说词汇总量',value:3500,know:2500},
    {name:'读写词汇总量',value:1500,know:1000},
    {name:'总词汇量',value:5000,know:3500}
    ];
var rich = {
    hr: {
        borderColor: '#a2c7f3',
        width: '100%',
        borderWidth: 1,
        height: 0,
    }
};
option = {
    backgroundColor: "#03141c",
    series: [{
            name: '',
            type: 'pie',
            radius: ['50%', '70%'],
            color: ['#2AD9BE', '#F8B553', '#57C9FF'],
            avoidLabelOverlap: false,
            label: {
                show: true,
                position: 'outside',
                formatter:'已掌握{c}个\n{b}：{c}个'
            },
            labelLine: {
                length: 50 + 'px',
                length2: 50,
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: true
            },
            data: [{
                    value: 2500,
                    name: '听说词汇总量',
                },
                {
                    value: 1000,
                    name: '读写词汇总量'
                },
                {
                    value: 1500,
                    name: '总词汇量',
                    itemStyle: {
                        color: "transparent"
                    }
                }
            ],
            //  roundCap: 1 //可选项为1和2，不填则采用原有拼接方式
        },
        {
            name: '',
            type: 'pie',
            radius: ['55%', '65%'],
            color: ['#2AD9BE', '#F8B553', '#57C9FF'],
            label: {
                show: true,
                position: 'outside',
                formatter:'{b}：5000个'
            },
            labelLine: {
                length: 50 + 'px',
                length2: 50,
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: true
            },
            data: [{
                    value: 3500,
                    name: '读写词汇总量',
                    itemStyle: {
                        color: "transparent"
                    }
                },
                {
                    value: 1500,
                    name: '总词汇量',
                }
            ],
            // roundCap: 2 //可选项为1和2，不填则采用原有拼接方式
        }
    ]
};