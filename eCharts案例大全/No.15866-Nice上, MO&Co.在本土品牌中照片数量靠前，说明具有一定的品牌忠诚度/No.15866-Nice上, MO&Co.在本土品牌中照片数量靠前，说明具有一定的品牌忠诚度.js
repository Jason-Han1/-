deemph_color = 'rgb(165,165,165)'
emph_color = 'rgb(79,129,189)'
height = 300
bar_category_gap = '28%'

option1 = {
    title : {
        text: 'Nice上, MO&Co.在本土品牌中照片数量靠前，说明具有一定的品牌忠诚度',
    },
    grid: {
        left: '0',
        containLabel: true,
        height:height,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis : [
        {
            type : 'category',
            axisLabel: {
                interval: 0,
                margin:10,
                rotate:30
            },
            data : [
                'Zara','优衣库','Only',	'欧时力','Vero Moda',
                {
                    value: 'Mo&Co.',
                    textStyle: {
                        fontWeight:'bold'
                    }
                },
                '乐町','韩都','茵曼','Amii'],
        }],
    yAxis : [
        {
            name: '照片数量',
            type : 'value',
            splitLine: {show: false},
        },
    ],
    series : [
        {
            name: '销售额',
            type: 'bar',
            barCategoryGap: bar_category_gap,
            data: [210,130,30,20,10,
                {
                    value : 10,
                    itemStyle:{
                        normal: {
                            color: emph_color
                        }
                    }
                },5,5,0,0
            ],
            itemStyle: {
                normal: {
                    color: deemph_color
                }
            },
        },
    ]
};


option = option1