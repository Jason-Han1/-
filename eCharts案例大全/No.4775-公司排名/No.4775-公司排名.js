var dataAxis = ['角鲨烷', '小叶海藻（SARGASSUM FUSIFORME）提取物', '牛油果树（BUTYROSPERMUM PARKII）果脂', '水解胶原', '羟苯甲酯', '辛酸/癸酸甘油三酯', '环聚二甲基硅氧烷', 'C12-15 醇苯甲酸酯', '山梨坦倍半油酸酯', '硬脂酸镁', '羟苯丙酯', '燕麦（AVENA SATIVA）肽', '银耳（TREMELLA FUCIFORMIS）多糖', '羊毛脂', '积雪草（CENTELLA ASIATICA）提取物', '虎杖（POLYGONUM CUSPIDATUM）根提取物', '咪唑烷基脲', '母菊（CHAMOMILLA RECUTITA）花提取物', '泛醇', '矿油'];
var data = [120, 130, 140, 150, 180, 190, 200, 220, 250, 260, 280, 310, 350, 370, 380, 400, 420, 450, 480, 490];
var xMax = 500;
var dataShadow = [];

for (var i = 0; i < data.length; i++) {
    dataShadow.push(xMax);
}

option = {
    backgroundColor: '#012248',
    tooltip: {
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },

    title: {
        show:true,
        text: '深圳企业标准公司参与情况',
        textStyle: {
                    color: '#ccc',
                    fontSize: 25
                },
                x: 'center',
                top: 20
    },
    yAxis: {
        data: dataAxis,


        axisLabel: {
            inside: true,
            fontSize: 10,
            textStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: true
        },
        axisLine: {
            show: true
        },
        z: 10
    },
    xAxis: {

        axisLine: {
            show: true
        },
        axisTick: {
            show: true
        },
        axisLabel: {
            fontSize: 10,
            textStyle: {
                color: '#999'
            }
        }
    },

    series: [{ // For shadow
            type: 'bar',
            itemStyle: {
                normal: {
                    
                    color: 'rgba(0,0,0,0.05)'
                }
            },
            barGap: '-100%',
            barCategoryGap: '40%',
            data: dataShadow,
            animation: true
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                
                                color: '#6950a1'
                            },
                            {
                                offset: 0.5,
                                color: '#12235c'
                            },
                            {
                                offset: 1,
                                color: '#12235c'
                            }
                        ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: '#6950a1'
                            },
                            {
                                offset: 0.7,
                                color: '#6950a1'
                            },
                            {
                                offset: 1,
                                color: '#6950a1'
                            }
                        ]
                    )
                }
            },
            data: data
        }
    ]
};