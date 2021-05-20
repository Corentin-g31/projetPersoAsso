import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { WhoareweComponent } from './whoarewe/whoarewe.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WhoAreWeBlockComponent } from './who-are-we-block/who-are-we-block.component';
import { ProjectBlockComponent } from './project-block/project-block.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsService } from './services/projects.service';
import { ProjectViewComponent } from './project-view/project-view.component';
import { BackOfficeHomeComponent } from './back-office-home/back-office-home.component';
import { SingleProjectComponent } from './single-project/single-project.component';
import { Page404Component } from './page404/page404.component';
import { AuthGuard } from './services/authguard.service';
import { AdminMembersComponent } from './admin-members/admin-members.component';
import { MembersService } from './services/members.service';
import { EditMemberComponent } from './admin-members/edit-member/edit-member.component';
import { AddMemberComponent } from './admin-members/add-member/add-member.component';
import { HeaderBackComponent } from './back-office-home/header-back/header-back.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { ContactService } from './services/contact.service';
import { ContactCategoriesComponent } from './admin-contact/contact-categories/contact-categories.component';
import { CategoryService } from './services/category.service';
import { AdminProjectsComponent } from './admin-projects/admin-projects.component';
import { AddProjectComponent } from './admin-projects/add-project/add-project.component';
import {EditorModule} from 'primeng/editor';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'whoAreWe', component: WhoareweComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'administration', component: AuthComponent },
  { path: 'projects', component: ProjectViewComponent },
  { path: 'projects/:id', component: SingleProjectComponent },
  { path: 'backOfficeHome', canActivate: [AuthGuard], component: BackOfficeHomeComponent },
  { path: 'adminMembers', canActivate: [AuthGuard], component: AdminMembersComponent },
  { path: 'adminMembers/editMember/:id', canActivate: [AuthGuard], component: EditMemberComponent },
  { path: 'adminMembers/addMember', canActivate: [AuthGuard], component: AddMemberComponent },
  { path: 'adminContact', canActivate: [AuthGuard], component: AdminContactComponent },
  { path: 'adminProjects', canActivate: [AuthGuard], component: AdminProjectsComponent },
  { path: 'adminProjects/addProject', canActivate: [AuthGuard], component: AddProjectComponent },
  { path: 'page404', component: Page404Component },
  { path: '**', redirectTo: '/page404' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    WhoareweComponent,
    ContactComponent,
    FooterComponent,
    AuthComponent,
    WhoAreWeBlockComponent,
    ProjectBlockComponent,
    ProjectComponent,
    ProjectViewComponent,
    BackOfficeHomeComponent,
    SingleProjectComponent,
    Page404Component,
    AdminMembersComponent,
    EditMemberComponent,
    AddMemberComponent,
    HeaderBackComponent,
    AdminContactComponent,
    ContactCategoriesComponent,
    AdminProjectsComponent,
    AddProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    EditorModule
  ],
  providers: [AuthService, ProjectsService, MembersService, AuthGuard, ContactService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
