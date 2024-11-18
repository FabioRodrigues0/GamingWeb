import {Routes} from '@angular/router';
import {IndexComponent} from './pages/index/index.component';
import {GamesComponent} from './pages/game/games.component';
import {GameDetailsComponent} from './pages/game/details/game-details.component';
import {GamesListComponents} from './pages/game/list/games-list-components.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", component: IndexComponent},
    {path: 'games', component: GamesComponent},
    {path: 'games/list', component: GamesListComponents},
    {path: 'games/:id', component: GameDetailsComponent}
];
