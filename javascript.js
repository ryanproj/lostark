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

var selections = {};
var selclass = document.getElementById("selected-classes");

$(document).ready(function() {
    var $grouplist = $('#checkboxes');
    $.each(professions.d, function() {
        $('<label><input type=checkbox name='+this.profession+' value='+this.profession+'/> ' +this.profession+'</label>').appendTo($grouplist);
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
