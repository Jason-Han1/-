option = {
    title : {
        text: '各民族常用矿物药',
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
        data:['藏族 143','彝族 18','羌族 6']
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
                {value:143, name:'藏族 143'},
                {value:18, name:'彝族 18'},
                {value:6, name:'羌族 6'},
            ]
        },
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 110],
            center : ['75%', '50%'],
            roseType : 'area',
            data:[
                {value:143, name:'藏族 143'},
                {value:18, name:'彝族 18'},
                {value:6, name:'羌族 6'},
            ]
        }
    ]
};
