(() => {
  let PAGE = 0;
  let redlight = document.querySelector(".rg-redlight");
  let greenlight = document.querySelector(".rg-greenlight");
  let refactor = document.querySelector(".rg-refactor");
  let leftButton = document.querySelector(".rg-directional-left");
  let rightButton = document.querySelector(".rg-directional-right");
  greenlight.style.display = "none";
  refactor.style.display = "none";
  
  let prevPage = () => {
    if(PAGE == 0){
      PAGE = 2;
    } else {
      PAGE--;
    }
    render();
  }
  
  let nextPage = () => {
    if(PAGE == 2){
      PAGE = 0;
    } else {
      PAGE++;
    }
    render();
  }
  
  leftButton.addEventListener("click", () => {
    prevPage();
  });
  
  rightButton.addEventListener("click", () => {
    nextPage();
  });
  
  let removeDirectionalBackgrounds = () => {
    leftButton.classList.remove("rg-directional-yellow");
    rightButton.classList.remove("rg-directional-yellow");
    leftButton.classList.remove("rg-directional-red");
    rightButton.classList.remove("rg-directional-red");
    leftButton.classList.remove("rg-directional-green");
    rightButton.classList.remove("rg-directional-green");
  }
  
  let render = () => {
    if(PAGE == 0){
      redlight.style.display = "flex";
      greenlight.style.display = "none";
      refactor.style.display = "none";
      removeDirectionalBackgrounds();
      leftButton.classList.add("rg-directional-red");
      rightButton.classList.add("rg-directional-red");
    } else if (PAGE == 1){
      redlight.style.display = "none";
      greenlight.style.display = "flex";
      refactor.style.display = "none";
      removeDirectionalBackgrounds();
      leftButton.classList.add("rg-directional-green");
      rightButton.classList.add("rg-directional-green");
    } else if (PAGE == 2){
      redlight.style.display = "none";
      greenlight.style.display = "none";
      refactor.style.display = "flex";
      removeDirectionalBackgrounds();
      leftButton.classList.add("rg-directional-yellow");
      rightButton.classList.add("rg-directional-yellow");
    }
  }
})()