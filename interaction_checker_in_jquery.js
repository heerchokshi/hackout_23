/*
Looks for interactions between selected drug classes
*/
function interactionsBetweenClasses() {
  $(document).ready(function() {
    $("#submit").bind("click", function(event) {
      if($("#type_anti_anxiety").is(":checked") ||
        $("#type_anti_anxiety_2").is(":checked")) {
        if($("#type_stimulants_adhd_medication").is(":checked") ||
          $("#type_stimulants_adhd_medication_2").is(":checked")) {
          $("#combo").replaceWith("Stimulants can make anti-anxiety medications ineffective.");
        } else if($("#type_anti_convulsant").is(":checked") ||
          $("#type_anti_convulsant_2").is(":checked")) {
          $("#combo").replaceWith("Anti-anxiety and anti-convulsant medications can both slow your respiratory rate. Fatal interactions can occur during sleep when breathing is depressed even more.");
        } else if($("#type_pain_medication").is(":checked") ||
          $("#type_pain_medication_2").is(":checked")) {
          $("#combo").replaceWith("Anti-anxiety and narcotic pain medications can both slow your respiratory rate. Fatal interactions can occur during sleep when breathing is depressed even more.");
        } else if($("#type_sleep_medication").is(":checked") ||
          $("#type_sleep_medication_2").is(":checked")) {
          $("#combo").replaceWith("Anti-anxiety and sleep medications both slow your respiratory rate. Fatal interactions can occur during sleep when breathing is depressed even more.");
        } else {
          $("#combo").replaceWith("There are no common interactions between the two medication classes.");
        }
      } else if($("#type_anti_convulsant").is(":checked") ||
        $("#type_anti_convulsant_2").is(":checked")) {
        if($("#type_stimulants_adhd_medication").is(":checked") ||
          $("#type_stimulants_adhd_medication_2").is(":checked")) {
          $("#combo").replaceWith("Stimulants may lessen the effectiveness of anti-convulsants and a fatal reaction could occur.");
        } else if($("type_anti_depressant").is(":checked") ||
          $("#type_anti_depressant_2").is(":checked")) {
          $("#combo").replaceWith("Some anti-depressants may increase the risk of seizures.");
        } else if($("#type_pain_medication").is(":checked") ||
          $("#type_pain_medication_2").is(":checked")) {
          $("#combo").replaceWith("Anti-convulsant and narcotic pain medications can both slow your respiratory rate. Fatal interactions can occur during sleep when breathing is depressed even more.");
        } else if($("#type_sleep_medication").is(":checked") ||
          $("#type_sleep_medication_2").is(":checked")) {
          $("#combo").replaceWith("Anti-convulsant and sleep medications can both slow your respiratory rate. Fatal interactions can occur during sleep when breathing is depressed even more.");
        } else if($("#type_stimulants_adhd_medication").is(":checked") ||
          $("#type_stimulants_adhd_medication_2").is(":checked")) {
            $("#combo").replaceWith("Stimulants can lessen the effects of anti-convulsants and seizures are more likely to occur.");
        } else {
          $("#combo").replaceWith("There are no common interactions between the two medication classes.");
        }
      } else if($("#type_anti_psychotic").is(":checked") ||
        $("#type_anti_psychotic_2").is(":checked")) {
        if($("#type_stimulants_adhd_medication").is(":checked") ||
          $("#type_stimulants_adhd_medication_2").is(":checked")) {
          $("#combo").replaceWith("Typical anti-psychotics work by inhibiting the neurotransmitter, dopamine, while most stimulants work by increasing dopamine. The two drugs may cancel each other out or negative side effects could occur.");
        } else {
          $("#combo").replaceWith("There are no common interactions between the two medication classes.");
        }
      } else if($("#type_pain_medication").is(":checked") ||
        $("#type_pain_medication_2").is(":checked")) {
        if($("#type_sleep_medication").is(":checked") ||
          $("#type_sleep_medication_2").is(":checked")) {
          $("#combo").replaceWith("sleep and narcotic pain medications can both slow your respiratory rate significantly. Fatal interactions can occur during sleep when breathing is depressed even more.");
        } else if($("#type_pain_medication").is(":checked") ||
          $("#type_pain_medication_2").is(":checked")) {
          $("#combo").replaceWith("Taking two narcotic pain medications together may slow your respiratory rate significantly. Fatal interactions could occur.");
        } else {
          $("#combo").replaceWith("There are no common interactions between the two medication classes.");
        }
      } else if($("#type_sleep_medication").is(":checked") ||
        $("#type_sleep_medication_2").is(":checked")) {
        if($("#type_stimulants_adhd_medication").is(":checked") ||
          $("#type_stimulants_adhd_medication_2").is(":checked")) {
          $("#combo").replaceWith("Long acting stimulants and stimulants taken closer to bed time may counteract sleep medications, and insomnia is more likely to occur.");
        } else {
          $("#combo").replaceWith("There are no common interactions between the two medication classes.");
        }
      } else {
        $("#combo").replaceWith("There are no common interactions between the two medication classes.");
      }
      event.preventDefault();
    });
  });
}

/*
Looks for interactions between selected drugs
*/
function generateListOfMedications() {
  $(document).ready(function() {
    $("#submit").bind("click", function(event) {
      var medicationsArray = [];
      //Processing
      $("input:checkbox:checked").each(function(){
        medicationsArray.push($(this).val());
      });
      var count = 0;
      while(count < medicationsArray.length) {
        $("#" + count).text(medicationsArray[count]);
        if(medicationsArray[count] === "Alprazolam") {
          var interval = 0;
          while(interval < medicationsArray.length) {
            if(medicationsArray[interval] === "Gabapentin") {
              //Output
              $("#drugInteraction0").replaceWith("Alprazolam and Gabapentin may increase each other's side effects such as dizziness, drowsiness, and difficulty concentrating.");
            } else if(medicationsArray[interval] === "Buspirone") {
              $("#drugInteraction0").replaceWith("Alprazolam and Buspirone may increase each other's side effects such as dizziness, drowsiness, and difficulty concentrating.");
            } else if(medicationsArray[interval] === "Chlordiazepoxide") {
              $("#drugInteraction0").replaceWith("Alprazolam and Chlordiazepoxide may increase each other's side effects such as dizziness, drowsiness, and difficulty concentrating.");
            } else if(medicationsArray[interval] === "Clonazepam") {
              $("#drugInteraction0").replaceWith("Alprazolam and Clonazepam may increase each other's side effects such as dizziness, drowsiness, and difficulty concentrating.");
            } else if(medicationsArray[interval] === "Diazepam") {
              $("#drugInteraction0").replaceWith("Alprazolam and Diazepam may increase each other's side effects such as dizziness, drowsiness, and difficulty concentrating.");
            } else if(medicationsArray[interval] === "Clobazam") {
              $("#drugInteraction0").replaceWith("Alprazolam and Clobazam may increase each other's side effects such as dizziness, drowsiness, and difficulty concentrating.");
            } else if(medicationsArray[interval] === "Clorazepate") {
              $("#drugInteraction0").replaceWith("Alprazolam and Clorazepate may increase each other's side effects such as dizziness, drowsiness, and difficulty concentrating.");
            } else if(medicationsArray[interval] === "Midazolam") {
              $("#drugInteraction0").replaceWith("Alprazolam and Midazolam may increase each other's side effects such as dizziness, drowsiness, and difficulty concentrating.");
            } else if(medicationsArray[interval] === "Pregabalin") {
              $("#drugInteraction0").replaceWith("Alprazolam and Pregabalin may increase each other's side effects such as dizziness, drowsiness, and difficulty concentrating.");
            } else if(medicationsArray[interval] === "Amitriptyline") {
              $("#drugInteraction0").replaceWith("Alprazolam and Amitriptyline may increase each other's side effects such as dizziness, drowsiness, and difficulty concentrating.");
            } else if(medicationsArray[interval] === "Amoxapine") {
              $("#drugInteraction0").replaceWith("Alprazolam and Amoxapine may increase each other's side effects such as dizziness, drowsiness, and difficulty concentrating.");
            } else if(medicationsArray[interval] === "Bupropion"){
              $("#drugInteraction0").replaceWith("Bupropion may cancel out alprazolam's effects.");
            } else if(medicationsArray[interval] === "Escitalopram") {
              $("#drugInteraction0").replaceWith("Alprazolam and Escitalopram may increase each other's side effects such as dizziness, drowsiness, and difficulty concentrating.");
            } else if(medicationsArray[interval] === "Mirtazepine") {
              $("#drugInteraction0").replaceWith("Alprazolam and Mirtazepine may increase each other's side effects such as dizziness, drowsiness, and difficulty concentrating.");
            } else if(medicationsArray[interval] === "Sertraline") {
              $("#drugInteraction0").replaceWith("Alprazolam and Sertraline may increase each other's side effects such as dizziness, drowsiness, and difficulty concentrating.");
            } else if(medicationsArray[interval] === "Amphetamine") {
              $("#drugInteraction0").replaceWith("Taking Alprazolam with Amphetamine may counteract Alprazolam's effects.");
            } else if(medicationsArray[interval] === "Methylphenidate") {
              $("#drugInteraction0").replaceWith("Taking Alprazolam with Methylphenidate may counteract Alprazolam's effects.");
            } else if(medicationsArray[interval] === "Dextroamphetamine") {
              $("#drugInteraction0").replaceWith("Taking Alprazolam with Dextroamphetamine may counteract Alprazolam's effects.");
            }
            interval++;
          }
          //Processing
        } else if(medicationsArray[count] === "Amphetamine") {
          var incrementor = 0;
          while(incrementor < medicationsArray.length) {
            //Output
            if(medicationsArray[incrementor] === "Methylphenidate") {
              $("#drugInteraction0").replaceWith("Amphetamine and Methylphenidate can both cause anxiety.");
            } else if(medicationsArray[incrementor] === "Lis-Dexamphetamine") {
              $("#drugInteraction0").replaceWith("Taking Lis-Dexamphetamine with Amphetamine can increase anxiety and cause heart palpitations.");
            } else if(medicationsArray[incrementor] === "Melatonin") {
              $("#drugInteraction0").replaceWith("Taking Amphetamine with Melatonin will counteract Melatonin's effects.");
            } else if(medicationsArray[incrementor] === "Chlordiazepoxide") {
              $("#drugInteraction0").replaceWith("Taking Amphetamine with Chlordiazepoxide can counteract the effects of Chlordiazepoxide.");
            } else if(medicationsArray[incrementor] === "Clonazepam") {
              $("#drugInteraction0").replaceWith("Taking Amphetamine with Clonazepam can counteract the effects of Clonazepam.");
            } else if(medicationsArray[incrementor] === "Diazepam") {
              $("#drugInteraction0").replaceWith("Taking Amphetamine with Diazepam can counteract the effects of Diazepam.");
            } else if(medicationsArray[incrementor] === "Clobazam") {
              $("#drugInteraction0").replaceWith("Taking Amphetamine with Clobazam can counteract the effects of Clobazam.");
            } else if(medicationsArray[incrementor] === "Clorazepate") {
              $("#drugInteraction0").replaceWith("Taking Amphetamine with Clorazepate can counteract the effects of Clorazepate.");
            } else if(medicationsArray[incrementor] === "Midazolam") {
              $("#drugInteraction0").replaceWith("Taking Amphetamine with Midazolam can counteract the effects of Midazolam.");
            }
            incrementor++;
          }
          //Processing
        } else if(medicationsArray[count] === "Methylphenidate") {
          var incrementor = 0;
          while(incrementor < medicationsArray.length) {
            //Output
            if(medicationsArray[incrementor] === "Gabapentin") {
              $("#drugInteraction0").replaceWith("Methylphenidate can stop the proper metabolism of Gabapentin and a serious reaction may occur.");
            } else if(medicationsArray[incrementor] === "Pregabalin") {
              $("#drugInteraction0").replaceWith("Methylphenidate can stop the proper metabolism of Pregabalin and a serious reaction may occur.");
            }
            incrementor++;
          }
          //Processing
        } else if(medicationsArray[count] === "Fentanyl") {
          var incrementor = 0;
          while(incrementor < medicationsArray.length) {
            //Output
            if(medicationsArray[incrementor] === "Codeine") {
              $("#drugInteraction0").replaceWith("Fentanyl and Codeine both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Hydrocodone") {
              $("#drugInteraction0").replaceWith("Fentanyl and Hydrocodone both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Oxycodone") {
              $("#drugInteraction0").replaceWith("Fentanyl and Oxycodone both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Chlordiazepoxide") {
              $("#drugInteraction0").replaceWith("Fentanyl and Chlordiazepoxide both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Clonazepam") {
              $("#drugInteraction0").replaceWith("Fentanyl and Clonazepam both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Diazepam") {
              $("#drugInteraction0").replaceWith("Fentanyl and Diazepam both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Lorazepam") {
              $("#drugInteraction0").replaceWith("Fentanyl and Lorazepam both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Clobazam") {
              $("#drugInteraction0").replaceWith("Fentanyl and Clobazam both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Clorazepate") {
              $("#drugInteraction0").replaceWith("Fentanyl and Clorazepate both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            }
            incrementor++;
          }
          //Processing
        } else if(medicationsArray[count] === "Oxycodone") {
          var incrementor = 0;
          while(incrementor < medicationsArray.length) {
            //Output
            if(medicationsArray[incrementor] === "Codeine") {
              $("#drugInteraction0").replaceWith("Fentanyl and Codeine both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Hydrocodone") {
              $("#drugInteraction0").replaceWith("Fentanyl and Hydrocodone both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Chlordiazepoxide") {
              $("#drugInteraction0").replaceWith("Fentanyl and Chlordiazepoxide both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Clonazepam") {
              $("#drugInteraction0").replaceWith("Fentanyl and Clonazepam both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Diazepam") {
              $("#drugInteraction0").replaceWith("Fentanyl and Diazepam both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Lorazepam") {
              $("#drugInteraction0").replaceWith("Fentanyl and Lorazepam both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Clobazam") {
              $("#drugInteraction0").replaceWith("Fentanyl and Clobazam both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Clorazepate") {
              $("#drugInteraction0").replaceWith("Fentanyl and Clorazepate both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            }
            incrementor++;
          }
          //Processing
        } else if(medicationsArray[count] === "Hydrocodone") {
          var incrementor = 0;
          while(incrementor < medicationsArray.length) {
            //Output
            if(medicationsArray[incrementor] === "Codeine") {
              $("#drugInteraction0").replaceWith("Hydrocodone and Codeine both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Chlordiazepoxide") {
              $("#drugInteraction0").replaceWith("Hydrocodone and Chlordiazepoxide both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Clonazepam") {
              $("#drugInteraction0").replaceWith("Hydrocodone and Clonazepam both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Diazepam") {
              $("#drugInteraction0").replaceWith("Hydrocodone and Diazepam both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Lorazepam") {
              $("#drugInteraction0").replaceWith("Hydrocodone and Lorazepam both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Clobazam") {
              $("#drugInteraction0").replaceWith("Hydrocodone and Clobazam both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Clorazepate") {
              $("#drugInteraction0").replaceWith("Hydrocodone and Clorazepate both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            }
            incrementor++;
          }
        //Processing
        } else if(medicationsArray[count] === "Zolpidem") {
          var incrementor = 0;
          while(incrementor < medicationsArray.length) {
            //Output
            if(medicationsArray[incrementor] === "Codeine") {
              $("#drugInteraction0").replaceWith("Zolpidem and Codeine both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Chlordiazepoxide") {
              $("#drugInteraction0").replaceWith("Zolpidem and Chlordiazepoxide both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Clonazepam") {
              $("#drugInteraction0").replaceWith("Zolpidem and Clonazepam both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Diazepam") {
              $("#drugInteraction0").replaceWith("Zolpidem and Diazepam both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Lorazepam") {
              $("#drugInteraction0").replaceWith("Zolpidem and Lorazepam both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Clobazam") {
              $("#drugInteraction0").replaceWith("Zolpidem and Clobazam both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Clorazepate") {
              $("#drugInteraction0").replaceWith("Zolpidem and Clorazepate both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            } else if(medicationsArray[incrementor] === "Eszopliclone") {
              $("#drugInteraction0").replaceWith("Zolpidem and Eszopliclone both slow down your respiratory rate. A fatal reaction could occur during sleep when breathing is depressed even more.");
            }
            incrementor++;
          }
        //Output
        } else {
          $("#drugInteraction0").replaceWith("There are no common interactions between these two medications.");
        }
        count++;
      }
    });
    event.preventDefault();
  });
}

interactionsBetweenClasses();
generateListOfMedications();
