const img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAz9JREFUWEfNmEuoTWEUx39/j/LuXhMh5REJSQYeZaA8u+WVASNKDLwKGUl0DUx0lTxGCgN5JLlF4uaVhAmZeYXyKhNvGVx3ad32vvbdzjl7n733ufd+dTp12uu/fmd9e31rrU/08KVa8JlZH2A58A14BbyW9CeLr1oBDgK+R4Ac9C5wwT+SfqSFzQxoZv2AmcAUYAwwBNgt6ZOZxQGjPJ+Bw8CBNKBVAZpZb2AZsAZYCPSPRWK8pJcJgKHJO2C9pGuVopka0MxWAfuACRUEqwF0mTbXlNRYTjMR0MyGA6eABSnem2oBQ8lDkraV0q8IaGazgEvAsBRw/khWQLfdKulI3E9ZQDObBzQDA1PC5QVsBRoktUT9lQQ0s+nAbWBwFXB5Ad3+LTApmt3/AZpZHfAYGF0lXBGAruFJszf0XQrwJLA2A1xRgF+AUWEUOwGa2WzgHpCY3WX+QJ4kiUquk3TCf4gDXgUWZ4xeURF0ncuSlnQCNDM/gJ/miF6RgF7H6yS1dUTQzPw035MjelHAAcDPIrSigA+BGUWIuoaZfQ0aiKySC/1MbAc0My/63hJ5H5dntSdJoLkZ2J8DcpWk8yHgVOBJHrLAdp6km1EdM/Pt7pVB+7ek1hCwAbiSQSRucguY7y93AVrtEiGgt1JnCxL1CB4EnmXU++ZNb2gbAq4M2vGMmoWaHZe0IQ7ovd71Qt1kF2uStDMOOA5oz74esLZIOhoH9FnDi7QPO9295kq60wkwOLfy1uEi/thvoF6Sf//L4gBwI3CsCC85NJol+cDfsaKlbijwHvB5t7vWSkkXSwIGUfSXc1M30b0AJsYP+Xg/ODJoubojWVZLOhcPTqmWfwfQ1MVRbJHkNxX/rVKA/ptn9KIugvSyNk3Sx1SAwbtYH9xGTa4x5C/AO6AH5fxUGtxHBOWvVpDe1q+QdKNSEJKuPjySZ2qw3W8AP1IeJe1Q4nhpZv7MdsBnlrzZbcFF1A5Jfk+YuBIBQwUz8yNoF7Auw2HuYN4tNUq6n0hVqpKkNTIzrzje4C4F5lSIqt9J+xb6iXBa0vO0PspWkmoFghtXv8MZGwxHfQGf5j54Rx0t+tVqh8+n3uKsDvLa/QXfui44X6OfOgAAAABJRU5ErkJggg=="
const seriesData=[
                {value: 1048, name: '搜索引擎'},
                {value: 735, name: '直接访问'},
                {value: 580, name: '邮件营销'},
                {value: 484, name: '联盟广告'},
                {value: 300, name: '视频广告'}
            ]
option = {
    backgroundColor:'#0D202F',
    tooltip: {
        show: false
    },
    graphic:{
        elements: [{
            type: "image",
            z: 5,
            style: {
                image: img,
                width: 40,
                height: 40
            },
            left: '28%',
            top: "center"
        }]
    },
    legend: {
        icon: 'circle',
        itemWidth: 8, 
        orient: 'vertical',
        top: 'center',
        left: '60%',
        itemGap:16,
        textStyle: {
            align: 'left',
            verticalAlign: 'middle',
            rich: {
                name: {
                    color: '#fff',
                    fontSize: 12,
                    padding:[10,16,10,10]
                },
                border:{
                    color:'#666',
                    padding:10
                },
                value: {
                    color: '#88CCFF',
                    fontSize: 12
                },
                rate: {
                    color: '#FFDE55',
                    fontSize: 12,
                },
            },
        },
        data: ['搜索引擎','直接访问','邮件营销','联盟广告','视频广告'],
        formatter: (name) => {
            if (seriesData.length) {
                const item = seriesData.filter((item) => item.name === name)[0];
                return `{name|${name} }{value| ${item.value/ 2}%}{border||} {value|${item.value}辆} `;
            }
        },
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['30%','37%'],
            center:['30%','50%'],
            data: [
                {value: 1048, name: '搜索引擎'},
                {value: 735, name: '直接访问'},
                {value: 580, name: '邮件营销'},
                {value: 484, name: '联盟广告'},
                {value: 300, name: '视频广告'}
            ],
            label:{
                show:false
            },
            color:['#0092FF','#9b91f2','#0CDCA1','#FFC920','#FA5B36'],
            itemStyle:{
                borderColor: 'rgba(27, 47, 63, 0.6)',
                borderWidth:2
            }
        },
        {
            name:"饼图边框",
            type: 'pie',
            radius: ['31%','41%'],
            center:['30%','50%'],
            data:[{value:100,name:"全部"}],
            label:{
                show:false
            },
            z:1,
            itemStyle:{
                color:'rgba(255,255,255,0.08)',
                borderColor:'#7FC8FF',
                width:1,
                borderType:'dashed'
            }
        },
        {
            name:"饼图黑色",
            type: 'pie',
            radius: '30%',
            center:['30%','50%'],
            data:[{value:100,name:"全部"}],
            label:{
                show:false
            },
            z:3,
            itemStyle:{
                color:'rgba(0,0,0,0.2)'
            }
        },
        {
            name:"饼图虚色",
            type: 'pie',
            radius: '25%',
            center:['30%','50%'],
            data:[{value:100,name:"全部"}],
            label:{
                show:false
            },
            z:3,
            itemStyle:{
               color:'rgba(255,255,255,0.08)'
            }
        },
        {
            name:"饼图虚色",
            type: 'pie',
            radius: '20%',
            center:['30%','50%'],
            data:[{value:100,name:"全部"}],
            label:{
                show:false
            },
            z:3,
            itemStyle:{
               color:'rgba(0,0,0,0.2)',
               borderColor:'#7FC8FF'
            }
        },
        
    ]
};