import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from './firebaseConfig';

const Group = () => {
  const { groupId } = useParams();
  const [matches, setMatches] = useState([]);
  const [newMatch, setNewMatch] = useState({ team1: '', team2: '', score1: '', score2: '' });

  useEffect(() => {
    const fetchMatches = async () => {
      const matchesCollection = await db.collection('groups').doc(groupId).collection('matches').get();
      setMatches(matchesCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchMatches();
  }, [groupId]);

  const addMatch = async () => {
    const match = { ...newMatch };
    const res = await db.collection('groups').doc(groupId).collection('matches').add(match);
    setMatches([...matches, { id: res.id, ...match }]);
    setNewMatch({ team1: '', team2: '', score1: '', score2: '' });
  };

  return (
    <div>
      <h1>Group {groupId}</h1>
      <ul>
        {matches.map(match => (
          <li key={match.id}>{match.team1} {match.score1} - {match.score2} {match.team2}</li>
        ))}
      </ul>
      <form onSubmit={(e) => { e.preventDefault(); addMatch(); }}>
        <input
          placeholder="Team 1"
          value={newMatch.team1}
          onChange={(e) => setNewMatch({ ...newMatch, team1: e.target.value })}
        />
        <input
          placeholder="Score 1"
          value={newMatch.score1}
          onChange={(e) => setNewMatch({ ...newMatch, score1: e.target.value })}
        />
        <input
          placeholder="Team 2"
          value={newMatch.team2}
          onChange={(e) => setNewMatch({ ...newMatch, team2: e.target.value })}
        />
        <input
          placeholder="Score 2"
          value={newMatch.score2}
          onChange={(e) => setNewMatch({ ...newMatch, score2: e.target.value })}
        />
        <button type="submit">Add Match</button>
      </form>
    </div>
  );
};

export default Group;
