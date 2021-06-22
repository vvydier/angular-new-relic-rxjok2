import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewRelicService {
  constructor() {
    const NREUM = window['NREUM'] as any;
    if (NREUM) {
      NREUM.loader_config = {
        accountID: '3184540',
        trustKey: '3184540',
        agentID: '972415274',
        licenseKey: 'NRJS-d0e82c054a0db776b2e',
        applicationID: '972415274'
      };
      NREUM.info = {
        beacon: 'bam.nr-data.net',
        errorBeacon: 'bam.nr-data.net',
        licenseKey: 'NRJS-d0e82c054a0db776b2e',
        applicationID: '972415274',
        sa: 1
      };
    }
  }
}
