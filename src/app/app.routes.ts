import { Routes } from '@angular/router';
import { ProductDetailComponent } from './domains/products/pages/product-detail/product-detail.component';
import { AboutComponent } from './domains/info/pages/about/about.component';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';
import { LayoutComponent } from './domains/shared/components/layout/layout.component';

// loadComponent logra comprimir de una mejor forma el empaquetado, separandolo en Chunks
export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./domains/products/pages/list/list.component'),
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
