var plantCap = [{
    name: '过渡仓温度',
    value: '800'
}, {
    name: '排料温度',
    value: '150'
}, {
    name: '每小时投料量',
    value: '10'
}, {
    name: '窑尾负压',
    value: '-55'
}, {
    name: '电机转速',
    value: '760'
}, {
    name: '煅烧带温度',
    value: '500'
}, {
    name: '窑头温度',
    value: '666'
},{
    name:'二次风转速',
    value:"1100"
}];
var dataRangeList=[{
    name:'过渡仓温度',
    range:[110,1350],
    unit:'℃',
    offset: [5, 70]
}, {
    name: '排料温度',
    range: [30, 120],
    unit:'℃',
    offset: [38, 15]
}, {
    name: '每小时投料量',
    range:[0, 25],
    unit:'t/h',
    offset: [13, 30]
}, {
    name: '窑尾负压',
    range:[-45, -5],
    unit:'Pa',
    offset: [20, 100]
}, {
    name: '电机转速',
    range:[650, 1200],
    unit:'r/min',
    offset: [70, 17]
}, {
    name: '煅烧带温度',
    range: [110, 1350],
    unit:'℃',
    offset: [45, 105]
}, {
    name: '窑头温度',
    range:[500, 1000],
    unit:'℃',
    offset: [90, 50]
},{
    name:'二次风转速',
    range:[400,1200],
    unit:'r/min',
    offset:[75, 95]
}]
var datas = [];
var scatterChangeData=[
    {"煅烧带温度":"1629.332435","窑头温度":"8008.5791066","窑尾温度":"889.2533913","窑头负压":"-13.05208958","窑尾负压":"-27.49793445","过渡仓温度":"794.4836498","排料温度":"104.8058228","二次风转速":"462.6774131","电机转速":"860.1908243","每小时投料量":"13.20013379"},
    {"煅烧带温度":"1148.966078","窑头温度":"914.3966791","窑尾温度":"1060.840939","窑头负压":"-0.370034962","窑尾负压":"-44.89323923","过渡仓温度":"1141.681524","排料温度":"75.78547461","二次风转速":"975.280138","电机转速":"1165.840343","每小时投料量":"8.129950129"},
    {"煅烧带温度":"1589.411183","窑头温度":"884.2022576","窑尾温度":"1182.008457","窑头负压":"-4.605446111","窑尾负压":"-34.25039165","过渡仓温度":"711.5585378","排料温度":"63.66215703","二次风转速":"967.0480237","电机转速":"788.5137323","每小时投料量":"6.432888199"},
    {"煅烧带温度":"1103.540863","窑头温度":"879.7202962","窑尾温度":"1134.026109","窑头负压":"-2.385525634","窑尾负压":"-27.83503472","过渡仓温度":"943.1293979","排料温度":"34.28524456","二次风转速":"896.6131519","电机转速":"1039.517157","每小时投料量":"15.84427779"},
];
var outrangeData=[];
function getTime(){     	//获取时间
	var date=new Date();

	var year=date.getFullYear();
	var month=date.getMonth()+1;
	var day=date.getDate();

    var hour=date.getHours();
    var minute=date.getMinutes();
    var second=date.getSeconds();
    if (hour<10) {
    	hour='0'+hour;
    }
    if (minute<10) {
    	minute='0'+minute;
    }
    if (second<10) {
    	second='0'+second;
    }

    var time=year+'/'+month+'/'+day+'/'+hour+':'+minute+':'+second
    return time;
    
}
function getScatterData(data){
    var _datas=[];
    for (var i = 0; i < dataRangeList.length; i++) {
        var item= dataRangeList[i],
            itemRange = item.range,
            itemColor,
            itemOpacity,
            _data;
        
        for(var k in data){
            if(k == item.name){
                _data=Number(data[k]).toFixed(2);//value保留两位小数
                if(_data > itemRange[1] || item.value < itemRange[0]){
                    //故障
                    itemColor="rgba(0,0,0,0.5)";
                    itemOpacity = 0.8;
                    var _oneFalutData={
                        time: getTime(),
                        name: item.name,
                        data: _data,
                        range: itemRange
                    }
                    outrangeData.push(_oneFalutData)
                }else{
                    var _num = (itemRange[1]- itemRange[0])/5
                    if(item.unit == "℃"){
                            if(itemRange[0]<_data && _data<=itemRange[0]+_num*1){
                                itemColor = "#fb6969"
                            }else if(itemRange[0]+_num*1<_data && _data<=itemRange[0]+_num*2){
                                itemColor = "#f54646"
                            }else if(itemRange[0]+_num*2<_data && _data<=itemRange[0]+_num*3){
                                itemColor="#ef4747"
                            }else if(itemRange[0]+_num*3<_data && _data<=itemRange[0]+_num*4){
                                itemColor="#e41818"
                            }else if(itemRange[0]+_num*4<_data && _data<=itemRange[1]){
                                itemColor = "#a90909"
                            }
                    }else{
                        itemColor="rgba(104,184,55, 1)";
                        itemOpacity = 0.8
                    }
                }
                _datas.push({
                    name: _data+item.unit + '\n' + item.name,
                    value: item.offset,
                    symbolSize: 62,
                    label: {
                        normal: {
                            textStyle: {
                                fontSize: 11
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: itemColor,
                            opacity: 0.8,
                            shadowColor: itemColor,
                            shadowBlur: 15
                        }
                    },
                })
            }
        }    
    }
    return _datas
};
var timeName=['正常运行时间：10h','停窑时间：0.5h','停料保温时间：1h','故障时间：0.2h' ]
option = {
    
    backgroundColor:"#fff",
    grid:{
      top: 0,
      bottom: 60,
      left: 50,
      right: 50
    },
    xAxis: [{
        type:'category',
        show: false,
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90]
    },{
        show: false,
        type: 'value',
        max:100,
    },{
        inverse: true,
        show: false
    }],
    yAxis: [{
        type: 'value',
        show: false,
        position:'left',
        max: 150
    },{
        type:'category',
        position: 'right',
        inverse: true,
        show: false
    }],
    series: [{
        name: '窑',
        type: 'line',
        xAxisIndex:0,
        data:[null,80,{
            name:'窑尾',
            value: 80,
            label: {
                show: true,
                color:'#fff',
                formatter: '{b}',
                offset:[20,14],
                fontSize:18
            }
        }, 79, 78, 77,{
            name:'窑头',
            value:76,
            label:{
                show: true,
                color:'#fff',
                formatter: '{b}',
                offset:[-20,14],
                fontSize:18
            }
        }],
        // symbol:'none',
        symbolSize: 0.01,
        lineStyle:{
            width: 40,
            color: '#e4a618'
        }
    },{
        name:'过渡仓',
        type: 'line',
        data:[null, 80,{
            name:'过渡仓',
            value: 80,
            label:{
                show: true,
                color:'#fff',
                formatter: '{b}',
                offset:[-30, 14],
                fontSize: 12
            }
        }],
        symbolSize: 0.01,
        lineStyle:{
            color:'#4c60ff',
            width: 40 ,
        },
    },{
        name:'冷却机',
        type: 'line',
        data:[null,null,40,41,42,
        {
            value: 43,
            name: '冷却机',
            label: {
                show: true,
                color:'#fff',
                formatter: '{b}',
                offset:[-40, 14],
                fontSize: 18
            }
        },44],
        symbolSize: 0.01,
        lineStyle:{
            color:'#e4a618',
            width: 40 ,
        },
    },{
        type: 'scatter',
        symbol: 'circle',
        coordinateSystem: 'cartesian2d',
        xAxisIndex: 1,
        symbolSize: 120,
        label: {
            normal: {
                show: true,
                formatter: '{b}',
                color: '#fff',
                textStyle: {
                    fontSize: '20'
                }
            },
        },
        itemStyle: {
            normal: {
                color: '#00acea'
            }
        },
        animation: false,
        data:getScatterData(scatterChangeData[0])
    },{
        name: '连接线',
        type: 'lines',
        coordinateSystem: 'cartesian2d',
        xAxisIndex:1,
        lineStyle:{
            curveness: -0.4,
            color: '#999',
            opacity: 1,
            width:30
        },
        data:[{
            coords:[
                [69, 42],  
                [69, 78] 
            ]
        }]
    }]
};
var count = 0;
 var t = null;
    t = setTimeout(time, 1000); //開始运行
    function time() {
        clearTimeout(t); //清除定时器
        count++;
        if(count >= scatterChangeData.length){
            count = 0;
        }
        var scatterData=scatterChangeData[count];//当前数据
        option.series[3].data=getScatterData(scatterData)
        myChart.setOption(option)
        if(outrangeData.length>0){
            for(var i=0; i< outrangeData.length;i++){
                var _one = outrangeData[i],
                    str='<tr><td width="35%">'+_one.time+'</td><td width="30%">'+_one.name+'</td><td>'+_one.data+'</td><td>'+_one.range+'</td></tr>'
                $('.broadcast tbody').append(str)
            }
        }
        t = setTimeout(time, 1000); //设定定时器，循环运行
    }

