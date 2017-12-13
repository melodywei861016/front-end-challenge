# Nova Front-End challenge
First things first: fork this repo and add the following collaborators by their GitHub handle: `loeklj` and `eldarshamukhamedov` (make sure they have write access). From your own fork, branch off master. This branch will be your working branch.
You are challenged to implement a Nova dashboard to render credit report entries of applicants.

### Deliverables
- Render a list of reports.
- Add ability to archive reports.
- Add ability to load more reports.

### Submitting
To submit, open up a Pull Request into your own master branch from the branch you used to work on. Do *not* open up a request to merge into the repo under the *neednova* organization account.
Ask the users `loeklj` and `eldarshamukhamedov` to review your PR. Deadline is 24 hours before the scheduled review where you will go over your submission.

### Misc details
- You should set a timer for 3 hours. Aim to prioritize the necessary components. If you don't finish everything don't worry, as long as you have thought about what to do next if you had the time.
- For questions email `(loek|eldar)@neednova.com`.

## Getting started
### Get your env right
- Get NodeJS (>=8.4.0) https://nodejs.org/en/
- Verify your npm install `npm -v` (should be npm v5 or higher).

### Install app
```sh
# In root
npm install
```

### Run tests
```sh
# Run Jest tests (auto-reload)
npm test
```

### Run app
```sh
# Start backend server (auto-reload)
npm run start:server
# Start frontend dev server (auto-reload)
npm run start
```

### Randomize data
```sh
# Calls script that generates from randomuser.me
npm run db:randomize
```