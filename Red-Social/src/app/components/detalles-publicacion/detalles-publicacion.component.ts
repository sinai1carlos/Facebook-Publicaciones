import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-detalles-publicacion',
  templateUrl: './detalles-publicacion.component.html',
  styleUrls: ['./detalles-publicacion.component.css']
})
export class DetallesPublicacionComponent {
  publicacion: any;;
  constructor(
    private route: ActivatedRoute,
    private postService: PostServiceService
  ) { }
  ngOnInit(): void {

    // Obtener el post específico del servicio utilizando el ID
    //this.publicacion = this.postService.getPostById(this.publicacion.id);
    
    //this.publicaciones = this.postService.getPosts();
    this.publicaciones = this.postService.getAllPosts();
    console.log(this.publicaciones);
  }
/*
  obtenerDetallesPublicacion(): void {
    const index = this.route.snapshot.paramMap.get('index');
    if (index) {
      this.publicacion = this.postService.getPublicacionPorIndex(Number(index));
    }
  }*/

  publicaciones: any[] = [];
  activo:boolean=false;
  contLike:number=0;
  contLove:number=0;
  contAngry:number=0;
  contSad:number=0;
  contTotal:number=0;
  activoComentario:boolean=false;
  nombreUsuario:string='';
  comentarioUsuario:string='';
  activaTextoComentario:boolean=false;

  activoRespuesta:boolean=false;
  comentarioUsuarioRespuesta='';
  nombreUsuarioRespuesta='';
  activaTextoComentarioRespuesta:boolean=false;
  activaInputRespuesta:boolean=false;

  contLikeRespuesta:number=0;
  contLoveRespuesta:number=0;
  contAngryRespuesta:number=0;
  contSadRespuesta:number=0;
  contTotalRespuesta:number=0;
  

  
  activarEmoteRespuesta(){
    if(!this.activoRespuesta){
      this.activoRespuesta=true;
    }else{
      this.activoRespuesta=false;
    }
  }
  
  contadorLikeRespuesta(){
    this.contLikeRespuesta+=1;
    this.contTotalRespuesta+=1;
  }
  contadorLoveRespuesta(){
    this.contLoveRespuesta+=1;
    this.contTotalRespuesta+=1;
  }
  contadorAngryRespuesta(){
    this.contAngryRespuesta+=1;
    this.contTotalRespuesta+=1;
  }
  contadorSadRespuesta(){
    this.contSadRespuesta+=1;
    this.contTotalRespuesta+=1;
  }

  activarEmote(){
    if(!this.activo){
      this.activo=true;
    }else{
      this.activo=false;
    }
  }
  contadorLike(){
    this.contLike+=1;
    this.contTotal+=1;
  }
  contadorLove(){
    this.contLove+=1;
    this.contTotal+=1;
  }
  contadorAngry(){
    this.contAngry+=1;
    this.contTotal+=1;
  }
  contadorSad(){
    this.contSad+=1;
    this.contTotal+=1;
  }

  activarcomentario(){
    if(!this.activoComentario){
      this.activoComentario=true;
    }else{
      this.activoComentario=false;
    }
  }

  activarTextoComentario(){
    if(!this.activaTextoComentario){
      this.activaTextoComentario=true;
    }else{
      this.activaTextoComentario=false;
    }
    console.log(this.activaTextoComentario);
  }
  activarComentarioRespuesta(){
    if(!this.activaTextoComentarioRespuesta){
      this.activaTextoComentarioRespuesta=true;
    }else{
      this.activaTextoComentarioRespuesta=false;
    }
    console.log(this.activaTextoComentarioRespuesta);
  }
  activarInputRespuesta(){
    if(!this.activaInputRespuesta){
      this.activaInputRespuesta=true;
    }else{
      this.activaInputRespuesta=false;
    }
    console.log(this.activaTextoComentarioRespuesta);
  }
}
