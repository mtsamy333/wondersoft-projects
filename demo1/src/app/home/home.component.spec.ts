import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  
  it('MY Function Test ', () => {
    let xyz=new HomeComponent();
    expect(xyz.myfunction(10,20)).toEqual(30);
  });
});
