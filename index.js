var amountNeed = 0;
var months = 0;
var monthlyAmount = 0;
var userItem = "";

function calculateMonthlyAmount() {
    monthlyAmount =  amountNeed / months 
    monthlyAmount = monthlyAmount.toFixed(2);
}

$("#calculate-btn").click(function() {


    amountNeed = parseFloat($("#target-amount").val());
    months = parseInt($("#timeframe").val());
    userItem = $("#goal").val(); 

    if (isNaN(amountNeed) || isNaN(months) || amountNeed === 0 || months === 0) {
        alert("Please enter valid amount and months.");
    } else {
        calculateMonthlyAmount();
        $(".output-img").hide();
        $("#target-amount-output").text(monthlyAmount);
        $("#item").text(userItem);
        $(".text-output").show();
    }
});


$("#navbar-login-btn").click(function() {

    $(".login-form").show();
});

$("#close-login").click(function(){
    $(".login-form").hide();
});

$("#close-signup").click(function(){
    $(".signup-form").hide();
});

$("#oper-form-newaccount").click(function(){
    $(".login-form").hide();
    $(".signup-form").show();
});

$("#id02").click(function(event) {

    if ($(event.target).is(".modal")) {
        $(".signup-form").hide();
    } 
});


$("#id01").click(function(event) {

    if ($(event.target).is(".modal")) {
        $(".login-form").hide();
    }
});

$("#register-btn").click(function(event) {
    $(".signup-form").addClass("animate")
    $(".signup-form").show();
});

$("#cancel").click(function(){
    $(".signup-form").hide();
});