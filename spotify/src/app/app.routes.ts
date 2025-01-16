import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CreditsComponent } from './credits/credits.component';
import { LoginComponent } from './login/login.component';
import { AlbumsComponent } from './albums/albums.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { tokenOkGuard } from './token-ok.guard';
import { TracksComponent } from './tracks/tracks.component';
import { loginGuard } from './login.guard';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'search', component: SearchComponent, canActivate: [tokenOkGuard,loginGuard]},
    {path: 'credits', component: CreditsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LogoutComponent},
    {path: 'albums/:id', component: AlbumsComponent, canActivate: [tokenOkGuard,loginGuard]},
    {path: 'tracks/:id', component: TracksComponent, canActivate: [tokenOkGuard,loginGuard]},
    {path: '**', component: NotFoundComponent}
];
