option = {
     title: {
        text: '单位:组',
        textStyle:{
            fontSize: 8,
            color:'#e8e8dc',
        },
    },
        grid:{
        y2:'20',
        x:'15',
        y:'20',
        x2:'10',
    },
     legend: {
        show: true,
        data:['本年'],
        x:'45',
        itemWidth: 15,
        itemHeight:'10',
        data: [
            {
                name:'本年',
                textStyle:{fontWeight:'bold', color:'#e8e8dc',fontSize: '8'},
            },
        ]
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月','7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick:'false',
            axisLabel: {
                interval:'0',
            show: true, 
            textStyle: {
                color: '#d2d4da',
                fontSize:8,
            },
        }
    },
    yAxis: {
        boundaryGap:false,
        show:true,
        axisLine:false,
         axisTick:'false',
        axisLine: {show:true,
        },
        type: 'value',
        splitLine: {
            lineStyle: {
                color:'#193252'
            },
        },
        axisLabel:{
            textStyle: {
                color: 'none'
            }
      },

    },
    series: [{
        name:'本年',
        data: [100,200,110,200,300,500,100,150,330,250,110,128],
        type: 'line',
         symbol:'circle',
         symbolSize: 8,
        borderColor:'#0eddfd',
       itemStyle: {
         normal: {
        color:'#fed900',
        label: {
            show: true,
            position: "top",
            textStyle:{
                fontSize:'8',
            },
        },
        labelLine: {
            show: false,
        }
    } ,

}
    }]
};
;