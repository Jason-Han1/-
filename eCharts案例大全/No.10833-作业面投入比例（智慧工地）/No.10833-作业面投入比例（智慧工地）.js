var  colorList=['#FDB62A', '#50E085', '#F9CD80', '#4B9EF0', '#2E73FF', "#F9951A",'#36C57D'];
option = {
    title: {
        text: '作业面投入比例',
        x: 'center',
        y: 'center',
        textStyle: {
            fontSize:19,
            fontWeight:'normal',
            color: ['#2E73FF']
        }
    },
    grid: {
        bottom: 150,
        left: 0,
        right: '10%'
    },
    legend: {
        show:false,
        orient: 'vertical',
        top: "middle",
        right: "5%",
        textStyle: {
            color: '#f2f2f2',
            fontSize: 25,

        },
        icon: 'roundRect'
    },
    series: [
        // 主要展示层的
        {
            radius: ['25%', '51%'],
            center: ['50%', '50%'],
            type: 'pie',
            itemStyle: {
                normal: {
                    color: function(params) {
                        return colorList[params.dataIndex]
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 15,
                    length2: 120,
                    lineStyle: {
                        color: '#d3d3d3'
                    },
                    align: 'right'
                },
                color: "#000",
                emphasis: {
                    show: true
                }
            },
            label: {
                normal: {
                    position: 'inner',
                    formatter: '{b}\n{d}%'
                }
            },
            data: [
                {value:42, name:'岗亭'},
                {value:42, name:'大门'},
                {value:42, name:'1塔机'},
                {value:42, name:'2塔机'},
                {value:42, name:'3塔机'},
                {value:42, name:'4塔机'},
                {value:42, name:'5塔机'},
            ],
        },
        // 边框的设置
        {
            radius: ['25%', '27%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            animation: false,
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color:'rgba(250,250,250,0.5)'
                }
            },
            data: [{
                value: 1,
            }],
        }
    ]
};