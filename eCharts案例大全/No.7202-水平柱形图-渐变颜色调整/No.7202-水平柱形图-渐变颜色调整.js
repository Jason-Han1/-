var datalabel =  [100, 2, 3, 12, 13, 68]
var  data=[18203, 23489, 29034, 104970, 131744, 630230]
var color = ['#FC619D', '#FF904D', '#48BFE3'];
var min = 0
var max = 100;

//排序
//alert(datalabel.sort((a, b) => a - b))

function getColorByNumber(val) {
            let len = datalabel.length //5
	    	let step = 5
	    	let pointList = []
	    	for (var n=1;n<step+1;n++){
	    	    let point = 0
	    	    point = min+(max-min)/step*n //
	    	    pointList.push(point)
	    	}
	    	if(min<=val && val <pointList[0]){
	    	    return "#ebdba4"
	    	}else if(pointList[0]<=val && val <pointList[1]){
	    	    return "#f2d643"
	    	}else if(pointList[1]<=val && val <pointList[2]){
	    	    return "#ffb248"
	    	}else if(pointList[2]<=val && val <pointList[3]){
	    	    return "#eb8146"
	    	}else if(pointList[3]<=val && val <=pointList[4]){
	    	    return "#d95850"
	    	}else{
	    	    return "#893448"
	    	}
 }
	    

var colorList1 = []
for(var i=0;i<=datalabel.length;i++){
    colorList1.push(getColorByNumber(datalabel[i]))
}

option = {
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年', '2012年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
        axisLabel: {
            interval: 0,
            color: '#666',
            align: 'right',
            margin: 10,
            fontSize: 13,
            formatter: function (value, index) {
                return '人口数：' + data[index]+ '个    正确率：' + datalabel[index]
            },
        
    }
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList1[params.dataIndex]
                    },
                //     color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                //         offset: 0,
                //         color: 'rgb(57,89,255,1)'
                //     }, {
                //         offset: 1,
                //         color: 'rgb(46,200,207,1)'
                //     }]),
                 },
            },
            data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
       
    ]
};
