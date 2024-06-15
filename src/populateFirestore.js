import { db } from './firebaseConfig';

const initialData = {
  A: [
    { team1: 'Germany', team2: 'Scotland', score1: 0, score2: 0 },
    { team1: 'Germany', team2: 'Hungary', score1: 0, score2: 0 },
    { team1: 'Germany', team2: 'Switzerland', score1: 0, score2: 0 },
    { team1: 'Scotland', team2: 'Hungary', score1: 0, score2: 0 },
    { team1: 'Scotland', team2: 'Switzerland', score1: 0, score2: 0 },
    { team1: 'Hungary', team2: 'Switzerland', score1: 0, score2: 0 }
  ],
  B: [
    { team1: 'Spain', team2: 'Croatia', score1: 0, score2: 0 },
    { team1: 'Spain', team2: 'Italy', score1: 0, score2: 0 },
    { team1: 'Spain', team2: 'Albania', score1: 0, score2: 0 },
    { team1: 'Croatia', team2: 'Italy', score1: 0, score2: 0 },
    { team1: 'Croatia', team2: 'Albania', score1: 0, score2: 0 },
    { team1: 'Italy', team2: 'Albania', score1: 0, score2: 0 }
  ],
  C: [
    { team1: 'Slovenia', team2: 'Denmark', score1: 0, score2: 0 },
    { team1: 'Slovenia', team2: 'Serbia', score1: 0, score2: 0 },
    { team1: 'Slovenia', team2: 'England', score1: 0, score2: 0 },
    { team1: 'Denmark', team2: 'Serbia', score1: 0, score2: 0 },
    { team1: 'Denmark', team2: 'England', score1: 0, score2: 0 },
    { team1: 'Serbia', team2: 'England', score1: 0, score2: 0 }
  ],
  D: [
    { team1: 'Netherlands', team2: 'France', score1: 0, score2: 0 },
    { team1: 'Netherlands', team2: 'Poland', score1: 0, score2: 0 },
    { team1: 'Netherlands', team2: 'Austria', score1: 0, score2: 0 },
    { team1: 'France', team2: 'Poland', score1: 0, score2: 0 },
    { team1: 'France', team2: 'Austria', score1: 0, score2: 0 },
    { team1: 'Poland', team2: 'Austria', score1: 0, score2: 0 }
  ],
  E: [
    { team1: 'Ukraine', team2: 'Slovakia', score1: 0, score2: 0 },
    { team1: 'Ukraine', team2: 'Belgium', score1: 0, score2: 0 },
    { team1: 'Ukraine', team2: 'Romania', score1: 0, score2: 0 },
    { team1: 'Slovakia', team2: 'Belgium', score1: 0, score2: 0 },
    { team1: 'Slovakia', team2: 'Romania', score1: 0, score2: 0 },
    { team1: 'Belgium', team2: 'Romania', score1: 0, score2: 0 }
  ],
  F: [
    { team1: 'Portugal', team2: 'Czechia', score1: 0, score2: 0 },
    { team1: 'Portugal', team2: 'Georgia', score1: 0, score2: 0 },
    { team1: 'Portugal', team2: 'Türkiye', score1: 0, score2: 0 },
    { team1: 'Czechia', team2: 'Georgia', score1: 0, score2: 0 },
    { team1: 'Czechia', team2: 'Türkiye', score1: 0, score2: 0 },
    { team1: 'Georgia', team2: 'Türkiye', score1: 0, score2: 0 }
  ]
};

const populateFirestore = async () => {
  for (const [group, matches] of Object.entries(initialData)) {
    const groupRef = db.collection('groups').doc(group);
    for (const match of matches) {
      await groupRef.collection('matches').add(match);
    }
  }
  console.log('Firestore populated with initial data');
};

populateFirestore().catch(console.error);
export { populateFirestore };
