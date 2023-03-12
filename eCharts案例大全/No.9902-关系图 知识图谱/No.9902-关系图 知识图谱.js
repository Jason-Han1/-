 option = {
     backgroundColor:'#0e2147',
     series: [{
         type: 'graph',
         layout: 'force',
         symbolSize: 58,
         roam: true,
         edgeSymbol: ['circle', 'arrow'],
         edgeLabel: {
             normal: {
                 show: true,
                 textStyle: {
                     fontSize: 20,
                 },
                 position:'middle',
                 formatter: function(x) {
                     return x.data.name;
                 }
             }
         },
         force: {
             repulsion: 2500,
             edgeLength: [20, 100]
         },
         draggable: true,
         label: {
             normal: {
				 show: true,
				 // 多字换行
				formatter: function(params) {
					var newParamsName = "";
					var paramsNameNumber = params.name.length;
					var provideNumber = 7; //一行显示几个字
					var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
					if (paramsNameNumber > provideNumber) {
						for (var p = 0; p < rowNumber; p++) {
							var tempStr = "";
							var start = p * provideNumber;
							var end = start + provideNumber;
							if (p == rowNumber - 1) {
								tempStr = params.name.substring(start, paramsNameNumber);
							} else {
								tempStr = params.name.substring(start, end) + "\n\n";
							}
							newParamsName += tempStr;
						}

					} else {
						newParamsName = params.name;
					}
					return newParamsName
				},
                 textStyle: {
					 color:'#ffffff',
					 fontSize:14
				 }
             }
         },
         data: [{
             name: '李达康',
             itemStyle: {
                 normal: {
                     color: 'red'
                 }
             }
         }, {
             name: '祁同伟',
             des: '汉东省公安厅厅长',
             symbolSize: 100
         },{
             name: '程度',
             des: '汉东省京州市公安局光明区分局局长，因犯错误，被李达康书记和赵东来局长点名要清除公安队伍。<br/>但在高小琴的帮助下，祁同伟调他当上了省公安厅办公室副主任。<br/>尽管程度逃避了所有罪责，上面也有人保他，<br/>但最终还是在反贪局局长侯亮平的缜密侦查下被绳之于法。',
         },{
             name: '丁义珍'
         },{
             name: '高育良'
         },{
             name: '赵立春'
         },{
             name: '侯亮平'
         },{
             name: '陈海'
         }],
         links: [
             {
             source: '高育良',
             target: '祁同伟',
             name: '师生'
         }, {
             source: '李达康',
             target: '赵立春',
             name: "前任秘书"
         }, {
             source: '祁同伟',
             target: '高小琴',
             name: "情人"
         }, {
             source: '祁同伟',
             target: '陈海',
             name: "师哥"
         }, {
             source: '祁同伟',
             target: '侯亮平',
             name: "师哥"
         }, {
             source: '祁同伟',
             target: '程度',
             name: "领导"
         }, {
             source: '李达康',
             target: '丁义珍',
             name: "领导"
         }, {
             source: '高小琴',
             target: '丁义珍',
             name: "策划出逃"
         }, {
             source: '祁同伟',
             target: '丁义珍',
             name: "勾结"
         }, {
             source: '李达康',
             target: '侯亮平',
             name: "勾结"
         }]
     }]
 };