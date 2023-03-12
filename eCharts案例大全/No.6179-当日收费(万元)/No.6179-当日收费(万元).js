option = {
    backgroundColor:'#2E2E46',
    title:{
        text:'当日收费(万元)',
       // subtext:'共1000个',
        show:true,
        textStyle:{
            color:'#fff'
        },
        top:'25%',
        left:'center'
    },
    series: [
        {
            center: [
                "50%",
                "50%",
            ],
            radius: [
                "30%",
                "31%"
            ],
            clockWise: false,
            hoverAnimation: false,
            type: "pie",
            avoidLabelOverlap: false,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            fontSize: 40,
                            color:'#ffffff',
                        },
                        position: "center"
                    },
                    labelLine: {
                        show: false
                    },
                    color: "#454568",
                    borderColor: "#454568",
                    borderWidth: 16,
                    
                },
            },
            data: [
                {
                    value: '55',
                    //name: "55"
                },
                {
                    name: "55",
                    value: 80,
                    itemStyle: {
                        normal: {
                            label: {
                                "show": false
                            },
                            labelLine: {
                                "show": false
                            },
                           color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#00feff'
                                    },
                                    {
                                        offset: 1,
                                        color: '#5dd054'
                                    }
                                ]
                            ),
                            borderColor:  new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#23EB7B'
                                    },
                                    {
                                      offset:0.5,
                                      color:"#21EF99"
                                    },
                                    {
                                        offset: 1,
                                        color: '#00feff'
                                    }
                                ]
                            ),
                            borderWidth: 16
                        },
                    },
                        label: {
                      normal: {
                          textStyle: {
                              fontSize: 45,
                              fontWeight: 'bold',
                              color: '#23EB7B'
                          }
                      }
                  }
                }
            ]
        }
    ]
};