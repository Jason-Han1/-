var colorList = ['#FE4444','#FFA611','#66DA38','#3FA1FF',];
option = {
    backgroundColor:'#ffffff',
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
                        color: 'rgba(222,240,255,1)',
                        fontSize: 30
                    },
                    b: {
                       color: 'rgba(101,166,196,1)',
                       fontSize: 14
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
                {value: 1, name: '1966年5月至1976年10月'},
                {value: 2, name: '1976年11月至1978年12月'},
                {value: 3, name: '1979年1月至2002年10月'},
                {value: 4, name: '2002年11月至2012年10月'},
                {value: 6, name: '    2012年11月及以后'},
            ]
        }
    ]
};
