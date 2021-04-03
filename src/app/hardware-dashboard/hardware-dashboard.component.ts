import { Component, OnInit } from '@angular/core';
import { Hardware } from '../interfaces/hardware';
import { HardwareService } from '../services/hardware-services';

@Component({
  selector: 'app-hardware-dashboard',
  templateUrl: './hardware-dashboard.component.html',
  styleUrls: ['./hardware-dashboard.component.scss']
})

export class HardwareDashboardComponent implements OnInit {

  constructor(private hardwareService: HardwareService) { }

  hardwares: Hardware[] = [];

  getHardwares(): void {
      this.hardwares = this.hardwareService.getHardwares();
  }

  ngOnInit(): void {
      this.getHardwares();
  }

}
