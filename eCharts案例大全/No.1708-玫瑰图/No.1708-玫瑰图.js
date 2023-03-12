let color = ['rgba(0, 206, 206, 1)',
    'rgba(212, 79, 78, 1)',
    'rgba(255, 182, 66, 1)'
];
data =[
            {
                name: '林长办',
                value: 250,
                percent: 25,
            },
            {
                name: '监管员',
                value: 300,
                percent: 30,
            },
            {
                name: '护林员',
                value: 450,
                percent: 45,
            }
        ];
let total = 600;
let subtext = '总计';
option = {
    title: {
        text: total,
        subtext,
        left: '40%',
        top: 'center',
        itemGap: 0,
        textStyle: {
            color: '#FFFFFF',
            fontSize: '18',
            fontWeight: 400
        },
        subtextStyle: {
            color: 'rgba(255, 255, 255, 0.4)',
            fontSize: '12',
            fontWeight: 400,
            lineHeight: '30'
        }
    },
    color: color,
    backgroundColor: '#313131',
    legend: [
    {
        icon: `path://M881.387 297.813c38.08 65.387 57.28 136.747 57.28 214.187s-19.094 148.8-57.28 214.187c-38.187 65.28-89.92 117.12-155.2 155.2S589.44 938.667 512 938.667s-148.8-19.094-214.187-57.28c-65.28-38.08-117.013-89.814-155.306-155.307C104.427 660.8 85.333 589.44 85.333 512c0-77.333 19.094-148.693 57.28-214.187 38.08-65.28 89.814-117.013 155.307-155.306C363.2 104.533 434.56 85.333 512 85.333c77.333 0 148.693 19.094 214.187 57.28 65.28 38.187 117.013 89.92 155.2 155.2z m-217.707-47.36C617.387 223.467 566.827 209.92 512 209.92s-105.387 13.547-151.68 40.533-82.987 63.68-109.973 109.974c-26.987 46.293-40.534 96.853-40.534 151.68s13.547 105.386 40.534 151.68c26.986 46.293 63.68 82.986 109.973 109.973 46.293 26.987 96.853 40.533 151.68 40.533s105.387-13.546 151.68-40.533c46.293-26.987 82.987-63.68 109.973-109.973 26.987-46.294 40.534-96.854 40.534-151.68s-13.547-105.387-40.534-151.68c-27.093-46.294-63.786-82.987-109.973-109.974z`,
        orient: 'vertical',
        // x: 'left',
        data:data.map(item => item.name),
        left: '80%',
        top: 'center',
        align: 'left',
        itemGap: 30,
        formatter: (name) => {
            return (
                // {name|' + item.name + '}
                "{name|" + name + "}    {value|" + data.find((item) => {
                    return item.name == name
                }).value + "}  |  {percent|" + data.find((item,index) => {
                    return item.name == name
                }).percent + '%' + "}"
            );
        },
        textStyle: {
            color: 'rgba(255, 255, 255, .6)', //元字颜色
            fontSize: 12,
            rich: {
                name: {
                    color: 'rgba(255, 255, 255, .6)',
                    fontSize: 14,
                },
                percent: {
                    fontSize: 14,
                    color: 'rgba(255, 255, 255, .6)'
                },
                value: {
                    color: '#fff',
                    fontSize: 14,
                }
            }
        },
    },
    ],
    series: [{
        type: 'pie',
        radius: ['55%', '100%'],
        center: ['40%', '50%'],
        roseType: 'radius',
        label: {
            show: false
        },
        labelLine: {
            show: true,
            length: 1,
            length2: 20,
            smooth: true
        },
        data: data
    }]
};
