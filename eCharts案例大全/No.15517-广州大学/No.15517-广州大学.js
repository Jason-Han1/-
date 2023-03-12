dataStyle = { 
    normal: {
        label: {show:true},
        labelLine: {show:true,
            length: 100,
            smooth: 0.5
        },
        shadowBlur: 40,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
    }
};
placeHolderStyle = {
    normal : {
        color: 'rgba(0,0,0,0)',
        label: {show:false},
        labelLine: {show:false}
    },
    emphasis : {
        show: false,
        color: 'rgba(0,0,0,0)'
    }
};
option = {
    
     title:{
        text: "广州大学数据分析",
        subtext: "三年男女占比变化-Acring"
    },
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
     color: ['#33A6B8', '#D0104C','#66BAB7', '#DB4D6D','#69B0AC', "#E87A90"],
    tooltip : {
        show: true,
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        itemGap:12,
        data:['15届','14届','13届']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            // dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [{
      name: "15届",
      type : "pie",
      clockWise: false,
      radius: [200, 220],
      itemStyle: dataStyle,
      hoverAnimation: false,
      data:[{
          value : 2182,
          name : "15届男生"
      },{
          value: 3001,
          name: "15届女生",
          itemStyle: placeHolderStyle
      }]
    },
        {
            name:'15届',
            type:'pie',
            clockWise:false,
            radius : [180,200],
            itemStyle : dataStyle,
            hoverAnimation: false,
       
            data:[
                 {
                    value:2182,
                    name:'15届男生',
                    itemStyle : placeHolderStyle
                },
                {
                    value:3001,
                    name:'15届女生'
                }
            ]
        }, 
         {
            name:'14届',
            type:'pie',
            clockWise:false,
            radius : [160, 180],
            itemStyle : dataStyle,
            hoverAnimation: false,
           
            data:[
                {
                    value:1806, 
                    name:'14届男生'
                },
                {
                    value:1834,
                    name:'14届女生',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'14届',
            type:'pie',
            clockWise:false,
            hoverAnimation: false,
            radius : [140, 160],
            itemStyle : dataStyle,
           
            data:[
                {
                    value:1806,
                    name:'14届男生',
                    itemStyle : placeHolderStyle
                },
                {
                    value:1834, 
                    name:'14届女生'
                }
                
            ]
        },
        {
            name:'13届',
            type:'pie',
            clockWise:false,
            hoverAnimation: false,
            radius : [120, 140],
            itemStyle : dataStyle,
           
            data:[
                {
                    value:1916, 
                    name:'13届男生'
                },
                {
                    value:1823,
                    name:'13届女生',
                    itemStyle : placeHolderStyle
                }
            ]
        },
         {
            name:'13届',
            type:'pie',
            clockWise: false,
            hoverAnimation: false,
            radius : [100, 120],
            itemStyle : dataStyle,
            
            data:[
                {
                    value:1916,
                    name:'13届男生',
                    itemStyle : placeHolderStyle
                },
                {
                    value:1823, 
                    name:'13届女生'
                }
                
            ]
        },

    ]
};