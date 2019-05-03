//= apiRoutes.js API Routes

var friendData = require("../data/friendsData");
var lowScore = 0;
var lowIndex = 0;
var compArray = [];
var newArray = [];
var result = 0;
var cmptblty =0;
   
  module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
      return res.json(friendData);
    }); //end get
      
    app.post("/api/friends", function(req, res) {
       
      var newfriend = req.body;
      console.log(res);     
      newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();
    
      console.log(newfriend);
      friendData.push(newfriend);
    
      newArray = newfriend.scores;
             
      for (i=0;i<friendData.length;i++) {
          if(friendData[i] !== newfriend){
            compArray = friendData[i].scores;
            compare();
          }
        } //end for
              
      res.json(friendData[lowIndex]);
    });//end post

    function compare() {
      console.log("compArray: " + compArray);
      console.log("newArray: " + newArray);
    cmptblty = 0;
      for (j=0;j<compArray.length;j++) {
           
          if (compArray[j] !== newArray[j]) {
              result = compArray[j] - newArray[j];
              if (result < 0) {
                  result = result * -1;
              } // end if
              cmptblty = cmptblty + result;
          } // end outer if 
      }// end for
      
      if (i == 0){
          lowScore = cmptblty;
          lowIndex = i;
      } // end if
      if (cmptblty < lowScore){
          lowScore = cmptblty;
          lowIndex = i;
      } //end if
    }  

}//end function

    