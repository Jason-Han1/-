option = null;
app.title = '环形图';
option = {
    backgroundColor:'#333',
        grid: {
            y:'30',
            x:'10',
            x2: '10',
            y2: '0',
            containLabel: true
        },
        title: {
        text: '今年业绩完成情况表(万元)',
        x: 'center',
        y: 'top',
        itemGap: 20,
        textStyle : {
            color : '#d9efff',
            fontFamily : '微软雅黑',
            fontSize : 18,
            fontWeight : 'bolder'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}: ({d}%)<br/> {c}万元"
    },
    series: [
        //认购完成01
        {
            name:'认购完成率',
            center: ['center', 'center'],
            type:'pie',
            radius: ['40%', '60%'],    
            hoverAnimation: false,         
            itemStyle:{
               normal:{
                   label:{
                       show:true,
                       distance:0.7,
                            textStyle:{color:'#d9efff',fontSize:"10"},
                            formatter:'{b} {b|{d}%} \n {a|{c}万元}',
                            rich: {
                                a: {
                                    color: "yellow",
                                },
                                b:{
                                    color:'pink',
                                },
                            }
                   },
               },
            },

            data:[
                {value:6000, name:'已完成',itemStyle:{
                     color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 1,
                        color: "#3893e5" // 0% 处的颜色
                    }, 
                     {
                        offset: 0,
                        color: "#00ffff" // 100% 处的颜色
                    }], false),
                },},
                {value:2000, name:'未完成',itemStyle:{
                    color:'#888f9b',
                    
                }},
            ]
        },
        //认购完成02
        {
            name:'认购完成率',
            center: ['center', 'center'],
            type:'pie',
            radius: ['36%', '34%'], 
            hoverAnimation: false,
            label: {
                    normal: {
                        show: true,
                        position: 'center',
                        formatter:function (argument) {
                            var html;
                            html='目标值\r\n\r\n'+'233,100';
                            return html;
                        },
                        textStyle:{
                          fontSize: 20,
                            color:'#e8ecf0'
                        },

                    }
                },
            data:[
                {value:6000, name:'目标值',itemStyle:{

                    color:'#7d879c',
                //      color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                //         offset: 0,
                //         color: "#fff600" // 0% 处的颜色
                //     }, 
                //      {
                //         offset: 1,
                //         color: "#fed000" // 100% 处的颜色
                //     }], false),
                // },},
    //  {value:2000, name:'未完成',itemStyle:{
    //                 color:'#888f9b',
                }},
            ]
        },
    
    ]
};
;