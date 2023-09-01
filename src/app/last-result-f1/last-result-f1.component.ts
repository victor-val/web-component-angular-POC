import { Component, OnInit } from '@angular/core';
import { LastResultF1Service } from './last-result-f1.service';
import { Api, Result } from './last-result-f1.interface';

@Component({
  selector: 'app-last-result-f1',
  templateUrl: './last-result-f1.component.html',
  styleUrls: ['./last-result-f1.component.css']
})
export class LastResultF1Component implements OnInit {
  results: Array<Result> = [];
  raceName = '';
  constructor(private api: LastResultF1Service){}

  ngOnInit(): void {
    this.api.get().subscribe((data: Api) => {
      const selectRace = data.MRData.RaceTable.Races[0];
      this.results = selectRace.Results;
      this.raceName = selectRace.raceName;
    });
  }
}
