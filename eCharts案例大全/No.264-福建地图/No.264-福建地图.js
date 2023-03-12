var longyan = '/asset/get/s/data-1639040376155-6Xo9iVnsG.json';
var nanping = '/asset/get/s/data-1639040387973-Z6y1d_q1a.json';
var ningde = '/asset/get/s/data-1639040398071-gMC5wv5o9.json';
var putian = '/asset/get/s/data-1639040406131-Y18CQl9Cn.json';
var quanzhou = '/asset/get/s/data-1639040414643-HB9YISWgX.json';
var sanming = '/asset/get/s/data-1639040424860-da5_aFUuv.json';
var xiamen = '/asset/get/s/data-1639040430042-s6Xt3eYVi.json';
var fuzhou = '/asset/get/s/data-1639040359509-76PAjZOZH.json';
var zhangzhou = '/asset/get/s/data-1639040437259-pf3zr3d3O.json';

var uploadedDataURL = '/asset/get/s/data-1639710481555-Odg5nq6rQ.json';
var myEchart = echarts.init(document.getElementById('chart-panel'));
var btn = document.createElement('button');
var t = document.createTextNode('返回上级');
btn.appendChild(t);
btn.setAttribute('id', 'btn-go-up');
btn.style.display = 'none';
btn.style.position = 'absolute';
document.body.appendChild(btn);

var tempData = [];
var mapData = [
    {
        name: '宁德市',
        value: 0,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '福州市',
        value: 10,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '莆田市',
        value: 20,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '泉州市',
        value: 30,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '厦门市',
        value: 40,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '漳州市',
        value: 50,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '龙岩市',
        value: 60,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '三明市',
        value: 70,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '南平市',
        value: 100,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
];
tempData = mapData;

var putianMapData = [
    {
        name: '城厢区',
        value: 0,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '涵江区',
        value: 10,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '荔城区',
        value: 20,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '秀屿区',
        value: 30,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '仙游县',
        value: 40,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
];
var quanzhouMapData = [
    {
        name: '鲤城区',
        value: 0,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '丰泽区',
        value: 10,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '洛江区',
        value: 20,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '泉港区',
        value: 30,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '惠安县',
        value: 40,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '安溪县',
        value: 50,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '永春县',
        value: 50,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '德化县',
        value: 50,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '石狮市',
        value: 50,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '晋江市',
        value: 50,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '南安市',
        value: 50,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '金门县',
        value: 50,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
];
var xiamenMapData = [
    {
        name: '思明区',
        value: 0,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '海沧区',
        value: 10,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '湖里区',
        value: 20,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '集美区',
        value: 30,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '同安区',
        value: 40,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '翔安区',
        value: 50,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
];
var fuzhouMapData = [
    {
        name: '鼓楼区',
        value: 0,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '台江区',
        value: 10,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '仓山区',
        value: 20,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '马尾区',
        value: 30,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '晋安区',
        value: 40,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '长乐区',
        value: 50,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '罗源县',
        value: 60,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '永泰县',
        value: 70,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '闽侯县',
        value: 100,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '福清市',
        value: 100,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '平潭县',
        value: 47,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '连江县',
        value: 20,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '闽清县',
        value: 5,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
];
var zhangzhouMapData = [
    {
        name: '芗城区',
        value: 0,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '龙文区',
        value: 10,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '云霄县',
        value: 20,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '漳浦县',
        value: 30,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '诏安县',
        value: 40,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '长泰区',
        value: 50,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '东山县',
        value: 60,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '南靖县',
        value: 70,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '平和县',
        value: 100,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '华安县',
        value: 100,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '龙海区',
        value: 100,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
];
var ningdeMapData = [
    {
        name: '蕉城区',
        value: 0,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '霞浦县',
        value: 10,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '古田县',
        value: 20,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '屏南县',
        value: 30,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '寿宁县',
        value: 40,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '周宁县',
        value: 50,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '柘荣县',
        value: 60,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '福安市',
        value: 70,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '福鼎市',
        value: 100,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
];
var sanmingMapData = [
    {
        name: '三元区',
        value: 0,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '明溪县',
        value: 10,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '清流县',
        value: 20,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '宁化县',
        value: 30,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '大田县',
        value: 50,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '尤溪县',
        value: 60,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '沙县区',
        value: 70,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '将乐县',
        value: 100,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '泰宁县',
        value: 50,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '永安市',
        value: 39,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '建宁县',
        value: 50,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
];
var longyanMapData = [
    {
        name: '新罗区',
        value: 0,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '永定区',
        value: 10,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '长汀县',
        value: 20,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '上杭县',
        value: 30,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '武平县',
        value: 40,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '连城县',
        value: 50,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '漳平市',
        value: 60,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
];
var nanpingMapData = [
    {
        name: '延平区',
        value: 0,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '建阳区',
        value: 10,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '顺昌县',
        value: 20,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '浦城县',
        value: 30,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '光泽县',
        value: 40,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '松溪县',
        value: 50,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '政和县',
        value: 60,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '邵武市',
        value: 70,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '武夷山市',
        value: 100,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
    {
        name: '建瓯市',
        value: 50,
        data: [
            {
                name: '数据1',
                value: 123,
            },
            {
                name: '数据2',
                value: 123,
                unit: '%',
            },
        ],
    },
];

var echartDom = {};
var cityProper = {
    福州市: '/asset/get/s/data-1639040359509-76PAjZOZH.json',
    宁德市: '/asset/get/s/data-1639040398071-gMC5wv5o9.json',
    南平市: '/asset/get/s/data-1639040387973-Z6y1d_q1a.json',
    三明市: '/asset/get/s/data-1639040424860-da5_aFUuv.json',
    龙岩市: '/asset/get/s/data-1639040376155-6Xo9iVnsG.json',
    漳州市: '/asset/get/s/data-1639040437259-pf3zr3d3O.json',
    厦门市: '/asset/get/s/data-1639040430042-s6Xt3eYVi.json',
    泉州市: '/asset/get/s/data-1639040414643-HB9YISWgX.json',
    莆田市: '/asset/get/s/data-1639040406131-Y18CQl9Cn.json',
};

$.getJSON('/asset/get/s/data-1639710481555-Odg5nq6rQ.json', function (data) {
    echarts.registerMap('fujian', data);

    myEchart.clear();
    var option = {
        tooltip: {
            show: true,
            backgroundColor: '#fff',
            textStyle: {
                color: '#333',
                fontSize: '12',
                fontFamily: 'Microsoft YaHei',
            },
            padding: [0, 0, 8, 0],
            extraCssText: 'box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);',
            formatter: function (params) {
                // console.log(params)
                var html = [];
                var className = ['icon-up', 'icon-down', 'icon-keep'];
                var num = 1;
                html.push('<div class = "echart-tip-box pd-0"  >');
                html.push(
                    '<div class = "title" style="padding :0 12px;font-weight:bold;border-bottom:1px solid #e8e8e8;line-height:38px"><span class="">' +
                        params.name +
                        '</span></div>'
                );
                var value = params.data.data;
                if (value) {
                    for (var i = 0; i < value.length; i++) {
                        var item = value[i];
                        html.push(
                            '<div class = "group" style="padding :0 16px;margin :10px 0 8px  0; min-width:204px" ><span style="display: inline-block;vertical-align: middle;margin-right: 8px; width: 6px;height: 6px;background: ' +
                                '#1890ff' +
                                ';border-radius: 50%;"></span><span class = "key" style="display: inline-block; margin-right: 3px;color: #666;">' +
                                item.name +
                                '</span>'
                        );
                        if (i == 1) {
                            if (true) {
                                html.push(
                                    '<span class="value" style="float: right;">' +
                                        '<i class="' +
                                        className[num] +
                                        '"></i>' +
                                        item.value +
                                        (item.unit || '') +
                                        '</span>'
                                );
                            }
                        } else {
                            html.push(
                                '<span class="value" style="float: right;">' +
                                    item.value +
                                    (item.unit || '') +
                                    '</span>'
                            );
                        }

                        html.push('</div>');
                    }
                }
                html.push('</div>');
                return html.join('');
            },
        },

        visualMap: {
            type: 'continuous',
            text: ['高', '低'],
            calculable: true,
            min: 0,
            max: 100,
            bottom: 20,
            left: 20,
            splitNumber: 4,
            color: ['#a36dcf', '#5c62ea', '#437ef6', '#65cff5'],
        },
        geo: {
            map: 'fujian',
            silent: true,
            aspectScale: 1.05,
            label: {
                show: true,
                textStyle: {
                    fontSize: 13,
                    color: '#fff',
                },
                position: 'top',
            },
            itemStyle: {
                borderWidth: 2,
                borderColor: '#fff',
                normal: {
                    // areaColor: '#d9dee5',
                    // borderColor: '#fff',
                },
                emphasis: {
                    areaColor: '#fff',
                },
            },
        },
        series: [
            {
                z: 1,
                type: 'map',
                mapType: 'fujian',
                data: mapData,
                coordinateSystem: 'geo',
                aspectScale: 1.05,
                label: {
                    show: true,
                    fontSize: 13,
                    color: '#fff',
                    textShadowColor: 'rgba(0,0,0, 0.8)',
                    textShadowBlur: 10,
                },
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 2,
                    // areaColor: null,
                    opacity: 0.8,
                    shadowBlur: 5,
                    shadowOffsetY: 2,
                    shadowColor: 'rgba(0,0,0,.2)',
                },
                emphasis: {
                    label: {
                        color: '#fff',
                    },
                    itemStyle: {
                        borderColor: '#fff',
                        borderWidth: 1,
                        areaColor: null,
                        opacity: 1,
                        shadowBlur: 8,
                        shadowOffsetY: 2,
                        shadowColor: 'rgba(0,0,0,.3)',
                    },
                },
            },
        ],
    };

    myEchart.setOption(option, false);
    myEchart.on('click', chartClick);

    function chartClick(param) {
        btn.style.display = 'block';
        myEchart.setOption(option, false);

        var selectedPro = param.name;
        if (!cityProper[selectedPro]) {
            option.series.splice(1);
            option.legend = null;
            option.visualMap = null;
            myEchart.setOption(option, true);
            return;
        }

        //获取点击区域数据
        $.get(cityProper[selectedPro], function (geojson) {
            echarts.registerMap(selectedPro, geojson);
            // 根据地市名称切换data
            switch (selectedPro) {
                case '福州市':
                    mapData = fuzhouMapData;
                    break;
                case '宁德市':
                    mapData = ningdeMapData;
                    break;
                case '南平市':
                    mapData = nanpingMapData;
                    break;
                case '三明市':
                    mapData = sanmingMapData;
                    break;
                case '龙岩市':
                    mapData = longyanMapData;
                    break;
                case '漳州市':
                    mapData = zhangzhouMapData;
                    break;
                case '厦门市':
                    mapData = xiamenMapData;
                    break;
                case '泉州市':
                    mapData = quanzhouMapData;
                    break;
                case '莆田市':
                    mapData = putianMapData;
                    break;
            }

            //根据需求，如果要替换地图，series参数为[0]，不替换为[1],其中left、top自己设置。
            option.series[0].mapType = selectedPro;
            option.series[0].data = mapData;
            option.geo.map = selectedPro;

            // 清空画布，重新绘制地图
            myEchart.clear();
            myEchart.setOption(option);
            // 在县市级关闭地图点击事件
            myEchart.off('click');

            // 返回上级
            btn.onclick = function () {
                $.getJSON('/asset/get/s/data-1639710481555-Odg5nq6rQ.json', function (data) {
                    echarts.registerMap('fujian', data);
                    option.series[0].mapType = 'fujian';
                    option.series[0].data = tempData;
                    option.geo.map = 'fujian';
                    myEchart.clear();
                    myEchart.setOption(option);
                });
                // 在省市级开启地图点击事件
                myEchart.on('click', chartClick);
                btn.style.display = 'none';
            };
        });
    }
});
