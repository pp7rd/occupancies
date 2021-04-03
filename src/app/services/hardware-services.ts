import { Injectable } from '@angular/core';

// This project
import { Hardware } from '../interfaces/hardware';
import { Hardwares } from '../database/mock-hardware';


@Injectable({ providedIn: 'root' })
export class HardwareService {
    
    getHardwares(): Hardware[] {
        return Hardwares;
    }
}

