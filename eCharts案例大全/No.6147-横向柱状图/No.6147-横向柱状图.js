var data = [10,20, 30, 40, 50]
        var titlename = ['太原市民政局', '太原市运输局', '太原市残联', '太原市报社', '太原市司法局'];
        var myColor = ['#d1b070', '#3e97f2', '#cc671b', '#385984', '#8B78F6'];
        var option = {
            grid:{
                left:100,
                top:0,
                bottom:10,
                right:10,
                // containLabel:true
            },
            tooltip:{
                show:true,
                formatter: function(params) {
                    // return '{a|30}\r\n 应用使用视图';
                    var name="";
                    if(params.name.length>20){
                        name=params.name.substring(0,20)+"...";

                    }else{
                        name=params.name
                    }

                    return "<div style='text-align: left'>"
                        +"<p><span class='mouth'>排名:</span>"+(parseInt(params.dataIndex)+1)+"</p>"
                        +"<p><span class='text'>合同名称:</span>"+name+"</p>"
                        +"<p><span class='text'>合同金额:</span>"+params.value+"</p>"
                        +"</div>"
                },
            },

            xAxis: {
                show: false
            },
            yAxis: [{
                show: true,
                data: titlename,
                inverse: true,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#fff',
                    interval: 0,
                    margin: 100,
                    textStyle: {
                        align: 'left',
                        baseline: 'middle',
                        color:"#fff"
                    },
                    formatter: (value,index) => {
                        var val="";
                        if(value.length>10){
                            val=value.substring(0,15)+"..."
                        }else{
                            val=value;
                        }
                        switch (index) {
                            case 0:
                                return `{lg0|${index+1}} `+value;
                                break;
                            case 1:
                                return `{lg1|${index+1}} `+value  ;
                                break;
                            case 2:
                                return `{lg2|${index+1}} `+value;
                                break;
                            case 3:
                                return `{lg3|${index+1}} `+value ;
                                break;
                            case 4:
                                return `{lg4|${index+1}} `+value;
                                break;
                        }
                    },
                    rich: {
                        lg0: {
                            color: '#fff',
                            backgroundColor : '#c03933',
                            lineHeight : 15,
                            borderRadius : 5,
                            padding : [ 2, 4 ]
                        },
                        lg1: {
                            color: '#fff',
                            backgroundColor: '#446761',
                            lineHeight : 15,
                            borderRadius : 5,
                            padding : [ 2, 4 ]
                        },
                        lg2: {
                            backgroundColor: '#cf6712',
                            color: '#fff',
                            lineHeight : 10,
                            borderRadius : 5,
                            padding : [ 2, 3 ]
                        },
                        lg3: {
                            backgroundColor: '#238af1',
                            color: '#fff',
                            lineHeight : 10,
                            borderRadius : 5,
                            padding : [ 2, 3 ]
                        },
                        lg4: {
                            backgroundColor: '#6ab4e5',
                            color: '#fff',
                            lineHeight : 10,
                            borderRadius : 5,
                            padding : [ 2, 3 ]
                        },
                    }

                },


            }, {
                show: false,
                inverse: true,
                data: titlename,
                axisLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: '#fff',
                    },
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },

            }],
            series: [{
                name: '条',
                yAxisIndex: 0,
                z:2,
                type: 'bar',
                data: data,
                barWidth: "40%",
                label:{
                    show:true,
                    position:"insideRight",
                    color:"#333333",
                    fontSize:12,


                },
                itemStyle: {
                    normal: {
                        barBorderRadius: 15,
                        color:"#d1b070" //"#bddbfd"
                    },
                },
            }, {

                name: '框',
                z:1,
                type: 'bar',
                yAxisIndex: 1,
                data: [100,100,100,100,100],
                barWidth: "40%",
                itemStyle: {
                    normal: {
                        barBorderRadius: 15,
                        color:"rgba(210,177,108,0.4)"
                    }
                },
                tooltip:{
                    show:false,

                }
            }, ]
        };