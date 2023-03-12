option = {
    backgroundColor: '#111527',
    title: [{
        text: '全省',
        left: '45%',
        top: '13%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#e9ea00',
            fontSize: 14,
            textAlign: 'center',
        }
    }],
    series: [{
        type: 'liquidFill',
        name: '全省',
        radius: '99%', //调整大小
        shape: 'circle', //修改形状，目前支持	'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
        outline: {
            borderDistance: 0, //内环padding值
            itemStyle: {
                borderWidth: 1, //圆边线宽度
                borderColor: '#648dff',
            },
        },

        backgroundStyle: { // 内图 背景色 边
            color: 'null',
        },
        data: [{
            'name': '全省',
            'value': '0.7',
            color: ['#2c84c9']
        }], //其中第一个数值由键值对表示
        label: {
            normal: {
                textStyle: {
                    fontSize: 20,
                    color: '#e9ea00',
                    insideColor: '#e9ea00',
                }
            }
        }
    }]
};