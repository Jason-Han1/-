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
colorsArr =  ["#0263FF", "#765EFF",  "#0436E0", "#8E30FF","#CB3D21", "#F1C551", "#00FFFF",'#E0F228'];
var richItem = {};
colorsArr.forEach(function(color,index){
   richItem["item"+index] = {
        width:20,
        height:10,
        backgroundColor:color,
        borderRadius:5
   }
})
var richOther = {
    top1:{
            fontSize: 18,
            fontFamily: 'FZLanTingHei-L-GBK',
            fontWeight: 400,
            color: '#FFFFFF',
        },
         top2:{
             fontSize: 18,
            fontFamily: 'FZLanTingHei-L-GBK',
            fontWeight: 400,
            color: '#FFFFFF00',
         },
        name:{
            fontSize: 14,
            fontFamily: 'FZLanTingHei-L-GBK',
            fontWeight: 400,
            color: '#FFFFFF',
            
        },
        num:{
            fontSize: 14,
            fontFamily: 'FZLanTingHei-L-GBK',
            fontWeight: 400,
            color: '#ffffff',
          
        },
        split:{
            fontSize: 14,
            fontFamily: 'FZLanTingHei-L-GBK',
            fontWeight: 400,
            color:' #ffffff',
        
        },
        per:{
             fontSize: 12,
            fontFamily: 'FZLanTingHei-L-GBK',
            fontWeight: 'bold',
            color:' #ffffff',
          
        },
        cell:{
             fontSize: 11,
            fontFamily: 'FZLanTingHei-L-GBK',
            fontWeight: 400,
            color:' #ffffff',
            
        }
}
var richAll = Object.assign(richItem, richOther)
datas = {
  name:"频发案件占比",
  dataArr:[
              {name:"道路破损1",value:80,per:10},
              {name:"道路破损2",value:70,per:10},
              {name:"道路破损3",value:60,per:10},
              {name:"道路破损4",value:50,per:10},
              {name:"道路破损5",value:40,per:10},
              {name:"道路破损6",value:30,per:10},
              {name:"道路破损7",value:20,per:10},]
}
var nameArr = datas.dataArr.map(function(data){return data.name})
option ={
    backgroundColor:"#031d33",
    legend:{
      left:"20%",
      top:"center",
      itemGap:30,
       formatter: function (name) {
            var index = isHasElementTwo(nameArr,name)
            if(index < 3){
              return '{top1|top'+(index+1)+'    }'+
              
              '{item'+index+'|}'
              +'{name|  '+name+'}{num|    '+datas.dataArr[index].value+'}{split|   / }{per|  '+datas.dataArr[index].per+'}{cell| %}'
       
            }else{
              return '{top2|top'+(index+1)+'    }{item'+index+'|}{name|  '+name+'}{num|   '+datas.dataArr[index].value+'}{split|   / }{per|  '+datas.dataArr[index].per+'}{cell| %}'
       
            }
              },
        orient:"vertical",
        icon:"none",
        textStyle:{
            rich:richAll
        }
    },
        color:colorsArr,
        series: [
          {
            name:datas.name,
            type: "pie",
            radius: ["10%", "40%"],
            center: ["60%", "50%"],
            roseType: "radius",
            label: {
              show: false
            },
            emphasis: {
              label: {
                show: false
              }
            },
           
            data:datas.dataArr
          }
        ]
      };