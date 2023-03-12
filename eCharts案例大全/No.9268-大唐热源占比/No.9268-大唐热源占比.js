option = {
    title : {
        text: '大唐热源占比',
        //subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
      color: ['#1891FF', '#12C3C3', '#FBCD14', '#F14864', '#8542E1', '#7DA6FF', '#4AC312', '#FB8F14', '#F148E7'],
    legend: {
        orient: 'vertical',
        x: 'left',
        left: 10,
        //right: 10,
        top: 20,
        //bottom: 20,
        data: ['二电一期','二电二期','二电三期','二电南线','大唐一期','大唐二期']
    },
    series : [
        {
            name: '大唐热源占比',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            label: {
                normal: {
                  
                    // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    formatter: '{b|{b}：}{c}   {per|{d}%} ',
                    // backgroundColor: '#eee',
                    // borderColor: '#aaa',
                    // borderWidth: 1,
                    // borderRadius: 4,
                    rich: {
                        // a: {
                        //     color: '#999',
                        //     lineHeight: 22,
                        //     align: 'center'
                        // },
                        // hr: {
                        //     borderColor: '#aaa',
                        //     width: '100%',
                        //     borderWidth: 0.5,
                        //     height: 0
                        // },
                        // b: {
                        //     fontSize: 16,
                        //     lineHeight: 33
                        // },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 13,
                            // center: ['50%', '50%']
                            //  position: 'inside',
                        }
                    }
                }
            },
            data:[
                {value:335, name:'二电一期',selected:true},
                {value:310, name:'二电二期',selected:true},
                {value:234, name:'二电三期',selected:true},
                {value:135, name:'二电南线',selected:true},
                {value:154, name:'大唐一期',selected:true},
                {value:148, name:'大唐二期',selected:true}
            ],
            itemStyle: {
                 normal: {
                     
                // borderWidth: 4,
                // borderColor: '#ffffff',
                // label:{
                //       position: 'inside',
                // }
            },
            
           
                // normal: {
                //     label: {
                //         show: true,
                //         position: 'inside',
                //         // formatter: '{b} \n ({d}%)'
                //     }
                // },
            
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
                
            },
             labelLine: {
            normal: {
                length: 5,
                length2: 1,
                smooth: true,
            }
        },
        }
    ]
};
