var data = [
        {value: 12,name: '给差评'}, 
        {value: 13,name: '曝光商家'},
        {value: 200,name: '未提及'}, 
        {value: 32,name: '以恶制恶'},
        {value: 43,name: '制度维权'}
    ];

option = {
    backgroundColor: '#1d2239',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color: ['#fd9173', '#f36f8a', '#5f71d2', '#42a4eb', '#4ac7f5'],
    legend: { //图例组件，颜色和名字
        left: '55',
        top: '50',
        orient: 'vertical',
        itemGap: 12, //图例每项之间的间隔
        itemWidth: 10,
        itemHeight: 10,
        icon: 'rect',
        data: ['给差评', '曝光商家', '未提及', '以恶制恶', '制度维权'],
        textStyle: {
            color: [],
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        }
    },
    series: [{
        name: '违规次数',
        type: 'pie',
        clockwise: false, //饼图的扇区是否是顺时针排布
        minAngle: 20, //最小的扇区角度（0 ~ 360）
        center: ['50%', '50%'], //饼图的中心（圆心）坐标
        radius: [54, 96], //饼图的半径
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
                formatter: "{d}%",
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
        center: ['50%', '50%'], //饼图的中心（圆心）坐标
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