import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'person',
        loadChildren: () => import('./person/person.module').then(m => m.OneJhipsterAppPersonModule)
      },
      {
        path: 'glasses',
        loadChildren: () => import('./glasses/glasses.module').then(m => m.OneJhipsterAppGlassesModule)
      },
      {
        path: 'biker',
        loadChildren: () => import('./biker/biker.module').then(m => m.OneJhipsterAppBikerModule)
      },
      {
        path: 'bike',
        loadChildren: () => import('./bike/bike.module').then(m => m.OneJhipsterAppBikeModule)
      },
      {
        path: 'driver',
        loadChildren: () => import('./driver/driver.module').then(m => m.OneJhipsterAppDriverModule)
      },
      {
        path: 'car',
        loadChildren: () => import('./car/car.module').then(m => m.OneJhipsterAppCarModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class OneJhipsterAppEntityModule {}
