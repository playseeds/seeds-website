import Nav from "./Nav";

const Header = () => {
    return (
        <>
            <Nav />
            <header className="App-header header-wrapper">
                <h1> Building a Kinder Economy</h1>
                <h3>It’s time to transcend capitalism with an economic system grounded in giving and abundance for all.</h3>
                <p>
                    Seeds is like a global, digital giving circle.</p>
                <p>People from 29 countries & counting have redeemed SEEDS to have gifts fulfilled for college tuition, to stage Fringe Festival shows, to pay for an emergency cornea operation, to recover after top surgery, to take care of expenses while healing from rape, to combat homelessness, to fill up a tank of gas, to invest in digital assets, and lots more.</p>
                <p>When a SEED is redeemed to make a request, it’s shown through our platforms to invite contributions.
                    When you give a gift to someone who has redeemed a SEED to make a Request for Help, we’ll send you SEEDS in thanks, because we want the giving people to be the ones who build wealth when the market goes up.</p>
                <p>You can trade your SEEDS on third party, decentralized markets, stake them to earn a passive income, use them to make Requests for Help for yourself, or make requests on behalf of others.  If you need, we’re happy to teach you how.
                </p>
                <div>
                    <a href="https://www.seedsgives.com/help">
                        <button href="">try it 💗</button>
                    </a>
                </div>
            </header>
        </>
    )
}

export default Header;