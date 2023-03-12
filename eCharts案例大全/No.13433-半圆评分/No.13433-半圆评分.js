var data1 = [];
var data2 = [];
var number1 = 3;
var number2 = 3;

var number3 = parseFloat(number1)*6;
var number4 = parseFloat(number2)*6;
//alert(number3)
for(var i=60 ;i>=0;i--){
    if (i<=number3) {
          data1.push({
            value: 1,
            name: '景区评分',
             itemStyle:{color:'#29E8E9', borderWidth: 1,
                borderColor: '#ffffff',}
        })
    }
  if (i>number3 && i<=30) {
          data1.push({
            value: 1,
            name: '景区仕分',
             itemStyle:{color:'rgba(41,232,233,0.4)'}
        })
    } 
    if(i>30&&i<=60){
        data1.push({
            value: 1,
            name: '景区未评分',
            itemStyle:{color:'transparent'}
        }) 
    } 
}

for(var i=60 ;i>=0;i--){
    if (i<=number4) {
          data2.push({
            value: 1,
            name: '酒店评分',
            itemStyle:{color:'#29E8E9', borderWidth: 1,
                borderColor: '#ffffff',}
        })
    }
  if (i>number4 && i<=30) {
          data2.push({
            value: 1,
            name: '酒店失分',
             itemStyle:{color:'rgba(41,232,233,0.4)'}
        })
    } 
    if(i>30&&i<=60){
        data2.push({
            value: 1,
            name: '酒店未评分',
              itemStyle:{color:'transparent'}
        }) 
    } 
}


option = {
   title: [{
        text: "     "+number1+"分",
        subtext: '景区综合评分',
        x: '25%',
        y: '45%',
        textStyle: {
            color: '#FFFFFF',
            fontSize: 14
        },
        subtextStyle: {
            color: '#D0E4F9',
            fontSize: 12
        }
    },
    {
        text: "     "+number2+"分",
        subtext: '酒店综合评分',
        x: '65%',
        y: '45%',
        textStyle: {
            color: '#FFFFFF',
            fontSize: 14
        },
        subtextStyle: {
            color: '#D0E4F9',
            fontSize: 12
        }
    }],
   tooltip:{ show:false
   },
    series: [{
        name: '库存情况',
        type: 'pie',
        radius: ['40%', '30%'],
        center: ['30%', '50%'],
        clockwise: false,
        data: data1,
        startAngle:180,
       
        hoverAnimation: false,
        legendHoverLink: false,
        label: {
            show:false,
        },
        labelLine: {
            show: false
        },
       
    },
    {
        name: '库存情况',
        type: 'pie',
        radius: ['40%', '30%'],
        center: ['70%', '50%'],
        clockwise: false,
        data: data2,
        startAngle:180,
        hoverAnimation: false,
        legendHoverLink: false,
        label: {
            normal: {
                show:false,
            },
            emphasis:{
                show:false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        }
      
    }
   
    ]
};