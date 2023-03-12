var colorList = ['#FE4444','#FFA611','#66DA38','#3FA1FF',];
option = {
    // backgroundColor:'#ffffff',
    calculable: true,
    color:colorList,
    series: [
        {
            name:'漏斗图',
            type:'funnel',
            left: '5%',
            right:'35%',
            top: '10%',
            bottom: '10%',
            minSize: '0%',
            maxSize: '100%',
            sort: 'ascending',
            label: {
                show: true,
                formatter: "{a|{c}}\n{b|{b}}",
                rich: {
                    a: {
                        color: '#333333',
                        fontSize: 14
                    },
                    b: {
                       color: 'rgba(101,166,196,1)',
                       fontSize: 12
                    }
                }
            },
            labelLine: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            data: [
                {value: 2998, name: '店铺Page总数'},
                {value: 4987, name: '在售商品数'},
                {value: 6000, name: '商品总数'},
            ]
        }
    ]
};
myChart.resize({width:344,height:224})