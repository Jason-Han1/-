option = {
    
    backgroundColor: '#020933',
    
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
   //     formatter: function(params){return Math.max(params.value,-params.value)}
        
        formatter: function (params) {
                    return params[0].name +
                        "<br>生产中：" + params[0].value + 
                        "<br>等待中：" +  -params[1].value;
                }
    },
    legend: {
        data:['常住人口', '户籍人口'],
        //left: "right",
        textStyle: {
            color: '#fff',
            fontSize: 13,
             
        },
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
            axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 20,
                color:'#53a8fa'
                }
        },
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['成都市','绵阳市','自贡市','攀枝花市','泸州市','德阳市','广元市','遂宁市','内江市','乐山市']
        ,axisLabel: {
            textStyle: {
                fontSize: 22,
                color:'#53a8fa'
                }
        },
            
        }
    ],
    series : [

        {
            name:'常住人口',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data:[400, 241,360, 320, 302, 341, 374, 390, 450, 420]
        },
        {
            name:'户籍人口',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    formatter: function(params){return -params.value}
                }
            },
            data:[-120, -180,-120, -120, -132, -101, -134, -190, -230, -210]
        }
    ]
};
