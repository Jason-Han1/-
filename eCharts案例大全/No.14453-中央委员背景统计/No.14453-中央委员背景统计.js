option = {
    title : {
        text: '中央委员背景统计',
        subtext: '根据已知数据',
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
                {value:14, name:'学士'},
                {value:47, name:'硕士'},
                {value:62, name:'博士'},
                {value:37, name:'军人'},
                {value:30, name:'知青下乡、基层干部'},
                {value:9, name:'工人'},
                {value:3, name:'民办教师'},
                {value:2, name:'企业'}
            ]
        },
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 110],
            center : ['75%', '50%'],
            roseType : 'area',
            data:[
                {value:14, name:'学士'},
                {value:47, name:'硕士'},
                {value:62, name:'博士'},
                {value:37, name:'军人'},
                {value:30, name:'知青下乡、基层干部'},
                {value:9, name:'工人'},
                {value:3, name:'民办教师'},
                {value:2, name:'企业'}
            ]
        }
    ]
};
