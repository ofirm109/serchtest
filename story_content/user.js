function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6qWRyNaYQNK":
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

