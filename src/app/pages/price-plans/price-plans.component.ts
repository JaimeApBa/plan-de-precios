import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-plans',
  templateUrl: './price-plans.component.html',
  styleUrls: ['./price-plans.component.css']
})
export class PricePlansComponent implements OnInit {

  starter: any = {
    image: '/assets/starter.png',
    plan_name: 'Starter',
    price: 'Free',
    txt_button: 'Get Started'
  };
  pro: any = {
    image: '/assets/pro.png',
    plan_name: 'Pro',
    price: '$49',
    txt_button: 'Become a Pro'
  };
  teams: any = {
    image: '/assets/teams.png',
    plan_name: 'Teams',
    price: '$99',
    txt_button: 'Get Teams'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
