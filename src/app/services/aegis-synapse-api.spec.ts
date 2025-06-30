import { TestBed } from '@angular/core/testing';

import { AegisSynapseApi } from './aegis-synapse-api';

describe('AegisSynapseApi', () => {
  let service: AegisSynapseApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AegisSynapseApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
