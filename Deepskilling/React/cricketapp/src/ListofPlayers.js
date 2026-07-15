function ListofPlayers() {

    const players = [

        { name: "Virat", score: 95 },
        { name: "Rohit", score: 80 },
        { name: "Gill", score: 65 },
        { name: "Rahul", score: 72 },
        { name: "Pant", score: 55 },
        { name: "Hardik", score: 90 },
        { name: "Jadeja", score: 60 },
        { name: "Ashwin", score: 75 },
        { name: "Bumrah", score: 68 },
        { name: "Shami", score: 74 },
        { name: "Siraj", score: 58 }

    ];

    const lowScorePlayers = players.filter(player => player.score < 70);

    return (

        <div>

            <h2>All Players</h2>

            {
                players.map((player, index) => (

                    <p key={index}>
                        {player.name} - {player.score}
                    </p>

                ))
            }

            <h2>Players with Score Below 70</h2>

            {
                lowScorePlayers.map((player, index) => (

                    <p key={index}>
                        {player.name} - {player.score}
                    </p>

                ))
            }

        </div>

    );

}

export default ListofPlayers;