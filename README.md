# Re-routing

In this app, we have some auth setup, which protects private pages meant to be seen only by
authenticated user.

So whenever user navigates to a protected page, it redirects to Login page,and upon logging in(writing any username works)
they are redirected to Home page(path='/'), this redirect to Home page happens of regardless of whatever Protected page we tried
to access earlier, but this is not a very good user experience.

Solve this.

Acceptance Criteria (how it should work)

1) Unauthenticated user tries to access '/protectedpage1', App will redirect to login '/login' (already implemented)
    Upon logging in, it should redirect to '/protectedpage1'.
    Same for '/protectedpage2'

2) If user directly opened, '/login' then it will redirect to '/' Homepage.

