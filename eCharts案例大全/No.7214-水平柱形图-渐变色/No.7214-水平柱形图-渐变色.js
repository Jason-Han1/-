var datalabel =  [100, 2, 3, 12, 13, 68]
var  data=[18203, 23489, 29034, 104970, 131744, 630230]
var color = ['#FC619D', '#FF904D', '#48BFE3'];
var max = 100;

function rgbaToHex(color) {
	        var values = color
	          .replace(/rgba?\(/, '')
	          .replace(/\)/, '')
	          .replace(/[\s+]/g, '')
	          .split(',');
	        var a = parseFloat(values[3] || 1),
	          r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255),
	          g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255),
	          b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255);

	        return "#" +
	          ("0" + r.toString(16)).slice(-2) +
	          ("0" + g.toString(16)).slice(-2) +
	          ("0" + b.toString(16)).slice(-2);
	    }

function getColorByNumber(n) {
	    	let halfMax = max / 2  //最大数值的二分之一
	        //var 百分之一 = (单色值范围) / halfMax;  单颜色的变化范围只在50%之内
	        var one = 255 / halfMax; 
	        var r = 0;
	        var g = 0;
	        var b = 0;

	        if (n < halfMax) {
	          // 比例小于halfMax的时候红色是越来越多的,直到红色为255时(红+绿)变为黄色.
	          r = one * n;  
	          g = 255;
	        }

	        if (n >= halfMax) {
	          // 比例大于halfMax的时候绿色是越来越少的,直到0 变为纯红
	          g = (255 - ((n - halfMax) * one)) < 0 ? 0 : (255 - ((n - halfMax) * one))
	          r = 255;

	        }
	        r = parseInt(r);// 取整
	        g = parseInt(g);// 取整
	        b = parseInt(b);// 取整

	        return rgbaToHex("rgb(" + r + "," + g + "," + b + ")");
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
