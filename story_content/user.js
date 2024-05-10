function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6DcNeKHL8DW":
        Script1();
        break;
  }
}

function Script1()
{
  var myParam = location.search.split('myParam=')[1];

 
var player = GetPlayer();
player.SetVar("myParam",myParam);
}

