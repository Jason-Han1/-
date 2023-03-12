var data = [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15];

function series(data) {
    var s1 = [
        {
            name:'Line 1',
            type:'pie',
            clockWise:false,
             radius:['22%','23%'],
            center:['50%','10%'],
            itemStyle : {normal:{
                label: {show:false},
                labelLine: {show:false},}},
            hoverAnimation: false,
            label:{
              show:false  
            },
            data:[
                {
                    value:300,
                    name:'01'
                }/*,
                {
                    value:50,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }*/
         
            ]
        }, 
        {
            type: 'pie',
            radius:['20%','22%'],
            center:['50%','10%'],
            label: {
                normal: {
                    position: 'center',
                    textStyle: {
                        color: '#c23531',
                        //         fontSize:10
                    },
                    formatter: '{b}'

                }
            },
            data: [{
                name: '占有率',
                value: 1 - 0.2,
                itemStyle: {
                    normal: {
                        color: '#d4d0c7'
                            //        shadowBlur: 10,
                            //          shadowColor
                    }
                }
            }, {
                name: 20 + '%',
                value: 0.2,
                itemStyle: {
                    normal: {
                        //  color: 'transparent'
                        //        color:color1
                    }
                }
            }]
        }];
    var height = 80 / (data.length%2==1?data.length+1:data.length);
    var radius=[];
       radius.push(height*2-3+'%');
       radius.push(height*2+'%');
    for (var i = 0; i < data.length; i++) {
        var center = [];
        var x, y;
        x = 25 + 50 * (i % 2);
        y = parseInt(i / 2) * height * 2 + height+20;
        center.push(x + '%');
        center.push(y + '%');
        var colorNum;
        do {
            colorNum = parseInt(16777515 * Math.random());
        } while (colorNum < 13947179);
        var color1 = '#' + colorNum.toString(16);
        console.log(color1);
        var s = {
            type: 'pie',
            radius:radius,
            center: center,
            label: {
                normal: {
                    position: 'center',
                    textStyle: {
                        color: '#c23531',
                        //         fontSize:10
                    },
                    formatter: '{b}'

                }
            },
            data: [{
                name: '占有率',
                value: 1 - data[i] / 20,
                itemStyle: {
                    normal: {
                        color: '#d4d0c7'
                            //        shadowBlur: 10,
                            //          shadowColor
                    }
                }
            }, {
                name: data[i] / 20 * 100 + '%',
                value: data[i] / 20,
                itemStyle: {
                    normal: {
                        //  color: 'transparent'
                        //        color:color1
                    }
                }
            }]
        };
        s1.push(s);
    }
    return s1;
};
option = {
    title: {
        text: "测试"
    },
    tooltip: {
        show: false
    },
    toolbox: {
        show: false
    },
    legend: {
        show: false
    },
    series: series(data)

};