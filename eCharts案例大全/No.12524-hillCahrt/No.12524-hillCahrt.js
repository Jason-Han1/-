
var Xname = ['工作表现的质量','沟通和信息','态度和行为 ','流程','预约和接待','接车和交车'];
var arr = [20,30,40,50,60];
var index = [20,30,40,50,60]
option = {
            title:{
                show:true,
                x:'center',
                y:'top',
                text:'',
                itemGap: 20,
                // subtext:'副标题',
            },
            // tooltip: {
            //     trigger: 'axis',
            //     axisPointer: {
            //         type: 'none'
            //     },
            //     formatter: function (params) {
            //         return params[0].name + ': ' + params[0].value;
            //     }
            // },
            grid: {
                x:50,
                y:30,
                x2:50,
                y2:50,
                z:'-2',
                backgroundColor: 'rgba(0,0,0,0)',
                borderWidth: 0,
            },
            xAxis: {
                data: Xname,
                axisTick: {show: false},
                axisLine: {show: false},
                axisLabel: {
                    color: '#687284 ',
                    fontSize: 12,
                    interval:0,
                    formatter: function (value,index) {
                        var newstring = null;
                        for(var i = 0; i < value.length; i++){
                            if(i % 4 === 0){
                                var temp = value.substr(i, 4) + "\n";
                                i === 0 ? newstring = temp : newstring += temp;
                            }
                        }
                        return newstring
                    },
                }
            },
            yAxis: {
                splitLine: {
                    show:true,
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color:'#F1F3F5',
                        type: 'solid'
                    },
                },
                axisTick: {show: false},
                axisLine: {show: false},
                axisLabel: {show: false}
            },
            color: ['#92A1BC'],
            series: [{
                name: 'hill',
                type: 'pictorialBar',
                barCategoryGap: '-130%',
                symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                itemStyle: {
                    normal: {
                        opacity: 0.8,
                        color: function(params) {
                            var oldColor = params.dataIndex;
                            var  Maxcolor='';
                            var isStop = 0;


                            $(index).each(function (i) {
                                if(isStop===0){
                                    if(oldColor == index[i]){
                                        Maxcolor = '#667184';
                                        // console.log('111')
                                        isStop =1;
                                    }else{
                                        // console.log('222')
                                        Maxcolor = '#91A2BD';
                                        isStop =0;
                                    }
                                }

                            })

                            // console.log('target'+Maxcolor);
                            return Maxcolor;
                        },

                    },
                },
                data: arr,
                z: 10

            }],
            label:{
                normal:{
                    show:true,
                    position:'top',
                    color:'#444'

                }
            }
        };