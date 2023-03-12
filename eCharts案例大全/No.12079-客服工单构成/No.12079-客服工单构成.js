option = {
    title : {
        text: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
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
            name:'',
            type:'pie',
            radius : [20, 110],
            roseType : 'radius',
            label: {
                normal: {
                    show: true
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
                {value:9, name:'故障停电'},
                {value:10, name:'欠费停电'},
                {value:21, name:'重复来电'},
                {value:2, name:'停电敏感'},
                {value:4, name:'处理不满意'},
                {value:6, name:'工单超期预警'},
                {value:4, name:'其他'}
            ]
        },
        
    ]
};
