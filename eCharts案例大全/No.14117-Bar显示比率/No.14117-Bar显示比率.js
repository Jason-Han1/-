labelTop = {
    normal : {
        label : {
            show : true,
            position : 'center',
            formatter : '{style|{b}\n}',
            textStyle: {
                baseline : 'top'
            },
            fontSize:6,
            rich:{
                style:{
                    color:'#5C656F',
                    fontSize:14,
                }
            }
        },
        labelLine : {
            show : false
        },
    }
};
labelFromatter = {
    normal : {
        label : {
            formatter : function (params){
                return 100 - params.value + '%'
            },
            textStyle: {
                baseline : 'top'
            },
            color:'#000'
        }
    },
}
labelBottom = {
    normal : {
        color: '#eee',
        label : {
            show : true,
            position : 'center',
            color:'#00152A',
            fontSize:22,
        },
        labelLine : {
            show : false
        }
    },
};
radius = [45, 55];
option = {
    backgroundColor:'#fff',
    legend: {
        x : 'center',
        y : 'center',
        show:false,
        data:[
            '东区', '西区', '南区', '北区', '中区'
        ]
    },
    color:['#399FFD','#3BBBBA','#E6C335','#E17184','#9B69DF'],
    grid:{
      top:'middle',
      left:'5%',
      right:'5%'
    },
 
   series : [
        {
            type : 'pie',
            center : ['10%', '50%'],
            radius : radius,
            x: '0%', // for funnel
            itemStyle : labelFromatter,
            data : [
               
                {name:'东区', value:25,itemStyle : labelTop},
                {name:'other', value:75, itemStyle : labelBottom},
            ]
        },
        {
            type : 'pie',
            center : ['30%', '50%'],
            radius : radius,
            x:'20%', // for funnel
            itemStyle : labelFromatter,
            data : [
                
                {name:'西区', value:24,itemStyle : labelTop},
                {name:'other', value:76, itemStyle : labelBottom},
            ]
        },
        {
            type : 'pie',
            center : ['50%', '50%'],
            radius : radius,
            x:'40%', // for funnel
            itemStyle : labelFromatter,
            data : [
               
                {name:'南区', value:14,itemStyle : labelTop},
                {name:'other', value:86, itemStyle : labelBottom},
            ]
        },
        {
            type : 'pie',
            center : ['70%', '50%'],
            radius : radius,
            x:'60%', // for funnel
            itemStyle : labelFromatter,
            data : [
                
                {name:'北区', value:11,itemStyle : labelTop},
                {name:'other', value:89, itemStyle : labelBottom},
            ]
        },
        {
            type : 'pie',
            center : ['90%', '50%'],
            radius : radius,
            x:'80%', // for funnel
            itemStyle : labelFromatter,
            data : [
               
                {name:'中区', value:27,itemStyle : labelTop},
                {name:'other', value:73, itemStyle : labelBottom},
            ]
        },
       
    ]
};