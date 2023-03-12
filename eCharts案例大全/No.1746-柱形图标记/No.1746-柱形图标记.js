
option  = {
    "grid": {
        "top": "60",
        "left": "7%",
        "right": "7%",
        "bottom": "60",
        "containLabel": true
    },
    "xAxis": [{
        "type": "category",
        "axisLabel": {
            interval:1
        }
    }],
    "yAxis": [{
        "type": "value"
    }],
    "legend": {
        "show": true,
        "type": "scroll",
        "bottom": 0,
        "textStyle": {
            "fontSize": 12
        }
    },
    "series": [{
        "name": "一、营业总收入",
        "type": "bar",
    
    }],
    "dataset": [{
        "source": [
            ["Product", "B"],
            ["2016年01月", 225675509.91],
            ["2016年02月", 264710417.86],
            ["2016年03月", 777447937.51]
           
        ]
    }],

    "customConfig": {
        "customSymbols": [{
            "seriesIndex": 0,
            "dataIndex": 2,
            "data": []
        }, {
            "seriesIndex": 0,
            "dataIndex": 1,
            "data": [{
                "calcSymbol": "<",
                "value1": "0",
                "value2": "",
                "suffix": "",
                "prefix": "",
                "iconName": "red_curve_right_bottom",
                "color": " #ff2814",
                "symbol": "M13.811,11h3.918l-6.855,7L4.021,11H8.036c0-5-1.568-8.5-4.993-11C7.937,1,12.833,4,13.811,11Z"
            }, {
                "calcSymbol": ">",
                "value1": "0",
                "value2": "",
                "suffix": "",
                "prefix": "",
                "iconName": "green_curve_right_top",
                "color": "#22C72D",
                "symbol": "M13.811,7h3.918L10.874,0,4.021,7H8.036c0,5-1.568,8.5-4.993,11C7.937,17,12.833,14,13.811,7Z"
            }, {
                "calcSymbol": "==",
                "value1": "0",
                "value2": "",
                "suffix": "",
                "prefix": "",
                "iconName": "green_equal",
                "color": " #22c72d",
                "symbol": "M22.1,6.157H1.579A1.579,1.579,0,1,1,1.579,3H22.1a1.579,1.579,0,0,1,0,3.157ZM1.579,11.189H22.1a1.579,1.579,0,1,1,0,3.157H1.579a1.579,1.579,0,1,1,0-3.157Z"
            }]
        }]
    }
}

// 设置标记
function  setBarSymbols(option){
      let customSymbols = option.customConfig && option.customConfig.customSymbols
      let  dataset = option.dataset.find(data=>data.hasOwnProperty("source"))
      let source = dataset?dataset.source:[]
      if(customSymbols && customSymbols.length){
        option.series.forEach((serie,index)=>{ // 柱图及线图才行
          if(serie.type==="bar"){
            // 查看当前系列有没有标记条件
            let symbols =  customSymbols.filter(symbol=>symbol.seriesIndex===index)
            let markPoints=[]
            let dataIndexs=[] // 该系列条件成立的dataIndex
            if(symbols && symbols.length){ // 当前系列所有的
              symbols.forEach(symbol=>{// 当前系列单个 {data 条件,dataIndex 位置,seriesIndex 系列位置}
                if(!source[symbol.dataIndex+1])return
                let value = source[symbol.dataIndex+1][symbol.seriesIndex+1]
                for(let i = 0;i<symbol.data.length;i++){//条件
                  let flag = false
                  try{
                    flag = confirmCondition(symbol.data[i],value)
                  }catch(e){}
                  if(flag){
                    let markPointItem =  getMarkPointItem(symbol.data[i],symbol.dataIndex,value)
                    markPoints.push(markPointItem)
                    if( !dataIndexs.includes(symbol.dataIndex)) dataIndexs.push(symbol.dataIndex)
                       console.log(' 有一个成立，跳过')
                    break; // 有一个成立，跳过
                  }
                }
              })
            }
            serie['markPoint']={data:markPoints } // 标记
            byKeySetValue(serie,"itemStyle,normal","color",(params)=>{
              if(!dataIndexs.includes(params.dataIndex)){//有了标记，柱子就不显示了
                return params.color
              }
            })
          }
        })
      }
    }
// 确定条件是否成立   
function confirmCondition(condition,value=0){
      if(condition.calcSymbol==="<>")return condition.value1 <= value && value <= condition.value2
      else return eval(value+condition.calcSymbol+condition.value1)
    }
// 获取标记
function getMarkPointItem(symbol,dataIndex,value){
      return {
        "coord": [dataIndex,value],
        symbolOffset:[0,20],
        symbol:"path://"+symbol.symbol,
        "silent":true,
        itemStyle:{
          color:symbol.color
        },
        value: (symbol.prefix||"")+ value+(symbol.suffix||""),
        label:{
          position:"top",
          color:symbol.color,
        }

      }
    }
    /**
 * @desc 根据key值设置value
 * @author shj
 * @params
 */
 function byKeySetValue(Obj,field,key,value){
  if(isArray(Obj)){
    Obj.forEach(x=>{
      isHasAttribute(x,field,key,value)
    })
  }else if(Obj){
    isHasAttribute(Obj,field,key,value)
  }

}
/**
 * @desc 判断是否含有元素
 * @author shj
 * @params
 */
 function isHasAttribute(obj,field,key,value){
  let fields =  field.split(",")
  if(fields.length===1){ // = 1
    obj[field]=value
  } else if(fields.length>1){
    let  evalSt = "obj."
    let has = "hasOwnProperty(fields[i])"
    for(let i=0;i<fields.length;i++){
      if(i===0){
        if(!obj.hasOwnProperty(fields[i]))obj[fields[i]]={}
      }else if(i>0){
        evalSt +=fields[i-1]+"."
        let is = "!"+evalSt+has
        if(eval(is)){ // 判断是否含有下一个元素
          let str = evalSt.substring(0,evalSt.length-1)
          eval(str+"[fields[i]]={}")
        }
        if(i===fields.length-1){
          evalSt = evalSt + fields[i]+"[key]=value"
          eval(evalSt)
        }
      }
    }
  }
}

 function getType(v){
  return Object.prototype.toString.call(v);
}
 function isArray(v){
  return getType(v) === '[object Array]';
}
    
    // 当柱子上设置的条件成立时，显示标记，柱子隐藏
    setBarSymbols(option)

    