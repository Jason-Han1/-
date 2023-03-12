option = {
    title : {
        text: '国际旅游外汇收入构成',
        subtext: '2016年为例',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['游览','市内交通','住宿','餐饮','商品销售','娱乐','邮电通讯','长途交通','其他服务']
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
            radius : [20, 150],
            center : ['25%', '50%'],
            roseType : 'radius',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:67.1, name:'游览'},
                {value:40.4, name:'市内交通'},
                {value:116.3, name:'住宿'},
                {value:96.2, name:'餐饮'},
                {value:209.5, name:'商品销售'},
                {value:77.1, name:'娱乐'},
                {value:28.9, name:'邮电通讯'},
                {value:446.5, name:'长途交通'},
                {value:118, name:'其他服务'}
            ]
        },
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 150],
            center : ['75%', '50%'],
            roseType : 'area',
            data:[
                {value:67.1, name:'游览'},
                {value:40.4, name:'市内交通'},
                {value:116.3, name:'住宿'},
                {value:96.2, name:'餐饮'},
                {value:209.5, name:'商品销售'},
                {value:77.1, name:'娱乐'},
                {value:28.9, name:'邮电通讯'},
                {value:446.5, name:'长途交通'},
                {value:118, name:'其他服务'}
            ]
        }
    ]
};
