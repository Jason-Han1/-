var datalist=[{mc:"1420",y:"26",x:"100",x_l:"49",x_r:"150",y_b:"-24",y_t:"76",ys:"red"},
  {mc:"1440",y:"122",x:"200",x_l:"93",x_r:"250",y_b:"72",y_t:"212",ys:"blue"},
  {mc:"1441",y:"81",x:"300",x_l:"203",x_r:"350",y_b:"31",y_t:"140",ys:"blue"},
  {mc:"1450",y:"65",x:"400",x_l:"323",x_r:"450",y_b:"15",y_t:"128",ys:"blue"},
  {mc:"1456",y:"28",x:"500",x_l:"447",x_r:"550",y_b:"-22",y_t:"78",ys:"blue"},
  {mc:"1470",y:"31",x:"600",x_l:"544",x_r:"650",y_b:"-19",y_t:"81",ys:"red"},
  {mc:"1528",y:"29",x:"700",x_l:"646",x_r:"750",y_b:"-21",y_t:"79",ys:"red"},
  {mc:"1640",y:"33",x:"800",x_l:"743",x_r:"850",y_b:"-17",y_t:"84",ys:"red"},
  {mc:"1641",y:"31",x:"900",x_l:"844",x_r:"950",y_b:"-19",y_t:"81",ys:"blue"},
  {mc:"1650",y:"27",x:"1000",x_l:"948",x_r:"1050",y_b:"-23",y_t:"77",ys:"yellow"},
  {mc:"2200",y:"26",x:"1100",x_l:"1049",x_r:"1150",y_b:"-24",y_t:"76",ys:"yellow"},
  {mc:"2240",y:"27",x:"1200",x_l:"1148",x_r:"1250",y_b:"-23",y_t:"77",ys:"yellow"},
  {mc:"2250",y:"27",x:"1300",x_l:"1248",x_r:"1350",y_b:"-23",y_t:"77",ys:"yellow"},
  {mc:"2568",y:"41",x:"1400",x_l:"1334",x_r:"1450",y_b:"-9",y_t:"91",ys:"yellow"},
  {mc:"2926",y:"33",x:"1500",x_l:"1442",x_r:"1550",y_b:"-17",y_t:"83",ys:"red"},
  {mc:"N112",y:"33",x:"1600",x_l:"1542",x_r:"1650",y_b:"-17",y_t:"83",ys:"orange"},
  {mc:"N117",y:"30",x:"1700",x_l:"1645",x_r:"1750",y_b:"-20",y_t:"80",ys:"orange"},
  {mc:"S331",y:"26",x:"1800",x_l:"1750",x_r:"1850",y_b:"-24",y_t:"77",ys:"orange"},
  {mc:"S339",y:"36",x:"1900",x_l:"1839",x_r:"1950",y_b:"-14",y_t:"86",ys:"orange"},
  {mc:"S33E",y:"26",x:"2000",x_l:"1949",x_r:"2050",y_b:"-24",y_t:"76",ys:"green"},
  {mc:"S33N",y:"26",x:"2100",x_l:"2049",x_r:"2150",y_b:"-24",y_t:"76",ys:"green"},
  {mc:"S426",y:"26",x:"2200",x_l:"2150",x_r:"2250",y_b:"-24",y_t:"77",ys:"green"},
  {mc:"S430",y:"28",x:"2300",x_l:"2248",x_r:"2350",y_b:"-22",y_t:"79",ys:"red"},
  {mc:"S520",y:"32",x:"2400",x_l:"2343",x_r:"2450",y_b:"-18",y_t:"82",ys:"red"},
  {mc:"S523",y:"32",x:"2500",x_l:"2443",x_r:"2550",y_b:"-18",y_t:"82",ys:"purple"},
  {mc:"SH10",y:"43",x:"2600",x_l:"2533",x_r:"2650",y_b:"-7",y_t:"94",ys:"purple"},
  {mc:"SH16",y:"26",x:"2700",x_l:"2649",x_r:"2750",y_b:"-24",y_t:"76",ys:"red"},
  {mc:"SH20",y:"27",x:"2800",x_l:"2748",x_r:"2850",y_b:"-23",y_t:"77",ys:"red"},
  {mc:"SH22",y:"29",x:"2900",x_l:"2847",x_r:"2950",y_b:"-21",y_t:"80",ys:"red"},
  {mc:"SH24",y:"29",x:"3000",x_l:"2948",x_r:"3050",y_b:"-21",y_t:"81",ys:"green"},
  {mc:"SH26",y:"26",x:"3100",x_l:"3049",x_r:"3150",y_b:"-24",y_t:"76",ys:"green"},
  {mc:"SH28",y:"43",x:"3200",x_l:"3146",x_r:"3250",y_b:"-7",y_t:"107",ys:"red"},
  {mc:"SH30",y:"40",x:"3300",x_l:"3241",x_r:"3350",y_b:"-10",y_t:"96",ys:"purple"},
  {mc:"SH32",y:"39",x:"3400",x_l:"3343",x_r:"3450",y_b:"-11",y_t:"96",ys:"red"},
  {mc:"T420",y:"26",x:"3500",x_l:"3449",x_r:"3550",y_b:"-24",y_t:"76",ys:"red"}]


var data=[]; //{value:['Blouse "Blue Viola"', 101.88, 99.75, 76.75, 116.75, 69.88, 119.88],itemStyle:{color:"black"}},
var xdata=[];
var xlable=new Map();

for (var d in datalist) {
    data.push({value:[
datalist[d].mc,
datalist[d].y,
datalist[d].x,
datalist[d].x_l,
datalist[d].x_r,
datalist[d].y_b,
datalist[d].y_t
    ],itemStyle:{color:'#23a8f7'}});
    xdata.push(datalist[d].mc)
    xlable.set(datalist[d].x,datalist[d].mc)
}


//  标题   y x  横轴头的位置  横轴尾的位置 纵轴底部位置  纵轴头部位置


function renderItem(params, api) {
    // console.log(params)
   
     
    var children = [];
    var coordDims = ['x', 'y'];

    for (var baseDimIdx = 0; baseDimIdx < 2; baseDimIdx++) {
        var otherDimIdx = 1 - baseDimIdx;
        var encode = params.encode;
        var baseValue = api.value(encode[coordDims[baseDimIdx]][0]);
        var param = [];
        param[baseDimIdx] = baseValue;
        param[otherDimIdx] = api.value(encode[coordDims[otherDimIdx]][1]);
        var highPoint = api.coord(param);
        param[otherDimIdx] = api.value(encode[coordDims[otherDimIdx]][2]);
        var lowPoint = api.coord(param);
        var halfWidth = 10;
        var style = api.style({
            stroke: api.visual('color'),
            fill: null,
          lineWidth:2
        });
          console.log(lowPoint[baseDimIdx], lowPoint[otherDimIdx])
        children.push({
            type: 'line',
            shape: makeShape(
                baseDimIdx,
                highPoint[baseDimIdx] - halfWidth, highPoint[otherDimIdx],
                highPoint[baseDimIdx] + halfWidth, highPoint[otherDimIdx]
            ),
           style: style
            // style: {itemStyle :{"color":"blue"}}
        }, {
            type: 'line',
            shape: makeShape(
                baseDimIdx,
                highPoint[baseDimIdx], highPoint[otherDimIdx],
                lowPoint[baseDimIdx], lowPoint[otherDimIdx]
            ),
            
              style: {stroke: "#808080"}
        }, {
            type: 'line',
            shape: makeShape(
                baseDimIdx,
                lowPoint[baseDimIdx] - halfWidth, lowPoint[otherDimIdx],
                lowPoint[baseDimIdx] + halfWidth, lowPoint[otherDimIdx]
            ),
              style:style
        });
    }
    // console.log(children)

    function makeShape(baseDimIdx, base1, value1, base2, value2) {
        var shape = {};
        shape[coordDims[baseDimIdx] + '1'] = base1;
        shape[coordDims[1 - baseDimIdx] + '1'] = value1;
        shape[coordDims[baseDimIdx] + '2'] = base2;
        shape[coordDims[1 - baseDimIdx] + '2'] = value2;
        return shape;
    }

    return {
        type: 'group',
        children: children
    };
}


// console.log(renderItem)
option = {
    tooltip: {
        formatter:function(item){
        // console.log(item)    
      return  item.marker+item.seriesName+"</br>"+
"第一列："+item.value[0]+"</br>"+
"第二列："+item.value[1]+"</br>"+
"第三列："+item.value[2]+"</br>"+
"第四列："+item.value[3]+"</br>"+
"第五列："+item.value[4]+"</br>"+
"第六列："+item.value[5]+"</br>"+
"第七列："+item.value[6]+"</br>";
        
        }
    },
    legend: {
        data: ['bar', 'error']
    },
    dataZoom: [{
        
        

        
        type: 'slider',
        start:0,
        // end:39.45,
        end: 19.445,
        zoomLock:true,
        height: 8,
        bottom: 20,
        borderColor: 'transparent',
        backgroundColor: '#e2e2e2',
        handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', // jshint ignore:line
        handleSize: 20,
        handleStyle: {
            shadowBlur: 6,
            shadowOffsetX: 1,
            shadowOffsetY: 2,
            shadowColor: '#aaa'
        },
        xAxisIndex: [0],
    }
    // , {
    //     type: 'inside',
    //     filterMode: 'weakFilter'
    // }
    ],
    grid: {
        bottom: 80
    },
    xAxis: [
        {
            name:"疑点",
           type: 'value',
  
            interval:100,
            min:0,max:3600,
            silent:true,
axisLabel :{
    formatter:function(obj,index){
    //   console.log(obj)
        obj=num(parseInt(obj));
        // console.log(xlable.get(''+obj+''))
      return     (xlable.get(''+obj+''))!=undefined ?xlable.get(''+obj+''):"";
//   return 'q';
},
}
            
        },
   
        ],
    yAxis: {
         name:"数量",
    },
    series: [
    //     {
    //     type: 'scatter',
    //     name: 'error',
    //     data: data,
    //     // dimensions: dimensions,
    //     encode: {
    //         x: 2,
    //         y: 1,
    //         // tooltip: [2, 1, 3, 4, 5, 6],
    //         // itemName: 0
    //     },
    //     itemStyle: {
    //         normal: {
    //             color: '#77bef7'
    //         }
    //     }

    // },
    {
        type: 'custom',
        name: 'error',
        renderItem: renderItem,
        // dimensions: dimensions,
        encode: {
            x: [2, 3, 4],
            y: [1, 5, 6],
            // tooltip: [2, 1, 3, 4, 5, 6],
            // itemName: 0
        },
        data: data,
        z: 100,
        xAxisIndex:0
    },
    //  {
    //     type: 'custom',
    //     name: 'aaaa',
    //     renderItem: renderItem,
    //     // dimensions: dimensions,
    //     encode: {
    //         x: [2, 3, 4],
    //         y: [1, 5, 6],
    //         // tooltip: [2, 1, 3, 4, 5, 6],
    //         // itemName: 0
    //     },
    //     data: data,
    //     z: 100,
    //     xAxisIndex:0
    // }
    
    
    ]
};

// console.log(num(parseInt(3388.4)))
function num(abc){

    var s=Math.ceil(abc/100);
    var e=s*100;
    return e;
}