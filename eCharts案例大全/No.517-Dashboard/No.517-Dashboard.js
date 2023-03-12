var option = {
    color:["#0AF2FE","#FE2D19","#FC9900","#616163"],
    series: [
        {
            type: 'pie', // 饼图
            clockWise:false,
            radius:[
                105,
                110
            ],
            hoverAnimation:false,
           itemStyle:{
               borderRadius:5,
               normal:{
                   label:{
                        position: 'outside',
                        formatter: function(params){
                            if(params.name !== '') {
                                return '{name|' + params.name + '}' + '\n\n{value|'+params.value+'}';
                            }else {
                                return '';
                            }
                        },
                        align: 'left',
                        rich: {
                            name:{
                                fontSize: 14,
                                fontFamily: 'PingFang SC',
                                fontWeight: 500,
                                color: '#999999',
                            },
                            value: {
                                fontSize: 20,
                                fontFamily: 'D-DIN',
                                fontWeight: 400,
                            }
                        },
                    },
                    labelLine: {
                        width: 4,
                        show: true,
                        length: 30,
                        length2: 60,
                        color: '#0AF2FE'
                    },
               }
           },
           tooltip: {
                show: true
            },
            data: [
                {
                    "value":186586,
                    "name":"正常电梯数量",
                    "itemStyle":{
                        "normal":{
                            "borderWidth":5,
                            "borderRadius":20,
                            "shadowBlur":20,
                            "borderColor":"#0AF2FE",
                            "shadowColor":"#0AF2FE"
                        }
                    }
                },
                {
                    "value":"3278.75",
                    "name":"",
                    "itemStyle":{
                        "normal":{
                            "label":{
                                "show":false
                            },
                            "labelLine":{
                                "show":false
                            },
                            "color":"rgba(0, 0, 0, 0)",
                            "borderColor":"rgba(0, 0, 0, 0)",
                            "borderWidth":0
                        }
                    }
                },
                {
                    "value":13115,
                    "name":"停用电梯数量",
                    "itemStyle":{
                        "normal":{
                            "borderWidth":5,
                            "borderRadius":20,
                            "shadowBlur":20,
                            "borderColor":"#FE2D19",
                            "shadowColor":"#FE2D19"
                        }
                    }
                },
                {
                    "value":"3278.75",
                    "name":"",
                    "itemStyle":{
                        "normal":{
                            "label":{
                                "show":false
                            },
                            "labelLine":{
                                "show":false
                            },
                            "color":"rgba(0, 0, 0, 0)",
                            "borderColor":"rgba(0, 0, 0, 0)",
                            "borderWidth":0
                        }
                    }
                }
            ]
        },
    ]
};