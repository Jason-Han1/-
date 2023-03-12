// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

option = {
    backgroundColor:'#04184A',
    series: [{
        type: 'liquidFill',
        //data: [0.6, 0.5, 0.4, 0.3],
        data: [{
            name: "A",
            value: 0.27,
            key:27
        }],
        radius: '20%',
        // 水球颜色
        color: ['#49d088', '#38b470', '#2aaf66'],
        center: ['25%', '50%'],
        // outline  外边
        outline: {
            // show: false
            borderDistance: 5,
            itemStyle: {
                borderWidth: 5,
                borderColor: '#13FDCE',
            },
        },
        label: {
            normal: {
                formatter: function(param) {
                    return param.name + ':'+ param.data.key
		        },
                textStyle: {
                    color: 'red',
                    insideColor: 'yellow',
                    fontSize: 80
                }
            }
        },
        // 内图 背景色 边
        backgroundStyle: {
            color: 'rgba(4,24,74,0.8)',
            // borderWidth: 5,
            // borderColor: 'red',
        }
    },{
        type: 'liquidFill',
        //data: [0.6, 0.5, 0.4, 0.3],
        data: [{
            name: "B",
            value: 0.27,
            key: 27
        }],
        radius: '20%',
        // 水球颜色
        color: ['#FE5555', '#F07581', '#FB5E61'],
        center: ['50%', '50%'],
        // outline  外边
        outline: {
            // show: false
            borderDistance: 5,
            itemStyle: {
                borderWidth: 5,
                borderColor: '#FE5555',
            },
        },
        label: {
            normal: {
                formatter: function(param) {
                    return param.name + ':'+ param.data.key
		        },
                textStyle: {
                    color: 'red',
                    insideColor: 'yellow',
                    fontSize: 80
                }
            }
        },
        emphasis: {
            label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold',
                formatter: '{c}'
            }
        },
        // 内图 背景色 边
        backgroundStyle: {
            color: 'rgba(4,24,74,0.8)',
            // borderWidth: 5,
            // borderColor: 'red',
        }
    },{
        type: 'liquidFill',
        //data: [0.6, 0.5, 0.4, 0.3],
        data: [{
            name: "C",
            value: 0.27,
            key: 27
        }],
        radius: '20%',
        // 水球颜色
        color: ['#FFBF11', '#F4B30E', '#EACE36'],
        center: ['75%', '50%'],
        // outline  外边
        outline: {
            // show: false
            borderDistance: 5,
            itemStyle: {
                borderWidth: 5,
                borderColor: '#FFBF11',
            },
        },
        label: {
            normal: {
                formatter: function(param) {
                    return param.name + ':'+ param.data.key
		        },
                textStyle: {
                    color: 'red',
                    insideColor: 'yellow',
                    fontSize: 40
                }
            }
        },
        // 内图 背景色 边
        backgroundStyle: {
            color: 'rgba(4,24,74,0.8)',
            // borderWidth: 5,
            // borderColor: 'red',
        }
    }]
};