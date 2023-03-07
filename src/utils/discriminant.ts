// Fonction pour générer un entier aléatoire entre min et max inclus
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Tableau des coefficients a possibles
const aValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export interface Problem {
  difficulty: string;
  question: string;
  answer: number;
}

// Génère un énoncé aléatoire
function generateProblem(difficulty: string): Problem {
  const a: number = aValues[getRandomInt(0, aValues.length - 1)];
  const b: number = getRandomInt(-10, 10);
  const c: number = getRandomInt(-10, 10);
  const discriminant: number = b * b - 4 * a * c;

  if (difficulty !== 'Aléatoire') {
    if (
      difficulty === 'Discriminant carré' &&
      discriminant > 0 &&
      Math.sqrt(discriminant) === Math.floor(Math.sqrt(discriminant))
    ) {
      return {
        difficulty: difficulty,
        question: `${a}x² + ${b}x + ${c}`,
        answer: discriminant
      };
    } else if (
      difficulty === 'Discriminant non carré mais petit' &&
      discriminant > 0
    ) {
      return {
        difficulty: difficulty,
        question: `${a}x² + ${b}x + ${c}`,
        answer: discriminant
      };
    } else if (difficulty === 'Discriminant négatif' && discriminant < 0) {
      return {
        difficulty: difficulty,
        question: `${a}x² + ${b}x + ${c}`,
        answer: discriminant
      };
    } else if (
      difficulty === 'Discriminant non carré et grand' &&
      discriminant !== 0 &&
      (discriminant <= -100 || discriminant >= 100)
    ) {
      return {
        difficulty: difficulty,
        question: `${a}x² + ${b}x + ${c}`,
        answer: discriminant
      };
    } else {
      // Si aucun énoncé valide n'a été généré, on appelle récursivement la fonction avec la même difficulté
      return generateProblem(difficulty);
    }
  } else {
    let question: string;

    if (
      discriminant > 0 &&
      Math.sqrt(discriminant) === Math.floor(Math.sqrt(discriminant))
    ) {
      difficulty = 'Discriminant carré';
      question = `${a}x² + ${b}x + ${c}`;
    } else if (discriminant > 0) {
      difficulty = 'Discriminant non carré mais petit';
      question = `${a}x² + ${b}x + ${c}`;
    } else if (discriminant < 0) {
      difficulty = 'Discriminant négatif';
      question = `${a}x² + ${b}x + ${c}`;
    } else {
      difficulty = 'Discriminant non carré et grand';
      question = `${a}x² + ${b}x + ${c}`;
    }

    return {
      difficulty: difficulty,
      question: question,
      answer: discriminant
    };
  }
}

export default generateProblem;
