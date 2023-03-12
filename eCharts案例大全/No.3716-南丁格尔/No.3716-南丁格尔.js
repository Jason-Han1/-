var getsjjg=['普通文理生','体艺生','特长生','港澳台特招生','其他'];
var getsjjgrs=[35,30,25,12,8];
var syjgdata = [];
for(var i = 0;i<getsjjg.length;i++){
	syjgdata.push({name:getsjjg[i],value:getsjjgrs[i]})
}

var colorList = [{
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#1890FF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#7FC1FF' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#6FF3C1' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#48D59D' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#FECB84' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#FEAE5B' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#9586F3' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#A1ADFF' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#FF748D' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#FF7DAF' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#7EEAE6' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#1ABBB5' // 100% 处的颜色
                }],
            }];
option = {
    backgroundColor:'#fff',
    series: {
            itemStyle: {
                normal: {
                    color: function(params) {
                     return colorList[params.dataIndex]
                    }
                }
            },
            type: 'pie',
            //clockWise: false ,
			roseType: 'radius',
            radius: ['15%', '53%'],
			center: ["center", "center"], 
            labelLine: {
            normal: {
                length: 10,
                length2: 100,
                lineStyle: {
                    color: '#e6e6e6'
                }
            }
        },
            label: {
                normal: {
                    formatter: params => {
                        return (
                            '{name|'+ params.name +'}  {percent|' + params.percent.toFixed(0) + '%}'
                        );
                    },
                    padding: [0, -100, 30, -100],
                    rich: {
						radius: {
							//backgroundColor: 'radius',
							//borderRadius: 3,
							//width: 3,
							//height: 3,
							padding: [-37, 90, 0, 90]
						},
                        name: {
                            fontSize: 13,
                            color: '#666666',
                        },
                        percent: {
                            fontSize: 15,
                            color: '#333333'
                        },
                    }
                }
            },
            data: syjgdata
        }
};