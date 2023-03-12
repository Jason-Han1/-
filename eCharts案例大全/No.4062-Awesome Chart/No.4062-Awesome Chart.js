// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

var option = {
    series: [{
        type: 'liquidFill',
         data: [{
            value: 0.06,
            direction: 'left',
            itemStyle: {
                normal: {
                    color: '#4472C4'
                }
            }
        }],
    center: ['13%', '50%'],
       backgroundStyle: {
            borderColor: '#4472C4',
            borderWidth: 0,
 },
        radius: '40%',
        label: {
            normal: {
                textStyle: {
                    color: '#054862',
                    fontSize: 50
                }
            }
        }
 },{
        type: 'liquidFill',
         data: [{
            value: 0.21,
            direction: 'left',
            itemStyle: {
                normal: {
                    color: '#4472C4'
                }
            }
        }],
    center: ['38%', '50%'],
       backgroundStyle: {
            borderColor: '#4472C4',
            borderWidth: 0,
 },
        radius: '40%',
        label: {
            normal: {
                textStyle: {
                    color: '#054862',
                    insideColor: 'yellow',
                    fontSize: 50
                }
            }
        }
 },{
        type: 'liquidFill',
         data: [{
            value: 0.31,
            direction: 'left',
            itemStyle: {
                normal: {
                    color: '#4472C4'
                }
            }
        }],
    center: ['63%', '50%'],
       backgroundStyle: {
            borderColor: '#4472C4',
            borderWidth: 0,
 },
        radius: '40%',
        label: {
            normal: {
                textStyle: {
                    color: '#054862',
                    fontSize: 50
                }
            }
        }
 },{
        type: 'liquidFill',
         data: [{
            value: 0.42,
            direction: 'left',
            itemStyle: {
                normal: {
                    color: '#4472C4'
                }
            }
        }],
    center: ['87%', '50%'],
       backgroundStyle: {
            borderColor: '#4472C4',
            borderWidth: 0,
 },
        radius: '40%',
        label: {
            normal: {
                textStyle: {
                    color: '#054862',
                    fontSize: 50
                }
            }
        }
 }
]};