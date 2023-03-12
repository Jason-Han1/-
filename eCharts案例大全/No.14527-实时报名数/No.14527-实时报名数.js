var echartdata = [{
    value: 75, //时间
    name: '交卷时间',
    itemStyle: {
        normal: {
            borderColor: "#f81858",
            borderWidth: 10,
        }
    }
}, {
    value: 15,
    name: '未交卷时间',
    itemStyle: {
        normal: {
            borderColor: "#f81858",
            borderWidth: 3,
        }
    }
}]


/*---------------------缩放----------------------------*/
var scale = 1;
/*---------------------富文本----------------------------*/
var rich = {
    percent: {
        color: '#f81858',
        fontSize: 34 * scale,
        padding: [0, 0],
        fontWeight: 'bold'
    },
}


option = {
    backgroundColor: '#031f2d',
    title: [{
        text: '实时报名数',
        left: 'center',
        y: '55%',
        textStyle: {
            color: '#fff',
            fontSize: 16 * scale,
            fontWeight: 'bold'
        },
    }],
    series: [
        //中间圆环
        {
            name: 'Line 1',
            type: 'pie',
            clockWise: false, //顺时加载
            startAngle:260,
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '50%'],
            radius: ['70%', '70%'],
            color: ['#f81858', 'none'],
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter: function(params) {
                        if (params.dataIndex === 0) {
                            return '{percent|' + params.percent + '%}';
                        }
                    },
                    rich: rich
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: echartdata
        },
        //外层背景1
        {
            name: 'bg1',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '50%'],
            radius: ['90%', '0%'],
            color: ['rgba(229,23,84,0.25)', 'none'],
            z: -5,
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 10,
                name: '占位',
            }]
        },
        //外层边框
        {
            name: 'Line 2',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '50%'],
            radius: ['90%', '90%'],
            itemStyle: {
                normal: {
                    borderWidth: 2 * scale,
                    borderColor: 'rgba(229,23,84,0.6)',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                }
            },
            data: [{
                value: 10,
                name: '',
            }]
        },
    ],
};