import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.css']
})
export class CrearPublicacionComponent {
  ind:number=0;
  nuevaPublicacion = {
    id:this.ind,
    titulo: '',
    contenido: '',
    autor: 'Nombre del Autor', // Aquí puedes obtener el nombre del autor de la sesión del usuario si estás usando autenticación
    fecha: new Date().toISOString() // Fecha actual
  };

  constructor(private router:Router,private postService: PostServiceService) { }

  ngOnInit(): void {
  }

  crearPublicacion() {
    // Validar que los campos de la publicación no estén vacíos
    if (this.nuevaPublicacion.titulo.trim() === '' || this.nuevaPublicacion.contenido.trim() === '') {
      alert('Por favor, ingresa un título y contenido para la publicación.');
      return;
    }
    
    //const nuevaPublicacionId = this.postService.addPost(this.nuevaPublicacion);

    // Agregar la nueva publicación al servicio de publicaciones
    this.postService.addPost(this.nuevaPublicacion);
    this.router.navigate(['/detalles-publicacion',this.nuevaPublicacion.id]) ;
    this.ind++;
    alert('Publicación creada exitosamente.');

  }
  cancelar(){
    this.router.navigate(['/inicio']);
  }
}
