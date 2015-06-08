(function(){

           function init() {
              newBoard();
           }




  var memory_array =['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f', 'g', 'g', 'h', 'h', 'i', 'i','j','j'];

  var memory_values =[];

  var memory_tile_ids =[];

  var tiles_flipped =0;


  Array.prototype.shuffle=function() {
    var i = this.length, temporaryValue, randomIndex ;

    while (--currentIndex> 0) {
      randomIndex = Math.floor(Math.random() * (currentIndex+1));
      temporaryValue = this[randomIndex];
      this[randomIndex] = this[i];
      this[i] = temporaryValue;
    }
  };



  function newBoard(){
    tiles_flipped=0;
    var output='';

    memory_array.shuffle();
    for (var i =0; i<memory_array.length; i++){
      output += '<div id= "tile_ '+ i +' " onclick="memoryFlipTile(this, \''+memory_array[i]+'\')"></div>';
    }
    document.getElementById('memory_board').innerHTML = output;
  };


  function memoryFlipTile(tile, val){
    if(tile.innerHTML ==='' && memory_values.length<2){
     tile.style.background= '#FFF';
     tile.innerHTML=val;
      if(memory_values.length ===0){
        memory_values.push(val);
        memory_tile_ids.push(tile.id);
      }
      else if(memory_values.length ===1){
        memory_values.push(val);
        memory_tile_ids.push(tile.id);
        if(memory_values[0] === memory_values[1]){
          tiles_flipped +=2;
          memory_values =[];
          memory_tile_ids=[];
          if(tiles_flipped ==memory_array.length){
            alert('Board cleared....generating new board');
            document.getElementById('memory_board').innerHTML ='';
            newBoard();
          }
      }
      else{
        function flip2Back(){
          var tile_1=document.getElementById(memory_tile_ids[0]);
          var tile_2=document.getElementById(memory_tile_ids[1]);
            tile_1.style.background='ccc';
            tile_1.innerHTML='';
            tile_2.style.background='ccc';
            tile_2.innerHTML='';
            memory_values=[];
            memory_tile_ids=[];
        }
        setTimeout(flip2Back,700);

      }
    }
  };
