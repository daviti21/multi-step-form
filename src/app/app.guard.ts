import { CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import { FormService } from './form.service';

export const appGuard : CanActivateFn = (route) => {
  const formService = inject(FormService);
    let router = inject(Router);
  let path = route.routeConfig?.path

if(path === '' +
  'your-info'){
  return formService.form.valid ? true : router.parseUrl('your-info');
}

if(path === 'add-ons' || path === 'summary'){
 if(!formService.form.valid){
   return router.parseUrl('your-info');
 }

 if(formService.selectedPlan() === null){
  return router.parseUrl('select-plan');
 }

 return true

}

return true;
}
