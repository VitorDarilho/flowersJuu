

onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
    
function playSound(audioName,loop) { 
        let audio = new Audio(audioName);
        audio.loop= loop;
        audio.play();
      }
    playSound("bruninhocut.mp3",true);
  };
  


    
  