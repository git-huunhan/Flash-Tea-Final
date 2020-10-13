import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BillUserPage } from './bill-user.page';

describe('BillUserPage', () => {
  let component: BillUserPage;
  let fixture: ComponentFixture<BillUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BillUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
