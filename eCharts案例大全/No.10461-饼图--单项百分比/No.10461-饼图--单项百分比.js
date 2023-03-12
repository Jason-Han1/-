option = optionPie('女性', 0.73, '#00D6D5');
// 饼图  optionPie('标题', 数值, '#cccccc') // 数值：0.00-1 范围
function optionPie(titletext, percent, subtextColor) {
    return {
        title: {
            text: titletext, // 标题
            subtext: (percent * 100) + '%', // 小标题
            x: 'center',
            y: '40%',
            textStyle: { // 标题样式
                color: '#00ffff',
                fontSize: 56
            },
            subtextStyle: { // 副标题样式
                color: '#ffff00',
                fontSize: 48
            }
        },
        animationDuration: 1000, // 动画时间
        series: [{
            name: 'main',
            type: 'pie',
            radius: ['90%', '85%'],
            label: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: percent,
                itemStyle: {
                    normal: {
                        color: subtextColor, // 圆环的颜色
                    }
                }
            }, {
                value: 1 - percent,
                itemStyle: {
                    normal: {
                        color: '#3E2A60', // 剩余的圆环颜色
                    }
                }
            }]
        }]
    }
};
