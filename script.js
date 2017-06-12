$(document).ready(function() {
		console.log("jQuery loaded/document ready");
    var BakeryApp = {
      initialize: function(){
        BakeryApp.startListeners();
        BakeryApp.showTotals();
      },
      showTotals: function(){
        $('#chocolate-total').val(Cookies.get('chocolate'));
        $('#ginger-total').val(Cookies.get('ginger'));
        $('#oatmeal-total').val(Cookies.get('oatmeal'));
        $('#chocolate-adder').val(0);
        $('#ginger-adder').val(0);
        $('#oatmeal-adder').val(0);

        var showName = (Cookies.get('username')) ? Cookies.get('username') + "'s Cart" : "Please submit a user name";
        $('#name-display').html(showName);
      },
      startListeners: function(){
        $('#submit-button').on("click", BakeryApp.logIn);
        $('#logout-button').on("click", BakeryApp.logOut);
        $('.addBtn').on("click", BakeryApp.calculate);
      },
      logIn: function(){
        userName = $('#name-input').val();
        Cookies.set('username', userName);
        var showName = (Cookies.get('username')) ? Cookies.get('username') + "'s Cart" : "Please submit a user name";
        $('#name-display').html(showName);
      },
      logOut: function(){
        Cookies.set('username', '');
        Cookies.set('chocolate', 0);
        Cookies.set('ginger', 0);
        Cookies.set('oatmeal', 0);
        BakeryApp.showTotals();
      },
      calculate: function(){
        if (Cookies.get('username')){
          var chocVal = $('#chocolate-adder').val();
          var gingerVal = $('#ginger-adder').val();
          var oatmealVal = $('#oatmeal-adder').val();
          if (Cookies.get('chocolate')){
            var chocVal = parseInt(Cookies.get('chocolate')) + parseInt(chocVal);
          }
          if (Cookies.get('ginger')){
            var gingerVal = parseInt(Cookies.get('ginger')) + parseInt(gingerVal);
          }
          if (Cookies.get('oatmeal')){
            var oatmealVal = parseInt(Cookies.get('oatmeal')) + parseInt(oatmealVal);
          }
          Cookies.set('chocolate', chocVal);
          Cookies.set('ginger', gingerVal);
          Cookies.set('oatmeal', oatmealVal);
          $('#chocolate-total').val(chocVal);
          $('#ginger-total').val(gingerVal);
          $('#oatmeal-total').val(oatmealVal);
          $('#chocolate-adder').val(0);
          $('#ginger-adder').val(0);
          $('#oatmeal-adder').val(0);
        } else {
          alert("Plese enter a user name to continue.")
        }
      }
    }
    BakeryApp.initialize();
});
