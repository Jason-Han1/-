option = {
    backgroundColor:"#fff",
    title : {
        text: '纳税人分布情况',
        x:'center',
        textStyle: {
            color: '#fff',
            fontSize: 22,
            fontWeight:500
        },
        bottom: '2%'
    },
    color: ['#fff95b','#ff826f','#fb6dd0','#c393f3'],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    calculable : true,
    series : [
        {
            name:'',
            type:'pie',
            radius : [20, 80],
            center:['center','45%'],
            label:{
                normal:{
                    formatter: '{b|{b}} \n {d|{d}%}',
                    rich:{
                        b:{
                            fontSize:16,
                            align: 'left',

                        },
                        d:{
                            fontSize:16,
                            align: 'left',
                            padding: 2
                        }
                    }
                },


            },
            roseType : 'area',
            data:[

                {value:20, name:'外埠纳税人'},
                {value:35, name:'临时税务\n登记纳税人'},
                {value:30, name:'单位纳税人'},
                {value:40, name:'个体经营纳税人'}
            ]
        }
    ]
};