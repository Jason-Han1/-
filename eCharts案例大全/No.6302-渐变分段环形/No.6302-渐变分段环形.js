var data = [];
var colorList = [{
        c1: '#FCCF31',
        c2: '#F55555'
    },
    {
        c1: '#ABDCFF',
        c2: '#0396FF'
    },
    {
        c1: '#ABDCFF',
        c2: '#0396FF'
    },
    {
        c1: '#ABDCFF',
        c2: '#0396FF'
    },
    {
        c1: '#ABDCFF',
        c2: '#0396FF'
    },
    {
        c1: '#ABDCFF',
        c2: '#0396FF'
    },
    {
        c1: '#90F7EC',
        c2: '#32CCBC'
    },
    {
        c1: '#E2B0FF',
        c2: '#9F44D3'
    }
]
for (var i = 0; i < 4; i++) {
    data.push({
        value: 40,
        name: 'xx',
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
        radius: [105, 110],
        hoverAnimation: false,
        silent: true,
        // avoidLabelOverlap: false,
        label: {
            show: false,
            position: 'center'
        },
        itemStyle: {
            normal: {
                color: function(params) {
                    console.log(params)
                    return new echarts.graphic.LinearGradient(1, 0, 0, 0, [{ // 颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        offset: 0,
                        color: colorList[params.dataIndex].c1
                    }, {
                        offset: 1,
                        color: colorList[params.dataIndex].c2
                    }]);
                }
            }
        },
        data: data
    }]
};