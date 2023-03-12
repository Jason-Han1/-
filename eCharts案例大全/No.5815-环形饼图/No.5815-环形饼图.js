var auditDataArr = [42, 48, 79, 52, 0]
var color = ['#6a6edc', '#ac64cf', '#3cb7fd', '#13cdc7', '#f2a230'];
var dataStyle = {
    normal: {
        label: {
            show: false,
        },
        labelLine: {
            show: false,
        },
        shadowBlur: 40,
        borderWidth: 10,
        //   borderWidth: 40,
        shadowColor: 'rgba(0, 0, 0, 0)', //边框阴影
    },
};
var placeHolderStyle = {
    normal: {
        //   color: 'transparent', //补充圆圈颜色
        color: '#eff3ff',
        label: {
            show: false,
        },
        labelLine: {
            show: false,
        },
    },
    emphasis: {
        color: '#eee',
    },
};
var placeHolderStyle1 = {
    normal: {
        color: 'transparent',
        label: {
            show: false,
        },
        labelLine: {
            show: false,
        },
    },
    emphasis: {
        color: '#eee',
    },
};
var option = {
    backgroundColor: '#fff',
    title: {
        show: false,
        text: '匹配度',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 24,
            color: '#fff',
        },
    },
    tooltip: {
        trigger: 'item',
        show: true,
        formatter: '{b} : <br/>{d}%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // hover圆环展示比例背景
        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.1);', //添加阴影
    },
    series: [
        // A业务
        {
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: [113, 123],
            center: ['50%', '50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            label: {
                borderRadius: '10',
            },
            data: [{
                    value: auditDataArr[0],
                    name: '不完整',
                    itemStyle: {
                        normal: {
                            color: color[0],
                        },
                    },
                },
                {
                    value: 100 - auditDataArr[0],
                    name: '',
                    tooltip: {
                        show: false,
                    },
                    itemStyle: placeHolderStyle1,
                },
            ],
        },
        {
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: [113, 123],
            center: ['50%', '50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            label: {
                borderRadius: '10',
            },
            data: [{
                    value: auditDataArr[0],
                    name: '不完整',
                    itemStyle: {
                        normal: {
                            color: color[0],
                        },
                    },
                },
                {
                    value: 100 - auditDataArr[0],
                    name: '',
                    tooltip: {
                        show: false,
                    },
                    itemStyle: placeHolderStyle,
                },
            ],
        },
        //  B业务
        {
            name: 'Line 2',
            type: 'pie',
            clockWise: false,
            radius: [90, 100],
            center: ['50%', '50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            data: [{
                    value: auditDataArr[1],
                    name: '不规范',
                    itemStyle: {
                        normal: {
                            color: color[1],
                        },
                    },
                },
                {
                    value: 100 - auditDataArr[1],
                    name: '',
                    tooltip: {
                        show: false,
                    },
                    itemStyle: placeHolderStyle1,
                },
            ],
        },
        {
            name: 'Line 2',
            type: 'pie',
            clockWise: false,
            radius: [90, 100],
            center: ['50%', '50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            data: [{
                    value: auditDataArr[1],
                    name: '不规范',
                    itemStyle: {
                        normal: {
                            color: color[1],
                        },
                    },
                },
                {
                    value: 100 - auditDataArr[1],
                    name: '',
                    tooltip: {
                        show: false,
                    },
                    itemStyle: placeHolderStyle,
                },
            ],
        },
        //  C业务
        {
            name: 'Line 3',
            type: 'pie',
            clockWise: false,
            radius: [70, 79],
            center: ['50%', '50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            data: [{
                    value: auditDataArr[2],
                    name: '无上级关联',
                    itemStyle: {
                        normal: {
                            color: color[2],
                        },
                    },
                },
                {
                    value: 100 - auditDataArr[2],
                    name: '',
                    tooltip: {
                        show: false,
                    },
                    itemStyle: placeHolderStyle1,
                },
            ],
        },
        {
            name: 'Line 3',
            type: 'pie',
            clockWise: false,
            radius: [70, 79],
            center: ['50%', '50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            data: [{
                    value: auditDataArr[2],
                    name: '无上级关联',
                    itemStyle: {
                        normal: {
                            color: color[2],
                        },
                    },
                },
                {
                    value: 100 - auditDataArr[2],
                    name: '',
                    tooltip: {
                        show: false,
                    },
                    itemStyle: placeHolderStyle,
                },
            ],
        },
        //D业务
        {
            name: 'Line 3',
            type: 'pie',
            clockWise: false,
            radius: [52, 59],
            center: ['50%', '50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            data: [{
                    value: auditDataArr[3],
                    name: '无下级关联',
                    itemStyle: {
                        normal: {
                            color: color[3],
                        },
                    },
                },
                {
                    value: 100 - auditDataArr[3],
                    name: '',
                    tooltip: {
                        show: false,
                    },
                    itemStyle: placeHolderStyle1,
                },
            ],
        },
        {
            name: 'Line 3',
            type: 'pie',
            clockWise: false,
            radius: [52, 59],
            center: ['50%', '50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            data: [{
                    value: auditDataArr[3],
                    name: '无下级关联',
                    itemStyle: {
                        normal: {
                            color: color[3],
                        },
                    },
                },
                {
                    value: 100 - auditDataArr[3],
                    name: '',
                    tooltip: {
                        show: false,
                    },
                    itemStyle: placeHolderStyle,
                },
            ],
        },
        //E业务
        {
            name: 'Line 3',
            type: 'pie',
            clockWise: false,
            radius: [31, 37],
            center: ['50%', '50%'], //圆环位置参数
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            data: [{
                    value: auditDataArr[4],
                    name: '正常',
                    itemStyle: {
                        normal: {
                            color: color[4],
                        },
                    },
                },
                {
                    value: 100 - auditDataArr[4],
                    name: '',
                    tooltip: {
                        show: false,
                    },
                    itemStyle: placeHolderStyle1,
                },
            ],
        },
        {
            name: 'Line 3',
            type: 'pie',
            clockWise: false,
            // radius: [26, 40],
            radius: [31, 37],
            center: ['50%', '50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            data: [{
                    value: auditDataArr[4],
                    name: '正常',
                    itemStyle: {
                        normal: {
                            color: color[4],
                        },
                    },
                },
                {
                    value: 100 - auditDataArr[4],
                    name: '',
                    tooltip: {
                        show: false,
                    },
                    itemStyle: placeHolderStyle,
                },
            ],
        },
    ],
};