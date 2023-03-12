app.title = '正负条形图';

option = {
    tooltip : {
        trigger: 'item',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        //formatter:'{c0}<br/>{c1}'+'Math.ads(-1)'
        formatter:function(params){
            //return params.seriesName;
            //alert(params.color)
            var res = params.name+':'+Math.abs(params.value)
            return res;
        }
    },
    legend: {
        data:['利润', '每万人医疗机构床位数/个', '居民人均可支配收入/千元']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'value',
            axisLabel:{
                formatter:function(value,index){
                    return Math.abs(value)
                }
            }
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['江西','湖南','内蒙古','河南','山东','吉林','河北','福建',
                     '海南','安徽','贵州','黑龙江','江苏','广东','湖北','山西',
                     '云南','重庆','陕西','四川','浙江','新疆','北京','辽宁',
                     '青海','甘肃','广西','宁夏','天津','上海']
        }
    ],
    series : [
        /*{
            name:'利润',
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[200, 170, 240, 244, 200, 220, 210]
        },*/
        {
            name:'居民人均可支配收入/千元',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    ///show: true
                }
            },
            data:[16.73417, 17.62174, 20.55934, 15.69518, 20.86421, 17.52039, 
            16.6474,23.33085,17.47646,16.79552,12.37106,17.40439,27.17277,
            25.68496,18.28323,16.53832,13.77221,18.3519,15.83675,
            15.79401,32.65757,15.09662,44.48857,22.82015,14.37398,12.18471,
            15.55708,15.90678,28.83229,45.96583]
        },
        {
            name:'每万人医疗机构床位数/个',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    //show: true,
                    //position: 'left'
                }    
            },
            data:[-38.54, -46.94, -48.07, -45.66, -50.32, -48.43, -41.39,-41.37,
            -35.85,-39.13,-47.61,-49.33,-46.39,-35.55,-49.69,-47.56,-44.84,-49.64,-49.19,
            -52.63,-41.84,-60.65,-49.18,-55.09,-51.11,-44.95,-39.67,-47.59,-39.22,-47.33]
        }
    ]
};
