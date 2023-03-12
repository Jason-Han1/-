// var data = [[0,0,5],[1,0,11],[2,0,3],[3,0,1],[4,0,2],[5,0,2],[6,0,6]];
// 堆叠3D柱状图
// max 自适应
// y轴数据自适应

// 绘制类型配置
var t = 0
var icon = "path://M675.711586 848.029728l-186.277248-105.922357c-29.21996-18.262475-51.134931-3.652495-51.134931 29.219961v98.617366H146.099802c-51.134931 0-91.312376-40.177446-91.312376-91.312376V263.630519c0-51.134931 40.177446-91.312376 91.312376-91.312377h175.319763V121.183212H146.099802C69.397406 121.183212 3.652495 183.275627 3.652495 263.630519v515.001803c0 76.702396 65.744911 142.447307 142.447307 142.447307h295.8521V986.82454c0 32.872456 21.91497 47.482436 51.134931 29.219961l160.709782-94.964872h7.30499V913.774639l18.262476-10.957485c25.567465-14.60998 25.567465-40.177446-3.652495-54.787426M1070.181052 121.183212h-255.674654V37.175825c0-32.872456-21.91497-47.482436-51.134931-29.21996l-186.277248 105.922356c-29.21996 18.262475-29.21996 43.829941 0 58.439921l186.277248 109.574852c29.21996 18.262475 51.134931 3.652495 51.134931-29.21996V168.665647h255.674654c51.134931 0 91.312376 40.177446 91.312376 91.312377v515.001803c0 51.134931-40.177446 91.312376-91.312376 91.312376h-135.142317v51.134931h135.142317c76.702396 0 142.447307-62.092416 142.447307-142.447307V256.325529c0-73.049901-62.092416-135.142317-142.447307-135.142317"


var dataset = {
    dimensions: ["日期", "访问用户", "访问用户1"],
	source: [
		{ 日期: '1月1日', 访问用户: 1523, 访问用户1: 1111 },
		{ 日期: '1月2日', 访问用户: 1223, 访问用户1: 8611 },
		{ 日期: '1月3日', 访问用户: 2123, 访问用户1: 2311 },
		{ 日期: '1月4日', 访问用户: 4123, 访问用户1: 2411 },
		{ 日期: '1月5日', 访问用户: 3123, 访问用户1: 1111 },
		{ 日期: '1月6日', 访问用户: 7123, 访问用户1: 3111 }
	]
}

function solve_xData() {
	const x = [];
	for(let i = 0; i<dataset.source.length; i++){
		x.push(dataset.source[i][dataset.dimensions[0]]);
	}
	return x;
}
// console.log(solve_xData());

var type = 'bar3D' // bar3D、line3D

function solve_series() {
	const s = [];
	for(let i = 1; i<dataset.dimensions.length; i++){
		const data = [];
		for(let j = 0; j<dataset.source.length; j++){
			data.push(dataset.source[j][dataset.dimensions[i]]);
		}
		s.push({
			name: dataset.dimensions[i],
            // type: 'line3D', // bar3D、line3D
            type: type,
            // stack: 'stack',
			data: data.map(function (item,index) {
			 //   console.log(item,index)
                return {
                    // value: [index, 0, item],
                    value: [index, i-1, item],
                }
            }),
			shading: 'lambert',
            label: {
                textStyle: {
                    fontSize: 16,
                    borderWidth: 1
                }
            },
            lineStyle:{
                width: 3
            },
            emphasis: {
                label: {
                    textStyle: {
                        fontSize: 20,
                        color: '#900'
                    }
                },
                // itemStyle: {
                //     color: '#900'
                // }
            }
		});
		if(type == 'line3D'){
		   s.push({
    		    name: dataset.dimensions[i],
    	        type: 'scatter3D',
    			data: data.map(function (item,index) {
    			 //   console.log(item,index)
                    return {
                        // value: [index, 0, item],
                        value: [index, i-1, item],
                    }
                }),
                label: {
                    show:true,
                    textStyle:{
                        color: 'red',
                        borderWidth: 0,
                        borderColor: '#c6c6c6',
                        backgroundColor: 'transparent'
                    }
                }
		    }); 
		}
	}
	return s;
}
// console.log(solve_series());

function max(){
	let s = []
	for(let i = 1; i < dataset.dimensions.length; i++){
    	for(let j = 0; j < dataset.source.length; j++){
    		s.push(dataset.source[j][dataset.dimensions[i]])
    	}  
	}
    // console.log(s,Math.max.apply(null, s), Math.min.apply(null, s))
	return  Math.max.apply(null, s) + Math.min.apply(null, s)
}
// console.log(max())

// var yData = ['',''];
var yData = dataset.dimensions.slice(1)
// console.log(dataset.dimensions,yData)

option = {
    // backgroundColor: '#dee2e6',
    tooltip: {
        formatter: function(params){
            var xIndex = params.value[0]
            var tip = params.seriesName+': '+ params.value[2]
            return dataset.source[xIndex][dataset.dimensions[0]]+ '<br />' +params.marker+tip
        },
        // textStyle:{
        //     color: '#fff'
        // },
    },
    toolbox: {
        show: true,
        feature: {
            myTool:{ //自定义方法 配置   我这是为了实现 饼图切换为柱状图
                show : true,
                title : '切换类型',
                icon : icon,
                onclick : function (){
                    t++
                    if(t%2){
                        type = 'line3D'
                    }else{
                        type = 'bar3D'
                    }
                   
                    option.series = solve_series()
                    myChart.setOption(option, true)
                }
            },
        },
        left: 20,
        top: 20,
    },
    legend:{},
    visualMap: {
        show: false,
        max: max(),
        // inRange: {
        //     color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        // }
    },
    xAxis3D: {
        // name:'X',
        nameGap: 1,
        type: 'category',
        data: solve_xData()
    },
    yAxis3D: {
        name:'',
        type: 'category',
        data: yData
    },
    zAxis3D: {
        name:'',
        type: 'value'
    },
    grid3D: {
        boxWidth: 150,
        boxDepth: 20,
        // light: { // 光
        //     main: {
        //         intensity: 1.2,
        //         shadow: true
        //     },
        //     ambient: {
        //         intensity: 0.3
        //     }
        // },
        viewControl:{
            alpha: 5,
            beta: 20,
        }
    },
    series: solve_series()
}