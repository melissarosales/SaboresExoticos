import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-add-image',
  templateUrl: './modal-add-image.component.html',
  styleUrls: ['./modal-add-image.component.scss']
})
export class ModalAddImageComponent implements OnInit {
  resetVar=null;
  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png",
    maxSize: "1",
    uploadAPI:  {
      url:"https://example-file-upload-api",
      method:"POST",
      headers: {
     "Content-Type" : "text/plain;charset=UTF-8",
     "Authorization" : 'Bearer '
      },
      params: {
        'page': '1'
      },
      responseType: 'blob',
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: true,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Seleccionar archivo',
      resetBtn: 'Reset',
      uploadBtn: 'Subir',
      dragNDropBox: 'Arrastra imagen',
      attachPinBtn: 'Adjuntar imagen...',
      afterUploadMsg_success: 'Carga satisfactoria',
      afterUploadMsg_error: 'Carga fallida',
      sizeLimit: 'Tamaño máximo'
    }
};
  constructor() { }

  ngOnInit(): void {
  }

  uploadImage($event){
debugger
  }
}
