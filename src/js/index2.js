$(function(){

  $(".init-game").on('click',function() {
    console.log("hello");
    newBoard(array);
  });



  var array=['class="icon-circuit-board"', 'class="icon-circuit-board"', 'class="icon-lock"', 'class="icon-lock"', 'class="icon-octoface"', 'class="icon-octoface"',   'class="icon-terminal"', 'class="icon-terminal"','class="icon-device-desktop"','class="icon-device-desktop"','class="icon-git-branch"','class="icon-git-branch"','class="icon-rss"','class="icon-rss"','class="icon-alert"','class="icon-alert"','class="icon-trashcan"','class="icon-trashcan"'];

  var currentTiles =[];


  var currentTileIds =[];

  var totalTileMatches =0;



  Array.prototype.shuffle=function() {
    var i = this.length, temporaryValue, randomIndex;
    while (--i> 0) {
      randomIndex = Math.floor(Math.random() * (i+1));
      temporaryValue = this[randomIndex];
      this[randomIndex] = this[i];
      this[i] = temporaryValue;
    }
  };


  function newBoard(){
    totalTileMatches=0;
    var tile=[];
    array.shuffle();
    for (var i =0; i<array.length; i++){
      tile += '<div id= "tile_ '+ i +' class="tile clicked"></div>';
    }
    $(".tile-container").append("tile");
  };


  $(".clicked").on('click', function(tile, val){
    if(currentTiles.length<=2){
      $(this).....change class="tile val[i] "
      currentTileIds.push(tile.id)
      currentTiles.push(val....this is a class for the icons);
    } if(currentTiles.length===2 && (currentTiles[0] === currentTiles[1]){
        totalTileMatches +=2;
        currentTiles =[];
        currentTileIds=[];
      } if(totalTileMatches ===array.length){
          alert('You Won!!!!');
          $(".container")='';
          newBoard();
        } else{
            change css selector back to class="tile";
            currentTiles=[];
            currentTileIds=[];
            setTimeout(flippedTiles,700);
        }
  };
});
