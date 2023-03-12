data = [{
    "value": 50,
    "name": "保险"
}, {
    "value": 16.5,
    "name": "知识产权"
}, {
    "value": 16.5,
    "name": "出版"
}, {
    "value": 15.5,
    "name": "轻工业"
}, {
    "value": 14.8,
    "name": "金融"
}, {
    "value": 13.7,
    "name": "化工"
}, {
    "value": 13.6,
    "name": "科技"
}, {
    "value": 13.4,
    "name": "教育"
}, {
    "value": 13.1,
    "name": "对外经贸合作"
}]

for (var n in data) {
    data[n]['name'] = data[n]['name'] + ' ' + data[n]['value']
}

option = {
    // backgroundColor: "#000",
    title: {
        text: '数据分布',
        subtext: '',
        left: '50%',
        top: '30',
        textAlign: 'center',
        textStyle: {
            color: "#000",
            fontWeight: 'normal',
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}"
    },
    series: [{
        type: 'treemap',
        width: '100%',
        height: '85%',
        top: '15%',
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