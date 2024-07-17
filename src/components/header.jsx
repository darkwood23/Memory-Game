function Heading({points, bestPoints, level}) {
    return (
        <div id="heading">
            <div className="div1">
                <div className="main-heading">
                    <h1>Pokemon Memory Game</h1>
                    <p>Get points by clicking on an image but don't click more than one!</p>
                </div>
                <div className="div2">
                    <h1>Level: {level}</h1>
                </div>
            </div>


            <div className="div3">
                <div className="temp-div">
                    <p>Score:</p>
                    <p id="score">{points}</p>
                </div>

                <div className="temp-div">
                    <p>Best Score:</p>
                    <p id="best-score">{bestPoints}</p>
                </div>
            </div>
        </div>
    )
}

export default Heading