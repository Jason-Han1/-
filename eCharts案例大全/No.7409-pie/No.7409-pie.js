//自定义echarts脚本，为环形饼图端头添加roundCap（弧形）效果
//https://github.com/a413107719/echarts-pie-roundcap
option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },

    color: ["#FF6600", "#FFCC00", "#CCFF99", "#99CCFF", "#66CCCC"],
    series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '60%'],
            avoidLabelOverlap: false,
            silent: false,
            label: {
                show: false,
                position: 'center'
            },
            clockwise: false,
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
               {
                    value: 35,
                    name: '直接访问'
                }, {
                    value: 65,
                    name: '透明区',
                    selected: false,
                    itemStyle: {
                        color: 'rgba(255,255,255,0)'
                    }
                },
                

            ],
            z:9,
            roundCap: 1 //可选项为1和2，不填则采用原有拼接方式
        },
        {
            name: '背景',
            type: 'pie',
            radius: ['50%', '60%'],
            avoidLabelOverlap: false,
            silent: false,
            label: {
                show: false,
                position: 'center'
            },
            clockwise: false,
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
              {
                    value: 65,
                    name: '透明区',
                    selected: false,
                    itemStyle: {
                        color: 'rgba(255,255,255,0.4)'
                    }
                },
                

            ],
            roundCap: 1 //可选项为1和2，不填则采用原有拼接方式
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['30%', '40%'],
            avoidLabelOverlap: false,
             clockwise: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [{
                    value: 65,
                    name: '透明区',
                    selected: false,
                    itemStyle: {
                        color: 'rgba(255,255,255,0)'
                    }
                },
                {
                    value: 180,
                    name: '邮件营销'
                }
            ],
            z: 9,
            roundCap: 1 //可选项为1和2，不填则采用原有拼接方式
        },
        {
            name: '背景',
            type: 'pie',
            radius: ['30%', '40%'],
            avoidLabelOverlap: false,
            silent: false,
            label: {
                show: false,
                position: 'center'
            },
            clockwise: false,
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
              {
                    value: 65,
                    name: '透明区',
                    selected: false,
                    itemStyle: {
                        color: 'rgba(255,255,255,0.4)'
                    }
                },
                

            ],
            roundCap: 1 //可选项为1和2，不填则采用原有拼接方式
        },
    ]
};