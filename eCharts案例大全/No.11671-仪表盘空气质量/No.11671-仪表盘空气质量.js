var titles = ['']
var configSet = 
    {
        config:{
            max: 100,
            min: 0,
            step: 0.1
        },
        data:  [
            {value:10,text:'优',color:'red'},
            {value:30,text:'良',color:'yellow'},
            {value:50,text:'中',color:'orange'},
            {value:70,text:'较差',color:'blue'},
            {value:90,text:'很差',color:'pink'}
        ]
    }
    var colorSet = [];
    var number = configSet.data.length * 2;
    for(var i=0;i<number;i++){
          var colorSetC = [];
        colorSetC.push((i + 1) * configSet.config.step);
         colorSetC.push(configSet.data[parseInt(i/2)].color);
        colorSet.push(colorSetC);
    }
    console.log(colorSet);
option = {
    title:{
        x:'center',
        y:'center',
        text: '',
        textStyle:{
            color: 'white'
        },
         z: 4,
        zlevel: 4,
    },
    series: [
        {
            name: "",
            type: "pie",
            radius: ["0","90%"],
            silent: true,
            z: 0,
            zlevel: 0,
            label: {normal: {show: false, position: "center"} },
            data: [
                {value: 1, name: "",
                    itemStyle: {
                        normal: {
                            color: 'lightblue'
                        } 
                    }    
                }
            ]
        },
        {
            type: 'gauge',
            startAngle : 359.9999,
             radius:'85%',
             z: 1,
            zlevel: 1,
            endAngle: 0,
            splitNumber: 10,
             itemStyle:{
                opacity:1
            },
            max: 100,
            min: 0,
            splitLine: {
                show: false,
                length: 40
            },
            pointer: {
                show: true,
                length:'65%',
                width: 40
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                fontSize: 20,
                fontWeight: 'bold',
                color:'#5A6068',
                distance: -60,
                formatter:function(val){
                    var ll = '';
                    switch (val) {
                        case 10:
                           ll=configSet.data[0].text;
                            break;
                         case 30:
                              ll=configSet.data[1].text;
                            break;
                             case 50:
                                  ll=configSet.data[2].text;
                            break;
                             case 70:
                                  ll=configSet.data[3].text;
                            break;
                             case 90:
                                  ll=configSet.data[4].text;
                            break;
                        default:
                            break;
                    }
                    return ll;
                }
            },
            axisLine: {
                show:true,
                lineStyle: {
                    width: 35,
                    shadowBlur: 0,
                    color: colorSet
                }
            },
            detail: {
                show: false,
                offsetCenter: [0, '40%'],
                textStyle: {
                    fontSize: 30
                } 
            },
            data: [{value: 65}]
        },
        {
            name: "",
            type: "pie",
            radius: "45%",
            silent: true,
            z: 2,
            zlevel: 2,
            label: {normal: {show: false} },
            data: [
                {value: 1, name: "",
                    itemStyle: {
                        normal: {
                            color: 'red'
                        } 
                    }    
                }
            ]
        },
        {
            name: "",
            type: "pie",
            radius: ["0","70%"],
            silent: true,
            z: 3,
            zlevel: 3,
            label: {normal: {show: false, position: "center"} },
            data: [
                {value: 1, name: "",
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,0.5)'
                        } 
                    }    
                }
            ]
        }
    ]
};

var index = 0;
setInterval(function () {
    index++;
    index = index > 4 ? 0 : index;
     option.title.text = configSet.data[index].text;
    option.series[1].data[0].value = configSet.data[index].value;
      option.series[2].data[0].itemStyle.normal.color = configSet.data[index].color;
    myChart.setOption(option, true);
},2000);
