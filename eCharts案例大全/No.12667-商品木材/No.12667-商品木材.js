var data = [
        {value: '10093.65',name: '耕地'},
        {value: '14875.90',name: '林地'},
        {value: '1053.30',name: '草地'},
        {value: '1759.35',name: '水域'},
        {value: '1069.50',name: '建设用地'},
        {value: '57.75',name: '其它用地'},
    ];
/*var dataS = [
        {value: '24496.39',name: '乔木林'},
        {value: '8585.87',name: '乔木林'},
        {value: '29.25',name: '乔木林'},
        {value: '86.80',name: '疏林'},
        {value: '380.29',name: '散生木'},
        {value: '1261.62',name: '四旁树'},
    ];*/

option = {
    title:{
        text:'土地利用类型',
        subtext:'单位：万m³',
        left:'center',
        top:0,
        textStyle:{
            fontSize:20
        },
        subtextStyle:{
            color:'#888'
        }
        
    },
    backgroundColor: 'rgba(0,0,0,0)',
    toolbox:{
        show:true,
        feature:{
            saveAsImage: {
                show: true,
                iconStyle:{
                    color:'#333'
                }
            }
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color: ['#4ac7f5','#42a4eb', '#5f71d2','#f36f8a','#fd9173','#22C3AA'],
    legend: { //图例组件，颜色和名字
        show:false,
        left: '55',
        top: '50',
        orient: 'vertical',
        itemGap: 12, //图例每项之间的间隔
        itemWidth: 10,
        itemHeight: 10,
        icon: 'rect',
        data: ['有林地','疏林地'],
        textStyle: {
            color: [],
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        }
    },
    series: [{
        name: '',
        type: 'pie',
       // clockwise: false, //饼图的扇区是否是顺时针排布
        minAngle: 20, //最小的扇区角度（0 ~ 360）
        center: ['50%', '50%'], //饼图的中心（圆心）坐标
        radius: [180, 360], //饼图的半径
        avoidLabelOverlap: true, ////是否启用防止标签重叠

        label: { //标签的位置
            normal: {
                show: true,
                position: 'inside', //标签的位置
                formatter: "{b}\n\n{c}万m³\n\n{d}%",
                textStyle: {
                    color: '#fff',
                    fontSize:16,
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
    }/*, {
        name: '',
        type: 'pie',
       // clockwise: false,
        silent: true,
        minAngle: 20, //最小的扇区角度（0 ~ 360）
        center: ['50%', '50%'], //饼图的中心（圆心）坐标
        radius: [0, 170], //饼图的半径
        itemStyle: { //图形样式
            normal: {
                borderColor: '#999ebf',
                borderWidth: 1,
                opacity: 0.5,
            }
        },
        label: { //标签的位置
            normal: {
                show: false,
            }
        },
        data: dataS
    }*/]
};