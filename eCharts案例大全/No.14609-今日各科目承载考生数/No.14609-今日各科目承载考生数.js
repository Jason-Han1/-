var percentColor = '#ffc72b'; //百分比颜色
var innerColor = '#00eca8'; //绿色 
var innerColor = '#eb297d';//红色
var innerColor = '#fbcc56';//黄色
/*---------------------缩放----------------------------*/
var scale = 1;
option = {
    title: [{
        text: '总体占比',
        x: '50%',
        y: '62%',
        textAlign: 'center',
        textStyle: {
            color: '#fff',
            textAlign: 'center',
            fontSize: 18 * scale,
            fontWeight: 'bold'
        },
    }],
    backgroundColor: '#031f2d',
    legend: {
        show: true,
        align: 'right',
        icon: 'none',
        textStyle: {
            color: '#3fdaff',
            fontSize: 16 * scale
        },
        data: ['高等教育学', '未通过']
    },
    series: [
        //内圈圆环
        {
            name: 'Line 0',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '55%'],
            radius: ['80%', '73%'],
            data: [{
                value: 10,
                name: '高等教育学',
                itemStyle: {
                    normal: {
                        color: innerColor
                    }
                },
                label: {
                    normal: {
                        formatter: '{d}%',
                        position: 'center',
                        padding: [0, 0, 10, 0],
                        align: 'left',
                        show: true,
                        textStyle: {
                            fontSize: 34 * scale,
                            fontWeight: 'bold',
                            color: percentColor
                        }
                    }
                }
            }, {
                value: 5,
                name: '错误',
                itemStyle: {
                    normal: {
                        color: "none"
                    }
                }
            }]
        }
    ],
};