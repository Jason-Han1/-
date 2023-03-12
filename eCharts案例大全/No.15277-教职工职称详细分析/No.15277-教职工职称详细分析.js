var data =[];
  for(var i=0;i<25;i++){
        for(var j=0;j<4;j++){
           data.push([i,j,Math.floor(Math.random()*(20+1-10)+8)]);  
            
        }
    }	
		var hours = ["初级", "中级", "副高级", "高级"];

		var days = ['财政税务学院', '创新创业与实验教学中心', '财经干部教育中心', '法学院', '工商管理学院（MBA教育中心）', '公共管理学院', '管理科学与工程学院', '国际经济贸易学院', '国际商务外语学院', '国际商学院', '国际教育学院、留学生办公室', '高等职业技术学院', '金融学院', '经济学院', '会计学院', '马克思主义学院', '培训与继续教育学院', '萨里国际学院、旅游与酒店管理学院', '数学学院', '社会与行为跨学科研究中心', '统计学院', '投资工程管理学院', '体育教学部', '网络教育学院', '新闻传播学院、人文学院']

		data = data.map(function(item) {
			return [item[1], item[0], item[2]];
		});
		var option = {
			title: {
				text: 'xx学院老师职称分析散点图',
			},

			tooltip: {
				position: 'top',
				formatter: function(params) {
					return days[params.value[0]] + '的' + hours[params.value[1]] + ' 人数是 ' + params.value[2];
				}
			},
			grid: {
				left: 2,
				bottom: '4%',
				right: '10%',
				containLabel: true
			},
			xAxis: {
				type: 'category',
				name: '学院',
				data: hours,
				boundaryGap: false,
				splitLine: {
					show: true,
					lineStyle: {
						color: '#999',
						type: 'dashed'
					}
				},
				axisLine: {
					show: false
				}
			},
			yAxis: {
				type: 'category',
				name: '职称',
				data: days,
				axisLine: {
					show: false
				}
			},
			series: [{
				name: 'xx学院老师职称分析散点图',
				type: 'scatter',
				label: {
					normal: {
						show: true,
						position: 'right'
					}
				},
				symbolSize: function(data) {
					return Math.sqrt(data[2]) * 3;
				},
				data: data,
				animationDelay: function(idx) {
					return Math.sqrt(data[2]) * 3;
				}
			}]
		};