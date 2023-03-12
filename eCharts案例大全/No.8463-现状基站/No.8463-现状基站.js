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
      
        top: '100%',
        data:['基站总量','移动','联通','电信']
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
            name:'基站总量',
            type:'pie',
            clockWise:false,
            radius : [180,200],
            itemStyle : dataStyle,
            hoverAnimation: false,
       
            data:[
                {
                    value:4655,
                    name:'基站总量'
                },
                {
                    value:50,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
         
            ]
        }, 
         {
            name:'移动',
            type:'pie',
            clockWise:false,
            radius : [160, 180],
            itemStyle : dataStyle,
            hoverAnimation: false,
           
            data:[
                {
                    value:150, 
                    name:'移动'
                },
                {
                    value:60,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'联通',
            type:'pie',
            clockWise:false,
            hoverAnimation: false,
            radius : [140, 160],
            itemStyle : dataStyle,
           
            data:[
                {
                    value:80, 
                    name:'联通'
                },
                {
                    value:50,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'电信',
            type:'pie',
            clockWise:false,
            hoverAnimation: false,
            radius : [120, 140],
            itemStyle : dataStyle,
           
            data:[
                {
                    value:45, 
                    name:'电信'
                },
                {
                    value:30,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        // {
        //    name:'Line 5',
        //    type:'pie',
        //    clockWise: false,
        //    hoverAnimation: false,
        //    radius : [100, 120],
        //    itemStyle : dataStyle,
        //    
        //    data:[
        //        {
        //            value:30, 
        //            name:'05'
        //        },
        //        {
        //            value:30,
        //            name:'invisible',
        //            itemStyle : placeHolderStyle
        //        }
        //    ]
        //},

    ]
};