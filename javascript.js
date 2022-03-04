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

$(document).ready(function() {
    var $grouplist = $('#checkboxes');
    $.each(professions.d, function() {
        $('<label><input type=checkbox name='+this.profession+' value='+this.profession+'/> ' +this.profession+'</label>').appendTo($grouplist);
    });
});

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
