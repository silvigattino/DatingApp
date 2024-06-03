import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { map, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const toastr = inject(ToastrService);
  const router = inject(Router);

  return accountService.currentUser$.pipe(
    take(1),
    map(user => {
      console.log('authGuard - currentUser:', user); // Debugging line
      if (user) {
        return true;
      } else {
        toastr.error('You shall not pass!');
        router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
      }
    })
  );
};
