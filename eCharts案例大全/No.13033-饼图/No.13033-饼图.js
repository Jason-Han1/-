option = {
    backgroundColor: '#fff',
    tooltip: {
        show:false,
        trigger: 'none',
        formatter: "{b} : {d}% <br/> {c}"
        
    },

    series: [{
            name: '访问来源',
            type: 'pie',
            hoverAnimation: false,
            radius: ['20%', '29%'],
            color: ['#1c9a4c', '#3bb844', '#84d15e', ' #ccf46c'],



            label: {
                normal: {
                    textStyle: {
                        color: '#646b74',
                        fontSize: 15,
                        fontWeight: '400',
                        
                    },
                formatter: '{a|{b}}{hr|}\n{d|{d}%}',
                    rich: {
                    a: {
                        fontSize: 17,
                        color: '#525b66',
                        align: 'left',
                        padding: [10,0],
                    },
                   
                    d: {
                         fontSize: 17,
                        color: '#525b66',
                        align: 'left',
                        padding: [-15,0],
                     },
                    
                    },
                },
            },
    

                    // labelLine: {
                    //     normal: {

                    //         length: 30,
                    //         length2: 30,
                    //         lineStyle: {
                    //             color: '#ccc'
                    //         },
                    //     },
                    // },
                
            itemStyle:{
                borderWidth:2, 
                borderColor:'#fff',
                                                          
            },


            data: [
                {
                    value:40, name:'确认',
                     labelLine: {
                        normal: {

                            length: 0,
                            length2: 40,
                            lineStyle: {
                                color: '#ccc'
                            },
                        },
                    },
                    
                },
                {
                    value:40, name:'自动清除',
                     labelLine: {
                        normal: {

                            length: 10,
                            length2: 60,
                            lineStyle: {
                                color: '#ccc'
                            },
                        },
                    },
                    
                },
                {
                    value:40, name:'手工清除',
                     labelLine: {
                        normal: {

                            length: 40,
                            length2: 20,
                            lineStyle: {
                                color: '#ccc'
                            },
                        },
                    },
                    
                },{
                    value:40, name:'生成事件',
                     labelLine: {
                        normal: {

                            length: 0,
                            length2: 40,
                            lineStyle: {
                                color: '#ccc'
                            },
                        },
                    },
                    
                },



            ]
        }

    ]
};