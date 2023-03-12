var linearColor = function(value) {
    let arr = [];
    for (let i = 1; i < 11; i++) {
        arr.push([i / 10, value + (i < 5 ? 0.5 : i / 10) + ')']);
    }
    return arr;
};
var option1 = {
    title:{
        text:'饼图内阴影',
        show:true,
        right :'center',
        top:'300'
    },
    backgroundColor: '#ccc',
    tooltip: {
        trigger: 'item',
    },
    series: [{
        name: '模拟数据1',
        type: 'gauge',
        startAngle: 145,
        endAngle: 35,
        splitLine: {
            length: 20,
            lineStyle:{
                width:12,
                color:'#ccc'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            distance: 0
        },
        //splitNumber:1,
        radius: '62%',
        axisLine: {
            lineStyle: {
                color: [
                    [2,'rgba(255,255,255,0)']
                ],
                width: 20
            }
        },
        title: {
            offsetCenter: ['0%', '-65%'],
            color: '#6544a2'
        },
        pointer: {
            width: 5,
            length: '60%'
        },
        detail: {
            show: false
        },
        data: []
    }, {
        name: '模拟数据2',
        type: 'gauge',
        startAngle: 25,
        endAngle: -85,
        radius: '62%',
        //splitNumber:1,
        splitLine: {
            length: 20,
            lineStyle:{
                color:'#ccc'
            }
        },
        axisLabel: {
            show: false,
            distance: 0
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: linearColor('rgba(68,114,196,'),
                width: 20
            }
        },
        title: {
            offsetCenter: ['45%', '35%'],
            color: '#91399f'
        },
        pointer: {
            width: 5,
            length: '60%'
        },
        detail: {
            show: false
        },
        data: []
    }, {
        name: '模拟数据3',
        type: 'gauge',
        startAngle: -95,
        endAngle: -205,
        radius: '62%',
        axisLabel: {
            show: false,
            distance: 0
        },
        splitLine: {
            length: 20,
            lineStyle:{
                color:'#ccc'
            }
            
        },
        axisTick: {
            show: false,
            
        },
        //splitNumber:1,
        axisLine: {
            lineStyle: {
                color: linearColor('rgba(52,73,202,'),
                width: 20
            }
        },
        title: {
            offsetCenter: ['-45%', '35%'],
            color: '#b04095'
        },
        pointer: {
            width: 5,
            length: '60%'
        },
        detail: {
            show: false
        },
        data: []
    }, {
        type: 'pie',
        radius: ['62%', '500%'],
        silent: true,
        zlevel:-1,
        data: [{
            value: 0,
            itemStyle: {
                normal: {
                    color: '#ccc',
                    shadowBlur: 15,
                    shadowColor: 'rgba(91,155,213,1)',
                    show: true
                }
            }
        }]
    } ,{
        type: 'pie',
        radius: ['0%', '55%'],
        silent: true,
        zlevel:-1,
        data: [{
            value: 0,
            itemStyle: {
                normal: {
                    color: '#ccc',
                    shadowBlur: 15,
                    shadowColor: 'rgba(91,155,213,1)',
                    show: true
                }
            }
        }]
    }]
};
var option2 = {
     title:{
        text:'饼图外阴影',
        show:true,
        right :'center',
        top:'300'
    },
    backgroundColor: '#ccc',
    tooltip: {
        trigger: 'item',
    },
    series: [{
        name: '模拟数据1',
        type: 'gauge',
        startAngle: 130,
        endAngle: 50,
        splitLine: {
            length: 20,
            lineStyle:{
                color:'#ccc'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            distance: 0
        },
        radius: '62%',
        axisLine: {
            lineStyle: {
                color: linearColor('rgba(90,139,57,'),
                width: 20
            }
        },
        title: {
            offsetCenter: ['0%', '-65%'],
            color: '#37aa80'
        },
        pointer: {
            width: 5,
            length: '60%'
        },
        detail: {
            show: false
        },
        data: []
    }, {
        name: '模拟数据2',
        type: 'gauge',
        startAngle: 40,
        endAngle: -40,
        radius: '62%',
        //splitNumber:1,
        splitLine: {
            length: 20,
            lineStyle:{
                color:'#ccc'
            }
        },
        axisLabel: {
            show: false,
            distance: 0
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: linearColor('rgba(112,173,71,'),
                width: 20
            }
        },
        title: {
            offsetCenter: ['65%', '0%'],
            color: '#3893a9'
        },
        pointer: {
            width: 5,
            length: '60%'
        },
        detail: {
            show: false
        },
        data: []
    }, {
        name: '模拟数据3',
        type: 'gauge',
        startAngle: -50,
        endAngle: -130,
        radius: '62%',
        axisLabel: {
            show: false,
            distance: 0
        },
        splitLine: {
            length: 20,
            lineStyle:{
                color:'#ccc'
            }
        },
        axisTick: {
            show: false
        },
        //splitNumber:1,
        axisLine: {
            lineStyle: {
                color: linearColor('rgba(155,201,123,'),
                width: 20
            }
        },
        title: {
            offsetCenter: ['0%', '65%'],
            color: '#6544a2'
        },
        pointer: {
            width: 5,
            length: '60%'
        },
        detail: {
            show: false
        },
        data: []
    }, {
        name: '模拟数据4',
        type: 'gauge',
        startAngle: -140,
        endAngle: -220,
        radius: '62%',
        axisLabel: {
            show: false,
            distance: 0
        },
        splitLine: {
            length: 20,
            lineStyle:{
                color:'#ccc'
            }
        },
        axisTick: {
            show: false
        },
        //splitNumber:1,
        axisLine: {
            lineStyle: {
                color: linearColor('rgba(157,208,118,'),
                width: 20
            }
        },
        title: {
            offsetCenter: ['-62%', '0%'],
            color: '#86bfd0'
        },
        pointer: {
            width: 5,
            length: '60%'
        },
        detail: {
            show: false
        },
        data: []
    },{
        type: 'pie',
        radius: ['56%', '62%'],
        silent: true,
        zlevel:-1,
        data: [{
            value: 0,
            itemStyle: {
                normal: {
                    color: '#ccc',
                    shadowBlur: 30,
                    shadowColor: 'rgba(157,208,118,1)',
                    show: true
                }
            }
        }]
    }]
};
var arr1 = [168, 2053, 10539];
arr1.forEach(function(item, index) {
    option1.series[index].data.push(item);
    option1.series[index].max = Math.pow(10, item.toString().length);
});
var arr2 = [168, 2053, 10539, 7659];
arr2.forEach(function(item, index) {
    option2.series[index].data.push(item);
    option2.series[index].max = Math.pow(10, item.toString().length);
});
options = [option1, option2];