


export class Pokemon{
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.nickname = data.nickname
        this.img = data.sprites.front_shiny
        this.weight = data.weight
        this.height = data.height
        this.type = data.type
        
    }

    get Template() {
        return `
        <div class="w-75 bg-white elevation-1 p-3 d-flex flex-column">
          <div class="text-center">
            <h3>${this.name}</h3>
            <p><b>Nickname:</b> ${this.nickname} | <b>Height:</b> ${this.height} | <b>Weight:</b> ${this.weight}</p>
            <p><b>type:</b> ${this.type}</p>
          </div>
          <img src="${this.img}">
         
      `
      }


}