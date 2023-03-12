var unit = "元";
var total=100;
var data = [
        {status:'待提交',percent:'5',value:'5',total:total},
        {status:'待审核',percent:'15',value:'15',total:total},
        {status:'待交收',percent:'32',value:'32',total:total},
        {status:'部分交收',percent:'23',value:'23',total:total},
        {status:'已完成',percent:'18',value:'18',total:total},
        {status:'已取消',percent:'7',value:'7',total:total}
        ]

getArrByKey = (data, k) => {
            let key = k || "value";
            let res = [];
            if (data) {
                data.forEach(function (t) {
                    res.push(t[key]);
                });
            }
            return res;
        };
        
color = ['#FC619D', '#FF904D', '#48BFE3','#21BF57','#56D0E3',  '#1089E7', '#F8B448','#F57474'];
data = data.sort((a,b) => {
    return b.value - a.value
});

option = {
                grid: {
//                	top:30,
                    left: 100,
                    right: 180,
//                    bottom: 150,
//                    containLabel: true

                },
                tooltip: {
                    show: true,
                    trigger: 'axis',
                    axisPointer: {
                    	type: 'shadow',
                        shadowStyle : {
                            color : 'rgba(128, 128, 128, 0.0001)',

                        }
                    },
                    formatter: "{b0}: {c0}%"
                },
                xAxis: {
                    show: false
                },
                yAxis: [{
                    type: 'category',
                    inverse: true,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        margin:90,
                        textStyle: {
                            align:'left',
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: '#171B1F'
                        },
                    },
                    data:  getArrByKey(data, 'status')
                }, {
                    type: 'category',
                    inverse: true,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            fontSize: 14,
                            color: '#54AFEE',
                        },
                        formatter: function (value, index) {
                            return data[index].percent +'% / ' + data[index].value + unit
                        }
                    },
                    splitArea: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    data:  getArrByKey(data, 'percent')
                }, ],
                series: [{
                    name: '数据内框',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            barBorderRadius: 30,
                                        color: (val) => {
                                            if (val.dataIndex < 7 ) {
                                                return color[val.dataIndex];
                                            } else {
                                                return '#1990FF'
                                            }
                                        },
                        }
                    },
                    /*label: {
	                        normal: {
	                            show: true,
	                            position: 'right',
	                            color: 'red',
	                            fontSize: 14,
	                            formatter: 
	                            function(param) {
	                                // return 'xx';
	                            },
	                        }
	                    },*/
                	barWidth: 20,
                	data:  getArrByKey(data, 'percent')
	                },
                    {
	                    name: '外框',
	                    type: 'bar',
	                    itemStyle: {
	                        normal: {
	                            barBorderRadius: 30,
	                            color: '#F0F0F0',
	                        }
	                    },
	                    barGap: '-100%',
	                    z: 0,
	                    barWidth: 20,
	                    data:  getArrByKey(data, 'total')
	                }

                ]
            };
