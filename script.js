var sBag = "";
var sMyName = "";

sMyName = prompt ("What is your name");
document.getElementById("Msg") .innerHTML = " Dear " + sMyName + ", click on the button below to select a brand.";
document.body.style.backgroundImage = "url('images/shop.jpg')";
function Selectbag()
{
    do
    {
        sBag = prompt("What brand would you want?\n" +
                           "Enter only the following...\n" + "1. gucci\n2. katespade\n3. lv\n" 
                        ) 
    }
    while(sBag == "" || sBag == null)

    if(sBag == "gucci")
    {
        document.body.style.backgroundImage = "url('images/gucci.jpg')"
        alert("Your order gucci had been made")
      }
       else if(sBag == "katespade")
    {
        document.body.style.backgroundImage = "url('images/katespade.jpg')"
        alert("Your order katespade had been made")
      }
      else if(sBag == "lv")
    {
        document.body.style.backgroundImage = "url('images/lv.jpg')"
        alert("Your order lv has been made")
      }
      
      else{
        alert("You have entered an invalid option")
      }


}