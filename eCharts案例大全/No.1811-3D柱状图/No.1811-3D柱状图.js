// var data = [[0,0,5],[1,0,11],[2,0,3],[3,0,1],[4,0,2],[5,0,2],[6,0,6]];
// 堆叠3D柱状图
// max 自适应
// y轴数据自适应
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

function solve_series() {
	const s = [];
	for(let i = 1; i<dataset.dimensions.length; i++){
		const data = [];
		for(let j = 0; j<dataset.source.length; j++){
			data.push(dataset.source[j][dataset.dimensions[i]]);
		}
		s.push({
			name: dataset.dimensions[i],
            type: 'bar3D',
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
        boxWidth: 200,
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