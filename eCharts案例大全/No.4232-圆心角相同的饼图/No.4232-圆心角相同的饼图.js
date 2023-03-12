var data = [{
    name:'序号一',
    value:203,
    labelLine:{
        lineStyle:{
            color:'#3D81F7'
        }
    },
    itemStyle:{
        color:{
            type:'linear',
            x:0,
            y:1,
            x2:0,
            y2:0,
            colorStops: [{
                offset: 0, color: 'rgb(61 129 247 / 0.17)' // 0% 处的颜色
            }, {
                offset: 1, color: '#3D81F7' // 100% 处的颜色
            }]
        }
    }
},{
    name:'序号二',
    value:292,
    labelLine:{
        lineStyle:{
            color:'#3D81F7'
        }
    },
    itemStyle:{
        color:{
            type:'linear',
            x:0,
            y:0,
            x2:1,
            y2:0,
            colorStops: [{
                offset: 0, color: 'rgb(61 129 247 / 0.17)' // 0% 处的颜色
            }, {
                offset: 1, color: '#3D81F7' // 100% 处的颜色
            }]
        }
    }
},{
    name:'序号三',
    value:180,
    labelLine:{
        lineStyle:{
            color:'#3D81F7'
        }
    },
    itemStyle:{
        color:{
            type:'linear',
            x:0,
            y:0,
            x2:0,
            y2:1,
            colorStops: [{
                offset: 0, color: 'rgb(61 129 247 / 0.17)' // 0% 处的颜色
            }, {
                offset: 1, color: '#3D81F7' // 100% 处的颜色
            }]
        }
    }
},{
    name:'序号四',
    value:214,
    labelLine:{
        lineStyle:{
            color:'#3D81F7'
        }
    },
    itemStyle:{
        color:{
            type:'linear',
            x:1,
            y:0,
            x2:0,
            y2:0,
            colorStops: [{
                offset: 0, color: 'rgb(61 129 247 / 0.17)' // 0% 处的颜色
            }, {
                offset: 1, color: '#3D81F7' // 100% 处的颜色
            }]
        }
    }
},{
    name:'序号五',
    value:300,
    labelLine:{
        lineStyle:{
            color:'#3D81F7'
        }
    },
    itemStyle:{
        color:{
            type:'linear',
            x:0,
            y:1,
            x2:0,
            y2:0,
            colorStops: [{
                offset: 0, color: 'rgb(61 129 247 / 0.17)' // 0% 处的颜色
            }, {
                offset: 1, color: '#3D81F7' // 100% 处的颜色
            }]
        }
    }
}];
option = {
    title: {
        text: '饼图'
    },
    series: [{
        type: 'pie',
        roseType:'area',
        radius:'36%',
        data:data
    }]
};