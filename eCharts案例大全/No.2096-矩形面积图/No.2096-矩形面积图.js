data = [{
    "value": 50,
    "name": "装置性材料"
}, {
    "value": 40.5,
    "name": "一次设备"
}, {
    "value": 36.5,
    "name": "二次设备"
}, {
    "value": 25.5,
    "name": "办公类用品"
}, {
    "value": 20.8,
    "name": "五金材料"
}, {
    "value": 16.7,
    "name": "仪表仪器"
}, {
    "value": 12.6,
    "name": "配件"
}, {
    "value": 9.4,
    "name": "工器具"
}, {
    "value": 5.1,
    "name": "通信设备"
}]

for (var n in data) {
    data[n]['name'] = data[n]['name'] + ' ' + data[n]['value']
}

option = {
    visualMap: {
        show:false,
            min: 0,
            max: 50,
            itemWidth:20,
            itemHeight:130,
            itemGap:20,
            right: '15%',
            top: 10,
            align:'left',
             orient: 'horizontal',
             text:['50','0'],
            textStyle:{
                color:'#333',
                fontSize:14,
                align:'right'
            },
            inRange: {
                color: [ '#20D3AB','#49CCFF',] 
            }
        },
    tooltip: {
        trigger: 'item',
        formatter: "{b}"
    },
    series: [{
        type: 'treemap',
        width: '100%',
        height: '100%', 
        roam: false, //是否开启拖拽漫游（移动和缩放）
        nodeClick: false, //点击节点后的行为,false无反应
        breadcrumb: {
            show: false
        },
        label: { //描述了每个矩形中，文本标签的样式。
            normal: {
                show: true,
                position: ['10%', '40%']
            }
        },
        itemStyle: {
            normal: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 16,
                },
                borderWidth: 1,
                borderColor: '#fff',
            },

            emphasis: {
                label: {
                    show: true
                }
            }
        },
        data: data
    }]
};