var professions = {"d":[  
			{"profession":"Berserker"},
			{"profession":"Shadow Hunter"},
			{"profession":"Gunslinger"},
			{"profession":"Bard"},
			{"profession":"Paladin"},
			{"profession":"Gunlancer"},
			{"profession":"Scrapper"},
			{"profession":"SoulFist"},
			{"profession":"Sorceress"},
			{"profession":"Sharpshooter"},
			{"profession":"Deathblade"},
			{"profession":"Wardancer"},
			{"profession":"Striker"},
			{"profession":"Deadeye"},
			{"profession":"Artillerist"}
]};

var bigdata = {
  "synergies": [
    {
      "class": "berserker",
      "syn_type": "damage burst",
      "Skill": "red dust",
      "syn": "12% damage",
      "duration": "6 sec",
      "uptime": "low"
    },
    {
      "class": "shadowhunter",
      "syn_type": "damage burst",
      "skill": "howl",
      "syn": "12% damage",
      "duration": "6 sec",
      "uptime": "low"
    },
    {
      "class": "gunlancer",
      "syn_type": "damage burst",
      "skill": "shout of hatred",
      "sync": "3% damage, 9% head/back attack damage",
      "duration": "12 seconds",
      "uptime": "low"
    },
    {
      "class": "scrapper",
      "syn_type": "damage constant",
      "skill": "fierce tiger strike, crushing strike, judgement",
      "syn": "6% damage",
      "synvalue": 6,
      "duration": 8,
      "uptime": "high"
    },
    {
      "class": "soulfist",
      "syn_type": "damage constant",
      "skill": "enegry release, pulverizing palm",
      "syn": "6% damage",
      "synvalue": 6,
      "duration": 16,
      "uptime": "medium"
    },
    {
      "class": "soulfist",
      "syn_type": "damage constant",
      "skill": "pulverizing palm",
      "syn": "6% damage",
      "synvalue": 6,
      "duration": 8,
      "uptime": "high"
    },
    {
      "class": "sorceress",
      "syn_type": "damage constant",
      "skill": "dancing flame, whirlpool lightning",
      "syn": "6% damage",
      "synvalue": 6,
      "duration": 8,
      "uptime": "high"
    },
    {
      "class": "sharpshooter",
      "syn_type": "damage constant",
      "skill": "rapid shot, atomic arrow",
      "syn": "6% damage",
      "synvalue": 6,
      "duration": 8,
      "uptime": "high"
    },
    {
      "class": "deathblade",
      "syn_type": "damage constant",
      "skill": "spincutter",
      "syn": "3% damage, 9% head/back attack damage",
      "synvalue": 3,
      "duration": 10,
      "uptime": "high"
    },
    {
      "class": "wardancer",
      "syn_type": "crit burst",
      "skill": "roar of courage",
      "syn": "18% crit rate",
      "synvalue": 18,
      "duration": 8,
      "uptime": "low"
    },
    {
      "class": "striker",
      "syn_type": "crit burst",
      "skill": "Lightning Whisper",
      "syn": "18% crit rate",
      "synvalue": 18,
      "duration": 6,
      "uptime": "low"
    },
    {
      "class": "gunlancer",
      "syn_type": "crit burst",
      "skill": "lance of judgement",
      "syn": "10% crit rate",
      "synvalue": 10,
      "duration": 10,
      "uptime": "low"
    },
    {
      "class": "bard",
      "syn_type": "crit burst",
      "skill": "oratorio",
      "syn": "12% crit rate",
      "synvalue": 12,
      "duration": 6,
      "uptime": "low"
    },
    {
      "class": "deadeye",
      "syn_type": "crit constant",
      "skill": "spiral tracker, at02 grenade",
      "syn": "10% crit rate",
      "synvalue": 10,
      "duration": 6.8,
      "uptime": "high"
    },
    {
      "class": "gunslinger",
      "syn_type": "crit constant",
      "skill": "spiral tracker, dexterous shot, equilibrium",
      "syn": "10% crit rate",
      "synvalue": 10,
      "duration": 6.8,
      "uptime": "high"
    },
    {
      "class": "Artillerist",
      "syn_type": "def reduce",
      "skill": "summon turret",
      "syn": "12% defense reduction",
      "synvalue": 12,
      "duration": 6,
      "uptime": "high"
    },
    {
      "class": "Gunlancer",
      "syn_type": "def reduce",
      "skill": "bash",
      "syn": "12% defense reduction",
      "synvalue": 12,
      "duration": 10,
      "uptime": "high"
    },
    {
      "class": "deathblade",
      "syn_type": "utility",
      "skill": "maelstrom",
      "syn": "15% move spd, 20% atk spd",
      "synvalue": 15.2,
      "duration": 6,
      "uptime": "low"
    },
    {
      "class": "wardancer",
      "syn_type": "utility",
      "skill": "wind's whisper",
      "syn": "16% move spd, 8% atk spd",
      "synvalue": 16.8,
      "duration": 6,
      "uptime": "low"
    },
    {
      "class": "gunlancer",
      "syn_type": "utility",
      "skill": "Nellasia's Energy",
      "syn": "20% atk spd, 24% shield",
      "synvalue": 20.24,
      "duration": 6,
      "uptime": "low"
    },
    {
      "class": "soulfist",
      "syn_type": "utility",
      "skill": "energy release",
      "syn": "25% damage reduction",
      "synvalue": 25,
      "duration": 6,
      "uptime": "medium"
    },
    {
      "class": "Artillerist",
      "syn_type": "stagger damage",
      "skill": "napalm shot",
      "syn": "20% stagger damage",
      "synvalue": 20,
      "duration": 4,
      "uptime": "low"
    },
    {
      "class": "Scrapper",
      "syn_type": "stagger damage",
      "skill": "Critical Blow",
      "syn": "20% stagger damage",
      "synvalue": 20,
      "duration": 6,
      "uptime": "low"
    },
    {
      "class": "Paladin",
      "syn_type": "support",
      "skill": "Light Shock",
      "syn": "10% damage",
      "synvalue": 10,
      "duration": 6,
      "uptime": "high"
    },
    {
      "class": "Paladin",
      "syn_type": "support",
      "skill": "Wrath of God",
      "syn": "15% damage",
      "synvalue": 15,
      "duration": 8,
      "uptime": "low"
    },
    {
      "class": "Paladin",
      "syn_type": "support",
      "skill": "Heavenly Blesings",
      "syn": "15% damage, 40% MP Regen",
      "synvalue": 15.4,
      "duration": 8,
      "uptime": "low"
    },
    {
      "class": "Paladin",
      "syn_type": "support",
      "skill": "Holy Aura",
      "syn": "10% damage",
      "synvalue": 10,
      "duration": 15,
      "uptime": "low"
    },
    {
      "class": "Bard",
      "syn_type": "support",
      "skill": "Sound Shock",
      "syn": "10% damage",
      "synvalue": 10,
      "duration": 4,
      "uptime": "high"
    },
    {
      "class": "Bard",
      "syn_type": "support",
      "skill": "Harp of Rhythm",
      "syn": "10% damage",
      "synvalue": 10,
      "duration": 10,
      "uptime": "high"
    },
    {
      "class": "Bard",
      "syn_type": "support",
      "skill": "Heavenly Tune",
      "syn": "15% damage, 8% atk spd",
      "synvalue": 15.8,
      "duration": 8,
      "uptime": "low"
    },
    {
      "class": "Bard",
      "syn_type": "support",
      "skill": "Sonic Vibration",
      "syn": "15% damage",
      "synvalue": 15,
      "duration": 5,
      "uptime": "low"
    },
    {
      "class": "Bard",
      "syn_type": "support",
      "skill": "Serenade of Courage",
      "syn": "5/10/15% damage",
      "synvalue": 5.1,
      "duration": 8.12,
      "uptime": "low"
    }
  ]
};

var selections = {};
var selclass = document.getElementById("selected-classes");

$(document).ready(function() {
	
	for (var i=0; i<bigdata.synergies.length; i++) {
		for (var key in bigdata.synergies[i]) {
			for (var j= 0; j<bigdata.synergies[i][key].length; j++) {
				console.log(bigdata.synergies[i][key][j])
			}
		}
	}
	
    var $grouplist = $('#checkboxes');
    $.each(professions.d, function() {
        $('<label><input type=checkbox name='+this.profession+' value='+this.profession+'/> ' +this.profession+'</label>').appendTo($grouplist);
    });
	
	var $grouplist = $('#checkboxes2');
    $.each(bigdata.synergies, function() {
        $('<label><input type=checkbox name='+this.class+' value='+this.class+'/> ' +this.class+'</label>').appendTo($grouplist);
    });
	
	var checkboxElems = document.querySelectorAll("input[type='checkbox']");
	
	console.log('From the the ready function');
	
	for (var i = 0; i < checkboxElems.length; i++) {
	checkboxElems[i].addEventListener("click", displayCheck);
}
});

function displayCheck(e) {
	console.log('From the event listener');
	
  if (e.target.checked) {
    selections[e.target.name] = {
      name: e.target.name,
      value: e.target.value
    };
  } 
  else {
    delete selections[e.target.name];
  }

  var result = [];
  var total = 0;

  for (var key in selections) {
    var listItem = "<li>" + selections[key].name + " " +
                   selections[key].value + "</li>";
    result.push(listItem);
    //total += parseInt(selections[key].value.substring(1));
  }

  //totalElem.innerText = total;
  selclass.innerHTML = result.join("");
  
}

// called onclick of  beauty products checkboxes
function updateCost(e) {
  // 'this' reffered to checkbox clicked on
  var myForm = this.form;
  alert('event fired');

  // include current value in total-cost block, use parseFloat method to convert string to number
  // var val = parseFloat(myForm.elements['total-cost'].value);

  // Add the checkbox value to total value if checkbox is checked
  if (this.checked) {
    alert('checked' + this.value);
  } else {
    alert('unchecked' + this.value);
  }

  // update total-cost value with latest value
  //myForm.elements['total-cost'].value = val
}
