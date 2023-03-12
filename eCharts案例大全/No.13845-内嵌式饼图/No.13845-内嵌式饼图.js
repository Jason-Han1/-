//行业分析//行业交易规模/饼图10
option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'item',
        backgroundColor:'rgba(255,255,255,0.8)',
        extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
        textStyle:{
            color:'#6a717b',
        },
        formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    series: [
        {
            name:'货运总量',
            type:'pie',
            hoverAnimation: false,
            legendHoverLink:false,
            radius: ['40%', '42%'],
           color: [ '#32E890','#67DFFF','#8D34EC', '#3084EB',  '#FFD366', '#F136AF','#FF875C', ],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
            },
            tooltip: {
               show:false,
            },
            data:[
                {value:27316904, name:''},
                {value:1793876, name:''},
                {value:27077568, name:''},
                {value:2795194.75, name:''},
                {value:2147429, name:''},
                {value:2772841, name:''},
                {value:21086524, name:''},
            ]
        },
        {
            name:'货运总量',
            type:'pie',
            radius: ['42%', '55%'],
            color: [ '#32E890','#67DFFF','#8D34EC', '#3084EB',  '#FFD366', '#F136AF','#FF875C', ],
            label: {
                normal: {
                    formatter: '{b}',
                },
            },
            data:[
                {value:27316904, name:' 青岛'},
                {value:1793876, name:'威海'},
                {value:27077568, name:'日照'},
                {value:2795194.75, name:'潍坊'},
                {value:2147429, name:'东营'},
                {value:2772841, name:'滨州'},
                {value:21086524, name:'烟台'},
              
            ]
        }
    ]
};


