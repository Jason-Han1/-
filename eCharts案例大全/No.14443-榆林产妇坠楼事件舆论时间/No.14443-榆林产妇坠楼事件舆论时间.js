option = {
    title : {
        text: '榆林产妇坠楼事件舆论时间',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['9月5日','9月6日','9月7日','9月8日','9月9日','9月10日','9月11日','9月12日']
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
                {value:4, name:'9月5日'},
                {value:62, name:'9月6日'},
                {value:82, name:'9月7日'},
                {value:72, name:'9月8日'},
                {value:27, name:'9月9日'},
                {value:28, name:'9月10日'},
                {value:23, name:'9月11日'},
                {value:1, name:'9月12日'}
            ]
        },
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 110],
            center : ['75%', '50%'],
            roseType : 'area',
            data:[
                {value:4, name:'9月5日'},
                {value:62, name:'9月6日'},
                {value:82, name:'9月7日'},
                {value:72, name:'9月8日'},
                {value:27, name:'9月9日'},
                {value:28, name:'9月10日'},
                {value:23, name:'9月11日'},
                {value:1, name:'9月12日'}
            ]
        }
    ]
};
