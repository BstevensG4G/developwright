import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

export interface Post {
  id: number,
  title: string,
  content: string
}

@Component({
  selector: 'app-posts',
  standalone: true,
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  posts: Post[] = [];
  private baseUrl = 'http://127.0.0.1:5272'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllPosts()

    console.log(this.posts)
  }

  getAllPosts() {
    this.http.get<Post[]>(`${this.baseUrl}/posts`).subscribe(
      (response: any) => {
        this.posts = response
      }),
      (error: any) => {
        console.error('Error fetching data: ', error)
      }
  }
}
