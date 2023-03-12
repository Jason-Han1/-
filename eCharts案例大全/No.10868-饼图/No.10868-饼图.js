  var weekDay = 0;
    var data = [{
        name: '2015',
        value: [1, 2, 5, 7, 6, 7]//
    }, {
        name: '2016',
        value: [3, 4, 5, 8, 2, 9]//
    }, {
        name: '2017',
        value: [2, 4, 5, 7, 3, 9]//
    }, {
        name: '2018',
        value: [2, 4, 5, 7, 3, 9]//
    }, {
        name: '2019',
        value:[2, 4, 5, 7, 3, 9] //
    }]

    option = {
        backgroundColor:'#000000',
        legend: {
            orient: 'vertical',
            x: 'left',
            textStyle:{
                color:'#fcfffa'
            },
            data:['2015','2016','2017','2018','2019']
        },
        tooltip: {
            trigger: 'item',
            padding: 10,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1,
            //formatter:"{a} <br/>{b} : {c} <br/> 总数：100"
        },
        angleAxis: {
            type: 'category',
            //startAngle:45,//倾斜度
            axisLine:{
                lineStyle:{
                    color:'#21B7D2'
                }
            },
            axisLabel:{
                fontSize:20,
                interval:0,//间隔
                color:'#fbfff8'
            },
            // '油中气体','微水', '铁芯接地', 'SF?气体压力', 'SF?气体水分', '避雷器'
            data: [/*{
                value: '油中气体',
                textStyle: {
                    fontSize: 25,
                }
            },*/ '铁芯接地','微水', 'SF?气体压力', 'SF?气体水分', '油中气体', '避雷器'],
            z: 10
        },
        polar: {
            center: ['50%', '50%'],
            radius: 200,
        },
        radiusAxis: {
			splitNumber:3,
            axisLine:{
                lineStyle:{
                    color:'#21B7D2'
                }
            },
            axisTick:{
                lineStyle:{
                    color:'#21B7D2'
                }
            },
            axisLabel:{
                margin:-30,
                fontSize:15,
                color:'#fcfffa'
            },
			splitLine:{
				lineStyle:{
					color:'#21B7D2'
					//type:'solid',
				}
			}
        },
        series: [{
            type: 'bar',
            data: [
                data["0"].value["0"],
                data["0"].value["1"],
                data["0"].value["2"],
                data["0"].value["3"],
                data["0"].value["4"],
                data["0"].value["5"],
            ],
            coordinateSystem: 'polar',
            name: data["0"].name,
            stack: 'a',
            itemStyle: {
                normal: {
                    color:'#DF5A5B',
                    borderWidth: 1,
                    borderColor: '#ffffff',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }, {
            type: 'bar',
            data: [
                data["1"].value["0"],
                data["1"].value["1"],
                data["1"].value["2"],
                data["1"].value["3"],
                data["1"].value["4"],
                data["1"].value["5"],
            ],
            coordinateSystem: 'polar',
            name: data["1"].name,
            stack: 'a',
            itemStyle: {
                normal: {
                    color:'#DF945B',
                    borderWidth: 1,
                    borderColor: '#ffffff',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }, {
            type: 'bar',
            data: [
                data["2"].value["0"],
                data["2"].value["1"],
                data["2"].value["2"],
                data["2"].value["3"],
                data["2"].value["4"],
                data["2"].value["5"],
            ],
            coordinateSystem: 'polar',
            name: data["2"].name,
            stack: 'a',
            itemStyle: {
                normal: {
                    color:'#DECD5B',
                    borderWidth: 1,
                    borderColor: '#ffffff',
                },
                emphasis: {
                    borderWidth: 3,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },{
            type: 'bar',
            data: [
                data["3"].value["0"],
                data["3"].value["1"],
                data["3"].value["2"],
                data["3"].value["3"],
                data["3"].value["4"],
                data["3"].value["5"],
            ],
            coordinateSystem: 'polar',
            name: data["3"].name,
            stack: 'a',
            itemStyle: {
                normal: {
                    color:'#B7DF5A',
                    borderWidth: 1,
                    borderColor: '#ffffff',
                },
                emphasis: {
                    borderWidth: 3,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },{
            type: 'bar',
            data: [
                data["4"].value["0"],
                data["4"].value["1"],
                data["4"].value["2"],
                data["4"].value["3"],
                data["4"].value["4"],
                data["4"].value["5"],
            ],
            coordinateSystem: 'polar',
            name: data["4"].name,
            stack: 'a',
            itemStyle: {
                normal: {
                    color:'#61DF5A',
                    borderWidth: 1,
                    borderColor: '#ffffff',
                },
                emphasis: {
                    borderWidth: 3,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    }