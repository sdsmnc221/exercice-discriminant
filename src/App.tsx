import { useState, useEffect } from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
  Container,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Button
} from '@mui/material';
import generateProblem, { Problem } from './utils/discriminant';

function App() {
  const [difficulty, setDifficulty] = useState<string>('');
  const [problem, setProblem] = useState<Problem | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setShowAnswer(false);
    setDifficulty(e.target.value);
  };

  useEffect(() => {
    if (difficulty) {
      setProblem(generateProblem(difficulty));
    }
  }, [difficulty]);

  return (
    <Container className="App" maxWidth="lg">
      <Box sx={{ width: '100%', maxWidth: 720 }}>
        <Typography variant="h1" gutterBottom>
          Les discriminants
        </Typography>
        <Typography variant="body1" gutterBottom>
          On va vous proposer un exercice de discriminant, veuillez indiquer la
          difficulté :
        </Typography>
      </Box>

      <Box sx={{ width: '100%', maxWidth: 720 }}>
        <FormControl fullWidth>
          <InputLabel id="select-label">Difficulté</InputLabel>
          <Select
            labelId="select-label"
            id="select"
            label="Dififculty"
            value={difficulty}
            onChange={handleChange}
          >
            <MenuItem value={'Aléatoire'}>Aléatoire</MenuItem>
            <MenuItem value={'Discriminant carré'}>Discriminant carré</MenuItem>
            <MenuItem value={'Discriminant non carré mais petit'}>
              Discriminant non carré mais petit
            </MenuItem>
            <MenuItem value={'Discriminant négatif'}>
              Discriminant négatif
            </MenuItem>
            <MenuItem value={'Discriminant non carré et grand'}>
              Discriminant non carré et grand
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      {problem && (
        <Box sx={{ width: '100%', maxWidth: 720, marginTop: '32px' }}>
          <Typography variant="h2" gutterBottom>
            {problem.question}
            {showAnswer && ` = ${problem.answer}`}
          </Typography>
          <Button
            variant="contained"
            onClick={() => setShowAnswer(!showAnswer)}
          >
            {showAnswer ? 'Cacher' : 'Afficher'} la réponse
          </Button>
        </Box>
      )}
    </Container>
  );
}

export default App;
