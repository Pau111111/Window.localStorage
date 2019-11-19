window.onload = function(){
    events();
};

function events (){
  loadLocalStorage();
  $("#createCard").click(function(){createCard();});
}

function loadLocalStorage(){
  if(localStorage != undefined && localStorage != null && localStorage.length >  0){
    let cards = JSON.parse(localStorage.getItem('cards'));
    var finalCards = "";

    for (var i = 0; i < cards.length; i++) {
      $("#cardTitle").html(cards.data[i].title);
      $("#cardText").html(cards.data[i].text);

      //Les cambio en ID para que al clonarlos no se repita
      $("#cardTitle").attr("id", "cardTitle"+i);
      $("#cardText").attr("id", "cardText"+i);

      finalCards += $("#cardTemplate").html()

      $("#cardTitle"+i).attr("id", "cardTitle");
      $("#cardText"+i).attr("id", "cardText");
    }

    $("#cardsContainer").append(finalCards);
  }
}

function createCard(){
  $("#cardTitle").html("adsdsa");
   if($("#cardTitleInput").val() != null && $("#cardTitleInput").val() != ""){
        let card = new Card($("#cardTitleInput").val(), $("#cardTextInput").val());
        //let card2 = new Card("B", $("#cardText").val());
        //let card3 = new Card("C", $("#cardText").val());

        var cards = new Cards();
        var finalCards = new Cards();

        if(localStorage != undefined && localStorage != null && localStorage.length >  0){
          cards = JSON.parse(localStorage.getItem('cards'));
          
          for (var i = 0; i < cards.length; i++) {
            var itemCard = new Card(cards.data[i].title, cards.data[i].text);
            finalCards.push(itemCard);
          }
        }

        finalCards.push(card);
        localStorage.setItem("cards", JSON.stringify(finalCards));

        $("#cardTitle").html(card.getTitle());
        $("#cardText").html(card.getText());

        //Les cambio en ID para que al clonarlos no se repita
        $("#cardTitle").attr("id", "cardTitle"+i);
        $("#cardText").attr("id", "cardText"+i);

        $("#cardsContainer").append($("#cardTemplate").html());

        $("#cardTitle"+i).attr("id", "cardTitle");
        $("#cardText"+i).attr("id", "cardText");

   }else{
       alert("You need to introduce a Card Title");
   }
}

class Card {

    constructor(title, text){
        this.title = title;
        this.text = text;
    }

    getTitle(){
        return this.title;
    }
    setTitle(title){
        this.title = title;
    }
    getText(){
        return this.text;
    }
    setText(text){
        this.text = text;
    }
}

/*class Cards extends Array{
    static get [Symbol.species]() { return Array; }
}*/

class Cards{ 
    constructor(){ 
      this.length=0; 
      this.data={}; 
    }
    getLength(){
        return this.length;
    }
    getElementAtIndex(index){ 
      return this.data[index]; 
    } 
    push(element){ 
      this.data[this.length]=element; 
      this.length++; 
      return this.length; 
    } 
    pop(){ 
      const item= this.data[this.length-1]; 
      delete this.data[this.length-1]; 
      this.length--; 
      return this.data; 
    } 
    deleteAt(index){ 
      for(let i=index; i<this.length-1;i++){ 
        this.data[i]=this.data[i+1]; 
      } 
      delete this.data[this.length-1]; 
      this.length--; 
      return this.data; 
    } 
    insertAt(item, index){ 
      for(let i=this.length;i>=index;i--){ 
        this.data[i]=this.data[i-1]; 
      } 
      this.data[index]=item; 
      this.length++; 
      return this.data; 
    } 
  } 