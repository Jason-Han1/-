var m_data_new = [];
			var m_data_old = [];
			var m_data = [{
					name: 'Total',
					num: 800
				},
				{
					name: 'Rent',
					num: 1200
				},
				{
					name: 'Utilities',
					num: 300
				},
				{
					name: 'Transon',
					num: 200
				},
				{
					name: 'Meals',
					num: 900
				},
				{
					name: 'Other',
					num: 480
				}
			];

			m_data.sort(function(a, b) {
				return a.num - b.num
			})

			m_data_new.push([m_data[0].name, m_data[0].num]);
			m_data_old.push([m_data[0].name, 0]);

			for (var i = 1; i < m_data.length; i++) {
				m_data_new.push([
					m_data[i].name,
					m_data[i].num - m_data[i - 1].num
				]);
				m_data_old.push([
					m_data[i].name,
					m_data[i].num + m_data[i - 1].num
				]);
			};
			
			var option = {

				xAxis: {
					type: 'category',
				},
				yAxis: {
					type: 'value'
				},
				series: [{
					type: 'bar',
					barWidth: '100%',
					stack: 'a',
					barCategoryGap: '1%',
					itemStyle: {
						color: '#fff'
					},
					data: m_data_old
				}, {
					type: 'bar',
					barWidth: '100%',
					stack: 'a',
					data: m_data_new
				}]
			}