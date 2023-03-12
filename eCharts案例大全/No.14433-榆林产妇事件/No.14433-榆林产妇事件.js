option = {
    title : {
        text: '榆林产妇事件',
        subtext: '责任分布',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['医院','家属','医院更大','家属更大','平均']
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
            radius : [20, 110],
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
                {value:59, name:'医院'},
                {value:118, name:'家属'},
                {value:24, name:'医院更大'},
                {value:39, name:'家属更大'},
                {value:60, name:'平均'},
            ]
        },
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 110],
            center : ['75%', '50%'],
            roseType : 'area',
            data:[
                {value:59, name:'医院'},
                {value:118, name:'家属'},
                {value:24, name:'医院更大'},
                {value:39, name:'家属更大'},
                {value:60, name:'平均'},
            ]
        }
    ]
};
