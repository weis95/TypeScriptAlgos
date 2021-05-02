//o(n)

const homeTeamWon = 1
export function tournamentWinner(competitions: string[][], results: number[]) {
  let currentBestTeam = ""
	const scores = {[currentBestTeam]: 0}
	
	for(let i = 0; i < competitions.length; i++) {
		const result = results[i]
		const [homeTeam, awayTeam] = competitions[i];
		
		const winningTeam = result === homeTeamWon ? homeTeam : awayTeam;
		
		updateScores(winningTeam, 3, scores);
		
		if(scores[winningTeam] > scores[currentBestTeam]) {
			currentBestTeam = winningTeam
		}
	}
	
	return currentBestTeam;
}

function updateScores(team: string, points: number, scores: {[team: string]: number}) {
	if(!(team in scores)) scores[team] = 0;
	
	scores[team] += points;
}