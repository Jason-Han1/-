option = {
    color: ['#229aff','#fcbf5d','#ff686b','#a3f29d','#00b1f2','#fff225','#ff93c3','#23e8c7','#fca04e','#4cccff','#b8f049','#c593ff','#0be6c1','#fbd65b','#73e3ff','#ff937c','#6aeaa4','#388bff','#fce75d','#ffbab3','#ff5662','#4fe995','#d9bfff','#ffc43d','#6b8dfe','#fc5bb4','#26d8ef','#8ca1ff','#b5e2e2','#ffa69e','#d0b0ff'],
    tooltip: {
        trigger: 'item',
        backgroundColor:'rgba(255,255,255,0.8)',
        extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
        textStyle:{
            color:'#666',
        },
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    toolbox: {
        feature: {
            saveAsImage: {show: true}
        }
    },
    title: {
        text: '交易规模',
        subtext: '2017年10月',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            //fontSize: 16
            color:'#333'
        }
    },
    backgroundColor:'#fff',
    // legend: {
    //     data:['交通旅游','休闲娱乐','医疗健康','教育培训','农资绿植','生活服务','图书音像','其他','箱包皮具','汽车用品','医药保健','珠宝礼品','虚拟商品','运动户外','个护化妆','母婴','餐饮美食','电脑办公','家用电器','手机数码','食品酒水','家居家装','服装服饰']
    // },
    series: [{
        name: '零售量',
        type: 'pie',
        radius: ['25%', '40%'],
        avoidLabelOverlap: true,
        itemStyle: {
            normal: {
                borderColor: '#FFFFFF',//描边色
                borderWidth: 3
            }
        },
        label: {
            normal: {
                show: true,
                //formatter: '{b}\n{d}%',
                textStyle: {
                    color: '#666'
                },
            },
            emphasis: {
                show: true,
                textStyle: {
                    //fontSize: '16',
                },
            }
        },
        labelLine: {
            normal: {
                show: true
            }
        },
        data: [{
            name: '交通旅游',
            value: '20'
        },{
            name: '休闲娱乐',
            value: '60'
        },{
            name: '医疗健康',
            value: '40'
        },{
            name: '教育培训',
            value: '40'
        },{
            name: '农资绿植',
            value: '30' 
        },{
            name: '生活服务',
            value: '20'
        },{
            name: '图书音像',
            value: '10'      
        },{
            name: '其他',
            value: '60'
        },{
            name: '箱包皮具',
            value: '40'
        },{
            name: '汽车用品',
            value: '40'
        },{
            name: '医药保健',
            value: '30' 
        },{
            name: '珠宝礼品',
            value: '20'
        },{
            name: '虚拟商品',
            value: '10'      
        },{
            name: '运动户外',
            value: '60'
        },{
            name: '个护化妆',
            value: '40'
        },{
            name: '母婴',
            value: '40'
        },{
            name: '餐饮美食',
            value: '30' 
        },{
            name: '电脑办公',
            value: '20'
        },{
            name: '家用电器',
            value: '10'      
        },{
            name: '手机数码',
            value: '60'
        },{
            name: '食品酒水',
            value: '40'
        },{
            name: '家居家装',
            value: '40'
        },{
            name: '服装服饰',
            value: '30' 
        }]
    }]
};