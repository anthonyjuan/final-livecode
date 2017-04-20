## Final Program for Phase 2

this is a simple CMS apps, based on server and client. You can register as a new user, login, post, edit and also delete articles.

to run this program go to server folder , in cli type
```
npm start
```

after that go to client folder, and type
```
npm run dev
```


## END POINT LIST

```
>> get all data (url: http://localhost:3000/api/(nama-collection))
>> get one data (url: http://localhost:3000/api/(nama-collection)/id)
>> create data  (url: http://localhost:3000/api/(nama-collection)/)
>> update data  (url: http://localhost:3000/api/(nama-collection)/id)
>> remove data  (url: http://localhost:3000/api/(nama-collection)/id)

contoh :
untuk get all user : (get) http://localhost:3000/api/users
untuk get all articles : (get) http://localhost:3000/api/articles
untuk create user : (post) http://localhost:3000/api/users
untuk update articles : (put) http://localhost:3000/api/articles/id

```

