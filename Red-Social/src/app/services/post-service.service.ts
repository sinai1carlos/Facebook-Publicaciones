import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  private posts:any[]=[];
  private currentId: number = 0;

  constructor() { }

  addPost(newPost: any): number {
    const postId = this.currentId++; // Generar un ID único para la nueva publicación
    newPost.id = postId; // Asignar el ID a la nueva publicación
    this.posts.push(newPost); // Agregar la nueva publicación al arreglo de publicaciones
    return postId; // Devolver el ID de la nueva publicación
  }

  // Obtener una publicación por su ID
  getPostById(ide: number): any {
    return this.posts.find(post => post.id === ide);
  }

  // Obtener todas las publicaciones
  getAllPosts(): any[] {
    return this.posts;
  }

}
