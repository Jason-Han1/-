var scale = 1;
var dataArr = [{
        value: 251,
        name: '小型车'
    },
    {
        value: 233,
        name: '中型车'
    },
    {
        value: 261,
        name: '大型车'
    },
    {
        value: 427,
        name: '货车'
    },
    {
        value: 274,
        name: '特种车'
    },
    {
        value: 151,
        name: '贵宾车'
    },

];
var colorSet = ['#297AE6', '#297AE6', '#5D46D4', '#7F46D3', '#00AA6C', '#28A1E6'];
var rich = {
    yellow: {
        color: "#fff",
        fontSize: 30 * scale,
        padding: [8, 4],
        align: 'center'
    },
    white: {
        color: "#00B9FC",
        align: 'center',
        fontSize: 18 * scale,
        padding: [22, 0]
    },
    blue: {
        color: '#49dff0',
        fontSize: 16 * scale,
        align: 'center'
    },
    hr: {
        borderColor: 'rgba(255,255,255,.1)',
        width: '100%',
        borderWidth: 1,
        height: 0,
    }
}
option = {
    backgroundColor: 'rgba(0,0,0,1)',
    tooltip: {
        // trigger: 'item',
        // formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    calculable: true,
    series: [
        {
            //最小的圈
            type: 'pie',
            radius:[30,50],
            roseType: 'radius',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle:{
                color:'rgba(255,255,255,.08)'
            },
            hoverAnimation:false,
            data:[100],
            z:100
        },
        {
            // name:'半径模式',
            type: 'pie',
            radius: [20, 110],
            center: ['25%', '50%'],
            roseType: 'radius',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },

        },
        {
            // name: '面积模式',
            type: 'pie',
            color: colorSet,
            radius: [30, 110],
            center: ['50%', '50%'],
            roseType: 'area',
            label: {
                normal: {
                    formatter: function(params) {
                        return '{white|' + params.name + '}\n{hr|}\n{yellow|' + params.value + '}\n{blue|' + '}';
                    },
                    rich: rich
                }
            },
            labelLine: {
                normal: {
                    length: 55 * scale,
                    length2: 0,
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    },
                    smooth: 0.2,

                }
            },
            data: dataArr
        }
    ]
};