//实现二：
function isHasElementTwo(arr,value){
    var str = arr.toString();
	var index = str.indexOf(value);
	if(index >= 0){
	   //存在返回索引
	   var reg1 = new RegExp("((^|,)"+value+"(,|$))","gi");
	   return str.replace(reg1,"$2@$3").replace(/[^,@]/g,"").indexOf("@");
	}else{
		return -1;//不存在此项
	}

}
datas = {
    name:"综治",
    nameArr:['电话举报','领导上报','监督员上报','群众上报'],
    dataArr:[[30],[80],[50],[20]],
    perArr:[10,50,30,10]
}
colors = ['#0263FF','#CB3D21','#F1C551','#8E30FF'];

let seriesArr = [];
datas.nameArr.forEach(function(name,index){
    var  shadowOffsetX = 0;
    if(index!=0)  shadowOffsetX= -20
    seriesArr.push( {
            name: name,
            type: 'bar',
            stack: '案件数',
            barWidth: 30,
            itemStyle:{
                normal: {
                    color: colors[index],
                    barBorderRadius: [20, 20, 20, 20],
                    shadowOffsetX:shadowOffsetX,
                    shadowColor: colors[index],
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            z:   datas.nameArr.length - index,
            data: datas.dataArr[index]
        },)
})
option = {
    backgroundColor:"#000",
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: datas.nameArr,
        icon:"circle",
        itemGap: 50,
        itemWidth:10,
        itemHeight: 10,
        top:"30%",
        formatter: function (name) {
            var index = isHasElementTwo(datas.nameArr,name)
             return '{name|'+name+'}\n{num|'+datas.dataArr[index][0]+'}{split| / }{per|'+datas.perArr[index]+'}{cell| %}'
        },
        width:300,
        textStyle:{
            rich:{
                
                name:{
                    fontSize: 11,
                    fontFamily: 'FZLanTingHei-L-GBK',
                    fontWeight: 400,
                    color: '#FFFFFF',
                     padding:[35,0,0,0]
                },
                num:{
                    fontSize: 32,
                    fontFamily: 'DigifaceWide',
                    fontWeight: 400,
                    color: '#69A3FF',
                   //  padding:[-40,0,0,0]
                },
                split:{
                    fontSize: 16,
                    fontFamily: 'Avanti',
                    fontWeight: 400,
                    color:' #8CACFF',
                  //  padding:[-40,0,0,0]
                },
                per:{
                     fontSize: 14,
                    fontFamily: 'Avanti',
                    fontWeight: 400,
                    color:' #8CACFF',
                   //padding:[-40,0,0,0]
                },
                cell:{
                     fontSize: 12,
                    fontFamily: 'Avanti',
                    fontWeight: 400,
                    color:' #8CACFF',
                    // padding:[-40,0,0,0]
                }
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '30%',
        top:0,
        containLabel: true
    },
    xAxis:  {
        type: 'value',
     axisLabel:{
            show:false
        },
        axisLine:{
            show:false
        },
        splitLine:{
            show:false
        },
        axisTick:{
             show:false
        }
    },
    yAxis: {
        type: 'category',
        data:datas.name,
        axisLabel:{
            show:false
        },
        axisLine:{
            show:false
        },
        splitLine:{
            show:false
        },
        axisTick:{
             show:false
        }
    },
    series:seriesArr
};