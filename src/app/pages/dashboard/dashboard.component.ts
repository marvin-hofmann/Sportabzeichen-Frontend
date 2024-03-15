import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NavbarBottomComponent } from '../../components/navbar-bottom/navbar-bottom.component';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';
import Athlete from '../../models/athlete';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { PrimaryButtonComponent } from '../../components/buttons/primary-button/primary-button.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, NavbarBottomComponent, NgIf, UserCardComponent, PrimaryButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private router: Router) { }
  athletes: Athlete[] = []
  selectedAthlete: Athlete | null = null;
  routeSubscription!: Subscription;

  ngOnInit(): void {
    this.athletes = [{
      id: 1,
      username: 'test1',
      email: 'test1@example.com',
      firstname: 'John',
      lastname: 'Doe',
      created_at: '2024-02-26',
      created_by: "kay_schulz1",
      last_password_change: '2024-02-26',
      last_edited_at: '2024-02-26',
      type: 'Sportler',
      numberBronzeMedals: 2,
      numberSilverMedals: 3,
      numberGoldMedals: 1,
      hasSwimmingCertificate: false,
    },{
      id: 2,
      username: 'test2',
      email: 'test1@example.com',
      firstname: 'Jane',
      lastname: 'Doe',
      created_at: '2024-02-26',
      created_by: "kay_schulz1",
      last_password_change: '2024-02-26',
      last_edited_at: '2024-02-26',
      type: 'Sportler',
      numberBronzeMedals: 1,
      numberSilverMedals: 1,
      numberGoldMedals: 4,
      hasSwimmingCertificate: false,
    },{
      id: 3,
      username: 'test1',
      email: 'test1@example.com',
      firstname: 'Jimmy',
      lastname: 'Doe',
      created_at: '2024-02-26',
      created_by: "kay_schulz1",
      last_password_change: '2024-02-26',
      last_edited_at: '2024-02-26',
      type: 'Sportler',
      numberBronzeMedals: 2,
      numberSilverMedals: 3,
      numberGoldMedals: 1,
      hasSwimmingCertificate: false,
    },{
      id: 4,
      username: 'test2',
      email: 'test1@example.com',
      firstname: 'Jenny',
      lastname: 'Doe',
      created_at: '2024-02-26',
      created_by: "kay_schulz1",
      last_password_change: '2024-02-26',
      last_edited_at: '2024-02-26',
      type: 'Sportler',
      numberBronzeMedals: 1,
      numberSilverMedals: 1,
      numberGoldMedals: 4,
      hasSwimmingCertificate: false,
    }]
    
    this.routeSubscription = this.route.params.subscribe(params => {
      const athleteId = params['id'];
      if(athleteId){
        this.selectedAthlete = this.athletes.filter(element => element.id == parseInt(athleteId))[0] ?? null
        if(!this.selectedAthlete){
          this.router.navigate(['/athleten']);
        }
        console.log(this.selectedAthlete)
      }
    })
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}
