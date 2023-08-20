function Heading() {
    return (
        <div id="heading">
            <div className="div1">
                <h1>Pokemon Memory Game</h1>
                <p>Get points by clicking on an image but don't click more than one!</p>
            </div>

            <div className="div2">
                <div className="temp-div">
                    <p>Score:</p>
                    <p id="score">0</p>
                </div>

                <div className="temp-div">
                    <p>Best Score:</p>
                    <p id="best-score">0</p>
                </div>
            </div>
        </div>
    )
}

export default Heading