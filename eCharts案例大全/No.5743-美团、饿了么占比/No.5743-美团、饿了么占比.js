

var m2R2Data= [
               {value:335, legendname:'美团',name:"美团：335 占比：32.43%",itemStyle:{color:"#8d7fec"}},
               {value:310, legendname:'饿了么',name:"饿了么: 310 占比：30.01%",itemStyle:{color:"#5085f2"}},
               {value:234, legendname:'饭盟小店',name:"饭盟小店: 234 占比：22.65%",itemStyle:{color:"#e75fc3"}},
               {value:154, legendname:'自营店',name:"自营店: 154 占比：14.91%",itemStyle:{color:"#f87be2"}},

            ];


 option = {
    title: [
    {
        text: '',
        textStyle: {
            fontSize: 12,
            color: "black"
        },
        left: "2%"
    },    
    {
        text: '合计',
        subtext: 12312+'单',
        textStyle:{
            fontSize:20,
            color:"black"
        },
        subtextStyle: {
            fontSize: 20,
            color: 'black'
        },
        textAlign:"center",
        x: '34.5%',
        y: '44%',
    }],
    tooltip: {
        trigger: 'item',
        formatter:function (parms){
          var str=  parms.seriesName+"</br>"+
            parms.marker+""+parms.data.legendname+"</br>"+
            "订单数量："+ parms.data.value+"</br>"+
            "占比："+ parms.percent+"%";
            return  str ;
        }
    },
    legend: {
        type:"scroll",
        orient: 'vertical',
        left:'70%',
        align:'left',
        top:'middle',
        textStyle: {
            color:'#8C8C8C'
        },
        height:250
    },
    series: [
        {
            name:'指标分析：',
            type:'pie',
            center: ['35%', '50%'],
            radius: ['40%', '65%'],
             clockwise: false, //饼图的扇区是否是顺时针排布
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'outter',
                     formatter:function (parms){
                         return parms.data.legendname
                     }
                }
            },
            labelLine: {
                normal: {
                  length:5,
                  length2:3,
                  smooth:true,
                }
            },
            data:m2R2Data
        }
    ]
};