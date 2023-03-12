//线1
var data1 = [
          {
            value: 200,
            computedValue: 98,
            symbol:'pin',
             symbolSize:10,
          },
          {
            value: 1700,
            computedValue: 150,
             symbol:'circle',
             symbolSize:10,
            
          },
          {
            value: 2300,
            computedValue: 15,
              symbol:'pin',
             symbolSize:10,
          },
          {
            value: 1870,
            computedValue: 50
          },
          {
            value: 1300,
            computedValue: 115
          }
        ]
//线2
var data2 = [
          {
            value: 20,
            computedValue: 98
          },
          {
            value: 1100,
            computedValue: 50,
           
          },
          {
            value: 2600,
            computedValue: 115
          },
          {
            value: 1170,
            computedValue: 10
          },
          {
            value: 300,
            computedValue: 5
          }
        ]

//点1
var point1 = data1.map(item=>{
    if(item.computedValue>100){
        item.symbolSize=20;//显示
    }else{
        item.symbolSize=0;//不显示
    }
    return item;
})
//点2 
var point2 = data2.map(item=>{
    if(item.computedValue>100){
        item.symbolSize=20;//显示
    }else{
        item.symbolSize=0;//不显示
    }
     return item;
})
var option = {
    tooltip: {
        trigger: 'axis',
        formatter: '{a}: {b}:{c}:<br>{b1}',
      },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '总量',
        type: 'line',
         symbol:'pin',
        symbolSize:10,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data:  point1
    },{
        name: '总量2',
        type: 'line',
         symbolSize:10,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data:  point2
    }, {
        label: {
          show: false  
        },
        type: 'effectScatter',
        coordinateSystem: 'cartesian2d',
        data:point1, //2d坐标系
        symbolSize: 0,
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'stroke'
        },
        hoverAnimation: true,
        itemStyle: {
            normal: {
                color: 'red',
                shadowBlur: 500,
                shadowColor: '#333'
            }
        },
        


    },{
        label: {
          show: false  
        },
        type: 'effectScatter',
        coordinateSystem: 'cartesian2d',
        data:point2, //2d坐标系
        symbolSize: 0,
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'stroke'
        },
        hoverAnimation: true,
        itemStyle: {
            normal: {
                color: 'red',
                shadowBlur: 5,
                shadowColor: '#333'
            }
        },
        


    }]
}