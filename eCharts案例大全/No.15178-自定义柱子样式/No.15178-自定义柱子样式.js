var PatternSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAVCAIAAAA8SdJPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDQyQTBBNTE1NjI5MTFFN0FEMUI5NEE3OUY1N0ZFRjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDQyQTBBNTI1NjI5MTFFN0FEMUI5NEE3OUY1N0ZFRjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NDEzOUJENjU2MjkxMUU3QUQxQjk0QTc5RjU3RkVGMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NDEzOUJENzU2MjkxMUU3QUQxQjk0QTc5RjU3RkVGMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr3x3AEAAACVSURBVHja7JRBCgMxDAMlO/vw/rAPiq06oZf25rLQhVaB3DLIihGVEySSMOJTCQlp3O42AQPBkHo4MT1dBm0rI7AAWoelph9bIAkbYThPZ7LGi+Vye0Vf3ezf5rhq9r/A+u/XF/9xlVhqT5fdx16pZJUXTdi3hZ7t3PaYOeXFiZW1OKpmqbkbku2d8MMiD3jhAnwIMAA1XUeDcEGmGgAAAABJRU5ErkJggg=='
var PatternImg = new Image();
PatternImg.src = PatternSrc;

var data = [120, 132, 101, 165,  125, 150, 210, 253];
var xMax = 300;
var option = {
  	backgroundColor:'#fff',
    yAxis : [
        {
            type : 'value',
            splitLine: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisTick:{
				show: false
			},
			axisLabel:{
				textStyle:{
					color:'#737373'
				}
			},
        }
    ],
    xAxis : [
        {
            type : 'category',
            data : ['产品1','产品2','产品3','产品4','产品5','产品6','产品7','产品8' ],
            boundaryGap: ['20%', '20%'],
            splitLine: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisTick:{
				show: false
			},
			axisLabel:{
			    rotate: 45,
				textStyle:{
					color:'#737373'
				}
			}
        }
    ],
    series : [
        {
            name:'100',
            type:'bar',
            stack: '总量',
            z: 3,
            barWidth:'30%',
            data:[120, 132, 101, 165,  125, 150, 210, 253],
          	itemStyle: { normal: {barBorderRadius:[2,2,0,0], color: {image: PatternImg,repeat: 'repeat'}}}
        },
        { 
            name:'占位',
            type: 'bar',
            barWidth:'30%',
            barGap:'-100%',
            silent:true,
            itemStyle: {
                normal: {color: '#fafafa'}
            },
            data: data.map(function(d){
                return xMax
            }),
        },
    ]
};