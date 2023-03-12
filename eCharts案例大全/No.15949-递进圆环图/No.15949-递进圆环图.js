var dataStyle = { 
    normal: {
        label: {show:false},
        labelLine: {show:false},
        shadowBlur: 40,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
    }
};
var placeHolderStyle = {
    normal : {
        color: 'rgba(0,0,0,0)',
        label: {show:false},
        labelLine: {show:false}
    },
    emphasis : {
        color: 'rgba(0,0,0,0)'
    }
};
option = {
   backgroundColor: '#f4f2e3',
     color: ['#85b6b2', '#6d4f8d','#cd5e7e', '#e38980','#f7db88'],
    tooltip : {
        show: true,
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        itemGap:12,
        data:['01','02','03','04','05','06']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            name:'Line 1',
            type:'pie',
            clockWise:false,
            radius : [180,200],
            itemStyle : dataStyle,
            hoverAnimation: false,
            data:[
                {
                    value:300,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                },
                {
                    value:30,
                    name:'01'
                },
                {
                    value:50,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
         
            ]
        }, 
         {
            name:'Line 2',
            type:'pie',
            clockWise:false,
            radius : [160, 180],
            itemStyle : dataStyle,
            hoverAnimation: false,
           
            data:[
                {
                    value:270,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                },
                {
                    value:30, 
                    name:'02'
                },
                {
                    value:80,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'Line 3',
            type:'pie',
            clockWise:false,
            hoverAnimation: false,
            radius : [140, 160],
            itemStyle : dataStyle,
           
            data:[
                {
                    value:240,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                },
                {
                    value:30, 
                    name:'03'
                },
                {
                    value:110,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'Line 4',
            type:'pie',
            clockWise:false,
            hoverAnimation: false,
            radius : [120, 140],
            itemStyle : dataStyle,
           
            data:[
                {
                    value:210,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                },
                {
                    value:30, 
                    name:'04'
                },
                {
                    value:140,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
         {
            name:'Line 5',
            type:'pie',
            clockWise: false,
            hoverAnimation: false,
            radius : [100, 120],
            itemStyle : dataStyle,
            
            data:[
                {
                    value:180,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                },
                {
                    value:30, 
                    name:'05'
                },
                {
                    value:170,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },

    ]
};