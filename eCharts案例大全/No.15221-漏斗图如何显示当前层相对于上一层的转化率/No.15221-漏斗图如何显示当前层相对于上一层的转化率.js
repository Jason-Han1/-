// data 数据先按 value 排个序
 var data = [
    {value: 380798, name: 'page_jump_out_num'},
    {value: 5820524, name: 'page_view_num'},
    {value: 7834, name: 'payment_goods_num'},
    {value: 7220, name: 'payment_order_num'},
    {value: 53572, name: 'place_order_goods_num'},
    {
        value: 29564, name: 'place_order_num'
    }
];

option = {
    title: {
        text: '漏斗图',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'item',
        formatter: function(param) {
            var rate = param.dataIndex === data.length - 1
                ? 1 // 第一层的转化率
                : data[param.dataIndex].value / data[param.dataIndex + 1].value;
            return param.seriesName + ':' + (rate * 100).toFixed(2) + '%';
        }
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['展现','点击','访问','咨询','订单']
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
            min: 0,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
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
            data: data
        }
    ]
};
