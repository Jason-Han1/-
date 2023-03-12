var value = 0.8;
var data = [value];
var option = {
    backgroundColor: '#020f4e',
title: [{
    show:false,
        text: '80%',
        left: '50%',
        top: '45%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#010c2b',
            fontSize: 46,
            textAlign: 'center',
        }
    }],
  
    series: [{
        type: 'liquidFill',
        color:[new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [{
                        offset: 0,
                        color: '#3976f2'
                    },
                        {
                            offset: 1,
                            color: '#4781fa'
                        },
                    ]
                )],
                radius: '70%',
                shape: 'circle',
                center: ['50%', '50%'],
                data: data,
                backgroundStyle: { // 内图 背景色 边
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                            offset: 0,
                            color: '#2f38b3'
                        },
                            {
                                offset: 1,
                                color: '#395de4'
                            },
                        ]
                    )
                },
                outline: {
                    show:true,
                    borderDistance: 2, //边框距离
                    itemStyle: {
                        borderWidth: 2,
                        borderColor: '#6248da',
                    }
                },
                label: {
                    normal: {
                        color:'white',
                        insideColor:'white',
                        fontSize:'20px'
                    }
                }
            }]
};