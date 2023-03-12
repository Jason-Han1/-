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
            startAngle :0,
            data:[
                {
                    value:30,
                    name:'01',
                    itemStyle:{
                        normal:{
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#85b6b2'
                            }, {
                                offset: 1,
                                color: '#6d4f8d'
                            }])
                        }
                    }
                },
                {
                    value:10,
                    name:'01',
                    itemStyle:placeHolderStyle
                },
            ]
        }

    ]
};