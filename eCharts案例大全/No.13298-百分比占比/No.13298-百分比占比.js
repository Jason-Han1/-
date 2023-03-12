const data  = [50,10,15,15,10] ; // 左侧的百分比
const data2 = [10,20,15,15,40]; // 右侧的百分比


function getZuobiao(arr,h=100,w=100,left=10,bottom=10){ //取正立坐标,顺时针方向
  let zuobiaoArr = [];
  let per = 0;
  arr.forEach( (val,index) => {
    let array = [];
    per += val;
    let bottomLeft = { x:left + (1 - per)/2 * w, y:bottom + (1 - per) * h };
    let bottomRight = { x:left + (1 + per)/2 * w, y:bottom + (1 - per) * h };
    if(index === 0){
      array.push({ x: left + 1/2*w, y:bottom + h});
      array.push(bottomRight);
      array.push(bottomLeft);
    }else{
      let preArray = zuobiaoArr[index - 1];
      let upLeft = preArray[index == 1 ? preArray.length - 1 : preArray.length - 2];
      let upRight = preArray[1];
     
      array.push(upRight);
      array.push(bottomRight);
      array.push(bottomLeft);
	  array.push(upLeft);
    }
    zuobiaoArr.push(array);
  });
  let obj = {};
  obj.arr = zuobiaoArr;
  obj.center = zuobiaoArr.map( (item,index) => {
	  return { x: (item[0].x + item[1].x) / 2, y:(item[0].y + item[1].y) / 2};
  });
  return obj;
}

function getDaoZuobiao(arr,h=100,w=100,left=10,bottom=10){
  let zuobiaoArr = [];
  let per = 0;
  arr.forEach( (val,index) => {
    let array = [];
    per += val;
    let bottomLeft = { x:left + (2 + per)/2 * w, y:bottom + (1 - per) * h };
    let bottomRight = { x:left + (4 - per)/2 * w, y:bottom + (1 - per) * h };
    if(index === 0){
      array.push({ x: left + w, y:bottom + h});
      array.push({ x: left + 2*w, y:bottom + h });
      array.push(bottomRight);
      array.push(bottomLeft);
    }else if(index != arr.length - 1){
      let preArray = zuobiaoArr[index - 1];
      let upLeft = preArray[preArray.length - 1];
      let upRight = preArray[preArray.length - 2];
      array.push(upLeft);
      array.push(upRight);
      array.push(bottomRight);
      array.push(bottomLeft);
    }else{
      let preArray = zuobiaoArr[index - 1];
      let upLeft = preArray[preArray.length - 1];
      let upRight = preArray[preArray.length - 2];
      array.push(upLeft);
      array.push(upRight);
      array.push({ x:left + 3/2 * w, y:bottom + 0,});
    }
    zuobiaoArr.push(array);
  });
  let obj = {};
  obj.arr = zuobiaoArr;
  obj.center = zuobiaoArr.map( (item,index) => {
	  return { x: (item[0].x + item[item.length - 1].x) / 2, y:(item[0].y + item[item.length - 1].y) / 2};
  });
  return obj;
}

const COLORS=["blue","#ddd","red","#333","yellow","grey"]

//const points =[...getDaoZuobiao(data.map(item=>item/100))]
const left = getZuobiao(data.map(item=>item/100));
const right = getDaoZuobiao(data2.map(item=>item/100));
const Leftpoints =[... left.arr,...right.arr]

function createRenderItem(points){
    return function (params, api) {
    let colors = [...COLORS].splice(0,data.length)
    console.info(params.dataIndex)
    var coords = points[params.dataIndex].map(item=>[item.x,item.y])
    var _points = coords.map(item=>api.coord(item));
    console.info(_points)
    
    return {
        // 表示这个图形元素是矩形。还可以是 'circle', 'sector', 'polygon' 等等。
        type:'polygon',
        shape:{
            points:_points
        },
        style: api.style({
            fill: colors[params.dataIndex%colors.length],
            stroke: "#fff"
        })
    }
}
}

var series = [{
        type: 'custom',
        renderItem:createRenderItem(left.arr),
        data: data,
        tooltip:{
            formatter:function(item,index){
                console.info(item,index)
                return `${item.data}%`
            }
        }
    },
    {
        type: 'custom',
        renderItem:createRenderItem(right.arr),
        data: data2,
        tooltip:{
            formatter:function(item,index){
                console.info(item,index)
                return `${item.data}%`
            }
        }
    }];
    
left.center.forEach( (item,index) => {
   series.push({
       type:'line',
       lineStyle:{
         color: COLORS[index],
         type:"dashed"
       },
       itemStyle:{
         borderStyle:"dashed"  
       },
       showSymbol:false,
       data:[
           [item.x,item.y],
           [right.center[index].x,right.center[index].y]
           ]
   }) 
});
option = {
    tooltip:{trigger:"item"},
    xAxis: {min:0,max:220},
    yAxis: {min:0,max:120},
    series: series
}