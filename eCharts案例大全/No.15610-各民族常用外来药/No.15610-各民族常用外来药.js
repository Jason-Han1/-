option = {
    title : {
        text: '各民族常用外来药',
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
        data:['藏族 26','傣族 10','德昂族 3','佤族 2','拉祜族 2','景颇族 2','阿昌族 2','门巴族 2','珞巴族 2','基诺族 1','布朗族 1','彝族 1']
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
                {value:26, name:'藏族 26'},
                {value:10, name:'傣族 10'},
                {value:3, name:'德昂族 3'},
                {value:2, name:'佤族 2'},
                {value:2, name:'拉祜族 2'},
                {value:2, name:'景颇族 2'},
                {value:2, name:'阿昌族 2'},
                {value:2, name:'门巴族 2'},
                {value:2, name:'珞巴族 2'},
                {value:1, name:'基诺族 1'},
                {value:1, name:'布朗族 1'},
				{value:1, name:'彝族 1'},
            ]
        },
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 110],
            center : ['75%', '50%'],
            roseType : 'area',
            data:[
                {value:26, name:'藏族 26'},
                {value:10, name:'傣族 10'},
                {value:3, name:'德昂族 3'},
                {value:2, name:'佤族 2'},
                {value:2, name:'拉祜族 2'},
                {value:2, name:'景颇族 2'},
                {value:2, name:'阿昌族 2'},
                {value:2, name:'门巴族 2'},
                {value:2, name:'珞巴族 2'},
                {value:1, name:'基诺族 1'},
                {value:1, name:'布朗族 1'},
				{value:1, name:'彝族 1'},
            ]
        }
    ]
};
