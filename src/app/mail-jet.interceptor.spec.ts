import { TestBed } from '@angular/core/testing';

import { MailJetInterceptor } from './mail-jet.interceptor';

describe('MailJetInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MailJetInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MailJetInterceptor = TestBed.inject(MailJetInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
