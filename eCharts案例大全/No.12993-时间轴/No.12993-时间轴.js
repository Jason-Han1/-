
var colorArray = [
    {
        top: 'rgba(173,39,49)',//红shen
        bottom: 'rgba(173,39,49, 0.3)'
    },
    {
        top: 'rgba(195,175,49)',//黄
        bottom: 'rgba(195,175,49, 0.3)'
    },{
        top: 'rgba(56,215,48)',//绿
        bottom: 'rgba(56,215,48, 0.3)'
    },
    {
        top: 'rgba(40,203,195)',//蓝
        bottom: 'rgba(40,203,195, 0.3)'
    },{
        top: 'rgba(42,45,221)',//深蓝
        bottom: 'rgba(42,45,221, 0.3)'
    },
    {
        top: 'rgba(215,47,215)',//粉
        bottom: 'rgba(215,47,215, 0.3)'
    }
    ];
    
//每次变化的数组值
var dataSource = [];    
var arrayIndex = [];	//下标索引数组，用于记录y轴索引的变化    
var YIndex=['楼宇一','楼宇二','楼宇三','楼宇四','楼宇五','楼宇六'];
var resultYIndex=[];
//快速排序
function quickSort(array) {
	if (array.length > 0) {
		//记录初始数据下标
		for (var j = 0; j < dataSource.length; j++) {
			arrayIndex.push(j);
		}
		doQuickSort(array, arrayIndex, 0, array.length - 1);
	}
	return array;
}
function doQuickSort(array, indexArray, left, right) {
	if (left < right) {
		var middle = getMiddle2(array, indexArray, left, right);//实际的排序流程
		//运用分治法的思想对数组进行递归。
		doQuickSort(array, indexArray, left, middle - 1);
		doQuickSort(array, indexArray,  middle + 1, right);
	}
}
//获取中间下标
function getMiddle(array, indexArray, left, right) {	//升序排列
	var baseIdexArray = indexArray[left];
	var baseIndex = left;
	var base = array[left];//以左侧为基数
	var index = left;//记录基数的下标
	while (left < right) {
		while (left < right && array[right] >= base) {
			right--;
		}
		indexArray[index] = indexArray[left];
		baseIndex = left;
		indexArray[left] = baseIdexArray;
		array[index] = array[right];//将基数所在下标对应的值改为找到的比基数小的值
		index = right;//修改基数所在的下标位置
		array[right] = base;//将找到的比基数小的位置的值改为基数的值
		while (left < right && array[left] <= base) {
			left++;
		}
		indexArray[index] = indexArray[right];
		baseIndex = right;
		indexArray[right] = baseIdexArray;
		array[index] = array[left];
		index = left;
		array[left] = base;
	}
	return index;
}
function getMiddle2(array, indexArray, left, right) {	//降序排列
	var baseIdexArray = indexArray[left];
	var baseIndex = left;
	var base = array[left];//以左侧为基数
	var index = left;//记录基数的下标
	while (left < right) {
		while (left < right && array[right] <= base) {
			right--;
		}
		indexArray[index] = indexArray[left];
		baseIndex = left;
		indexArray[left] = baseIdexArray;
		array[index] = array[left];//将基数所在下标对应的值改为找到的比基数大的值
		index = left;//修改基数所在的下标位置
		array[left] = base;//将找到的比基数大的位置的值改为基数的值
		while (left < right && array[left] >= base) {
			left++;
		}
		indexArray[index] = indexArray[right];
		baseIndex = right;
		indexArray[right] = baseIdexArray;
		array[index] = array[right];
		index = right;
		array[right] = base;
	}
	return index;
}
    
    
option = {
    baseOption: {
            timeline: {
                axisType: 'category',
                orient: 'vertical',
                autoPlay: true,
                inverse: true,
                playInterval: 1000,
                left: null,
                right: 0,
                top: 20,
                bottom: 20,
                width: 55,
                height: null,
                label: {
                    normal: {
                        textStyle: {
                            color: '#999'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                symbol: 'none',
                lineStyle: {
                    color: '#555'
                },
                checkpointStyle: {
                    color: '#bbb',
                    borderColor: '#777',
                    borderWidth: 2
                },
                controlStyle: {
                    showNextBtn: false,
                    showPrevBtn: false,
                    normal: {
                        color: '#666',
                        borderColor: '#666'
                    },
                    emphasis: {
                        color: '#aaa',
                        borderColor: '#aaa'
                    }
                },
                data: []
            },
            title: [{
                text: '1900',
                textAlign: 'center',
                left: '63%',
                top: '55%',
                textStyle: {
                    fontSize: 100,
                    color: 'rgba(255, 255, 255, 0.7)'
                }
            }, {
                text: '条形七彩渐变柱状图',
                left: 'center',
                top: 10,
                textStyle: {
                    color: '#ffd285',
                    fontWeight: 'normal',
                    fontSize: 20
                }
            }],
            backgroundColor: '#0E2A43',
            grid: {
                top: 100,
                containLabel: true,
                left: 30,
                right: '110'
            },
            xAxis:  {
                type: 'value',
                 position:'top',
                axisTick : {show: false},
                axisLine: {
                    show: false,
                    lineStyle:{
                        color:'#fff',
                    }
                },
                splitLine: {
                    show: false,
                },
            },
            yAxis: [
            {
                type: 'category',
                axisTick : {
                    show: true,
                    alignWithLabel: true,
                    length:5,
                   
                },
                inverse:'true', //排序
                axisLine: {
                    show: true,
                    lineStyle:{
                        color:'#fff',
                    }
                },
                data: ['楼宇一','楼宇二','楼宇三','楼宇四','楼宇五','楼宇六']
            }
            
    ],
    series: [
        {
            name: '能耗值',
            type: 'bar',
            itemStyle:{
                normal: {
                    show: true,
                   color: function (params) {
                        let num = colorArray.length;
                        return{
                            type: 'linear',
                            colorStops: [{
                                offset: 0, color: colorArray[params.dataIndex%num].bottom
                            }, {
                                offset: 1, color: colorArray[params.dataIndex%num].top
                            }, {
                                offset: 0, color: colorArray[params.dataIndex%num].bottom
                            }, {
                                offset: 1, color: colorArray[params.dataIndex%num].top
                            }, {
                                offset: 0, color: colorArray[params.dataIndex%num].bottom
                            }, {
                                offset: 1, color: colorArray[params.dataIndex%num].top
                            }, {
                                offset: 0, color: colorArray[params.dataIndex%num].bottom
                            }, {
                                offset: 1, color: colorArray[params.dataIndex%num].top
                            }, {
                                offset: 0, color: colorArray[params.dataIndex%num].bottom
                            }, {
                                offset: 1, color: colorArray[params.dataIndex%num].top
                            }, {
                                offset: 0, color: colorArray[params.dataIndex%num].bottom
                            }, {
                                offset: 1, color: colorArray[params.dataIndex%num].top
                            }],
                            //globalCoord: false
                        }
                    },
                    barBorderRadius:88,
                    borderWidth:0,
                    borderColor:'#333',
                }
            },
            barGap:'0%',
            barCategoryGap:'50%',
            data: [60, 132, 101, 134,230,180]
        }
       
    ]
    },
    options: []
};

    for (var n = 1900; n <= 2018; n++) {
        dataSource = [];
        resultYIndex=[];
        arrayIndex = [];
        dataSource=[60+Math.round(Math.random() * 1000)+n, 
                   132+Math.round(Math.random() * 1000)+n, 
                   101+Math.round(Math.random() * 1000)+n, 
                   134+Math.round(Math.random() * 1000)+n,
                   230+Math.round(Math.random() * 1000)+n,
                   10+Math.round(Math.random() * 1000)+n];
        var array=[];   //过程结果存放数组
        option.baseOption.timeline.data.push(n);
        array = quickSort(dataSource);	//快速排序
        for(var ii=0;ii<arrayIndex.length;ii++){
            resultYIndex.push(YIndex[arrayIndex[ii]]);
        }
        option.options.push({
            title: {
                show: true,
                'text': n + ''
            },
            yAxis: [
            {
                type: 'category',
                axisTick : {
                    show: true,
                    alignWithLabel: true,
                    length:5,
                   
                },
                inverse:'true', //排序
                axisLine: {
                    show: true,
                    lineStyle:{
                        color:'#fff',
                    }
                },
                data: resultYIndex
            }
            
    ],
    series: [
        {
            name: '能耗值',
            type: 'bar',
            itemStyle:{
                normal: {
                    show: true,
                   color: function (params) {
                        let num = colorArray.length;
                        return{
                            type: 'linear',
                            colorStops: [{
                                offset: 0, color: colorArray[params.dataIndex%num].bottom
                            }, {
                                offset: 1, color: colorArray[params.dataIndex%num].top
                            }, {
                                offset: 0, color: colorArray[params.dataIndex%num].bottom
                            }, {
                                offset: 1, color: colorArray[params.dataIndex%num].top
                            }, {
                                offset: 0, color: colorArray[params.dataIndex%num].bottom
                            }, {
                                offset: 1, color: colorArray[params.dataIndex%num].top
                            }, {
                                offset: 0, color: colorArray[params.dataIndex%num].bottom
                            }, {
                                offset: 1, color: colorArray[params.dataIndex%num].top
                            }, {
                                offset: 0, color: colorArray[params.dataIndex%num].bottom
                            }, {
                                offset: 1, color: colorArray[params.dataIndex%num].top
                            }, {
                                offset: 0, color: colorArray[params.dataIndex%num].bottom
                            }, {
                                offset: 1, color: colorArray[params.dataIndex%num].top
                            }],
                            //globalCoord: false
                        }
                    },
                    barBorderRadius:88,
                    borderWidth:0,
                    borderColor:'#333',
                }
            },
            barGap:'0%',
            barCategoryGap:'50%',
            data: array
        }
       
    ]
        });
    }

    myChart.setOption(option);