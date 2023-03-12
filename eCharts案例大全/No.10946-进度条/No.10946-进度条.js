var totalCost = [100, 100, 100,100,100]; //背景色比例
	    var visits = [82.32, 73.56, 22.9,48.34,56]; //数值
	    var grade = ['分流发展微信分流发展微信分流发展微信分流发展微信量','分流发展微信分流发展微信分流发展微信分流发展微信量','分流发展微信分流发展微信分流发展微信分流发展微信量','分流发展微信分流发展微信分流发展微信分流发展微信量','分流发展微信分流发展微信分流发展微信分流发展微信量'];
	    var data = {
	        grade : grade,
	        totalCost: totalCost,
	        visits: visits,
	    };
var maxminmyVal = [20,80,60];
option = {
	        backgroundColor: '#08245E',
	        grid: {
	        	top:0,
	            left:20,
	            right:10,
	            bottom: 0,
	            containLabel: true
	        },
	        tooltip: {
	            show: true,
	            formatter: function (params, ticket, callback) {
	                //console.log(params);
	                if(params.name == "N"){
	                    return "未查询到数据";
	                }
                    return params.name+":"+params.value;
                }
	        },
	        xAxis: {
	            show: false
	        },
	        yAxis: [{
	            type: 'category',           
	            axisTick: {
	                show: false
	            },
	            axisLine: {
	                show: false,
	            },
	            axisLabel: {
	                margin:100,
	                textStyle: {
	                    align:'right',
	                    fontSize: 14,
	                    //fontWeight: 'bold',
	                    color: '#fff'
	                },
	                formatter:function(val){
		            	var strs = val.split(''); //字符串数组
                        var str = ''
                        for (var i = 0, s; s = strs[i++];) { //遍历字符串数组
                            str += s;
                            if (!(i % 7)) str += '\n';
                        }
                        return str
    		        }
	            },
	            data: data.grade
	        }, {
	            type: 'category',
	            axisLine: {
	                show: false
	            },
	            axisTick: {
	                show: false
	            },
	            axisLabel: {
	                show:false,
	                textStyle: {
	                    fontSize: 14,
	                    color: '#54AFEE',
	                },
	            },
	            splitArea: {
	                show: false
	            },
	            splitLine: {
	                show: false
	            },
	            data: data.visits
	        }, ],
	        series: [{
	                name:"100%",
	                type: 'bar',
	                yAxisIndex: 1,
	                itemStyle: {
	                    normal: {
	                        show: true,
	                        color: '#284168',
	                        barBorderRadius: 50,
	                        borderWidth: 0,
	                        borderColor: '#333',
	                        
	                    }
	                },
	                z: 1,//显示在最上
	                barGap:'-100%',
	                barWidth: '20',
	                data: data.totalCost
	            },
	            {
	                type: 'bar',
	                nmae:"不良率",
	                itemStyle: {
	                    normal: {
	                        show: true,
	                       color: function (params) {
	                                var colorList = [
	                                    ['#fc8cbd', '#e9458c'],
	                                    ['#f9cc87', '#f9a626'],
	                                    ['#b6f57c', '#87d142'],
	                                    ['#75ebd3', '#05ca90'],
	                                    ['#0fa8f8', '#75d2f9'],
	                                    ];
	                                return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
	                                    {
	                                        offset: 0,
	                                        color: colorList[params.dataIndex][0]
	                                    },
	                                    {
	                                        offset: 1,
	                                        color: colorList[params.dataIndex][1]
	                                    }]);
	                                },
	                        barBorderRadius: 50,
	                        borderWidth: 0,
	                        borderColor: '#333',
	                        opacity:0.8
	                    }
	                },
	                //z: 20,
	                barCategoryGap:'30%',
	                //barGap:'200%',
	                data: data.visits
	            },
	      {
            type: 'scatter',
            barWidth: 40,
            z: 10,
            itemStyle: {
                normal: {
                    show: true,
                    color: 'rgba(0,0,0, 0)',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                    opacity:1
                }
            },
            label:{
              normal:{
                  show: true,
                  position: 'insideRight',
                  formatter: function(param) {
                    // 因为柱状初始化为0，温度存在负值，所以，原本的0-100，改为0-130，0-30用于表示负值
                    return maxminmyVal[0];
                  },
                  textStyle: {
                        color: '#fff',
                        fontSize: '10',
                  }
              },  
            },
            barWidth: '1',
            data: [5, 5, 5, 5, 5]
        },
        {
            type: 'scatter',
            barWidth: 40,
            z: 10,
            itemStyle: {
                normal: {
                    show: true,
                   color: 'rgba(0,0,0, 0)',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                    opacity:1
                }
            },
            label:{
              normal:{
                  show: true,
                  position: 'inside',
                  formatter: function(param) {
                    // 因为柱状初始化为0，温度存在负值，所以，原本的0-100，改为0-130，0-30用于表示负值
                    return maxminmyVal[1];
                  },
                  textStyle: {
                        color: '#fff',
                        fontSize: '10',
                  }
              },  
            },
            barWidth: '1',
            data: [50, 50, 50, 50, 50]
        },
        {
            type: 'scatter',
            barWidth: 40,
            z: 10,
            itemStyle: {
                normal: {
                    show: true,
                   color: 'rgba(0,0,0, 0)',//透明背景
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                    opacity:1
                }
            },
            label:{
              normal:{
                  show: true,
                  position: 'insideLeft',
                  formatter: function(param) {
                    // 因为柱状初始化为0，温度存在负值，所以，原本的0-100，改为0-130，0-30用于表示负值
                    return maxminmyVal[2];
                  },
                  textStyle: {
                        color: '#fff',
                        fontSize: '10',
                  }
              },  
            },
            barWidth: '1',
            data: [90, 90, 90, 90, 90]
        }
	]
};