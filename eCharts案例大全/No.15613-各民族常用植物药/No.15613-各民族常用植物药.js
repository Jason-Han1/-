option = {
    title : {
        text: '各民族常用植物药',
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
        data:['藏族 2622','彝族 1107','傈僳族 754','哈尼族 726','纳西族 587','拉祜族 405','景颇族 403','白族 388','羌族 288','怒族 170','普米族 59','独龙族 25']
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
                {value:2622, name:'藏族 2622'},
                {value:1107, name:'彝族 1107'},
                {value:754, name:'傈僳族 754'},
                {value:726, name:'哈尼族 726'},
                {value:587, name:'纳西族 587'},
                {value:405, name:'拉祜族 405'},
                {value:403, name:'景颇族 403'},
                {value:388, name:'白族 388'},
                {value:288, name:'羌族 288'},
                {value:168, name:'怒族 170'},
                {value:59, name:'普米族 59'},
                {value:25, name:'独龙族 25'},
            ]
        },
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 110],
            center : ['75%', '50%'],
            roseType : 'area',
            data:[
                {value:2622, name:'藏族 2622'},
                {value:1107, name:'彝族 1107'},
                {value:754, name:'傈僳族 754'},
                {value:726, name:'哈尼族 726'},
                {value:587, name:'纳西族 587'},
                {value:405, name:'拉祜族 405'},
                {value:403, name:'景颇族 403'},
                {value:388, name:'白族 388'},
                {value:288, name:'羌族 288'},
                {value:168, name:'怒族 170'},
                {value:59, name:'普米族 59'},
                {value:25, name:'独龙族 25'},
            ]
        },
    ]
};
