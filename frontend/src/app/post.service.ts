import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Post } from './post'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = 'http://127.0.0.1:5272'

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    console.log(this.http.get<Post[]>(`${this.baseUrl}/posts`))
    return this.http.get<Post[]>(`${this.baseUrl}/posts`)
  }

}


