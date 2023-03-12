var isper=false;
var vdata=[[50,3,5,9,1],
[9414,8109,5256,3587,67],
[6159,6917,7361,8568,1356],
[86,166,218,373,91],
[2500,2924,3257,3936,605],
[502496,521182,500378,531974,79274],
[56018,61429,60980,58393,935],
[1553,2005,2437,3018,548],
[5578,6323,5945,5626,7535],
[855213,912528,887463,878340,100220],
[0,0,0,35,5],
];
var xdata=['2013','2014','2015','2016','2017'];
var ydata=['','低五保','佛山居民医保','佛山生育保险','佛山职工医保','南海医保','南海特殊病种','广州医保','特定门诊','自费医疗','佛山工伤医保'];
var series=[];


$.each(vdata,function(index,val){

    var series_option={
    name:ydata[index],
    type:'bar',
    itemStyle:{normal:{color:''}} ,
    label: {normal: {show: true,position: 'top'}},
    barWidth:'',
    data:val
};

    series.push(series_option);
})


option = {
           title:{text:'医保/非医保人次',right:'center'},
         toolbox: {
             feature: {
                 myTool1: {
                show: true,
                title: '数值、百分比切换',
                icon: 'path://M269.794 400.05c0-61.832 43.333-111.95 96.844-111.95s96.78 50.054 96.78 111.95-43.333 111.886-96.78 111.886-96.844-50.054-96.844-111.886z m145.234 0c0-34.372-21.635-62.216-48.39-62.216-26.692 0-48.39 27.844-48.39 62.216 0 34.308 21.698 62.152 48.39 62.152 26.755 0 48.39-27.844 48.39-62.152z m338.858 198.937c0 61.832-43.333 111.95-96.78 111.95-53.51 0-96.908-50.118-96.908-111.95S603.659 487.1 657.17 487.1c53.447 0 96.716 50.118 96.716 111.886z m-145.17 0c0 34.372 21.699 62.216 48.454 62.216s48.39-27.844 48.39-62.216c0-34.308-21.635-62.216-48.39-62.216s-48.454 27.908-48.454 62.216zM369.838 714.969l242.078-430.901 41.926 24.899-242.079 430.837-41.925-24.835zM512 1024c-122.831 0-235.165-43.717-323.304-115.918-15.106-15.042-27.46-32.068-12.738-48.07 24.003-26.18 51.654 6.848 51.654 6.848 77.962 62.6 176.727 100.173 284.452 100.173 251.423 0 455.097-203.802 455.097-455.097 0-251.36-203.738-455.097-455.097-455.097-251.36 0-455.097 203.738-455.097 455.097 0 83.018 22.595 160.596 61.384 227.548 0 0 5.76 21.7-14.338 29.828-28.996 11.714-50.054-29.828-50.054-29.828C19.714 670.932 0 593.866 0 512 0 229.213 229.277 0 512 0c282.787 0 512 229.213 512 512s-229.213 512-512 512z',
                onclick: function (obj,e){
                    debugger
                    if(!isper){
                    var newsdata=[];
                    var newvdata=jQuery.extend(true,[], vdata);
                    var sumdata=jQuery.extend(true,[], vdata);
                    var array_sum=sumdata.reduce(function(a,b){
                                        $.each(a,function(i,v){
                                            a[i]+=b[i];
                                        })
                                        return a;
                                    })
                    $.each(newvdata,function(index,val){

                        var perdata=[];
                        newvdata[index].forEach(function(e,i){newvdata[index][i]=Math.round(e*10000/array_sum[i])/100})
                        newsdata.push({data:newvdata[index]});
                    });
                    //echarts.getInstanceByDom(e.getDom()) = 实例
                    //由于每个实例的实例名不确定，所有用dom获取实例

                    echarts.getInstanceByDom(e.getDom()).setOption({
                        series: newsdata
                    })
                        isper=!isper;
                    }else{
                        echarts.getInstanceByDom(e.getDom()).setOption({
                            series: series
                        })
                        isper=!isper;
                    }
                }
            },
                 dataView: { show: true, readOnly: false },
                 saveAsImage: { show: true,backgroundColor:'#ffffff' },
             magicType: {
                 type: ['stack', 'tiled']
             },
             restore:{}
             }
         },
         legend: {
             data: ydata ,type:'scroll',top:'8%'
         },
         tooltip: {
             trigger: 'axis',
             axisPointer: {         
                 type: 'shadow'     
             }
         },
grid: {
     top:'20%',
    left: '5%',
    right: '4%',
    bottom: '12%',
    containLabel: true
 },
         xAxis: [
             {
                 type: 'category',axisLine:{lineStyle:{color:'#000'}},
                 data: xdata,axisLabel: {interval: 0,rotate: 50,textStyle:{color:'#000'}}
             }
         ],
         yAxis: [
             {
                 name:'',
                 type: 'value',axisLine:{lineStyle:{color:'#000'}},
                 axisLabel: {textStyle:{color:'#000'},
                     formatter:function(value){if(value>=100000000){return value/100000000+' 亿'} else if(value>=1000000){return value/10000+' 万'} else {return value+''}},
                 }
             }
         ],
     dataZoom: [{
         show: true,
         height: 30,
         bottom: 10,
         start: 0,
         end: 100,
         handleSize: '110%',
     }, {type: 'inside'}],
         series: series
     };
