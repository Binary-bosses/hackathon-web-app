import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardsComponent } from './components/cards/cards.component';
import { UpcomingHackathonsComponent } from './components/upcoming-hackathons/upcoming-hackathons.component';
import { HackathonDeetsComponent } from './components/hackathon-deets/hackathon-deets.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateHackComponent } from './components/create-hack/create-hack.component';
import { CreateTeamComponent } from './components/create-team/create-team.component';
import { HackPageComponent } from './components/hack-page/hack-page.component';
import { RegisterComponent } from './components/register/register.component';
import { NavContentComponent } from './components/nav-content/nav-content.component';
import { NavContentPrevComponent } from './components/nav-content-prev/nav-content-prev.component';
import { NavContentCompComponent } from './components/nav-content-comp/nav-content-comp.component';
import { NavContentCurrentComponent } from './components/nav-content-current/nav-content-current.component';
import { NavContentAllComponent } from './components/nav-content-all/nav-content-all.component';




const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Hackathon Dashboard' }
  },
    {
      path: 'createTeam',
      component: CreateTeamComponent,
      data: { title: 'Creating a Team' }
    },
        {
          path: 'createHack',
          component: CreateHackComponent,
          data: { title: 'Creating a Hackathon' }
        },
          {
            path: 'hack-page/:id',
            component: HackPageComponent,
            data: { title: 'Hackathon Details' }
          },
                    {
                      path: 'register/:id',
                      component: RegisterComponent,
                      data: { title: 'Register' }
                    },
                                        {
                                          path: 'hackathons/upcoming',
                                          component: NavContentComponent,
                                          data: { title: 'List Hackathons' }
                                        },
                                                                                {
                                                                                  path: 'hackathons/all',
                                                                                  component: NavContentAllComponent,
                                                                                  data: { title: 'List Hackathons' }
                                                                                },
                                            {
                                              path: 'hackathons/ongoing',
                                              component: NavContentCurrentComponent,
                                              data: { title: 'List Hackathons' }
                                            },
                                                                                        {
                                                                                          path: 'hackathons/previous',
                                                                                          component: NavContentPrevComponent,
                                                                                          data: { title: 'List Hackathons' }
                                                                                        },
                                                                                {
                                                                                  path: 'hackathons/completed',
                                                                                  component: NavContentCompComponent,
                                                                                  data: { title: 'List Hackathons' }
                                                                                },

    { path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
