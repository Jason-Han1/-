option = {
   axisPointer: {
                        link: {
                            xAxisIndex: "all",
                        },
                    },
                    title: {
                        show:true,
                        textStyle: {
                            color: "#666",
                            fontSize: 18
                         },
                         text: "设备联网记录",
                         left: "center",
                         top: "20px"
                    },
                    tooltip: {
                        show: true,
                        trigger: "axis",
                        axisPointer: {
                            type: "line",
                            lineStyle: {
                                type: "dashed",
                            },
                        },
                        formatter:function(params){ 
                            // console.log(params);
                            let str='';
                            for(let i=0;i<params.length;i++){
                                if(params[i].value){
                                    str += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+params[i].color+';"></span>'+ params[i].seriesName+'</br>'+ params[i].name;
                                }
                            }
                            return str
                        }
                    },
                    legend: {
                        show: true,
                        bottom:20,
                        icon:'rect',
                        data:['在线','离线']
                    },
                    grid: [{
                            left: 30,
                            right: 20,
                            top: "60px",
                            containLabel: true,
                            bottom: '50%',
                        },
                        {
                            left: 30,
                            containLabel: true,
                            right: 20,
                            top: '46%'
                        },
                    ],
                    color :["#67c23a","#FF786D"],
                    xAxis: [{
                            gridIndex: 0,
                            type: "category",
                            boundaryGap: false,
                            axisLine: {
                                onZero: false,
                            },
                            axisTick:{show:false},
                            axisLabel: {
                                formatter: (value, index) => {
                                    let hour = new Date(value).getHours();
                                    return (hour + "").padStart(2, 0) + "时";
                                },
                            },
                            data: [
                                "2020-10-03 01:00:00",
                                "2020-10-03 02:00:00",
                                "2020-10-03 03:00:00",
                                "2020-10-03 04:00:00",
                                "2020-10-03 05:00:00",
                                "2020-10-03 06:00:00",
                                "2020-10-03 07:00:00",
                                "2020-10-03 08:00:00",
                                "2020-10-03 09:00:00",
                                "2020-10-03 10:00:00",
                                "2020-10-03 11:00:00",
                                "2020-10-03 12:00:00",
                                "2020-10-03 13:00:00",
                                "2020-10-03 14:00:00",
                                "2020-10-03 15:00:00",
                                "2020-10-03 16:00:00",
                                "2020-10-03 17:00:00",
                                "2020-10-03 18:00:00",
                                "2020-10-03 19:00:00",
                                "2020-10-03 20:00:00",
                                "2020-10-03 21:00:00",
                                "2020-10-03 22:00:00",
                                "2020-10-03 23:00:00",
                                "2020-10-04 00:00:00",
                            ],
                        },
                        {
                            gridIndex: 1,
                            type: "category",
                            position: 'top',
                            boundaryGap: false,
                            axisTick:{show:false},
                            axisLine: {show: false,},
                            axisLabel: {
                                show: false,
                                formatter: (value, index) => {
                                    let hour = new Date(value).getHours();
                                    return (hour + "").padStart(2, 0) + "时";
                                },
                            },
                            data: [
                                "2019-10-03 01:00:00",
                                "2019-10-03 02:00:00",
                                "2019-10-03 03:00:00",
                                "2019-10-03 04:00:00",
                                "2019-10-03 05:00:00",
                                "2019-10-03 06:00:00",
                                "2019-10-03 07:00:00",
                                "2019-10-03 08:00:00",
                                "2019-10-03 09:00:00",
                                "2019-10-03 10:00:00",
                                "2019-10-03 11:00:00",
                                "2019-10-03 12:00:00",
                                "2019-10-03 13:00:00",
                                "2019-10-03 14:00:00",
                                "2019-10-03 15:00:00",
                                "2019-10-03 16:00:00",
                                "2019-10-03 17:00:00",
                                "2019-10-03 18:00:00",
                                "2019-10-03 19:00:00",
                                "2019-10-03 20:00:00",
                                "2019-10-03 21:00:00",
                                "2019-10-03 22:00:00",
                                "2019-10-03 23:00:00",
                                "2019-09-04 00:00:00",
                            ],
                        },
                    ],
                    yAxis: [{
                            gridIndex: 0,
                            scale: true,
                            splitLine: {show: false},
                            axisTick:{show:false},
                            axisLine:{show:false},
                            axisLabel:{show:false}
                        },
                        {
                            gridIndex: 1,
                            scale: true,
                            inverse: false,
                            splitLine: {show: false},
                            axisTick:{show:false},
                            axisLine:{show:false},
                            axisLabel:{show:false}
                            
                        },
                    ],
                    series: [
                        {
                            name: "在线",
                            type: "line",
                            xAxisIndex: 0,
                            yAxisIndex: 0,
                            smooth: false,
                            symbol:'none',
                            lineStyle:{
                                opacity:0
                            },
                            areaStyle: {
                                color:'#67c23a'
                            },
                            data: [ 1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1, 1,1,1],
                        },

                        

                        {
                            name: "离线",
                            type: "line",
                            xAxisIndex: 1,
                            yAxisIndex: 1,
                            smooth: false,
                            symbol:'none',
                            lineStyle:{
                                opacity:0
                            },
                            areaStyle: {
                                color:'#FF786D'
                            },
                            data:[ 0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0, 0,0,0],
                        },
                    ]
};