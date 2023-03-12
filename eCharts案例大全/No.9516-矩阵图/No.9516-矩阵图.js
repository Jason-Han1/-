  var  result=[{ydmc:"0001",zgy:"X01",sl:"12",sj:"201901"},
                 {ydmc:"0002",zgy:"X01",sl:"13",sj:"201901"},
                 {ydmc:"0003",zgy:"X01",sl:"14",sj:"201901"},
                 {ydmc:"0004",zgy:"X01",sl:"15",sj:"201901"},
                 {ydmc:"0005",zgy:"X01",sl:"16",sj:"201901"},
                 
                 {ydmc:"0001",zgy:"X02",sl:"41",sj:"201901"},
                 {ydmc:"0002",zgy:"X02",sl:"42",sj:"201901"},
                 {ydmc:"0003",zgy:"X02",sl:"43",sj:"201901"},
                 {ydmc:"0004",zgy:"X02",sl:"44",sj:"201901"},
                 {ydmc:"0005",zgy:"X02",sl:"45",sj:"201901"},
                 
                 {ydmc:"0001",zgy:"X03",sl:"81",sj:"201901"},
                 {ydmc:"0002",zgy:"X03",sl:"82",sj:"201901"},
                 {ydmc:"0003",zgy:"X03",sl:"83",sj:"201901"},
                 {ydmc:"0004",zgy:"X03",sl:"84",sj:"201901"},
                 {ydmc:"0005",zgy:"X03",sl:"200",sj:"201901"},
    

                 {ydmc:"0001",zgy:"X01",sl:"101",sj:"201902"},
                 {ydmc:"0002",zgy:"X01",sl:"101",sj:"201902"},
                 {ydmc:"0003",zgy:"X01",sl:"101",sj:"201902"},
                 {ydmc:"0004",zgy:"X01",sl:"101",sj:"201902"},
                 {ydmc:"0005",zgy:"X01",sl:"101",sj:"201902"},
                 
                 {ydmc:"0001",zgy:"X02",sl:"102",sj:"201902"},
                 {ydmc:"0002",zgy:"X02",sl:"102",sj:"201902"},
                 {ydmc:"0003",zgy:"X02",sl:"102",sj:"201902"},
                 {ydmc:"0004",zgy:"X02",sl:"102",sj:"201902"},
                 {ydmc:"0005",zgy:"X02",sl:"102",sj:"201902"},
                 
                 {ydmc:"0001",zgy:"X03",sl:"103",sj:"201902"},
                 {ydmc:"0002",zgy:"X03",sl:"103",sj:"201902"},
                 {ydmc:"0003",zgy:"X03",sl:"103",sj:"201902"},
                 {ydmc:"0004",zgy:"X03",sl:"103",sj:"201902"},
                 {ydmc:"0005",zgy:"X03",sl:"190",sj:"201902"}
];
var zgyarr =[];
var ydmcarr=[];
var sjarr  =[];
for (var i in result) {
  zgyarr.push(result[i].zgy);
  ydmcarr.push(result[i].ydmc);
  sjarr.push(result[i].sj);
}
zgyarr =norepeat(zgyarr);
ydmcarr=norepeat(ydmcarr);
sjarr  =norepeat(sjarr);
console.log(zgyarr )
console.log(ydmcarr)
console.log(sjarr  )

var maxsl=0;
var yfjson={};
for (var s in sjarr) {
    var datajson=[];
    for (var q in zgyarr) {
        for (var w in ydmcarr) {
            for (var e in result) {
                maxsl=(parseInt(result[e].sl)>maxsl?result[e].sl:maxsl)
                 if(result[e].sj==sjarr[s]  && result[e].zgy==zgyarr[q] && result[e].ydmc==ydmcarr[w]){
                   
                    datajson.push([parseInt(q),parseInt(w),parseInt( result[e].sl).toFixed(0)])
                    // datajson.push([q,w,result[e].sl,result[e].ydmc,result[e].zgy,result[e].sj])
                 }
            }
        }
    }
    console.log(datajson)
    yfjson[sjarr[s]]=datajson;
}
console.log(yfjson)
console.log("【最大数】："+maxsl)
var xdata=zgyarr;
var ydata=ydmcarr;
var basedata=sjarr;

var baseseries=[];
var optionsdata=[];

for (var k in yfjson) {
    baseseries.push({
            // name:k,
	        type: 'heatmap',
	        label: {
	            normal: {
	                show: true
	            }
	        },
	        itemStyle: {
	            emphasis: {
	                shadowBlur: 10,
	                shadowColor: 'rgba(120, 0, 0, 0.5)'
	            }
	        }
        });
    optionsdata.push({
         xAxis: {
	        type: 'category',
	        data: xdata,
	    },
         yAxis: {
	        type: 'category',
	        data: ydata,
	    },
	     title: {
                text: k
            },
          series: [{
                    data:yfjson[k]
                }
            ]
    });

}

////时间轴自定义
// {
//  value: 'T3',
//  tooltip: {
//      formatter: '{b} 自定义提示'
//  },
//  symbol: 'diamond',
//  symbolSize: 16
// }


option={
      baseOption: {
        timeline: { 
            axisType: 'category', 
            autoPlay: true, 
            playInterval: 3000, 
            data:basedata
        },
        // title: { subtext: '数据来自木可统计局' },
        tooltip: {}, legend: { },
        calculable: true,
         tooltip: {
        position: 'top',
        formatter: function(params) {
            // console.log(params)
            if(params.componentType=="timeline"){
                return params.name;
            }else if(params.componentType=="series"){
                return params.marker+'<br/>' +'学历：' + ydata[params.value[1]] + '<br/>' + '人数：' + params.data[2]+'<br/>' + '地址：' + params.name;
            }else{
                return "";
            }
	           
	        }
    },
    animation: false,
    grid: {
	        left: '3%',
	        right: '8%',
	        bottom: '8%',
	        containLabel: true
	    },
    xAxis: {
            name: 'X轴',
	        type: 'category',
	        data: xdata,
			axisLine : {
						lineStyle : {
							color : '#000'
						}
					},
					axisLabel: {  
				   interval:0,  
				   rotate:40
				   
				} ,
	        splitArea: {
	            show: true
	        },
	      
	    },
    yAxis: {
	        type: 'category',
	        data: ydata,
			axisLine : {
						lineStyle : {
							color : '#000'
						}
					},
					axisLabel: {  
				   interval:0,  
				   rotate:40
				   
				} ,
	        splitArea: {
	            show: true
	        },
	        name: 'Y轴'
	    },
    visualMap: {
	        min: 1,
	        max: maxsl,
	        calculable: true,
	       // orient: 'horizontal',
	        left: 'left',
	        bottom: '1%',
			text: [maxsl,'1'],// 文本，默认为数值文本
	        //color:['#20a0ff','#D2EDFF'],
	        calculable: false,
			color: [
	        '#22DDDD', '#fec42c', '#80F1BE'
	    ]
	    },
        series: baseseries
    }, 
    options:optionsdata
}


 //数组去重
  function norepeat(arr) {
            return arr.filter(function (val, index, array) {
                return array.indexOf(val) === index;
            });
        }