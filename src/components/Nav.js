
const Nav = () => {
    return (
        <section className="nav">
            <img class="logo" src={require("./seeds-logo.png")} alt="Green Seeds logo"/>
            <ul class="menu">
                <li><a href="https://www.seedsgives.com/help">Help Someone (& Receive SEEDS)</a></li>
                <li><a href="https://www.seedsgives.com/how-to-stake">Staking Bonus</a></li>
                <li><a href="https://spiritualcrypto.buzzsprout.com/">Spiritual Crypto</a></li>
                <li><a href="https://discord.com/invite/J8F5AdJ9mz">Discord</a></li>
                <li><a href="https://www.seedsgives.com/blog">Blog</a></li>
                <li><a href="https://www.seedsgives.com/ask-for-help">Ask for Help</a></li>
                <li><a href="https://www.seedsgives.com/update-your-card">Manage Recurring Giving</a></li>
                <li><a href="https://www.seedsgives.com/faq">FAQ</a></li>
                <li><a href="https://courses.seedsgives.com/learn-more">Crypto Course</a></li>
            </ul>
        </section>
    )
}

export default Nav;