var colorList = ['#FE4444','#FFA611','#66DA38','#3FA1FF','#000000'];
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
                formatter: function(params){
                    console.log(params);
                    return params.name+'（'+params.data.num+'户）\n'+params.value+'亿\n'+params.percent+'%';
                },
                
                
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
                length: 100,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            data: [
                {value: 2.14, name: '1亿以上',num:'2'},
                {value: 0.5, name: '5000万-1亿',num:'23'},
                {value: 0.96, name: '1000-5000万',num:'21'},
                {value: 0.26, name: '500-1000万',num:'42'},
                {value: 1.35, name: '500万以下',num:'2112'},
            ]
        }
    ]
};