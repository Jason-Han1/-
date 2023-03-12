var data = [
        {value: 7638,name: '烟台'}, 
        {value: 7349,name: '青岛'},
        {value: 3527,name: '日照'}, 
        {value: 3562,name: '威海'},
        {value: 956,name: '潍坊'},
        {value: 2306,name: '东营'},
        {value: 1825,name: '滨州'},
    ];
var color = ['#1E90FF', '#87CEFA', '#00FFFF', '#FFA500', '#EEC900',
'#E9967A','#FF00FF', '#7D26CD'];

option = {
    backgroundColor: '#1c2e40',
    grid:{
        
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color: ['#1E90FF', '#87CEFA', '#00FFFF', '#FFA500', '#EEC900',
'#E9967A','#FF00FF', '#7D26CD'],
    series: [{
        name: '',
        type: 'pie',
        clockwise: false, //饼图的扇区是否是顺时针排布
        minAngle: 20, //最小的扇区角度（0 ~ 360）
        center: ['20%', '20%'], //饼图的中心（圆心）坐标
        radius: [54, 116], //饼图的半径
        avoidLabelOverlap: true, ////是否启用防止标签重叠
        itemStyle: { //图形样式
            normal: {
                borderColor: '#1e2239',
                borderWidth: 1.5,
            },
        },
        label: { //标签的位置
            normal: {
                show: true,
                position: 'inside', //标签的位置
                formatter: "{b}{d}%",
                textStyle: {
                    color: '#fff',
                }
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontWeight: 'bold'
                }
            }
        },
        data: data
    }, {
        name: '',
        type: 'pie',
        clockwise: false,
        silent: true,
        minAngle: 20, //最小的扇区角度（0 ~ 360）
        center: ['20%', '20%'], //饼图的中心（圆心）坐标
        radius: [0, 49], //饼图的半径
        itemStyle: { //图形样式
            normal: {
                borderColor: '#1e2239',
                borderWidth: 1.5,
                opacity: 0.21,
            }
        },
        label: { //标签的位置
            normal: {
                show: false,
            }
        },
        data: data
    }]
};