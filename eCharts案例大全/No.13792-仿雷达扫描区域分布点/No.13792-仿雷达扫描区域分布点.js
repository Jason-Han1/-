var radarStyle = document.createElement("style");
var str = `
    #radar:after {
	  content: ' ';
	  display: block;
	  background-image: linear-gradient(44deg, rgba(255, 255,255, 0) 50%, #09C2C0 100%);
	  width: 180px;
	  height: 180px;
	  position: absolute;
	  top: 14%;
	  left: 14%;
	  animation: radar-beam 4s infinite;
	  animation-timing-function: linear;
	  transform-origin: bottom right;
	  border-radius: 100% 0 0 0;
	}
	@keyframes radar-beam {
	  0% {
	    transform: rotate(0deg);
	  }
	  100% {
	    transform: rotate(360deg);
	  }
	}
`;
if (radarStyle.styleSheet) { //ie下  
    radarStyle.styleSheet.cssText = str;
} else {
    radarStyle.innerHTML = str;
};
document.getElementsByTagName("head")[0].appendChild(radarStyle);

var radarDiv = document.createElement('div');
radarDiv.id = 'radar';
radarDiv.style.position = 'relative';
radarDiv.style.width = '500px';
radarDiv.style.height = '500px';
radarDiv.style.margin = '0 auto';
var body = document.querySelector('body');
body.appendChild(radarDiv);

var mockData = [{
    "text": "指标0",
    "value": "3.39"
}, {
    "text": "指标1",
    "value": "2.78"
}, {
    "text": "指标2",
    "value": "2.72"
}, {
    "text": "指标3",
    "value": "3.49"
}, {
    "text": "指标4",
    "value": "3.23"
}, {
    "text": "指标5",
    "value": "3.55"
}, {
    "text": "指标6",
    "value": "3.07"
}, {
    "text": "指标7",
    "value": "3.58"
}, {
    "text": "指标8",
    "value": "2.81"
}, {
    "text": "指标9",
    "value": "3.10"
}, {
    "text": "指标10",
    "value": "2.96"
}, {
    "text": "指标11",
    "value": "2.32"
}, {
    "text": "指标12",
    "value": "3.19"
}, {
    "text": "指标13",
    "value": "3.60"
}, {
    "text": "指标14",
    "value": "2.79"
}, {
    "text": "指标15",
    "value": "2.83"
}, {
    "text": "指标16",
    "value": "2.18"
}, {
    "text": "指标17",
    "value": "3.14"
}, {
    "text": "指标18",
    "value": "3.09"
}, {
    "text": "指标19",
    "value": "3.07"
}, {
    "text": "指标20",
    "value": "2.34"
}, {
    "text": "指标21",
    "value": "3.42"
}, {
    "text": "指标22",
    "value": "2.81"
}, {
    "text": "指标23",
    "value": "3.14"
}, {
    "text": "指标24",
    "value": "3.77"
}, {
    "text": "指标25",
    "value": "3.33"
}, {
    "text": "指标26",
    "value": "3.08"
}, {
    "text": "指标27",
    "value": "2.85"
}, {
    "text": "指标28",
    "value": "3.17"
}, {
    "text": "指标29",
    "value": "2.51"
}, {
    "text": "指标30",
    "value": "3.92"
}, {
    "text": "指标31",
    "value": "2.24"
}, {
    "text": "指标32",
    "value": "3.05"
}, {
    "text": "指标33",
    "value": "3.73"
}, {
    "text": "指标34",
    "value": "3.46"
}, {
    "text": "指标35",
    "value": "3.87"
}, {
    "text": "指标36",
    "value": "2.82"
}, {
    "text": "指标37",
    "value": "2.30"
}, {
    "text": "指标38",
    "value": "3.41"
}, {
    "text": "指标39",
    "value": "3.99"
}, {
    "text": "指标40",
    "value": "3.02"
}, {
    "text": "指标41",
    "value": "2.83"
}, {
    "text": "指标42",
    "value": "3.79"
}, {
    "text": "指标43",
    "value": "2.61"
}, {
    "text": "指标44",
    "value": "3.25"
}, {
    "text": "指标45",
    "value": "3.59"
}, {
    "text": "指标46",
    "value": "3.32"
}, {
    "text": "指标47",
    "value": "3.43"
}, {
    "text": "指标48",
    "value": "3.11"
}, {
    "text": "指标49",
    "value": "2.65"
}, {
    "text": "指标50",
    "value": "3.43"
}, {
    "text": "指标51",
    "value": "2.19"
}, {
    "text": "指标52",
    "value": "3.61"
}, {
    "text": "指标53",
    "value": "3.14"
}, {
    "text": "指标54",
    "value": "3.39"
}, {
    "text": "指标55",
    "value": "2.92"
}, {
    "text": "指标56",
    "value": "3.45"
}, {
    "text": "指标57",
    "value": "2.98"
}, {
    "text": "指标58",
    "value": "2.16"
}, {
    "text": "指标59",
    "value": "3.52"
}, {
    "text": "指标60",
    "value": "3.32"
}, {
    "text": "指标61",
    "value": "2.34"
}, {
    "text": "指标62",
    "value": "3.15"
}, {
    "text": "指标63",
    "value": "3.33"
}, {
    "text": "指标64",
    "value": "3.63"
}, {
    "text": "指标65",
    "value": "3.76"
}, {
    "text": "指标66",
    "value": "4.00"
}, {
    "text": "指标67",
    "value": "2.23"
}, {
    "text": "指标68",
    "value": "3.10"
}, {
    "text": "指标69",
    "value": "3.67"
}, {
    "text": "指标70",
    "value": "2.35"
}, {
    "text": "指标71",
    "value": "2.92"
}, {
    "text": "指标72",
    "value": "3.12"
}, {
    "text": "指标73",
    "value": "3.56"
}, {
    "text": "指标74",
    "value": "2.35"
}, {
    "text": "指标75",
    "value": "3.60"
}, {
    "text": "指标76",
    "value": "3.47"
}, {
    "text": "指标77",
    "value": "3.75"
}, {
    "text": "指标78",
    "value": "2.87"
}, {
    "text": "指标79",
    "value": "3.15"
}, {
    "text": "指标80",
    "value": "2.94"
}, {
    "text": "指标81",
    "value": "2.07"
}, {
    "text": "指标82",
    "value": "2.40"
}, {
    "text": "指标83",
    "value": "2.77"
}, {
    "text": "指标84",
    "value": "3.06"
}, {
    "text": "指标85",
    "value": "2.49"
}, {
    "text": "指标86",
    "value": "2.78"
}, {
    "text": "指标87",
    "value": "3.78"
}, {
    "text": "指标88",
    "value": "3.87"
}, {
    "text": "指标89",
    "value": "2.97"
}, {
    "text": "指标90",
    "value": "2.64"
}, {
    "text": "指标91",
    "value": "2.43"
}, {
    "text": "指标92",
    "value": "2.17"
}, {
    "text": "指标93",
    "value": "3.53"
}, {
    "text": "指标94",
    "value": "3.88"
}, {
    "text": "指标95",
    "value": "3.56"
}, {
    "text": "指标96",
    "value": "2.93"
}, {
    "text": "指标97",
    "value": "2.57"
}, {
    "text": "指标98",
    "value": "3.75"
}, {
    "text": "指标99",
    "value": "2.93"
}, {
    "text": "指标100",
    "value": "3.17"
}, {
    "text": "指标101",
    "value": "2.02"
}, {
    "text": "指标102",
    "value": "2.60"
}, {
    "text": "指标103",
    "value": "3.79"
}, {
    "text": "指标104",
    "value": "2.55"
}, {
    "text": "指标105",
    "value": "3.26"
}, {
    "text": "指标106",
    "value": "2.84"
}, {
    "text": "指标107",
    "value": "3.22"
}, {
    "text": "指标108",
    "value": "3.49"
}, {
    "text": "指标109",
    "value": "3.97"
}, {
    "text": "指标110",
    "value": "3.99"
}, {
    "text": "指标111",
    "value": "2.72"
}, {
    "text": "指标112",
    "value": "3.43"
}, {
    "text": "指标113",
    "value": "3.22"
}, {
    "text": "指标114",
    "value": "3.53"
}, {
    "text": "指标115",
    "value": "3.02"
}, {
    "text": "指标116",
    "value": "3.36"
}, {
    "text": "指标117",
    "value": "3.11"
}, {
    "text": "指标118",
    "value": "2.75"
}, {
    "text": "指标119",
    "value": "3.68"
}, {
    "text": "指标120",
    "value": "2.17"
}, {
    "text": "指标121",
    "value": "2.18"
}, {
    "text": "指标122",
    "value": "2.22"
}, {
    "text": "指标123",
    "value": "2.55"
}, {
    "text": "指标124",
    "value": "2.66"
}, {
    "text": "指标125",
    "value": "2.69"
}, {
    "text": "指标126",
    "value": "2.35"
}, {
    "text": "指标127",
    "value": "3.83"
}, {
    "text": "指标128",
    "value": "3.38"
}, {
    "text": "指标129",
    "value": "3.42"
}, {
    "text": "指标130",
    "value": "3.18"
}, {
    "text": "指标131",
    "value": "3.46"
}, {
    "text": "指标132",
    "value": "3.45"
}, {
    "text": "指标133",
    "value": "2.79"
}, {
    "text": "指标134",
    "value": "2.26"
}, {
    "text": "指标135",
    "value": "2.93"
}, {
    "text": "指标136",
    "value": "2.61"
}, {
    "text": "指标137",
    "value": "2.13"
}, {
    "text": "指标138",
    "value": "3.60"
}, {
    "text": "指标139",
    "value": "3.16"
}, {
    "text": "指标140",
    "value": "3.76"
}, {
    "text": "指标141",
    "value": "3.26"
}, {
    "text": "指标142",
    "value": "2.58"
}, {
    "text": "指标143",
    "value": "3.02"
}, {
    "text": "指标144",
    "value": "2.70"
}, {
    "text": "指标145",
    "value": "3.62"
}, {
    "text": "指标146",
    "value": "3.55"
}, {
    "text": "指标147",
    "value": "2.94"
}, {
    "text": "指标148",
    "value": "3.67"
}, {
    "text": "指标149",
    "value": "3.26"
}, {
    "text": "指标150",
    "value": "2.84"
}, {
    "text": "指标151",
    "value": "3.26"
}, {
    "text": "指标152",
    "value": "3.64"
}, {
    "text": "指标153",
    "value": "2.08"
}, {
    "text": "指标154",
    "value": "2.30"
}, {
    "text": "指标155",
    "value": "2.23"
}, {
    "text": "指标156",
    "value": "2.30"
}, {
    "text": "指标157",
    "value": "2.07"
}, {
    "text": "指标158",
    "value": "2.53"
}, {
    "text": "指标159",
    "value": "2.77"
}, {
    "text": "指标160",
    "value": "3.15"
}, {
    "text": "指标161",
    "value": "2.66"
}, {
    "text": "指标162",
    "value": "3.04"
}, {
    "text": "指标163",
    "value": "3.33"
}, {
    "text": "指标164",
    "value": "2.40"
}, {
    "text": "指标165",
    "value": "2.54"
}, {
    "text": "指标166",
    "value": "3.40"
}, {
    "text": "指标167",
    "value": "3.62"
}, {
    "text": "指标168",
    "value": "2.25"
}, {
    "text": "指标169",
    "value": "3.64"
}, {
    "text": "指标170",
    "value": "3.33"
}, {
    "text": "指标171",
    "value": "3.50"
}, {
    "text": "指标172",
    "value": "3.77"
}, {
    "text": "指标173",
    "value": "3.05"
}, {
    "text": "指标174",
    "value": "3.85"
}, {
    "text": "指标175",
    "value": "3.37"
}, {
    "text": "指标176",
    "value": "3.31"
}, {
    "text": "指标177",
    "value": "3.08"
}, {
    "text": "指标178",
    "value": "2.32"
}, {
    "text": "指标179",
    "value": "2.20"
}, {
    "text": "指标180",
    "value": "2.76"
}, {
    "text": "指标181",
    "value": "3.01"
}, {
    "text": "指标182",
    "value": "3.52"
}, {
    "text": "指标183",
    "value": "2.43"
}, {
    "text": "指标184",
    "value": "2.23"
}, {
    "text": "指标185",
    "value": "2.90"
}, {
    "text": "指标186",
    "value": "2.93"
}, {
    "text": "指标187",
    "value": "3.99"
}, {
    "text": "指标188",
    "value": "3.95"
}, {
    "text": "指标189",
    "value": "3.49"
}, {
    "text": "指标190",
    "value": "3.99"
}, {
    "text": "指标191",
    "value": "2.89"
}, {
    "text": "指标192",
    "value": "3.53"
}, {
    "text": "指标193",
    "value": "2.48"
}, {
    "text": "指标194",
    "value": "2.98"
}, {
    "text": "指标195",
    "value": "2.67"
}, {
    "text": "指标196",
    "value": "3.93"
}, {
    "text": "指标197",
    "value": "3.07"
}, {
    "text": "指标198",
    "value": "3.53"
}, {
    "text": "指标199",
    "value": "2.15"
}, {
    "text": "指标200",
    "value": "2.67"
}, {
    "text": "指标201",
    "value": "3.51"
}, {
    "text": "指标202",
    "value": "3.23"
}, {
    "text": "指标203",
    "value": "3.83"
}, {
    "text": "指标204",
    "value": "2.35"
}, {
    "text": "指标205",
    "value": "3.28"
}, {
    "text": "指标206",
    "value": "3.79"
}, {
    "text": "指标207",
    "value": "2.95"
}, {
    "text": "指标208",
    "value": "2.78"
}, {
    "text": "指标209",
    "value": "3.90"
}, {
    "text": "指标210",
    "value": "2.20"
}, {
    "text": "指标211",
    "value": "3.68"
}, {
    "text": "指标212",
    "value": "3.90"
}, {
    "text": "指标213",
    "value": "3.98"
}, {
    "text": "指标214",
    "value": "3.49"
}, {
    "text": "指标215",
    "value": "3.92"
}, {
    "text": "指标216",
    "value": "3.64"
}, {
    "text": "指标217",
    "value": "2.59"
}, {
    "text": "指标218",
    "value": "3.05"
}, {
    "text": "指标219",
    "value": "2.20"
}, {
    "text": "指标220",
    "value": "3.02"
}, {
    "text": "指标221",
    "value": "2.41"
}, {
    "text": "指标222",
    "value": "3.49"
}, {
    "text": "指标223",
    "value": "2.34"
}, {
    "text": "指标224",
    "value": "3.63"
}, {
    "text": "指标225",
    "value": "2.08"
}, {
    "text": "指标226",
    "value": "3.92"
}, {
    "text": "指标227",
    "value": "2.47"
}, {
    "text": "指标228",
    "value": "3.23"
}, {
    "text": "指标229",
    "value": "3.87"
}, {
    "text": "指标230",
    "value": "3.24"
}, {
    "text": "指标231",
    "value": "3.40"
}, {
    "text": "指标232",
    "value": "3.28"
}, {
    "text": "指标233",
    "value": "3.17"
}, {
    "text": "指标234",
    "value": "3.48"
}, {
    "text": "指标235",
    "value": "2.17"
}, {
    "text": "指标236",
    "value": "2.50"
}, {
    "text": "指标237",
    "value": "2.94"
}, {
    "text": "指标238",
    "value": "3.32"
}, {
    "text": "指标239",
    "value": "2.19"
}, {
    "text": "指标240",
    "value": "3.82"
}, {
    "text": "指标241",
    "value": "2.31"
}, {
    "text": "指标242",
    "value": "3.17"
}, {
    "text": "指标243",
    "value": "2.95"
}, {
    "text": "指标244",
    "value": "3.70"
}, {
    "text": "指标245",
    "value": "3.21"
}, {
    "text": "指标246",
    "value": "2.34"
}, {
    "text": "指标247",
    "value": "2.58"
}, {
    "text": "指标248",
    "value": "3.28"
}, {
    "text": "指标249",
    "value": "2.54"
}, {
    "text": "指标250",
    "value": "2.04"
}, {
    "text": "指标251",
    "value": "2.33"
}, {
    "text": "指标252",
    "value": "3.02"
}, {
    "text": "指标253",
    "value": "3.58"
}, {
    "text": "指标254",
    "value": "2.93"
}, {
    "text": "指标255",
    "value": "3.44"
}, {
    "text": "指标256",
    "value": "2.43"
}, {
    "text": "指标257",
    "value": "2.44"
}, {
    "text": "指标258",
    "value": "2.51"
}, {
    "text": "指标259",
    "value": "2.34"
}, {
    "text": "指标260",
    "value": "3.32"
}, {
    "text": "指标261",
    "value": "3.42"
}, {
    "text": "指标262",
    "value": "2.46"
}, {
    "text": "指标263",
    "value": "3.50"
}, {
    "text": "指标264",
    "value": "2.96"
}, {
    "text": "指标265",
    "value": "2.66"
}, {
    "text": "指标266",
    "value": "3.09"
}, {
    "text": "指标267",
    "value": "2.16"
}, {
    "text": "指标268",
    "value": "2.03"
}, {
    "text": "指标269",
    "value": "3.26"
}, {
    "text": "指标270",
    "value": "3.24"
}, {
    "text": "指标271",
    "value": "2.94"
}, {
    "text": "指标272",
    "value": "2.62"
}, {
    "text": "指标273",
    "value": "3.04"
}, {
    "text": "指标274",
    "value": "3.06"
}, {
    "text": "指标275",
    "value": "3.38"
}, {
    "text": "指标276",
    "value": "2.37"
}, {
    "text": "指标277",
    "value": "2.78"
}, {
    "text": "指标278",
    "value": "2.30"
}, {
    "text": "指标279",
    "value": "3.38"
}, {
    "text": "指标280",
    "value": "3.84"
}, {
    "text": "指标281",
    "value": "3.79"
}, {
    "text": "指标282",
    "value": "2.18"
}, {
    "text": "指标283",
    "value": "3.38"
}, {
    "text": "指标284",
    "value": "3.51"
}, {
    "text": "指标285",
    "value": "3.44"
}, {
    "text": "指标286",
    "value": "3.71"
}, {
    "text": "指标287",
    "value": "3.42"
}, {
    "text": "指标288",
    "value": "3.27"
}, {
    "text": "指标289",
    "value": "2.56"
}, {
    "text": "指标290",
    "value": "3.28"
}, {
    "text": "指标291",
    "value": "2.67"
}, {
    "text": "指标292",
    "value": "3.02"
}, {
    "text": "指标293",
    "value": "2.63"
}, {
    "text": "指标294",
    "value": "2.81"
}, {
    "text": "指标295",
    "value": "3.94"
}, {
    "text": "指标296",
    "value": "3.98"
}, {
    "text": "指标297",
    "value": "2.70"
}, {
    "text": "指标298",
    "value": "3.34"
}, {
    "text": "指标299",
    "value": "2.31"
}, {
    "text": "指标300",
    "value": "3.27"
}, {
    "text": "指标301",
    "value": "2.82"
}, {
    "text": "指标302",
    "value": "3.27"
}, {
    "text": "指标303",
    "value": "3.19"
}, {
    "text": "指标304",
    "value": "3.28"
}, {
    "text": "指标305",
    "value": "2.74"
}, {
    "text": "指标306",
    "value": "3.26"
}, {
    "text": "指标307",
    "value": "3.21"
}, {
    "text": "指标308",
    "value": "3.86"
}, {
    "text": "指标309",
    "value": "2.06"
}, {
    "text": "指标310",
    "value": "2.52"
}, {
    "text": "指标311",
    "value": "2.46"
}, {
    "text": "指标312",
    "value": "3.64"
}, {
    "text": "指标313",
    "value": "2.68"
}, {
    "text": "指标314",
    "value": "3.35"
}, {
    "text": "指标315",
    "value": "3.13"
}, {
    "text": "指标316",
    "value": "3.58"
}, {
    "text": "指标317",
    "value": "3.52"
}, {
    "text": "指标318",
    "value": "2.05"
}, {
    "text": "指标319",
    "value": "3.86"
}, {
    "text": "指标320",
    "value": "3.95"
}, {
    "text": "指标321",
    "value": "2.88"
}, {
    "text": "指标322",
    "value": "3.77"
}, {
    "text": "指标323",
    "value": "3.30"
}, {
    "text": "指标324",
    "value": "3.06"
}, {
    "text": "指标325",
    "value": "2.76"
}, {
    "text": "指标326",
    "value": "2.93"
}, {
    "text": "指标327",
    "value": "2.23"
}, {
    "text": "指标328",
    "value": "3.60"
}, {
    "text": "指标329",
    "value": "2.68"
}, {
    "text": "指标330",
    "value": "2.74"
}, {
    "text": "指标331",
    "value": "3.18"
}, {
    "text": "指标332",
    "value": "2.66"
}, {
    "text": "指标333",
    "value": "3.02"
}, {
    "text": "指标334",
    "value": "2.15"
}, {
    "text": "指标335",
    "value": "3.82"
}, {
    "text": "指标336",
    "value": "2.47"
}, {
    "text": "指标337",
    "value": "2.56"
}, {
    "text": "指标338",
    "value": "2.73"
}, {
    "text": "指标339",
    "value": "2.07"
}, {
    "text": "指标340",
    "value": "2.07"
}, {
    "text": "指标341",
    "value": "2.46"
}, {
    "text": "指标342",
    "value": "2.43"
}, {
    "text": "指标343",
    "value": "2.31"
}, {
    "text": "指标344",
    "value": "3.74"
}, {
    "text": "指标345",
    "value": "3.35"
}, {
    "text": "指标346",
    "value": "3.66"
}, {
    "text": "指标347",
    "value": "3.55"
}, {
    "text": "指标348",
    "value": "2.99"
}, {
    "text": "指标349",
    "value": "3.94"
}, {
    "text": "指标350",
    "value": "3.11"
}, {
    "text": "指标351",
    "value": "3.57"
}, {
    "text": "指标352",
    "value": "3.65"
}, {
    "text": "指标353",
    "value": "2.22"
}, {
    "text": "指标354",
    "value": "3.41"
}, {
    "text": "指标355",
    "value": "2.99"
}, {
    "text": "指标356",
    "value": "3.78"
}, {
    "text": "指标357",
    "value": "2.13"
}, {
    "text": "指标358",
    "value": "2.26"
}, {
    "text": "指标359",
    "value": "2.59"
}];

var container = document.getElementById('radar');
var radar = echarts.init(container);

initRadar(mockData);

function initRadar(mockData) {
    var minAngle = 1; // 最小角度
    var indicator = [];
    var data = [];
    var idx = 0;
    var randomArr = getRandom(360 / minAngle, mockData.length);
    for (var i = 0; i < 360 / minAngle; i++) {
        if (randomArr.indexOf(i) > -1) {
            indicator.push({
                text: mockData[idx].text
            });
            data.push(mockData[idx].value);
            idx++;
        } else {
            indicator.push({
                text: i * 10 + '`'
            });
            data.push('-');
        }
    };
    var option = {
        backgroundColor: '',
        radar: [{
            indicator: indicator,
            center: ['50%', '50%'],
            radius: 180,
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
            name: {
                show: false,
                // formatter:'【{value}】',
                // textStyle: {
                //     color:'rgba(0, 255, 51, 1)'
                // }
            },
            splitArea: {
                areaStyle: {
                    color: ''
                }
            },
            axisLine: {
                lineStyle: {
                    color: ''
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#09C2C0'
                }
            }
        }],
        series: [{
            name: '雷达图',
            type: 'radar',
            symbol: 'circle',
            symbolSize: 10,
            silent: true,
            animationEasing: 'quarticOut',
            animationEasingUpdate: 'quarticOut',
            animationDuration: 2000,
            animationDurationUpdate: 2000,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#09C2C0'
                    }
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0
                },
                emphasis: {
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.3,
                        colorStops: [{
                            offset: 0,
                            color: '#09C2C0'
                        }, {
                            offset: 1,
                            color: 'rgba(255, 255, 255, .1)'
                        }]
                    },
                    borderWidth: 0,
                    opacity: 1
                }
            },
            data: [{
                value: data,
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(0, 255, 51,0)'
                        }
                    }
                },
                lineStyle: {
                    normal: {
                        opacity: 0
                    }
                }
            }]
        }, {
            name: '源',
            type: 'pie',
            radius: ['35%', '72%'],
            center: ['50%', '50%'],
            data: [{
                    value: 335,
                    name: ''
                },
                {
                    value: 213,
                    name: ''
                },
                {
                    value: 123,
                    name: ''
                },
                {
                    value: 135,
                    name: ''
                },
                {
                    value: 412,
                    name: ''
                },
                {
                    value: 233,
                    name: ''
                },
                {
                    value: 254,
                    name: ''
                },
                {
                    value: 261,
                    name: ''
                },
                {
                    value: 325,
                    name: ''
                },
                {
                    value: 310,
                    name: ''
                },
                {
                    value: 238,
                    name: ''
                },
                {
                    value: 146,
                    name: ''
                },
                {
                    value: 189,
                    name: ''
                },
                {
                    value: 360,
                    name: ''
                }
            ],
            animation: false,
            hoverAnimation: false,
            label: {
                normal: {
                    color: "white",
                    position: 'inside'
                }
            },
            itemStyle: {
                normal: {
                    color: "rgba(0,0,0,0)",
                    borderWidth: 2,
                    borderColor: '#09C2C0'
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0)'
                }
            },

        }, {
            name: '',
            type: 'pie',
            radius: ['20%', '35%'],
            center: ['50%', '50%'],
            data: [{
                    value: 1,
                    name: ''
                },
                {
                    value: 1,
                    name: ''
                },
                {
                    value: 1,
                    name: ''
                },
                {
                    value: 1,
                    name: ''
                },
            ],
            animation: false,
            hoverAnimation: false,
            label: {
                normal: {
                    color: "white",
                    position: 'inside'
                }
            },
            itemStyle: {
                normal: {
                    color: "rgba(0,0,0,0.5)",
                    borderWidth: 2,
                    borderColor: "rgba(255,255,0,0.4)"
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0)'
                }
            },

        }]
    };

    radar.setOption(option);
    // 点击点的效果，一下代码只是思路，不适合本案例，如使用请修改
    // radar.on('click', function (params) {
    //      alert(1)
    //     var curindex = params.event.target.__dimIdx;
    //     if (curindex != null) {
    //         var name = indicator[curindex].name;
    //         var value = params.value[curindex];
    //         alert(params.data.name + "," + name + "," + value);
    //     }
    // })
    function getRandom(range, count) {
        var randomArr = [];
        for (var i = 0; i < count; i++) {
            var r = Math.round(Math.random() * (range - 1));
            randomArr.push(r);
        }
        return randomArr;
    }
}

// 点动画
(function() {
    var highlight = false;
    var type;
    setInterval(function() {
        initRadar(mockData);
        type = highlight ? 'downplay' : 'highlight';
        radar.dispatchAction({
            type: type,
            seriesIndex: 0
        });
        highlight = !highlight;
    }, 1000 * 10);
})();