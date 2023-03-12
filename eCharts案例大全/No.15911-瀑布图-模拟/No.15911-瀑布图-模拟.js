option = {
                title : {
                    text: '瀑布图-模拟',
                    subtext: '纯属虚构',
                    x:'center'
                },
                tooltip : {
                    trigger:'axis',
                    axisPointer:{
                        type:'shadow'
                    },
                    formatter: function (params) {
                        var tar;
                        if (params[1].value != '-') {
                            if (params[2] != '-') {
                                tar = params[1];
                                tar.value = params[1].value+params[2].value;
                            }else{
                                tar = params[1];
                            }
                        }
                        else {

                            tar = params[0];
                        }
                        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                    }
                },
                grid:{
                    backgroundColor:['#ECFFFB','#B4F1F1']
                },
                xAxis:{
                    //type:'category',
                    data:['Before', 'Factor A', 'Factor B', 'Factor C', 'Factor D', 'Factor E', 'Factor F', 'Factor G', 'After'],
                    splitLine:{
                        show:false
                    }
                },
                yAxis:{
                    type:'value',
                    splitArea: {
                       show: true
                    }
                },
                legend: {
                    left: 'left',
                    data: ['start&end','up','down']
                },
                series : [
                    {//起始结束柱形[0]
                        name:'start&end',
                        type:'bar',
                        stack:'total',
                        barCategoryGap:'0',
                        itemStyle: {
                            normal: {
                                barBorderColor: '#303841',
                                color: '#303841'
                            },
                            emphasis: {
                                barBorderColor: '#303841',
                                color: '#303841'
                            }
                        },
                        data:[325, '-', '-', '-', '-', '-', '-', '-', 1030]

                    },
                    {//辅助柱形[1]
                        name:'Left',
                        type:'bar',
                        stack:'total',
                        barCategoryGap:'0',
                        itemStyle: {
                            normal: {
                                barBorderColor: 'rgba(0,0,0,0)',
                                color: 'rgba(0,0,0,0)'
                            },
                            emphasis: {
                                barBorderColor: 'rgba(0,0,0,0)',
                                color: 'rgba(0,0,0,0)'
                            }
                        },
                        data:['-', 293, 188, 188, 226, 312, 409, 641, '-']
                    },
                    {//上升的红色柱形[2]
                        name:'up',
                        type:'bar',
                        stack:'total',
                        barCategoryGap:'0',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderColor: '#FF5722',
                                color: '#FF5722'
                            },
                            emphasis: {
                                barBorderColor: '#FF5722',
                                color: '#FF5722'
                            }
                        },
                        data:['-', '-', '-', 38, 86, 97, 232, 389, '-']
                    },
                    {//下降的绿色柱形[3]
                        name:'down',
                        type:'bar',
                        stack:'total',
                        barCategoryGap:'0',
                        label: {
                            normal: {
                                show: true,
                                position: 'bottom'
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderColor: '#00ADB5',
                                color: '#00ADB5'
                            },
                            emphasis: {
                                barBorderColor: '#00ADB5',
                                color: '#00ADB5'
                            }
                        },
                        data:['-', 32, 105, '-', '-', '-', '-', '-', '-']
                    }
                ],
            };