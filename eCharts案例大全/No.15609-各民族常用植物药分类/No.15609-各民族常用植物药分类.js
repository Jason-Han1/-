option = {
    title : {
        text: '各民族常用植物药分类',
        subtext: '南丁格尔玫瑰图',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['草本 2976','木本 1092','藤本 241','菌藻 59']
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
    series : [
        {
            name:'半径模式',
            type:'pie',
            radius : [30, 110],
            center : ['25%', '50%'],
            roseType : 'radius',
            data:[
                {value:1976, name:'草本 2976'},
                {value:1092, name:'木本 1092'},
                {value:241, name:'藤本 241'},
                {value:59, name:'菌藻 59'},
            ]
        },
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 110],
            center : ['75%', '50%'],
            roseType : 'area',
            data:[
                {value:1976, name:'草本 2976'},
                {value:1092, name:'木本 1092'},
                {value:241, name:'藤本 241'},
                {value:59, name:'菌藻 59'},
            ]
        }
    ]
};
