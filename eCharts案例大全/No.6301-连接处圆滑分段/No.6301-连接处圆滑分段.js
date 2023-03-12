var data = [];
    var color = ['#00ffff', '#00cfff', '#006ced', '#ffe000', '#ffa800', '#ff5b00', '#ff3000'];
for (var i = 0; i < 4; i++) {
    data.push({
        value: 40,
        name: 'xx',
          itemStyle: {
          normal: {
            borderWidth: 2,
            shadowBlur: 20,
            borderColor: color[i],
            shadowColor: color[i]
          }
        }
    }, {
        value: 2,
        name: '',
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
            }
        }
    });
}

option = {
    title: {
        text: '总计 (次)',
        x: 'center',
        top: 350,
        textStyle: {
            fontSize: 20,
            color: '#2D3C56',
            fontWeight: 500
        }
    },
    grid: {
        left: 0
    },
    graphic: { // 图形中间文字
        type: 'text',
        left: 'center',
        top: 280,
        style: {
            text: '2,222,222',
            textAlign: 'center',
            fill: '#000',
            fontSize: 30,
            fontWeight: 'bolder'
        }
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: [108, 110],//差值要足够小 一般<=2
        hoverAnimation: false,
        silent: true,
        label: {
            show: false,
            position: 'center'
        },
        data: data
    }]
};