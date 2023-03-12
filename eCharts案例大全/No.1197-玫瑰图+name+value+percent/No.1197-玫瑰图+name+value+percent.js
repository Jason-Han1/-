
	let datas = [{name:'高校',value:25},{name:'家长',value:30},{name:'社会',value:25},{name:'校友',value:8},{name:'本校',value:12}]
   
	let colors = ["#03D6EF","#1276FF","#7114FF","#F83818","#FFC513"]
 option = {
		 tooltip: {
				 trigger: 'item',
				 triggerOn:'click',
				 formatter:'{b}: {c}人 ({d}%)'
		 },
		 legend: {
			 orient: "vertical",
			 top: '20%',
			 right: 40,
			 left: '45%',
			 itemGap: 12,
			 itemWidth: 8,
			 itemHeight: 8,
			 // 使用回调函数
			 formatter: function (name) {
				 var data = option.series[0].data;
				 var total = 0;
				 var tarValue;
				 for (var i = 0, l = data.length; i < l; i++) {
					 total += data[i].value;
					 if (data[i].name == name) {
						 tarValue = data[i].value;
					 }
				 }
				 var p = ((tarValue / total) * 100).toFixed(2);
				 return '{a|'+name+'}' + '  {b|' +tarValue + "人 }" + " " + p + "%";
			 },
			 textStyle: {
				 fontSize: 12,
				 color: '#999',
				 rich: {
					 a: {
							 color: '#666',
							 width: 40
						 },
						 b: {
							 width: 50
						 }
				 }
			 }
		 },
		 color: colors,
		 series: [
				 {
						 type: 'pie',
						 roseType: 'area',
						 radius: ['50', '200'],
						 avoidLabelOverlap: false,
						 top: '5%',
						 left: '-58%',
						 label: {
								 show: false,
								 position: 'center'
						 },
						 emphasis: {
								 label: {
										 show: true,
										 fontSize: '12'
								 }
						 },
						 labelLine: {
								 show: false
						 },
						 data: datas
				 }
		 ]
 }