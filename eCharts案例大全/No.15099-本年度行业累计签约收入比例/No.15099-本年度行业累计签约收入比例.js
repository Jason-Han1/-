var datas2=[
  
    {
        "business_name": "IT/互联网",
        "obj_amount": "1015.00000",
        "name": "IT/互联网",
        "value": "1015.00000"
    },
    {
        "business_name": "交通运输",
        "obj_amount": "5519.10000",
        "name": "交通运输",
        "value": "5519.10000"
    },
    {
        "business_name": "其他",
        "obj_amount": "9410.87800",
        "name": "其他",
        "value": "9410.87800"
    },
    {
        "business_name": "农林牧渔",
        "obj_amount": "5963.00000",
        "name": "农林牧渔",
        "value": "5963.00000"
    },
    {
        "business_name": "建筑房地产",
        "obj_amount": "8.00000",
        "name": "建筑房地产",
        "value": "8.00000"
    },
    {
        "business_name": "政府及公共事业",
        "obj_amount": "948509.41300",
        "name": "政府及公共事业",
        "value": "948509.41300"
    },
    {
        "business_name": "文体教育",
        "obj_amount": "13666.57000",
        "name": "文体教育",
        "value": "13666.57000"
    },
    {
        "business_name": "文化传媒",
        "obj_amount": "1001.00000",
        "name": "文化传媒",
        "value": "1001.00000"
    },
    {
        "business_name": "服务业",
        "obj_amount": "813.43400",
        "name": "服务业",
        "value": "813.43400"
    },
    {
        "business_name": "生产加工制造",
        "obj_amount": "8994.00000",
        "name": "生产加工制造",
        "value": "8994.00000"
    },
    {
        "business_name": "能源矿产",
        "obj_amount": "1531.90000",
        "name": "能源矿产",
        "value": "1531.90000"
    },
    {
        "business_name": "金融业",
        "obj_amount": "2711.20000",
        "name": "金融业",
        "value": "2711.20000"
    }
]
var datas=[
    {
        "business_name": "互联网+政务",
        "obj_amount": "2374.68300",
        "name": "互联网+政务",
        "value": "2374.68300"
    },
    {
        "business_name": "互联网+教育",
        "obj_amount": "2950.00000",
        "name": "互联网+教育",
        "value": "2950.00000"
    },
    {
        "business_name": "互联网+金融",
        "obj_amount": "90.00000",
        "name": "互联网+金融",
        "value": "90.00000"
    },
    {
        "business_name": "物联网",
        "obj_amount": "4.00000",
        "name": "物联网",
        "value": "4.00000"
    }
];
option = {
    backgroundColor:'black',
                title : {
                    text: '本年度行业累计签约收入比例',
                    x:'center',
                    textStyle:{
                        color:'#ffffff'
                    }
                },
                 tooltip: {
                    trigger: 'item',
                    formatter: function(value){
                        return value.data.business_name+':'+(value.value)*1+'('+value.percent+'%)';
                    }
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:datas,                        
                        label: {
                            normal: {
                                textStyle: {
                                    fontSize: 12
                                },
                                formatter: function (param) {
                                    // console.log(param.percent)
                                    return param.name + param.percent + '%';
                                }
                            }
                        },
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        labelLine:{
                            normal:{
                                length:1,
                                length2:2
                            }
                        },
                        color:['#4ab1de','#e17a7d','#eba65e','#f1d059','#ebb614','#35cff3']
                    }
                ]
            };