




// Page.js
import React from 'react';
import './Page.css';

const Page = () => {
  const storedName = localStorage.getItem('user.fname'); 
 const defaultName = 'John Doe';
 const user = {
 name: storedName || defaultName,
    username: 'yoga_john',
    email: 'john@example.com',
    bio: 'Passionate yogi exploring the profound journey of self-discovery through yoga. Join me in this transformative experience!',
    profileImage: 'https://placekitten.com/200/200',
    completedTasks: 15,
    skills: ['Vinyasa Flow', 'Hatha Yoga', 'Meditation'],
    experience: '3 years',
    yogaPreferences: {
      favoriteStyles: ['Hatha', 'Vinyasa'],
      preferredDuration: '1 hour',
      skillLevel: 'Intermediate',
      preferredInstructor: 'Jane Doe',
    },
    yogaProgress: {
      totalHoursPracticed: 50,
      achievements: ['Completed 30-day Yoga Challenge', 'Mastered Crow Pose'],
    },
    goalsAndObjectives: {
      shortTermGoals: ['Improve flexibility', 'Learn advanced poses'],
      longTermGoals: ['Teach yoga classes', 'Complete yoga teacher training'],
      focusAreas: ['Flexibility', 'Strength', 'Meditation'],
      personalNotes: 'Enjoying the journey of self-discovery through yoga!',
    },
    activityFeed: {
      recentActivities: ['Completed Vinyasa class', 'Reached 50 hours of practice'],
      upcomingEvents: ['Yoga workshop on Saturday', 'Daily morning meditation'],
      communityInteractions: {
        likes: 20,
        comments: ['Great job!', 'Looking forward to your progress!'],
      },
    },
    achievementsAndBadges: {
      earnedBadges: ['Dedicated Yogi', 'Master of Balance'],
      completedChallenges: ['30-day Yoga Challenge', 'Advanced Poses Program'],
    },
    settings: {
      notificationPreferences: {
        email: true,
        push: true,
      },
      privacySettings: {
        publicProfile: false,
        showActivityFeed: true,
      },
      accountSecurity: {
        twoFactorAuth: true,
        changePassword: true,
      },
    },
    additionalField: 'New Field Content', // Add your new field
  };

 

  return (
    <div className="user-profile">
      <div className="profile-header">
        <img className="profile-image" src={user.profileImage} alt={user.name} />
        <div className="user-details">
          <h1>{user.name}</h1>
          <p>@{user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>

      <div className="profile-body">
        <div className="bio">
          <h2>About Me</h2>
          <p>{user.bio}</p>
        </div>

        <div className="additional-info">
          <h2>Additional Information</h2>
          <p>Completed Tasks: {user.completedTasks}</p>
          <p>Skills: {user.skills.join(', ')}</p>
          <p>Yoga Experience: {user.experience}</p>

          {/* New Fields */}
          <h2>Yoga Preferences</h2>
          <p>Favorite Styles: {user.yogaPreferences.favoriteStyles.join(', ')}</p>
          <p>Preferred Duration: {user.yogaPreferences.preferredDuration}</p>
          <p>Skill Level: {user.yogaPreferences.skillLevel}</p>
          <p>Preferred Instructor: {user.yogaPreferences.preferredInstructor}</p>

          <h2>Yoga Progress</h2>
          <p>Total Hours Practiced: {user.yogaProgress.totalHoursPracticed}</p>
          <p>Achievements: {user.yogaProgress.achievements.join(', ')}</p>

          {/* Goals and Objectives */}
          <h2>Goals and Objectives</h2>
          <div className="nested-section">
            <h3>Short-term Goals</h3>
            <ul>
              {user.goalsAndObjectives.shortTermGoals.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </div>
          <div className="nested-section">
            <h3>Long-term Goals</h3>
            <ul>
              {user.goalsAndObjectives.longTermGoals.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </div>
          <p>Focus Areas: {user.goalsAndObjectives.focusAreas.join(', ')}</p>
          <p>Personal Notes: {user.goalsAndObjectives.personalNotes}</p>

          {/* Add other new fields as needed */}

          <h2>Additional Field</h2>
          <p>{user.additionalField}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;

