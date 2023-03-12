app.title = 'scatter';

var hs = ['1', '1.3','1.5','1.8','2','2.3','2.5','2.8', '3','3.3','3.5','3.8', '4', '4.3','4.5','4.8','5','5.3','5.5','5.8', '6','6.3','6.5','6.8', '7','7.3','7.5','7.8','8','8.3','8.5','8.8', '9','9.3','9.5','9.8','10'];
var ds = ['Best skill: information visualization', 'Best skill: statistical or mathematics skill', 'Best skill: drawing and artistic skill','Best skill: programming', 'Best skill: computer graphics programming', 'Best skill: human-computer interaction programming', 'Best skill: user experience evaluation'];

var data = [[0,24,39,'Sirius Black','Computer Science'],[0,25,35,'Remus Lupin','Human-Computer Interaction'],[0,26,31,'Sturgis Podmore ','Nuclear, Plasma, and Radiological Engineering (focus in microelectronics and nanotechnology)'],[0,32,55,'Aurora Sinistra','Computer Science'],[1,16,32,'Katie Bell ','Media Technology'],[1,8,15,'Amelia Bones ','Computer Science'],[1,28,28,'Colin Creevey','Human-Computer Interaction, Media Technology, Physical Interaction design'],[1,24,30,'Cornelius Fudge','Computer Science, Human-Computer Interaction, Industrial management'],[1,20,30,'Hermione Granger','Computer Science'],[1,17,21,'Minerva McGonagall','Media Technology'],[1,29,41,'Theodore Nott','Media Technology'],[1,9,14,'Antioch Peverell','Media Technology'],[1,21,24,'Irma Pince','Visual Media'],[1,18,21,'Poppy Pomfrey ','Human-Computer Interaction'],[1,21,27,'Albert Runcorn','Human-Computer Interaction'],[1,22,24,'Newt Scamander ','Media Technology'],[1,23,30,'Rita Skeeter ','Media Technology'],[1,18,27,'Severus Snape','Media Technology'],[1,30,42,'Dean Thomas','Media Technology'],[1,19,28,'Emmeline Vance','Human-Computer Interaction, Media Technology'],[2,32,28,'Ludo Bagman ','Human-Computer Interaction, Media Technology'],[2,33,33,'Bathilda Bagshot ','Computer Science'],[2,24,32,'Cuthbert Binns','Human-Computer Interaction, Graphic Design'],[2,28,26,'Charity Burbage','Media Technology'],[2,34,41,'Alecto Carrow','Human-Computer Interaction, Media Technology'],[2,28,29,'Amycus Carrow','Haven\'t picked a major yet.'],[2,16,29,'Cho Chang ','Media Technology'],[2,24,39,'Fleur Delacour ','Computer Science'],[2,25,24,'Amos Diggory','Computer Science'],[2,17,19,'Albus Dumbledore','Media Technology'],[2,35,57,'Gellert Grindelwald ','Human-Computer Interaction'],[2,20,28,'Helga Hufflepuff','Media Technology'],[2,26,34,'Bellatrix Lestrange','Computer Science'],[2,21,25,'Pansy Parkinson','Human-Computer Interaction'],[2,36,41,'Peter Pettigrew ','Human-Computer Interaction'],[2,8,30,'Lily Potter','Media Technology'],[2,32,39,'Tom Marvolo Riddle','Human-Computer Interaction, Media Technology'],[2,24,39,'Rufus Scrimgeour ','Human-Computer Interaction'],[2,36,41,'Salazar Slytherin','Human-Computer Interaction, Media Technology'],[3,36,38,'Hannah Abbott ','Human-Computer Interaction'],[3,32,47,'Frank Bryce','Human-Computer Interaction'],[3,28,41,'Mary Cattermole ','Media Technology'],[3,33,35,'Penelope Clearwater ','Human-Computer Interaction'],[3,34,38,'Marcus Flint','Human-Computer Interaction, Industrial Engineering'],[3,29,49,'Filius Flitwick ','Media Technology'],[3,12,21,'Rubeus Hagrid ','Media Technology'],[3,24,35,'Neville Longbottom','Media Technology'],[3,30,43,'Xenophilius Lovegood ','Computer Science'],[3,25,30,'Garrick Ollivander ','Computer Science'],[3,16,22,'Quirinus Quirrell','Computer Science'],[3,26,29,'Thorfinn Rowle ','Vehicle Engineering'],[3,24,33,'Kingsley Shacklebolt','Human-Computer Interaction, Graphic Design'],[3,20,30,'Pomona Sprout','Computer Science'],[4,32,43,'Susan Bones ','Computer Science, Media Technology, I\'m in the media technology program but switched over to computer science master.'],[4,16,29,'Michael Corner','Computer Science'],[4,24,47,'Igor Karkaroff ','Computer Science'],[4,12,25,'Nymphadora Tonks ','Media Technology'],[5,24,45,'Lavender Brown','Media Technology'],[5,28,46,'Graham Montague','Human-Computer Interaction'],[5,25,37,'Augustus Rookwood','Computer Science'],[5,29,40,'Hepzibah Smith','Human-Computer Interaction'],[5,21,28,'Ron Weasley','Media Technology'],[6,16,21,'Phineas Nigellus Black','Computer Science'],[6,28,42,'Terry Boot','Media Technology'],[6,29,33,'Millicent Bulstrode','Media Technology'],[6,30,33,'Reginald Cattermole','Computer Science, Media Technology'],[6,36,41,'Vincent Crabbe','Computer Science'],[6,31,24,'Seamus Finnigan','Computer Science, Electrical Engineering'],[6,24,30,'Godric Gryffindor ','Computer Science, Media Technology'],[6,32,47,'Rolanda Hooch ','Computer Science'],[6,33,26,'Viktor Krum','Media Technology'],[6,34,46,'Silvanus Kettleburn ','Computer Science'],[6,28,34,'Draco Malfoy','Computer Science'],[6,20,37,'Ernie Macmillan','Media Technology'],[6,28,32,'Cormac McLaggen','Human-Computer Interaction'],[6,21,27,'Harry Potter ','Media Technology'],[6,32,28,'James Potter ','Computer Science'],[6,25,30,'Helena Ravenclaw','Computer Science'],[6,26,22,'Rowena Ravenclaw','Telecommunications Engineering '],[6,28,46,'Demelza Robins ','Media Technology'],[6,22,24,'Stanley Shunpike','Computer Science'],[6,23,27,'Horace Slughorn','Human-Computer Interaction'],[6,20,22,'Oliver Wood','Media Technology']];

option = {
    tooltip: {
        position: 'top'
    },
    title: [],
    singleAxis: [],
    series: []
};

echarts.util.each(ds, function (d, idx) {
    option.title.push({
        textBaseline: 'middle',
        top: (idx + 0.5) * 100 / 7 + '%',
        text: d
    });
    option.singleAxis.push({
        left: 150,
        type: 'category',
        boundaryGap: false,
        data: hs,
        top: (idx * 100 / 7 + 5) + '%',
        height: (100 / 7 - 10) + '%',
        axisLabel: {
            interval: 3
        }
    });
    option.series.push({
        singleAxisIndex: idx,
        coordinateSystem: 'singleAxis',
        type: 'scatter',
        data: [],
        symbolSize: function (dataItem) {
            return dataItem[1];
        }
    });
});

echarts.util.each(data, function (dataItem) {
    option.series[dataItem[0]].data.push([dataItem[1],dataItem[2],dataItem[3],dataItem[4]]);
});;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}