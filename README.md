# ww-code-test

In this repo you will find the code test that represents the work you will be expected to be able to perform at Wealth Wizards.
 
Start the app by running the following commands:
 
 ```
 yarn
 ```
 
 ```
 yarn dev
 ```

The placeholder application can be browsed to on:
 
```
http://localhost:8080
```

There is a single API route accessible through the following request:

```
curl -X POST http://localhost:8080/v1/national-insurance -H 'Content-Type: application/json' -d '{"income": 1234}'
```

## Instructions

Click the **Use this template** button above to create a private repository in your own github account and invite github users [@mrwithersea](https://github.com/mrwithersea) and [@rob1256](https://github.com/rob1256) as collaborators on your repo.
 
Please complete as many parts of the test as you can, we recommend you complete them in order. Please commit your work on a new branch and raise a pull request against the master branch of your repo and add us as reviewers. Add a description to your PR outlining which parts of the test have been completed and any comments you feel necessary.

### Part A. Fix the unit tests that are broken

Run this command to see the result of the unit tests, you will need to implement the empty function at `line:27` of `src/services/national-insurance.js` in order to make the failing unit tests pass.

```
yarn test:unit
```

### Part B. Fix the feature tests that are broken after completion of Part A.

Run this command to see the result of the feature tests, you will need to implement the missing feature of the API that is indicated by the failing tests.

```
yarn test:feature
```
 

### Part C. Build a simple React application that should allow a user to compare their national insurance contributions between 2018/19 and 2019/20

Run this command to run the application locally.

```
yarn dev
```

Alternatively you can run this command to bring the application up in the provided docker container:

```
make dev
```

There are a number of packages pre-installed with this codebase, feel free to use any you see fit or add any of your own choosing.

Good luck
