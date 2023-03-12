// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

option = {
    backgroundColor:'#efefef',
    series: [{
        type: 'liquidFill',
        //data: [0.6, 0.5, 0.4, 0.3],
        data: [0.485, 0.4, 0.3, 0.2],
        radius: '30%',
        // 水球颜色
        color: ['#ffc39f', '#fff', '#ff7523'],
        center: ['25%', '50%'],
        // outline  外边
        outline: {
            // show: false
            borderDistance: 5,
            itemStyle: {
                borderWidth: 5,
                borderColor: '#ff7523',
            },
        },
        label: {
            normal: {
                // textStyle: {
                    color: '#f7965c',
                    insideColor: 'fff',
                    fontSize: 100
                // }
            }
        },
        // 内图 背景色 边
        backgroundStyle: {
            color: '#fff',
            // borderWidth: 5,
            // borderColor: 'red',
        }
    },{
        type: 'liquidFill',
        //data: [0.6, 0.5, 0.4, 0.3],
        data: [0.44, 0.3, 0.2, 0.1],
        radius: '30%',
        // 水球颜色
        color: ['#ffc39f', '#fff', '#ff7523'],
        center: ['40%', '50%'],
        // outline  外边
        outline: {
            // show: false
            borderDistance: 5,
            itemStyle: {
                borderWidth: 5,
                borderColor: '#ff7523',
            },
        },
        label: {
            normal: {
                 textStyle: {
                   color: '#f7965c',
                    insideColor: 'fff',
                    fontSize: 100
                 }
            }
        },
        // 内图 背景色 边
        backgroundStyle: {
            color: '#fff',
            // borderWidth: 5,
            // borderColor: 'red',
        }
    },{
        type: 'liquidFill',
        //data: [0.6, 0.5, 0.4, 0.3],
        data: [0.39, 0.3, 0.2, 0.1],
        radius: '30%',
        // 水球颜色
        color: ['#ffc39f', '#fff', '#ff7523'],
        center: ['55%', '50%'],
        // outline  外边
        outline: {
            // show: false
            borderDistance: 5,
            itemStyle: {
                borderWidth: 5,
                borderColor: '#ff7523',
            },
        },
        label: {
            normal: {
                 textStyle: {
                   color: '#f7965c',
                    insideColor: 'fff',
                    fontSize: 100
                 }
            }
        },
        // 内图 背景色 边
        backgroundStyle: {
            color: '#fff',
            // borderWidth: 5,
            // borderColor: 'red',
        }
    },{
        type: 'liquidFill',
        //data: [0.6, 0.5, 0.4, 0.3],
        data: [0.33, 0.26,0.2,0.1],
        radius: '30%',
        // 水球颜色
        color: ['#ffc39f', '#fff', '#ff7523'],
        center: ['70%', '50%'],
        // outline  外边
        outline: {
            // show: false
            borderDistance: 5,
            itemStyle: {
                borderWidth: 5,
                borderColor: '#ff7523',
            },
        },
        label: {
            normal: {
                 textStyle: {
                    color: '#f7965c',
                    insideColor: 'fff',
                    fontSize: 100
                 }
            }
        },
        // 内图 背景色 边
        backgroundStyle: {
            color: '#fff',
            // borderWidth: 5,
            // borderColor: 'red',
        }
    }]
};