export class utiles {
  constructor() { }

  /************************DETALLE DE OBJETOS DE CACHE *********************


  ************************DETALLE DE OBJETOS DE CACHE *********************/

  /************************LIMPIEZA DEL CACHE*********************/

  static clearCache() {
    localStorage.removeItem("infoSecurityUser");
    localStorage.removeItem("infoSecurity");
    localStorage.removeItem("menuOptions");
    localStorage.removeItem("user");
  }
  /************************LIMPIEZA DEL CACHE*********************/

  /************************CREACION DEL CACHE*********************/
  static createCacheObject(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
  };
  static createCacheUser(dataUser){
    this.createCacheObject("user",dataUser);
  }
  static createCacheMenu(dataMenu){
    this.createCacheObject("menuOptions",dataMenu);
  }

  /************************CREACION DEL CACHE*********************/

  /************************OBTENER INFORMACION DEL CACHE*********************/

  static getCacheObject(name) {
    var data = localStorage.getItem(name);
    var dataObject = JSON.parse(data);

    return dataObject;
  };

  static getCacheUser(){
    return this.getCacheObject("user");
  }
  static getCacheMenu(){
    return this.getCacheObject("menuOptions");
  }
  /************************OBTENER INFORMACION DEL CACHE*********************/

}