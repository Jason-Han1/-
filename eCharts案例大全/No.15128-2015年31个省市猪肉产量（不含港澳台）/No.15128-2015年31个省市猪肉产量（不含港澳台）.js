 option = {
    title : {
        text: '2015年31个省市猪肉产量（不含港澳台）',
        subtext:'数据来源于统计年鉴，单位：万吨，大地丰收制图',
             x:'center'
    },
    tooltip : {
        trigger: 'item'
    },

    dataRange: {
        min: 0,
        max: 600,
        x: 'left',
        y: 'bottom',
        text:['高','低'],           // 文本，默认为数值文本
        calculable : true,
        color: ['green','gold','lightgrey']
    },
    toolbox: {
        show: true,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
           dataZoom : {show: true},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    roamController: {
        show: true,
        x: 'right',
        mapTypeControl: {
            'china': true
        }
    },
    series : [
        {
            name: '猪肉',
            type: 'map',
            mapType: 'china',
            roam: false,
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[
    {name: '北京', value: 22.5},
    {name: '天津', value: 29.2},
    {name: '河北', value: 275},
    {name: '山西', value: 60.3},
    {name: '内蒙古', value: 70.8},
    {name: '辽宁', value: 227.1},
    {name: '吉林', value: 136},
    {name: '黑龙江', value: 138.4},
    {name: '上海', value: 16.1},
    {name: '江苏', value: 225.8},
    {name: '浙江', value: 103.3},
    {name: '安徽', value: 259.1},
    {name: '福建', value: 134.5},
    {name: '江西', value: 253.5},
    {name: '山东', value: 397.4},
    {name: '河南', value: 468},
    {name: '湖北', value: 331.5},
    {name: '湖南', value: 448},
    {name: '广东', value: 274.2},
    {name: '广西', value: 258.8},
    {name: '海南', value: 45.8},
    {name: '重庆', value: 156.2},
    {name: '四川', value: 512.4},
    {name: '贵州', value: 160.7},
    {name: '云南', value: 288.6},
    {name: '西藏', value: 1.5},
    {name: '陕西', value: 90.4},
    {name: '甘肃', value: 50.8},
    {name: '青海', value: 10.3},
    {name: '宁夏', value: 7.1},
    {name: '新疆', value: 33.1}
]
        },
     ]
};
                    