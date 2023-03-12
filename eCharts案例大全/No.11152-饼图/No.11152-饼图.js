option = {
    title : {
        text: '售后原因分析',
        //subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        left: 10,
        //right: 10,
        top: 20,
        //bottom: 20,
        data: ['多拍/错拍/不想要','重新拍','七天无理由退换','商品破损/污渍','快递超时/停滞/未送达']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            label: {
                normal: {
                    //formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    formatter: '{b|{b}：}{c}  {per|{d}%}  ',
                    //backgroundColor: '#eee',
                    //borderColor: '#aaa',
                    //borderWidth: 1,
                    //borderRadius: 4,
                    rich: {
                        // a: {
                        //     color: '#999',
                        //     lineHeight: 22,
                        //     align: 'center'
                        // },
                        // hr: {
                        //     borderColor: '#aaa',
                        //     width: '100%',
                        //     borderWidth: 0.5,
                        //     height: 0
                        // },
                        // b: {
                        //     fontSize: 16,
                        //     lineHeight: 33
                        // },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:335, name:'多拍/错拍/不想要'},
                {value:310, name:'重新拍'},
                {value:234, name:'七天无理由退换'},
                {value:135, name:'商品破损/污渍'},
                {value:1548, name:'快递超时/停滞/未送达'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
