var dataset = {
    dimensions: ['时间', '地点', '人数'],
	source: [
		{ '时间': '星期一', '地点': '北京', '人数': 1000 },
        { '时间': '星期二', '地点': '上海', '人数': 400 },
        { '时间': '星期三', '地点': '杭州', '人数': 800 },
        { '时间': '星期二', '地点': '深圳', '人数': 200 },
        { '时间': '星期三', '地点': '长春', '人数': 100 },
        { '时间': '星期五', '地点': '南京', '人数': 300 },
        { '时间': '星期四', '地点': '江苏', '人数': 800 },
        { '时间': '星期一', '地点': '杭州', '人数': 700 },
        { '时间': '星期三', '地点': '上海', '人数': 300 },
        { '时间': '星期二', '地点': '杭州', '人数': 500 }
	]
// 	dimensions: ["日期", "访问用户", "第三方"],
// 	source: [
// 		{ 日期: "1月1日", 访问用户: 1523, 第三方: 1200 },
// 		{ 日期: "1月2日", 访问用户: 1223, 第三方: 2200 },
// 		{ 日期: "1月3日", 访问用户: 2123, 第三方: 3200 },
// 		{ 日期: "1月4日", 访问用户: 4123, 第三方: 4200 },
// 		{ 日期: "1月5日", 访问用户: 3123, 第三方: 2800 },
// 		{ 日期: "1月6日", 访问用户: 7123, 第三方: 6200 }
// 	]
}



var s = []
for(let i = 0; i < dataset.source.length; i++){
    s.push(dataset.source[i][dataset.dimensions[2]])
}
console.log(s)
var max =  Math.max.apply(null, s)
console.log(max)



option = {
    tooltip: {
        position: 'top',
        formatter: function(params){
           return  params.data[params.dimensionNames[params.encode.y[0]]]
           + `<br />${params.marker}` 
           + params.data[params.dimensionNames[params.encode.x[0]]]
           + ' : ' + params.data[params.dimensionNames[params.encode.value[0]]]
        }
    },
    animation: false,
    dataset: dataset,
    label:{ 
        show: true,
        formatter: function(params){
        //   console.log(params,params.dimensionNames[params.encode.value[0]],params.data[params.dimensionNames[params.encode.value[0]]]) 
           return params.data[params.dimensionNames[params.encode.value[0]]]
        }
    },
    grid: {
        // height: '50%',
        top: '10%',
        bottom: '12%'
    },
    xAxis: {
        type: 'category',
        // data: hours,
        splitArea: {
            show: true,
        }
    },
    yAxis: {
        type: 'category',
        // data: days,
        splitArea: {
            show: true
        }
    },
    visualMap: {
        min: 0,
        // max: 1000,
        max: max,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        // bottom: '15%',
        bottom: '2%'
    },
    series: [{
        // name: '热力图',
        type: 'heatmap',
        // data: data,
        // label: {
        //     show: true
        //     // formatter: [
        //     //     '{a}'
        //     // ].join('\n'),
        
        // },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};