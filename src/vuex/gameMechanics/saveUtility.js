export default {
  save(state){
    let save = JSON.stringify(state.persistantState)
    localStorage.setItem("save", save);
  },
  load(state){
    let save = localStorage.getItem('save');
    if (save){
      let parsedSave = JSON.parse(save);
      Object.keys(parsedSave).forEach(function(key){
        state.persistantState[key] = parsedSave[key];
      });
    }
  },
}