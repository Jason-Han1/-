var maxSpeed = 2.5; // 设置最大风速

// 设置需要插值的参数，所给数据范围小
const conf = {
	radius_step: 0.02, // 半径插值步长，从0开始，步长越小，插值越密集，计算量越大
	angle_step: 3, // 步长越小，插值越密集，计算量越大
};

// 需要插值的数据(测试数据) [windSpeed, windDir, value]
var srcData = [ 
	[2.0,225,0.9],
	[2.3,282,0.85],
	[1.5,176,0.5],
	[0.5,0,0.3],
	[1.5,22.5,0.01],
	[1.0,45,0.03],
	[2.0,45,0.02],
	[1.5,210,0.7],
	[1,195,0.6],
	[2,330,0.3],
	[2,120,0.2],
	[1.7,300,0.8],
	[1,270,0.5]
	];

// 随机生成模拟数据
/*var srcData = [];
for(var i=0;i<20;i++){
	srcData.push([maxSpeed*Math.random(), 360*Math.random(), 0.4*Math.random()]);
}
*/

//插值后的数据[radius,angle,value]
var data = interpolation(srcData);
console.log(data.length);

/**
 * 插值操作，返回插值后的结果
 */
function interpolation(srcData){
	var power = 0.6;
	
	// 计算距离权重系数
	var D = [];
	for(var i=0;i<srcData.length;i++){
		var Di = [];
		for(var j=0;j<srcData.length;j++){
			var r1 = srcData[i][0];
			var a1 = srcData[i][1];
			var r2 = srcData[j][0];
			var a2 = srcData[j][1];
			
			var dr = Math.abs(r2-r1)*30;
			var da = Math.min(Math.abs(a2-a1),360-Math.abs(a2-a1))*0.5;
			var di = Math.sqrt(Math.pow(da, 2) + Math.pow(dr, 2));
			Di.push(1 / (1+Math.pow(di, power)));
		}
		D.push(Di);
	}
	D = math.inv(D);
	
	var data = [];
	// 根据配置conf序列出所有需要进行插值的点
	for(var r=conf.radius_step;r<=maxSpeed;r+=conf.radius_step){
		for(var a=0;a<360;a+=conf.angle_step/r){
			var v = 0;
			var vectorD = [];
			var matrixV = [];
			for(var i=0;i<srcData.length;i++){
				var ri = srcData[i][0];
				var ai = srcData[i][1];
				var vi = srcData[i][2];
				var dr = Math.abs(r-ri)*30;
				var da = Math.min(Math.abs(a-ai),360-Math.abs(a-ai))*0.5;
				var di = Math.sqrt(Math.pow(da, 2) + Math.pow(dr, 2));
				vectorD.push(1 / (1+Math.pow(di, power)));
				matrixV.push([vi]);
			}
			var matrixD = [];matrixD.push(vectorD);
			var matrixValue = math.multiply(math.multiply(matrixD, D), matrixV);
			v = matrixValue[0][0];
			
			data.push([r,a,v]);
		}
	}
	return data;
}


option = {
    legend: {
        data: ['Punch Card'],
        left: 'right'
    },
    polar: {},
    tooltip: {
        formatter: function (params) {
            return 'AQI='+Math.ceil(500*params.value[2]) + '<br>风向=' + Math.ceil(100*params.value[1])/100 + '<br>风速=' + Math.ceil(100*params.value[0])/100;
        }
    },
    angleAxis: {
        type: 'value',
        min: 0,
        max: 360,
        splitLine: {
            show: false,
            lineStyle: {
                color: '#999',
                type: 'dashed'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
        	show: false
        },
        axisLabel: {
        	show: false
        }
    },
    radiusAxis: {
        type: 'value',
        min: 0,
        max: maxSpeed,
        axisLine: {
            show: true
        },
        splitLine: {
        	show: false
        },
        zlevel: 10000,
        z: 10000
    },
    radar: {
        shape: '',
        radius: '80%',
        name: {
            textStyle: {
                color: 'black',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: '北', max: maxSpeed},
            { name: '北东北', max: maxSpeed},
            { name: '东北', max: maxSpeed},
            { name: '东东北', max: maxSpeed},
            { name: '东', max: maxSpeed},
            { name: '东东南', max: maxSpeed},
            { name: '东南', max: maxSpeed},
            { name: '南东南', max: maxSpeed},
            { name: '南', max: maxSpeed},
            { name: '南西南', max: maxSpeed},
            { name: '西南', max: maxSpeed},
            { name: '西西南', max: maxSpeed},
            { name: '西', max: maxSpeed},
            { name: '西西北', max: maxSpeed},
            { name: '西北', max: maxSpeed},
            { name: '北西北', max: maxSpeed}
        ],
        zlevel: 10000,
        z: 10000
    },
    series: [{
        name: 'Punch Card',
        type: 'scatter',
        coordinateSystem: 'polar',
        symbolSize: function (val) {
            return 8;
        },
        data: data,
        animationDelay: function (idx) {
            return idx * 5;
        },
        itemStyle: {
        	color: function(obj){
        		var v = obj.value[2]*500;
        		if(v>500){
        			v = 500;
        		}
        		// 渐变颜色
        		return getAqiColor(v);
        		// 非渐变效果
            	//return getIAQIColor('aqi',v);
            }
        }
    },{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        data: []
    }]
};

function getAqiColor(value){
	var COLOR = ['#ccc','rgb(0,228,0)','rgb(255,255,0)','rgb(255,126,0)','rgb(255,0,0)','rgb(153,0,76)','rgb(126,0,35)'];
	var V = [0,50,100,150,200,300,500];
	var R = [204,0,255,255,255,153,126];
	var G = [204,228,255,126,0,0,0];
	var B = [204,0,0,0,0,76,35];
	
	if(value>=V[V.length-1]){
		return COLOR[V.length-1];
	}
	if(value<=V[0]){
		return COLOR[0];
	}
	for(var i=0;i<COLOR.length;i++){
		if(V[i]==value){
			return COLOR[i];
		}
		if(value>V[i] && value<V[i+1]){
			var r = (R[i+1]-R[i])/(V[i+1] - V[i])*(value-V[i]) + R[i];
			var g = (G[i+1]-G[i])/(V[i+1] - V[i])*(value-V[i]) + G[i];
			var b = (B[i+1]-B[i])/(V[i+1] - V[i])*(value-V[i]) + B[i];
			return 'rgb('+r+','+g+','+b+')';
		}
	}
	return 'white';
}


// 非渐变时需要对值设定颜色等级
const _gConfig = {};
var COLOR = ['#ccc','rgb(0,228,0)','rgb(255,255,0)','rgb(255,126,0)','rgb(255,0,0)','rgb(153,0,76)','rgb(126,0,35)'];
var AQI = [0,50,100,150,200,300,10000];
_gConfig.AQI_LEVEL = [0,50,100,150,200,300,400,500]; // len = 8

function getIAQIColor(factor,value,model){
	var obj = getAQILevel(value);
	if(typeof(obj.color)=='undefined'){
		return COLOR[0];
	}
	// 计算出分因子值对应的分AQI
	return obj.color;
}

function getAQILevel(aqiValue){
	var res = {};
	var AQI = _gConfig.AQI_LEVEL;
	for(var i=0;i<AQI.length;i++){
		if(aqiValue <= AQI[i]){
			if(i>6){
				res.color = COLOR[6];
			}else{
				res.color = COLOR[i];
			}
			break;
		}
	}
	// 将离线颜色设置为优的颜色
	if(res.color == '#ccc'){
		res.color = '#00E400';
	}
	return res;
}
