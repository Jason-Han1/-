var data = [
        {
            name:'公共预算',
            value:335,
            icon: 'rect'
        },
        {
            name:'国土基金',
            value:310,
            icon:'rect'
        },
        {
            name:'专项基金',
            value:234,
            icon:'rect'
        }
    ];
    
getVlue=function(name){
    var curData = null;
    curData = data.filter(function(item){
        return item.name === name;
    })
    return curData && curData[0].value;
}
option = {
    color:['#3E84FF', '#3ED3FE', '#FFBA27'],
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
    legend:{
        show: true,
        orient: 'vertical',
        top: '43%',
        left: '75%',
        itemWidth: 8,
        itemHeight: 8,
        data:data,
        formatter: function(param){
            return param + '{cusStyle|'+ getVlue(param) +'}'
        },
        textStyle:{
            rich:{
                cusStyle:{
                    fontSize: 16,
                    padding:[0, 0, 0, 20]
                }
            }
        }
    },
    series: [
        {
            name:'',
            type:'pie',
            radius: ['30%', '50%'],
            avoidLabelOverlap: false,
            symbol:'rect',
            symbolSize:[8, 8],
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter: function(param){
                        return '{a|1,219}{b|亿元}\n{c|总规模}'
                    },
                    rich:{
                        a:{
                            color: '#333',
                            fontSize: 24,
                            fontWeight: 'bold'
                        },
                        b:{
                            color: '#666',
                            padding: [-3, 0, 0, 0]
                        },
                        c:{
                            color:'#999',
                            lineHeight: 30
                        }
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:data
        }
    ]
};
