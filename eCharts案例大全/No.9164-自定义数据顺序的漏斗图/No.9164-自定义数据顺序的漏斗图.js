option = {
    title: {
        text: '自定义数据顺序的漏斗图',
        left: 'center',
        top: 'top'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c}"
    },
    toolbox: {
        orient: 'vertical',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    calculable: true,
    series: [
        {
            name: '漏斗图',
            type: 'funnel',
            width: '40%',
            height: '80%',
            left: '30%',
            top: '10%',
            sort: 'none',
            //min的值设置为value中最小的值
            min:10,
            data:[
                {value: 10, name:'数据1'},
                {value: 100, name:'数据2'},
                {value: 30, name:'数据3'},
                {value: 90, name:'数据4'},
                //value值 = 数据4.value * (数据4.value/数据3.value)
                {value: 270, name:'', itemStyle:{height:0},label:{show:false},labelLine:{show:false}},
            ]
        },
    ]
};
