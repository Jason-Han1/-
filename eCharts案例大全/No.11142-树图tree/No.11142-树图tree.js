// 把数组整理成树形结构
			function toTreeData(data) {
				const cloneData = JSON.parse(JSON.stringify(data)); // 对源数据深度克隆
				const tree = cloneData.filter(father => {
					// 循环所有项
					const branchArr = cloneData.filter(
						child => father.tenantId === child.parentTenantId
					); // 返回每一项的子级数组
					if (branchArr.length > 0) {
						father.children = branchArr; // 如果存在子级，则给父级添加一个children属性，并赋值
					} else {
						father.label = {
							show: true,
							position: 'insideTop',
							distance: 0,
							verticalAlign: 'top',
							align: 'center',
							backgroundColor: '#f3c36b',
							fontSize: 14,
							padding: [4, 10],
							borderRadius: 4,
							formatter: params => {
								const {
									tenantName,
									tenantCreditCode,
								} = params.data;
								return `{name|${tenantName}}\n{code|${tenantCreditCode}}`;
							},
							rich: {
								name: {
									height: 22,
									fontWeight: 'bold',
								},
								code: {
									height: 18,
								},
							},
						};
					}
					return (
						!father.parentTenantId || father.parentTenantId === ''
					); // 返回第一层
				});
				return tree; // 返回树形数据
			}
			// 获取所有层级中节点数最大的层级的节点数(tempNodeNum)，总层数(tempclassesNum)
			function treeDataProcess(data) {
				let tempNodeNum = 0;
				let tempclassesNum = 0;
				if (data.children) {
					tempNodeNum = data.children.length; // 第二层,四，六,...
					const len = data.children.length;
					tempclassesNum += 1; // 2
					// let classesComputeEnable = true;
					let perNodeNum = 0; // 3
					let arr = [];
					for (let i = 0; i < len; i += 1) {
						if (data.children[i].children) {
							// if (classesComputeEnable) {
							// 	tempclassesNum += 1;
							// 	classesComputeEnable = false;
							// }
							perNodeNum += data.children[i].children.length; // 第三层,五，七，...
							arr.push(treeDataProcess(data.children[i])); // {1,3}
						}
					}
					tempNodeNum = Math.max(perNodeNum, tempNodeNum);
					let arrLen = arr.length;
					let maxClassesNum =
						arr.length > 0 ? arr[0].tempclassesNum : 0;
					let maxNodeNum = arr.length > 0 ? arr[0].tempNodeNum : 0;
					for (let i = 1; i < arrLen; i += 1) {
						if (maxNodeNum < arr[i].tempNodeNum) {
							maxNodeNum = arr[i].tempNodeNum;
						}
						if (maxClassesNum < arr[i].tempclassesNum) {
							maxClassesNum = arr[i].tempclassesNum;
						}
					}
					tempNodeNum = Math.max(maxNodeNum, tempNodeNum);
					tempclassesNum = tempclassesNum + maxClassesNum;
				}
				// tempNodeNum：每层最大的节点数，tempclassesNum：总层数
				return { tempNodeNum, tempclassesNum };
			}
			var data = [
				{
					tenantName: '企业A',
					netId: 'n1111',
					tenantId: 't1111',
					tenantLevel: '0',
					tenantCreditCode: 'tcc1111',
					id: '1111',
				},
				{
					parentTenantId: 't1111',
					tenantName: '企业B1',
					netId: 'n1111',
					tenantId: 't1112',
					tenantLevel: '1',
					tenantCreditCode: 'tcc1112',
					id: '1112',
				},
				{
					parentTenantId: 't1111',
					tenantName: '企业B2',
					netId: 'n1111',
					tenantId: 't1113',
					tenantLevel: '1',
					tenantCreditCode: 'tcc1113',
					id: '1113',
				},
				{
					parentTenantId: 't1112',
					tenantName: '企业C',
					netId: 'n1111',
					tenantId: 't1114',
					tenantLevel: '2',
					tenantCreditCode: 'tcc1114',
					id: '1114',
				},
				{
					parentTenantId: 't1114',
					tenantName: '企业D',
					netId: 'n1111',
					tenantId: 't1115',
					tenantLevel: '3',
					tenantCreditCode: 'tcc1115',
					id: '1115',
				},
			];

			var container = document.getElementById('testEchart');
			container.addEventListener('click', e => {
				// // console.log('mainE-e', e);
				const targetE = e.target;
				if (targetE.hasAttribute('data-btn')) {
					const type = targetE.getAttribute('data-btn');
					const netId = targetE.getAttribute('data-netId');
					const tenantLevel = targetE.getAttribute(
						'data-tenantLevel'
					);
					const tenantId = targetE.getAttribute('data-tenantId');
					const tenantName = targetE.getAttribute('data-tenantName');
					const memberId = targetE.getAttribute('data-id');
					const param = {
						netId,
						tenantId,
						tenantLevel,
						tenantName,
						// tenantCreditCode,
						id: memberId,
						// children,
					};
					alert('tenantName=' + tenantName);
				}
			});
			// 设置echart容器的宽高
			function setEchartWH(treeData, dom) {
				const treeInfo = treeDataProcess(treeData);
				// console.log('treeInfo', treeInfo);
				// console.log('innerWidth', dom.innerWidth);
				const computedW = treeInfo.tempNodeNum * 180;
				const computedH = (treeInfo.tempclassesNum + 1) * 100;
				let isUpdate = false;
				if (computedW > 800) {
					dom.style.width = `${computedW}px`;
					isUpdate = true;
				}
				if (computedH > 400) {
					dom.style.height = `${computedH}px`;
					isUpdate = true;
				}
				return isUpdate;
			}
			// 生成echarts图
			function testEcharts(data) {
				const chainClassChart = echarts.init(container);
				let treeData = [];
				if (data.length === 1) {
					treeData = data;
				} else {
					treeData = this.toTreeData(data);
				}
				if (setEchartWH(treeData[0], container)) {
					chainClassChart.resize();
				}
				// updateData({operationDa.ta: treeData});
				if (treeData[0]) {
					treeData[0].label = {
						normal: {
							position: 'insideTop',
							distance: 0,
							verticalAlign: 'top',
							align: 'center',
							backgroundColor: '#e69103',
						},
					};
				}
				// console.log('treeData', JSON.stringify(treeData), data);
				chainClassChart.setOption({
					tooltip: {
						trigger: 'item',
						triggerOn: 'mousemove',
						showContent: true,
						enterable: true,
						position: 'top',
						formatter: params => {
							const {
								netId,
								tenantId,
								tenantLevel,
								tenantName,
								// tenantCreditCode,
								children,
							} = params.data;
							// {"tenantName":"上海海澜之家服装有限公司","netId":"ca62969ac6184e8bbe899db9b1508cc9","tenantId":"d0000009b4943a78fcf36faba1e7ae5","tenantLevel":"0",
							// "tenantCreditCode":"39030120312264363B","id":"ff78b341a2fd451cb4e0ded68dde7105","name":"上海海澜之家服装有限公司\n39030120312264363B"}
							let htmlStr = '<div class="toolTipBox">';
							const domAttribute = `data-netId="${netId}" data-tenantName="${tenantName}" data-id="${
								params.data.id
							}" data-tenantLevel="${tenantLevel}" data-tenantId="${tenantId}"`;
							if (tenantLevel === '0') {
								htmlStr += `<span ${domAttribute} data-btn="add">新增</span>`;
							} else if (children) {
								htmlStr += `<span ${domAttribute} data-btn="add">新增</span><span ${domAttribute} data-btn="view">查看</span>`;
							} else {
								htmlStr += `<span ${domAttribute} data-btn="add">新增</span><span ${domAttribute} data-btn="view">查看</span><span ${domAttribute} data-btn="edit">修改</span><span ${domAttribute} data-btn="delete">删除</span>`;
							}
							return `${htmlStr}</div>`;
						},
						extraCssText: 'z-index:999;',
					},
					series: [
						{
							type: 'tree',
							data: treeData,
							name: '产业链层级',
							left: '2%',
							right: '2%',
							top: '20px',
							bottom: '20px',
							orient: 'vertical',
							// symbolSize: [220, 60],
							symbolSize: [100, 46],
							symbol: 'rect',
							roam: false, // 开启缩放和移动。scale，缩放。move，移动。
							initialTreeDepth: 8,
							expandAndCollapse: true,
							itemStyle: {
								// 设置边框的属性
								normal: {
									color: '#fff',
									borderWidth: 0,
									// opacity: 0,
								},
							},
							label: {
								normal: {
									// position: 'center',
									position: 'insideTop',
									distance: 0,
									verticalAlign: 'top',
									align: 'center',
									backgroundColor: '#ffa500',
									color: '#fff',
									fontSize: 14,
									padding: [4, 10],
									borderRadius: 4,
									borderColor: '#fff',
									borderWidth: 1,
									formatter: params => {
										// console.log('params', params);
										const {
											tenantName,
											tenantCreditCode,
										} = params.data;
										return `{name|${tenantName}}\n{code|${tenantCreditCode}}`;
									},
									rich: {
										name: {
											height: 22,
											fontWeight: 'bold',
										},
										code: {
											height: 18,
										},
									},
								},
							},
							lineStyle: {
								// 连线颜色
								normal: {
									color: '#ccc',
									width: 1.5,
								},
							},
							animationDuration: 550,
							animationDurationUpdate: 750,
						},
					],
				});
			}

			testEcharts(data);