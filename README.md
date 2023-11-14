# Recruitment platform

## Subsystems
### Administrative subsystem
The site administrator can manage other users' profiles. Based on the list of all users of the site, the administrator can use the user interface to temporarily block a user of the site, edit accounts, delete accounts, and export all or part of the list to his/her own device or to another database. When new users register, the administrator must validate or reject the profile of the new employee or employer according to the relevant criteria.

### Posts subsystem
A website user with an employer role can create new job profiles, edit and delete them, and view his/her own and other employers' profiles. In contrast, users with the employee role can only view the profiles created by employers and view the information relevant to their job profiles. Both employers and employees can search for all profiles using the search field and filter the profiles according to the criteria they need. All users will be able to see the recommendations of the best profiles, which will be selected according to the criteria set by the administrators.

### User account management subsystem
This subsystem is used to view and edit your profile data, change your password, and delete your account after logging in to the system. To change the password, the user must first enter his old password and then enter the new password twice. If you forget your password, an email will be sent to change it. When registering, you will also need to confirm your password using the email you receive. This subsystem can be accessed by all logged-in users.

### Employer subsystem
Users with the role of employer can send a job invitation to an employee or several employees based on a job profile created by the user. Also, when planning to send an offer to an employee, the employer can see if the employee is currently already working for another employer, if not until when. After the job has been completed, the employer can then assess the employee on how he or she did at work and what his or her best skills are. If the employer decides to delete the account, the account is kept for a week so that if the employer changes his mind, he can reject the deletion. If the employer wishes to contact the employee, this can be done by contacting the employee via the website itself by sending an email.

### Employee subsystem
Users with the employer role can send a job invitation to one or more employees based on a job profile they have created. Also, when planning to send a job offer to an employee, the employer can see if the employee is currently working for another employer, if not until when. After the job has been completed, the employer can then assess the employee on how he or she did at work and what his or her best skills are. If the employer decides to delete the account, the account is kept for a week so that if the employer changes his mind, he can reject the deletion. If the employer wishes to contact the employee, this can be done by contacting the employee via the website itself by sending an email.

## Setup
### Prerequisites
- Node.js
- npm

### Installation
Starting the frontend:
```bash
cd frontend
npm install
npm run dev
```

## License
MIT