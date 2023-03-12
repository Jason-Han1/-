let data = [{"name":"测试0","value":-2.4,"status":true},{"name":"测试1","value":2,"status":false},{"name":"测试2","value":2,"status":true},{"name":"测试3","value":3,"status":false},{"name":"测试4","value":3,"status":true},{"name":"测试5","value":2,"status":false},{"name":"测试6","value":0,"status":true},{"name":"测试7","value":1,"status":false},{"name":"测试8","value":2,"status":true},{"name":"测试9","value":2,"status":false},{"name":"测试10","value":5,"status":true},{"name":"测试11","value":3,"status":false},{"name":"测试12","value":2,"status":true},{"name":"测试13","value":2,"status":false},{"name":"测试14","value":1,"status":true},{"name":"测试15","value":2,"status":false},{"name":"测试16","value":2,"status":true},{"name":"测试17","value":5,"status":false},{"name":"测试18","value":3,"status":true},{"name":"测试19","value":2,"status":false},{"name":"测试20","value":1,"status":true}]
var list = [];
for(var i =0; i< data.length; i++) {
	 list.push({...data[i], value:(data[i].value > 3 ? 3: data[i].value), tipvalue:data[i].value})
}

option = {
     
    tooltip: {
        trigger: 'axis',
        formatter: function(e) {
            console.log(e)
            return e[0].axisValue + '<br/>'+e[0].marker+e[0].data.tipvalue
        }
    }, 
    xAxis:  {
        type: 'category',
        boundaryGap: true,
        axisTick: {
			alignWithLabel: true
		},
		axisLine:{
		    onZero: false
		},
        data: ['10-1','10-2','10-3','10-4','10-5','10-6','10-7','10-8','10-9','10-10','10-11','10-12','10-13','10-14','10-15','10-16','10-17','10-18','10-19','10-20','10-21']
    }, 
    yAxis: {
        type: 'value', 
        data: [{"name":"-3s","value":-3},{"name":"-2s","value":-2},{"name":"-1s","value":-1},{"name":"x","value":0},{"name":"1s","value":1},{"name":"2s","value":2},{"name":"3s","value":3}],
        axisTick: {
			alignWithLabel: true
		},
		max:3,
		min: -3, 
		boundaryGap: true,
		scale:true,
        splitLine: {
            show: false,
            lineStyle: {
                color: '#ccc'
            }
        },
        axisLabel: {
            formatter: function(value) { 
                var texts = [];
                if(value== -3){
                     texts.push('-3s');
                }
                else if(value==-2){
                    texts.push('-2s');
                }
                else if (value ==-1) {
                    texts.push('-1s');
                }
                else if (value == 0) {
                    texts.push('x');
                }
                else if(value == 1){
                    texts.push('1s');
                }
                else if(value == 2){
                    texts.push('2s');
                }  
                else if(value == 3){
                    texts.push('3s');
                } 
                return texts;
            }
        }
    },
    series: [
         
        { 
            type:'line',
            z:3,
            data: list,
            label: {
                normal: {
                    show: true,
                    color: '#000',
                    formatter: function(v) {
                        return v.value;  
                    }
                }
            },
            // smooth: true,
            symbol: 'circle',//折线点设置为实心点
            symbolSize: 10,   //折线点的大小
            itemStyle: {
                
                 normal: {
                    
                   color: function(e) {
                       
                       let status = e.data.status;
                       return status ? "red" : "#0073cf"
                   },//折线点的颜色 
                   lineStyle: {
                    color: "#0073cf"//折线的颜色
                  }
                }
            },
            markLine: {
                silent: true,
                symbolSize: 0,
                label: {
                    show: false
                },
                lineStyle: {
                     width:2, 
                    type:"solid"
                },
                data: [
                    {yAxis: '0',  itemStyle: {
                            width:1,
                            color: "#0073cf"
                           
                        } 
                    }
                ]
            }
        }
    ]
};
