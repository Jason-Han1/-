let color = ['#9BBBDF', '#78C2FF', '#3758CD', '#A3B6F9', '#3F8AEF', '#F6CAA3'];
// 圆环图各环节的名称和值(系列中各数据项的名称和值)
let data = [{
    name: '广东省',
    value: 800,
    per: 50
}, {
    name: '安微省',
    value: 586,
    per: 30
}, {
    name: '浙江省',
    value: 504,
    per: 12
}, {
    name: '江苏省',
    value: 725,
    per: 18
}];
// 指定图表的配置项和数据
option = {
    backgroundColor : '#081534',
    title: [{
        text: '事业部供应商布局占比',
        bottom: '2%',
        left: 'center',
        textStyle: {
            color: '#ffffff',
            fontSize: 18
        }
    }],
    center: ['55%', '60%'],
    // 系列列表
    series: [{
        name: '圆环图系列名称', // 系列名称
        type: 'pie',
        center: ['50%', '50%'], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
        radius: ['30%', '65%'], // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
        hoverAnimation: true, // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
        color: color, // 圆环图的颜色
        label: { // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等.
            normal: {
                show: true, // 是否显示标签[ default: false ]
                fontSize: 16,
                position: 'inside', // 标签的位置。'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。'inside','inner' 同 'inside',饼图扇区内部。'center'在饼图中心位置。
                formatter: (b) => {
                    return b.data.per + '%'; // 标签内容
                }
            }
        },
        labelLine: { // 标签的视觉引导线样式,在 label 位置 设置为'outside'的时候会显示视觉引导线。
            normal: {
                show: true, // 是否显示视觉引导线。
                length: 30, // 在 label 位置 设置为'outside'的时候会显示视觉引导线。
                length2: 10 // 视觉引导项第二段的长度。
            }
        },
        data: data // 系列中的数据内容数组。
    }, {
        name: '圆环图系列名称', // 系列名称
        type: 'pie',
        center: ['50%', '50%'], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
        radius: ['30%', '65%'], // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
        hoverAnimation: true, // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
        color: color, // 圆环图的颜色
        label: { // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等.
            normal: {
                show: true, // 是否显示标签[ default: false ]
                color: '#fff',
                fontSize: 16,
                position: 'outside', // 标签的位置。'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。'inside','inner' 同 'inside',饼图扇区内部。'center'在饼图中心位置。
                formatter: '{b}\n{c}家' // 标签内容
            }
        },
        labelLine: { // 标签的视觉引导线样式,在 label 位置 设置为'outside'的时候会显示视觉引导线。
            normal: {
                show: true, // 是否显示视觉引导线。
                length: 30, // 在 label 位置 设置为'outside'的时候会显示视觉引导线。
                length2: 10 // 视觉引导项第二段的长度。
            }
        },
        data: data // 系列中的数据内容数组。
    }]
};