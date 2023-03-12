option = {
   /* tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    */
    legend: {
        orient: 'horizontal',
        selected:'false',
        x: 'center',
        y:'54%',
        icon:'rect',
       itemWidth :14,
        data:['20~25岁','25~30岁','30~35岁','30岁以上']
    },
    series: [
         {
            name:'生育二孩年龄占比',
            type:'pie',
            radius:'40%',
            avoidLabelOverlap: false,
            startAngle :180,
            itemStyle:{
                normal:{
                    borderColor:"transparent",
                    borderWidth:20
                },
                emphasis:{
                    borderColor:"transparent",
                    borderWidth:20
                }
            },
            label: {
                normal: {
                    show: false,
                    position: 'inside',
                    formatter:'{c}%'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:50, name:'生育二孩年龄占比',itemStyle:{normal:{color:'#1e6b97'}}},
                {value:50, name:'',itemStyle:{normal:{color:'#EFEFEF'},emphasis:{color:'#EFEFEF'}}, label:{normal: {show: false}}}
            ]
        },
        {
            name:'具体比例',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            startAngle :180,
            color:['#c88541','#c44a25','#1a5d87','#8ead2c'],
            label: {
                normal: {
                    show: false,
                    position: 'inside',
                    formatter:'{c}%'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
                
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:336, name:'20~25岁'},
                {value:310, name:'25~30岁'},
                {value:234, name:'30~35岁'},
                {value:135, name:'30岁以上'},
                {value:1014, name:'',itemStyle:{normal:{color:'#EFEFEF'},emphasis:{color:'#EFEFEF'}}, label:{normal: {show: false}}}
            ]
        }
    ]
};