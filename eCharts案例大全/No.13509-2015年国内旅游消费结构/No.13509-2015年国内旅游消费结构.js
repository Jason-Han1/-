option = {
       backgroundColor: '#3c83c',
    title : {
        text: '2015年国内旅游消费结构',
        subtext: '数据来源：中国旅游研究院2015旅游市场调查',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "<br/>{b} : {d}%"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['景区门票','交通','餐饮','购物','文化娱乐','住宿','其他']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
        
    },
    calculable : true,
    series : 
        {
            name:'面积模式',
            type:'pie',
            radius : [50, 200],
            center : ['50%', '50%'],
            roseType : 'area',
            data:[
                {value:20, name:'景区门票'},
                {value:20, name:'交通'},
                {value:22, name:'餐饮'},
                {value:19, name:'购物'},
                {value:08, name:'文化娱乐'},
                {value:12, name:'住宿'},
                {value:01, name:'其他'}
            ]
        }
};
