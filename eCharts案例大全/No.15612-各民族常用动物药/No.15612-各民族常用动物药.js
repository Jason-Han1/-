option = {
    title : {
        text: '各民族常用动物药',
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
        data:['藏族 334','彝族 145','景颇族 49','哈尼族 46','怒族 33','傈僳族 31','傈僳族 31','羌族 25','纳西族 18','白族 5','普米族 1']
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
                {value:334, name:'藏族 334'},
                {value:145, name:'彝族 145'},
                {value:49, name:'景颇族 49'},
                {value:46, name:'哈尼族 46'},
                {value:33, name:'怒族 33'},
                {value:31, name:'傈僳族 31'},
                {value:25, name:'羌族 25'},
                {value:18, name:'纳西族 18'},
                {value:5, name:'白族 5'},
                {value:1, name:'普米族 1'}
            ]
        },
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 110],
            center : ['75%', '50%'],
            roseType : 'area',
            data:[
                {value:334, name:'藏族 334'},
                {value:145, name:'彝族 145'},
                {value:49, name:'景颇族 49'},
                {value:46, name:'哈尼族 46'},
                {value:33, name:'怒族 33'},
                {value:31, name:'傈僳族 31'},
                {value:25, name:'羌族 25'},
                {value:18, name:'纳西族 18'},
                {value:5, name:'白族 5'},
                {value:1, name:'普米族 1'}
            ]
        }
    ]
};
