option = {
    title: {
        text: '138w+关注者',
        subtext: '张佳玮知乎关注者（金字塔图）'
        //爬取张佳玮138w+知乎关注者：数据可视化
        //https://zhuanlan.zhihu.com/p/28890605?refer=c_122608198
        //http://echarts.baidu.com/gallery/editor.html?c=funnel
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['10w+','1w-10w','1k-1w','100-1k','10-100','1-10','0']
    },
    calculable: true,
    series: [
        {
            name:'漏斗图',
            type:'funnel',
            left: '10%',
            top: 60,
            //x2: 80,
            bottom: 60,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min:0,
            max: 766170,
            minSize: '0%',
            maxSize: '100%',
            sort: 'none',
            gap: 2,
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                },
                emphasis: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            labelLine: {
                normal: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            },
            data: [
                {value: 190, name: '10w+'},
                {value: 1380, name: '1w-10w'},
                {value: 6948, name: '1k-1w'},
                {value: 33436, name: '100-1k'},
                {value: 169730, name: '10-100'},
                {value: 766170, name: '1-10'},
                {value: 402817, name: '0'}        
            ]
        }
    ]
};