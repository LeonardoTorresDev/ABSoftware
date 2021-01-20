import { Component } from '@angular/core';
import { LoadPostsService } from '../../shared/services/load-posts/load-posts.service';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth/auth.service';
import { UserService } from '../../shared/services/data/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [LoadPostsService],
})
export class HomeComponent {
  usuario: string;
  postsLoaded: any[];

  constructor(
    private loadPosts: LoadPostsService,
    private auth: AuthService,
    private router: Router,
    private user: UserService,

    private fm: FormBuilder
  ) {}

  ngOnInit(): void {
    this.postsLoaded = this.loadPosts.getPosts();
    this.setName();

    this.crearForm();
  }

  loading = true;

  logout() {
    this.auth.logOut().subscribe(() => {
      this.router.navigateByUrl('/welcome');
      window.scroll(0, 0);
    });
  }

  //Eliminar esta sección cuando se termine el layout y la lógica del módulo
  formulita: FormGroup;
  completeUser: any;

  crearForm() {
    this.formulita = this.fm.group({
      image: [''],
    });
  }

  handleFile(event: { target: { files: string | any[] } }) {
    console.log(event);

    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      this.formulita.get('image').setValue(file);
    }

    console.log('usuario', this.completeUser);
  }

  setName(): void {
    this.user.getUser().subscribe((res: any) => {
      console.log(res);

      this.usuario = res.nick_name;
      this.completeUser = res;
      console.log('usuario', this.completeUser);
    });
  }

  update(): void {
    const formData = new FormData();
    formData.append('image', this.formulita.get('image').value); //El primer argumento tiene que ser igual que el parámetro requerido del endpoint para subir el archivo

    this.user.updateUser(formData).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
