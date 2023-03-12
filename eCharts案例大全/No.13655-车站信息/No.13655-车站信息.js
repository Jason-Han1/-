
function getDateTimeStamp(dateStr){
		return Date.parse(dateStr.replace(/-/gi,"/"));
	}
	
var nodeArray = [{
	assignDate: "2018/04/25 19:00:00"
},{
	assignDate: "2018/04/25 16:45:00"
}];
		
xMin = 	getDateTimeStamp(nodeArray[1].assignDate),
xMax = getDateTimeStamp(nodeArray[0].assignDate);
markPointOpt = [];
    
var markLineOpt = {
    label: {
        position: 'middle',
        formatter: function(params){
            return params
        }  
    },
    lineStyle: {
        color: "red",
        width: 1,
        type: 'solid'
    },
    silent: true,
    data: [[{
        coord: [xMin, 300],
        symbol: 'none'
    }, {
        coord: [xMax, 200],
        symbol: 'none'
    }]]
};

option = {
    singleAxis: [{
        type: "time",
        top: "80",
        height: "20",
        splitLine: {
            show: false
        },
        splitNumber:12,
        axisLabel: {
            show: true,
            margin: 20,
            textStyle: {
                fontSize: 14
            },
            formatter: function (value, index) {
                // 格式化成：时:分
                var date = new Date(value);
                var h = date.getHours()<10?'0'+date.getHours():date.getHours();
                var m = date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes();
                //var s = date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();
                var texts = [h,m];
                return texts.join(':');
            }
        },
        axisLine:{
            // symbol:['none','arrow'],
            lineStyle:{
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 20
            }
        },
        min: '2018/04/25 00:00:00',
        max: '2018/04/25 23:59:59'
    }],
    series: [{
        coordinateSystem: "singleAxis",
        type: "scatter",
        symbol: "path://M159.46235,161.691237l27.399989,-24.499961l82.199926,0l27.400081,24.499961l-27.400081,24.500044l-82.199926,0l-27.399989,-24.500044z",
        symbolSize: [40, 20],
        symbolOffset: [
            0,
            "-50%"
        ],
        label: {
            normal: {
                show: true,
                position:'top',
                color:'black',
                fontSize:7,
                formatter: function(params) {
                    return "车次: " + params.value[1]+
                "\n里程: K" + params.value[2].toFixed(2)
                }
            }
        },
        data: [
            [
                '2018/04/25 09:00:00',
                "G359",
                568.6717545642821
            ]
        ]
    }, 
    {
        coordinateSystem: "singleAxis",
        type: "scatter",
        symbol: "path://M2.46235,30.691237l27.799987,-24.49996l83.39992,0l27.800081,24.49996l-27.800081,24.500045l-83.39992,0l-27.799987,-24.500045z",
        symbolSize:[60,30],
        symbolOffset: [
            0,
            "-50%"
        ],
        label: {
                normal: {
                    show: true,
                    position:'inside',
                    color:'white',
                    fontSize:7,
                    formatter: function(params) {
                        return params.data[1];
                    }
                }
            },
        data: [
            [
                '2018/04/25 19:00:00',
                '石家庄站'
            ],
            [
                '2018/04/25 16:45:00',
                '北京西站'
            ]
        ]
    },
    {
        coordinateSystem: "singleAxis",
        type: "scatter",
        symbolOffset: [
            0,
            "-350%"
        ],
        label: {
                normal: {
                    show: true,
                    position:'inside',
                    color:'white',
                    fontSize:7,
                    formatter: function(params) {
                        return params.data[1];
                    }
                }
            },
        markLine:markLineOpt,
        data: [
            [
                '2018/04/25 19:00:00'
            ],
            [
                '2018/04/25 16:45:00'
            ]
        ]
    }
    ]
};