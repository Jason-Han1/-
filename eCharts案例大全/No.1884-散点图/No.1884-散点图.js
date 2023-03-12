var dataset = {
    dimensions: ["日期", "访问用户"],
	source: [
		{ 日期: "1月1日", 访问用户: 1523 },
		{ 日期: "1月2日", 访问用户: 1223 },
		{ 日期: "1月3日", 访问用户: 2123 },
		{ 日期: "1月4日", 访问用户: 4123 },
		{ 日期: "1月5日", 访问用户: 3123 },
		{ 日期: "1月6日", 访问用户: 7123 }
	]
}

function series(){
    const s = []
    for (var i = 0; i < dataset.dimensions.length-1; i++) {
        const dim = dataset.dimensions[(i+1)]
        s.push({
            type: 'scatter',
            symbolSize: function (data) {
                const size = Math.sqrt(data[dim])
                let retSize = 0
                if(size < 5000){
                    retSize = size/2
                }else{
                    retSize = size/5e2 
                }
                //  控制散点大小
                return retSize>=80?80:retSize<10?retSize+5:retSize
            },
            emphasis: {
                label: {
                    show: true,
                    position: 'top'
                }
            },
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetY: 5,
                shadowOffsetX: -5,
            }
        })
    }
    return s
}

option = {
    xAxis: {
        type: 'category'
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        scale: true
    },
    legend:{
        right: 10
    },
    // tooltip:{trigger:'axis'},
    dataset: dataset,
    series: series()
};

const backImg = '/asset/get/s/data-1622796959507-HTopachtJ.png';
myChart._dom.style.backgroundImage = "url('" + backImg + "')";