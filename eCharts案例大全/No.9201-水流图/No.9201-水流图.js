var value = 0.56;
var index = 1;
var textName = '完成占比';
var colors = [
    ['#00d5ee', '#076c83'],
    ['#fe3f4f', '#7d273a']
];
var bgColors = ['#0d263c', '#26172c'];
//波浪的层数
var data = [value, value, value];
option = {
    backgroundColor: '#051c45',
    graphic: [{
        type: 'group',
        left: 'center',
        bottom: 10,
        children: [{
            type: 'text',
            z: 100,
            left: '10',
            top: 'middle',
            style: {
                fill: colors[index][0],
                text: textName + (value * 100).toFixed(1) + '%',
                font: '14px Microsoft YaHei'
            }
        }]
    }],
    series: [{
        type: 'liquidFill',
        radius: '65%',
        center: ['50%', '40%'],
        data: data,
        color: colors[index],
        outline: {
            //外边框
            show: true,
            borderDistance: 4, //边框距离
            itemStyle: {
                borderWidth: 2,
                borderColor: colors[index][0]
                // shadowBlur: 3,
                // shadowColor: colors[colorIndex][0]
            }
        },
        backgroundStyle: {
            borderWidth: 2, //内边框宽度
            borderColor: '#051c45', //colors[colorIndex][0], //背景内边框
            color: bgColors[index], //背景颜色
            shadowColor: bgColors[index], //阴影
            shadowBlur: 5 //阴影模糊
        },
        label: {
            normal: {
                formatter: (value * 100).toFixed(1) + '%',
                textStyle: {
                    fontSize: 18
                },
                insideColor: '#fff' //colors[colorIndex][0]
            }
        }
    }]
};