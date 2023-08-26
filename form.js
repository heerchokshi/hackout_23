//Hides all individual medications initially
function hideMedicationsInitially() {
  $(document).ready(function() {
    $("#anti_anxiety, #anti_convulsant, #anti_depressant, #anti_psychotic, #pain_medication, #sleep_medication, #stimulants_adhd_medication").hide();
    $("#anti_anxiety_2, #anti_convulsant_2, #anti_depressant_2, #anti_psychotic_2, #pain_medication_2, #sleep_medication_2, #stimulants_adhd_medication_2").hide();
  });
}


//First medication list

//Input
function showMedicationsCorrespondingToClassSelected() {
  $(document).ready(function() {
    $("#type_anti_anxiety").click(function(){
      $("#anti_anxiety").show();
      $("#anti_convulsant, #anti_depressant, #anti_psychotic, #pain_medication, #sleep_medication, #stimulants_adhd_medication").hide();
    });
  });

  $(document).ready(function() {
    $("#type_anti_convulsant").click(function() {
      $("#anti_convulsant").show();
      $("#anti_anxiety, #anti_depressant, #anti_psychotic, #pain_medication, #sleep_medication, #stimulants_adhd_medication").hide();
    });
  });

  $(document).ready(function() {
    $("#type_anti_depressant").click(function() {
      $("#anti_depressant").show();
      $("#anti_anxiety, #anti_convulsant, #anti_psychotic, #pain_medication, #sleep_medication, #stimulants_adhd_medication").hide();
    });
  });

  $(document).ready(function() {
    $("#type_anti_psychotic").click(function() {
      $("#anti_psychotic").show();
      $("#anti_anxiety, #anti_convulsant, #anti_depressant, #pain_medication, #sleep_medication, #stimulants_adhd_medication").hide();
    });
  });

  $(document).ready(function() {
    $("#type_pain_medication").click(function() {
      $("#pain_medication").show();
      $("#anti_anxiety, #anti_convulsant, #anti_depressant, #anti_psychotic, #sleep_medication, #stimulants_adhd_medication").hide();
    });
  });

  $(document).ready(function() {
    $("#type_sleep_medication").click(function() {
      $("#sleep_medication").show();
      $("#anti_anxiety, #anti_convulsant, #anti_depressant, #anti_psychotic, #pain_medication, #stimulants_adhd_medication").hide();
    });
  });

  $(document).ready(function() {
    $("#type_stimulants_adhd_medication").click(function() {
      $("#stimulants_adhd_medication").show();
      $("#anti_anxiety, #anti_convulsant, #anti_depressant, #anti_psychotic, #pain_medication, #sleep_medication").hide();
    });
  });

  // Second medication list

  //Input

  $(document).ready(function(){
    $("#type_anti_anxiety_2").click(function(){
      $("#anti_anxiety_2").show();
      $("#anti_convulsant_2, #anti_depressant_2, #anti_psychotic_2, #pain_medication_2, #sleep_medication_2, #stimulants_adhd_medication_2").hide();
    });
  });

  $(document).ready(function() {
    $("#type_anti_convulsant_2").click(function() {
      $("#anti_convulsant_2").show();
      $("#anti_anxiety_2, #anti_depressant_2, #anti_psychotic_2, #pain_medication_2, #sleep_medication_2, #stimulants_adhd_medication_2").hide();
    });
  });

  $(document).ready(function() {
    $("#type_anti_depressant_2").click(function() {
      $("#anti_depressant_2").show();
      $("#anti_anxiety_2, #anti_convulsant_2, #anti_psychotic_2, #pain_medication_2, #sleep_medication_2, #stimulants_adhd_medication_2").hide();
    });
  });

  $(document).ready(function() {
    $("#type_anti_psychotic_2").click(function() {
      $("#anti_psychotic_2").show();
      $("#anti_anxiety_2, #anti_convulsant_2, #anti_depressant_2, #pain_medication_2, #sleep_medication_2, #stimulants_adhd_medication_2").hide();
    });
  });

  $(document).ready(function() {
    $("#type_pain_medication_2").click(function() {
      $("#pain_medication_2").show();
      $("#anti_anxiety_2, #anti_convulsant_2, #anti_depressant_2, #anti_psychotic_2, #sleep_medication_2, #stimulants_adhd_medication_2").hide();
    });
  });

  $(document).ready(function() {
    $("#type_sleep_medication_2").click(function() {
      $("#sleep_medication_2").show();
      $("#anti_anxiety_2, #anti_convulsant_2, #anti_depressant_2, #anti_psychotic_2, #pain_medication_2, #stimulants_adhd_medication_2").hide();
    });
  });

  $(document).ready(function() {
    $("#type_stimulants_adhd_medication_2").click(function() {
      $("#stimulants_adhd_medication_2").show();
      $("#anti_anxiety_2, #anti_convulsant_2, #anti_depressant_2, #anti_psychotic_2, #pain_medication_2, #sleep_medication_2").hide();
    });
  });
}

hideMedicationsInitially();
showMedicationsCorrespondingToClassSelected();
