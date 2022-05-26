//2.1 Inserta dinamicamente en un html un div vacio con javascript.
function insertDiv() {
    let div = document.createElement("div");
     console.log(insertDiv);
    document.body.appendChild(div);
  }


//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

function divWithP() {
  let divWithP = document.createElement("div");
  divWithP.innerHTML = "<p></p>";
  document.body.appendChild(divWithP);
}
 
//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

function divWithSixP() {
  let divWithSixP = document.createElement("div");

  for (let i = 0; i < 6; i++) {
    let pTags = document.createElement("p");
    divWithSixP.appendChild(pTags);
  }

  document.body.appendChild(divWithSixP);
}


//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.


function pWithText() {
  let text = document.createElement("p");
  text.innerHTML = "Soy dinámico!";
  document.body.appendChild(text);
}

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

    function insertInh2() {
  let h2 = document.querySelector("h2.fn-insert-here");
  h2.innerHTML = "Wubba Lubba dub dub";
}


//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
//const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

function createList() {
  const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

  let ul = document.createElement("ul");

  for (let app of apps) {
    let li = document.createElement("li");

    li.textContent = app;

    ul.appendChild(li);
  }

  console.log(ul);
}


//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

function removeNodes() {
    let nodes = document.querySelectorAll(".fn-remove-me");
  
    for (let i = 0; i < nodes.length; i++) {
      let parent = nodes[i].parentElement;
  
      parent.removeChild(nodes[i]);
    }
  }
  

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//	Recuerda que no solo puedes insertar elementos con .appendChild.

    function insertText() {
  let p = document.createElement("p");
  p.textContent = "Voy en medio!";
  let secondDiv = document.querySelectorAll("div")[1];
  document.body.insertBefore(p, secondDiv);
}
    

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

function insertText() {
    let p = document.createElement("p");
    p.textContent = "Voy en medio!";
    let secondDiv = document.querySelectorAll("div")[1];
    document.body.insertBefore(p, secondDiv);
  }
