let xData = [{name:'食品类',value:12},{name: '危化品类',value:12},{ name:'电子电器类',value:9}
,{name:'医疗耗材类',value:7},{ name:'机械设备类',value:11},{name:'日化品类',value:19}
,{name:'木材类',value:8},{name:'普货类',value:10}];  
let colorList = ['red', 'orange', 'yellow', 'green', 'Cyan','blue','purple','pink'] 
let seriesVal=[];
for(let i=0;i<xData.length;i++){
    seriesVal.push(
        {
            showBackground: true,
          type: 'bar',
          data: [xData[i].value],
          name:xData[i].name,
          coordinateSystem: 'polar',  
          color: colorList[i] 
        }
    )
}
option = {
    angleAxis: { 
        axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
    },
    radiusAxis: { 
        type: 'category', 
        z: 10,
        axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }

    },
    polar: {
        radius: ['10%', '50%']   
    },
    series: seriesVal,
    legend: { 
        top:'middle',
        right:'20%',
        orient:'vertical',
        itemWidth: 5, 
        icon:'rect', 
          formatter: function (name) {
            var data = xData
            var total = 0;
            var target;
            for (var i = 0, l = data.length; i < l; i++) {
              total += data[i].value;
              if (data[i].name == name) {
                target = data[i].value;
              }
            }
            var arr = [
            "{a|" + name + ":}", 
              "{c|"+target+"}"
            ];
            return arr.join(" "); 
          },
          textStyle: {
            rich: {
              a: {  
                fontSize: 14,
                align: "left"
              },
              b: { 
                width: 20, 
                color: "gray", 
                fontSize: 14, 
              } 
            }
        },
            shadowBlur: 10,
        show: true,
        data:xData.map(item => item.name)
    }
};
