option = {
    color:['#f36119','#ff9921','#20c8ff','#2cb7ff','#1785ef'],
    series: [
        {
            name:'漏斗图',
            type:'funnel',
            left: '10%',
            top: 15,
            bottom: 15,
            width: '80%',
            minSize: '20%',
            sort: 'descending',//'ascending'，'descending'，'none'
            label: {
                position: 'inside',
                fontSize:14,
                formatter:function(params){//自动提示工具
                    console.log(params)
                    return params.value+'个'+params.name;
                }
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 0
            },
            emphasis: {
                label: {
                    fontSize: 20//悬停时文字大小
                }
            },
            data: [
                {value: 10, name: '项目线索'},
                {value: 12, name: '项目机会'},
                {value: 6, name: '投标项目'},
                {value: 4, name: '投标保证金总额'},
                {value: 2, name: '投标保证金未退还总额'}
            ]
        }
    ]
};
