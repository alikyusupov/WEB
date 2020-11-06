const cards = [
	{
		cardnumber:"*2074",
		balance:2141.5,
		accountnumber:546646545644,
		dates:[
			"28.10.2020",
			"27.10.2020",
			"25.10.2020",
			"23.10.2020",
			"20.10.2020"
		],
		amounts:[
			+3500,
			-2475,
			-50,
			+123540,
			-1250.5
		]
	},
	{
		cardnumber:"*3074",
		balance:326554,
		accountnumber:646647745640,
		dates:[
			"28.10.2020",
			"27.10.2020",
			"25.10.2020",
			"23.10.2020",
			"20.10.2020"
		],
		amounts:[
			+1500,
			+475,
			-50,
			+12350,
			-250.5
		]
	},
	{
		cardnumber:"*4074",
		balance:0.54,
		accountnumber:146688545644,
		dates:[
			"28.10.2020",
			"27.10.2020",
			"25.10.2020",
			"23.10.2020",
			"20.10.2020"
		],
		amounts:[
			+13500,
			+75,
			+500,
			+2350,
			+1250.5
		]
	}
]

datas = [[20,70,10],[50,25,25],[30,15,55]]


const tags = document.querySelectorAll("path");
const creditCardDefault = document.getElementById("card");
const cardnumber = document.getElementById('nomer');
const accountnumber = document.getElementById("info");
const balance = document.getElementById("balance");
const selectCard = document.getElementById("selectCard");
const parentEl = document.getElementById("hook");
const ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx,{});


for (let i = 0; i < tags.length; i++) {
	tags[i].addEventListener("click",(e)=>{
			const fillMode = e.target.getAttribute("data-fill");
			selectCard.style.visibility = "hidden";
			cardnumber.innerText = cards[i].cardnumber;
			accountnumber.innerText = cards[i].accountnumber;
			balance.innerText = cards[i].balance;
			creditCardDefault.style.fill = fillMode;
			parentEl.innerHTML = "";
			for (let j = 0; j < cards[i].dates.length; j++) {
				cards[i].dates[j];
				parentEl.insertAdjacentHTML("beforeend",`
					<li class="flex">
						<div>
							${cards[i].dates[j]}
						</div>
						<div class="flex-grow-1">
							-
						</div>
						<div style="min-width:100px;text-align:right">
							${cards[i].amounts[j]}
						</div>
					</li>
					`)
			}
			chart.destroy();
			chart = new Chart(ctx, {
          	type: 'doughnut',
          	data:{
            datasets: [{
              backgroundColor: ['#41B883','#E46651','#b960c6'],
              borderWidth:3,
            data: datas[i]
            }],
            labels: [
                'Продукты',
                'Развлечения',
                'Одежда'
            ]
        }
});
	}, false)
}


const tabs = document.querySelector("#handlers").querySelectorAll("p");
const contents = document.querySelector("#container").querySelectorAll("section");

for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("click",()=>{
		if (i === 0) {
			contents[0].classList.add("active");
			contents[1].classList.remove("active");
			tabs[0].classList.add("activeTab");
			tabs[1].classList.remove("activeTab");
		}
		else if (i === 1) {
			contents[1].classList.add("active");
			contents[0].classList.remove("active");
			tabs[1].classList.add("activeTab");
			tabs[0].classList.remove("activeTab");
		}

	},false)
}
