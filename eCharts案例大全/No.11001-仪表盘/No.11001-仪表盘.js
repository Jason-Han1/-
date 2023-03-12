option = {
    backgroundColor:'#0A1651',
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {  //仪表盘详情，用于显示数据
            	formatter:'{value}%',          
            	offsetCenter:[0,'90%'],
            	fontSize:20,
            },
            center : ['10%', '30%'],
            radius:'20%',
            splitNumber:5,//仪表盘刻度的分割段数。
            startAngle:225,//仪表盘起始角度。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
            endAngle:-45,//仪表盘结束角度
            pointer:{  //指针
            	width:4,
            	length:'70%',
            },
            axisLine:{      //仪表盘轴线相关配置
             show:true,
             lineStyle:{
                 color:[[0.6,'#FF4500'],[0.9,'#4488BB'],[1,'#228B22']],//仪表盘的轴线可以被分成不同颜色的多段。
                 width:8,//轴线宽度
             }
            },
            splitLine:{//分割线样式
                length:7,//分割线长度
                lineStyle:{
                    width:2,
                    color:'#fff',
                }
            },
	        axisTick: {    // 坐标轴小标记
	           splitNumber:5,//分割线之间分割刻度
	           length :4,        // 属性length控制线长
	           lineStyle: {       // 属性lineStyle控制线条样式
	               color: '#BABABA',
	               shadowColor : '#fff', //默认透明
	               shadowBlur: 10
	        	},
            },
            title:{  //仪表盘标题
               offsetCenter:[0,'35%'], //相对于仪表盘中心的偏移位置
               color:'#fff',
                fontSize:14,
            },

            data: [{value: 85.23, name: '设备1'}]
        },
        //设备2OEE
        {
            name: '业务指标',
            type: 'gauge',
            detail: {  //仪表盘详情，用于显示数据
            	formatter:'{value}%',          
            	offsetCenter:[0,'90%'],
            	fontSize:20,
            },
            center : ['30%', '30%'],
            radius:'20%',
            splitNumber:5,//仪表盘刻度的分割段数。
            startAngle:225,//仪表盘起始角度。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
            endAngle:-45,//仪表盘结束角度
            pointer:{  //指针
            	width:4,
            	length:'70%',
            },
            axisLine:{      //仪表盘轴线相关配置
             show:true,
             lineStyle:{
                 color:[[0.6,'#FF4500'],[0.9,'#4488BB'],[1,'#228B22']],//仪表盘的轴线可以被分成不同颜色的多段。
                 width:8,//轴线宽度
             }
            },
            splitLine:{//分割线样式
                length:7,//分割线长度
                lineStyle:{
                    width:2,
                    color:'#fff',
                }
            },
	        axisTick: {    // 坐标轴小标记
	           splitNumber:5,//分割线之间分割刻度
	           length :4,        // 属性length控制线长
	           lineStyle: {       // 属性lineStyle控制线条样式
	               color: '#BABABA',
	               shadowColor : '#fff', //默认透明
	               shadowBlur: 10
	        	},
            },
            title:{  //仪表盘标题
               offsetCenter:[0,'35%'], //相对于仪表盘中心的偏移位置
               color:'#fff',
                fontSize:14,
            },
            data: [{value: 77, name: '设备2'}]
        },
        //设备3
        {
            name: '业务指标',
            type: 'gauge',
            detail: {  //仪表盘详情，用于显示数据
            	formatter:'{value}%',          
            	offsetCenter:[0,'90%'],
            	fontSize:20,
            },
            center : ['50%', '30%'],
            radius:'20%',
            splitNumber:5,//仪表盘刻度的分割段数。
            startAngle:225,//仪表盘起始角度。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
            endAngle:-45,//仪表盘结束角度
            pointer:{
            	width:4,
            	length:'60%',
            },
            axisLine:{      //仪表盘轴线相关配置
             show:true,
             lineStyle:{
                 color:[[0.6,'#FF4500'],[0.9,'#4488BB'],[1,'#228B22']],//仪表盘的轴线可以被分成不同颜色的多段。
                 width:8,//轴线宽度
             }
            },
            splitLine:{//分割线样式
                length:7,//分割线长度
                lineStyle:{
                    width:2,
                    color:'#fff',
                }
            },
	        axisTick: {    // 坐标轴小标记
	           splitNumber:5,//分割线之间分割刻度
	           length :4,        // 属性length控制线长
	           lineStyle: {       // 属性lineStyle控制线条样式
	               color: '#BABABA',
	               shadowColor : '#fff', //默认透明
	               shadowBlur: 10
	        	},
            },
            title:{  //仪表盘标题
               offsetCenter:[0,'35%'], //相对于仪表盘中心的偏移位置
               color:'#fff',
                fontSize:14,
            },
            data: [{value: 22.5, name: '设备3'}]
        },
       //设备4
       {
            name: '业务指标',
            type: 'gauge',
            detail: {  //仪表盘详情，用于显示数据
            	formatter:'{value}%',          
            	offsetCenter:[0,'90%'],
            	fontSize:20,
            },
             center : ['70%', '30%'],
            radius:'20%',
            splitNumber:5,//仪表盘刻度的分割段数。
            startAngle:225,//仪表盘起始角度。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
            endAngle:-45,//仪表盘结束角度
            pointer:{
            	width:4,
            	length:'60%',
            },
            axisLine:{      //仪表盘轴线相关配置
             show:true,
             lineStyle:{
                 color:[[0.6,'#FF4500'],[0.9,'#4488BB'],[1,'#228B22']],//仪表盘的轴线可以被分成不同颜色的多段。
                 width:8,//轴线宽度
             }
            },
            splitLine:{//分割线样式
                length:7,//分割线长度
                lineStyle:{
                    width:2,
                    color:'#fff',
                }
            },
	        axisTick: {    // 坐标轴小标记
	           splitNumber:5,//分割线之间分割刻度
	           length :4,        // 属性length控制线长
	           lineStyle: {       // 属性lineStyle控制线条样式
	               color: '#BABABA',
	               shadowColor : '#fff', //默认透明
	               shadowBlur: 10
	        	},
            },
            title:{  //仪表盘标题
               offsetCenter:[0,'35%'], //相对于仪表盘中心的偏移位置
               color:'#fff',
                fontSize:14,
            },
            data: [{value: 85, name: '设备4'}]
        },
        //设备5
        {
            name: '业务指标',
            type: 'gauge',
            detail: {  //仪表盘详情，用于显示数据
            	formatter:'{value}%',          
            	offsetCenter:[0,'90%'],
            	fontSize:20,
            },
             center : ['90%', '30%'],
            radius:'20%',
            splitNumber:5,//仪表盘刻度的分割段数。
            startAngle:225,//仪表盘起始角度。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
            endAngle:-45,//仪表盘结束角度
            pointer:{
            	width:4,
            	length:'60%',
            },
            axisLine:{      //仪表盘轴线相关配置
             show:true,
             lineStyle:{
                 color:[[0.6,'#FF4500'],[0.9,'#4488BB'],[1,'#228B22']],//仪表盘的轴线可以被分成不同颜色的多段。
                 width:8,//轴线宽度
             }
            },
            splitLine:{//分割线样式
                length:7,//分割线长度
                lineStyle:{
                    width:2,
                    color:'#fff',
                }
            },
	        axisTick: {    // 坐标轴小标记
	           splitNumber:5,//分割线之间分割刻度
	           length :4,        // 属性length控制线长
	           lineStyle: {       // 属性lineStyle控制线条样式
	               color: '#BABABA',
	               shadowColor : '#fff', //默认透明
	               shadowBlur: 10
	        	},
            },
            title:{  //仪表盘标题
               offsetCenter:[0,'35%'], //相对于仪表盘中心的偏移位置
               color:'#fff',
                fontSize:14,
            },
            data: [{value:89, name: '设备5'}]
        },
        //设备6
               {
            name: '业务指标',
            type: 'gauge',
            detail: {  //仪表盘详情，用于显示数据
            	formatter:'{value}%',          
            	offsetCenter:[0,'90%'],
            	fontSize:20,
            },
             center : ['10%', '55%'],
            radius:'20%',
            splitNumber:5,//仪表盘刻度的分割段数。
            startAngle:225,//仪表盘起始角度。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
            endAngle:-45,//仪表盘结束角度
            pointer:{
            	width:4,
            	length:'60%',
            },
            axisLine:{      //仪表盘轴线相关配置
             show:true,
             lineStyle:{
                 color:[[0.6,'#FF4500'],[0.9,'#4488BB'],[1,'#228B22']],//仪表盘的轴线可以被分成不同颜色的多段。
                 width:8,//轴线宽度
             }
            },
            splitLine:{//分割线样式
                length:7,//分割线长度
                lineStyle:{
                    width:2,
                    color:'#fff',
                }
            },
	        axisTick: {    // 坐标轴小标记
	           splitNumber:5,//分割线之间分割刻度
	           length :4,        // 属性length控制线长
	           lineStyle: {       // 属性lineStyle控制线条样式
	               color: '#BABABA',
	               shadowColor : '#fff', //默认透明
	               shadowBlur: 10
	        	},
            },
            title:{  //仪表盘标题
               offsetCenter:[0,'35%'], //相对于仪表盘中心的偏移位置
               color:'#fff',
                fontSize:14,
            },
            data: [{value: 68, name: '设备6'}]
        },
  //设备7
          {
            name: '业务指标',
            type: 'gauge',
            detail: {  //仪表盘详情，用于显示数据
            	formatter:'{value}%',          
            	offsetCenter:[0,'90%'],
            	fontSize:20,
            },
             center : ['30%', '55%'],
            radius:'20%',
            splitNumber:5,//仪表盘刻度的分割段数。
            startAngle:225,//仪表盘起始角度。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
            endAngle:-45,//仪表盘结束角度
            pointer:{
            	width:4,
            	length:'60%',
            },
            axisLine:{      //仪表盘轴线相关配置
             show:true,
             lineStyle:{
                 color:[[0.6,'#FF4500'],[0.9,'#4488BB'],[1,'#228B22']],//仪表盘的轴线可以被分成不同颜色的多段。
                 width:8,//轴线宽度
             }
            },
            splitLine:{//分割线样式
                length:7,//分割线长度
                lineStyle:{
                    width:2,
                    color:'#fff',
                }
            },
	        axisTick: {    // 坐标轴小标记
	           splitNumber:5,//分割线之间分割刻度
	           length :4,        // 属性length控制线长
	           lineStyle: {       // 属性lineStyle控制线条样式
	               color: '#BABABA',
	               shadowColor : '#fff', //默认透明
	               shadowBlur: 10
	        	},
            },
            title:{  //仪表盘标题
               offsetCenter:[0,'35%'], //相对于仪表盘中心的偏移位置
               color:'#fff',
                fontSize:14,
            },
            data: [{value: 70, name: '设备7'}]
        },
  //设备8
          {
            name: '业务指标',
            type: 'gauge',
            detail: {  //仪表盘详情，用于显示数据
            	formatter:'{value}%',          
            	offsetCenter:[0,'90%'],
            	fontSize:20,
            },
            center : ['50%', '55%'],
            radius:'20%',
            splitNumber:5,//仪表盘刻度的分割段数。
            startAngle:225,//仪表盘起始角度。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
            endAngle:-45,//仪表盘结束角度
            pointer:{
            	width:4,
            	length:'60%',
            },
            axisLine:{      //仪表盘轴线相关配置
             show:true,
             lineStyle:{
                 color:[[0.6,'#FF4500'],[0.9,'#4488BB'],[1,'#228B22']],//仪表盘的轴线可以被分成不同颜色的多段。
                 width:8,//轴线宽度
             }
            },
            splitLine:{//分割线样式
                length:7,//分割线长度
                lineStyle:{
                    width:2,
                    color:'#fff',
                }
            },
	        axisTick: {    // 坐标轴小标记
	           splitNumber:5,//分割线之间分割刻度
	           length :4,        // 属性length控制线长
	           lineStyle: {       // 属性lineStyle控制线条样式
	               color: '#BABABA',
	               shadowColor : '#fff', //默认透明
	               shadowBlur: 10
	        	},
            },
            title:{  //仪表盘标题
               offsetCenter:[0,'35%'], //相对于仪表盘中心的偏移位置
               color:'#fff',
                fontSize:14,
            },
            data: [{value: 99, name: '设备8'}]
        },
  //设备9
          {
            name: '业务指标',
            type: 'gauge',
            detail: {  //仪表盘详情，用于显示数据
            	formatter:'{value}%',          
            	offsetCenter:[0,'90%'],
            	fontSize:20,
            },
           center : ['70%', '55%'],
            radius:'20%',
            splitNumber:5,//仪表盘刻度的分割段数。
            startAngle:225,//仪表盘起始角度。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
            endAngle:-45,//仪表盘结束角度
            pointer:{
            	width:4,
            	length:'60%',
            },
             axisLine:{      //仪表盘轴线相关配置
             show:true,
             lineStyle:{
                 color:[[0.6,'#FF4500'],[0.9,'#4488BB'],[1,'#228B22']],//仪表盘的轴线可以被分成不同颜色的多段。
                 width:8,//轴线宽度
             }
            },
            splitLine:{//分割线样式
                length:7,//分割线长度
                lineStyle:{
                    width:2,
                    color:'#fff',
                }
            },
	        axisTick: {    // 坐标轴小标记
	           splitNumber:5,//分割线之间分割刻度
	           length :4,        // 属性length控制线长
	           lineStyle: {       // 属性lineStyle控制线条样式
	               color: '#BABABA',
	               shadowColor : '#fff', //默认透明
	               shadowBlur: 10
	        	},
            },
            title:{  //仪表盘标题
               offsetCenter:[0,'35%'], //相对于仪表盘中心的偏移位置
               color:'#fff',
                fontSize:14,
            },
            data: [{value: 85.2, name: '设备9'}]
        },
  //设备10
          {
            name: '业务指标',
            type: 'gauge',
            detail: {  //仪表盘详情，用于显示数据
            	formatter:'{value}%',          
            	offsetCenter:[0,'90%'],
            	fontSize:20,
            },
            center : ['90%', '55%'],
            radius:'20%',
            splitNumber:5,//仪表盘刻度的分割段数。
            startAngle:225,//仪表盘起始角度。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
            endAngle:-45,//仪表盘结束角度
            pointer:{
            	width:4,
            	length:'60%',
            },
            axisLine:{      //仪表盘轴线相关配置
             show:true,
             lineStyle:{
                 color:[[0.6,'#FF4500'],[0.9,'#4488BB'],[1,'#228B22']],//仪表盘的轴线可以被分成不同颜色的多段。
                 width:8,//轴线宽度
             }
            },
            splitLine:{//分割线样式
                length:7,//分割线长度
                lineStyle:{
                    width:2,
                    color:'#fff',
                }
            },
	        axisTick: {    // 坐标轴小标记
	           splitNumber:5,//分割线之间分割刻度
	           length :4,        // 属性length控制线长
	           lineStyle: {       // 属性lineStyle控制线条样式
	               color: '#BABABA',
	               shadowColor : '#fff', //默认透明
	               shadowBlur: 10
	        	},
            },
            title:{  //仪表盘标题
               offsetCenter:[0,'35%'], //相对于仪表盘中心的偏移位置
               color:'#fff',
                fontSize:14,
            },           
            data: [{value: 55.8, name: '设备10'}]
        }, 
    ]
};
