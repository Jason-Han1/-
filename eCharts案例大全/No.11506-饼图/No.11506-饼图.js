var data2 = [];
for (var i = 0; i < 4; i++) {
    data2.push({
        value: 10,
    }, {
        value: 1,

        itemStyle: {
            normal: {
                color: 'transparent', //透明伞形
            }
        }
    });
}

option = {
    backgroundColor: '#021228',
    color: ["#01c5fa", '#013168'],
    title: {
        text: '60%',
        textStyle: {
            color: '#4effff',
            fontSize: 18,

        },
        x: 'center',
        y: 'center',
    },
    tooltip: {
        trigger: 'item',
        show: true,
        formatter: "{a} : {b} <br/> 占比 : {d}%",
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
    },
    series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['55%', '70%'],
            label: {
                normal: {
                    show: false,
                },
            },
            data: [{
                    value: 100,
                    name: '客户端'
                },
                {
                    value: 60,
                    name: '编辑器'
                },
            ]
        },
        { //装饰作用

            type: 'pie',
            clockWise: false,
            radius: ['95%', '96%'],
            center: ['50%', '50%'],
            hoverAnimation: false,
            startAngle: 95, //起始角度
            color: ['#297b9e'],
            tooltip: {

                show: false,

            },
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                }
            },
            data: data2
        },

    ]
}