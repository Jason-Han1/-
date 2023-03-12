option = {
    backgroundColor: '#141845',
    title: {
        text: '税务人员情况',
        textStyle:{
            color:'#fff', 
        },
        x:'center',
        y:'20'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    title: [{
            text: '税务人员情况',
            textStyle: {
                color: '#fff',
                fontSize:'20'
            },
            x:'center',
            y:'50'
        },
        {
            text: '性别比例',
            top: '20%',
            left: '11%',
            textStyle: {
                color: '#fff',
            },
        },
        {
            text: '学历分布',
            top: '20%',
            left: '46%',
            textStyle: {
                color: '#fff',
            },
        },
        {
            text: '年龄分布',
            top: '20%',
            left: '85%',
            textStyle: {
                color: '#fff',
            },
        }
    ],
    legend: [],
    grid: {
        left: '70%',
        top: 'center',
        right: '1%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
    },
    yAxis: {
        type: 'category',
        data: ['70后', '80后', '90后', '00后'],
        axisLine: {
            lineStyle: {
                color: "#fff"
            }
        },
    },
    series: [{
            name: '人数',
            type: 'bar',
            data: [190, 520, 290, 20]
        },
        {
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            type: 'pie',
            center: ['15%', '50%'],
            radius: ['20%', '39%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{b},{d}%'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 189,
                    name: '男'
                },
                {
                    value: 48,
                    name: '女'
                }
            ]
        },
        {
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['20%', '39%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{b},{d}%'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 124,
                    name: '本科'
                },

                {
                    value: 41,
                    name: '硕士'
                },
                {
                    value: 21,
                    name: '博士'
                },
                {
                    value: 20,
                    name: '其他'
                }
            ]
        }



    ]
};