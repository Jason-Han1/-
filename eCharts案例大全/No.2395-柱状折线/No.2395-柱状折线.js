var  getname=['8:00-9:00','9:00-10:00','10:00-11:00','11:00-12:00','其他时间'];
var  getvalue=[16,34,18,40,30];
var  getvalue2=[16,34,18,40,30];

option = {
    title: {
    subtext: '报到时间段',
        subtextStyle: {
            color: 'rgba(0,0,0,0.65)',
            fontSize: 18
        },
	itemGap: 20,
    left: 'center',
    bottom: '1%'
	},
    grid: {
        top: '10%',
        right: '5%',
        left: '5%',
        bottom: '20%'
    },
    /*tooltip: {
        trigger: 'axis',
        backgroundColor:'#FFFFFF',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return ''+params[0].seriesName+ '：<br>'+params[0].name+'：' + params[0].value+''
        }
    },*/
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        extraCssText:'background:#ffffff;color:#666666',
        formatter: '{b0}<br/>{a0}: {c0}人<br/>{a1}: {c1}人',
    },
    legend: {
        type: "scroll",
        right: '5%',
        top: '0',
        data: ['预计报到人数','现场报到人数'],
        itemGap: 25,
        itemWidth: 16,
        itemHeight: 16,
        textStyle: {
            fontSize: '13',
            color: '#666666',
        },

    },
    xAxis: [{
        data: getname,
        axisLabel: {
			interval: 0,  
            margin: 10,
            color: 'rgba(0,0,0,0.45)',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
            lineStyle: {
                color: '#0FBA77',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        name:'人数',
        nameTextStyle: {
            color: 'rgba(0,0,0,0.45)',
            fontSize: 13,
            padding: [20, 20, 0, 0]
        },
        axisLabel: {
            color: 'rgba(0,0,0,0.45)',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: '#5A75FF',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle:{
                color:'#0FBA77',
                opacity:0.2
            }
        }
    }],
	animation: false,
    series: [{
        name: '预计报到人数',
        type: 'bar',
        data: getvalue,
        barWidth: '32px',
        itemStyle: {
            normal: {
                color: '#0FBA77',
                barBorderRadius: [100, 100, 0, 0],
            }
        },
    },
    {
        name: "现场报到人数",
        type: 'line',
        data: getvalue2,
        symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB9klEQVQ4T3WTPWsUURSGn5s1xRIlRishhWJnhBXTZRVMESvNElCwVBBDYruJkH9gNvkB/gLRSlNJBC3cbIL4A7QSzFqYJpERZu7cL7kzd3Y3+zEwzJ259zxzznveIxhxuc93znByMg0JnP/eFvPoYUdF/0e3O19FmDVUeheVlNEJ6CRGpbvouCEeH+/1xnQAziH4cu8lRtbRqUBJHwjK32GtpUOpLZ5GL4TAeVAX0Fxq4JQPBi3zwOzZA/Lvft+qLfFMrnUA7uuDObRpopXApCFIwtgEGAnR7zybAm6UQ5tb4rluZRm4g4fvsLqGVmSAsbMwswEXb+blHh1AcxWiXznE+HN6R6yamnDfZsfRV/9idBkb0q9swtSN0/r+acGH+wHgISamZCaF2390GWF/YhVZBqUJmHvdK08AOXh7DaJ2yECBtFcGAb7u6gjAmxn4d9gHKEqwqpzV5pWuNGCqMqSExXw/00DFlOxkIeJ7rFnMBQoiXt+AC15EAUf7QcTDLsDqHbFiajmgt40ZJPigdC4P8HX3t9Ga22JF73WN1FpqoIORCkBhpMxUwVh5G7fFsqyfdmLHymkdJUX258LKHUdKh023eRKtD1i5UMx9Wqhi5DpKLqBkGCYZo+RHdLw5cpgGpvLV7DiX1DSJhOMfbbGMGjbO/wGdNV62CEFw/wAAAABJRU5ErkJggg==',
        symbolSize: 16,
        lineStyle: {
            normal: {
                width: 4,
                color: 'rgba(247,150,0,1)',
                shadowColor: 'rgba(247,150,0,0.38)',
                shadowBlur: 6,
                shadowOffsetY: 8,
            }
        },
        itemStyle: {
            normal: {
                color: '#FFFFFF',
                borderColor: 'rgba(247,150,0,1)',
                borderWidth: 4
            },
        },
    }]
};
