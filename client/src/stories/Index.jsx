import React, { Component } from 'react';
import { Button } from './Button';

export class Index extends Component {
    render() {
        return (
            <div>
                <div class="cover">
                    <img src="https://biblebot.xyz/wp-content/uploads/sites/2/2021/02/cropped-study-862994-scaled-1.jpg" alt="Hands on a Bible." width="100%" />
                    <div class="centralized-cover"><h1>Scripture from your Discord client to your heart.</h1><br/><Button size="large" label="Invite to Server" /><Button size="large" label="Official Discord Server" /></div>
                </div>
                <div class="three-columns">
                    <div class="column">
                        <h2>What is BibleBot?</h2>
                        <p>BibleBot is the largest and first of any religious bot on Discord. Since December 2016, we've worked hard to bring the good news to Christians everywhere on Discord. Together, we can share the love and good news of Christ with others. Lord willing.</p>
                    </div>
                    <div class="column">
                        <h2>How We Do It</h2>
                        <p>BibleBot is a non-commercial open-source project by <a href="https://kerygma.digital">Kerygma Digital</a>, a non-profit organization founded to serve Christians online. Through the financial support and volunteering of many, we are able to serve all Christians on Discord, no strings attached. No premium subscriptions, no fees, just pure Christianity - right from your Discord client.</p>
                    </div>
                    <div class="column">
                        <h2>How You Can Help</h2>
                        <p>We rely solely on donations, either from our users or out of our own pockets. Consider <a href="https://kerygma.digital/donate">donating</a> to help further our development, whether one-time or recurring. If you want to get hands-on, or are unable to help financially, consider <a href="https://kerygma.digital/join-the-team">joining the team</a> and volunteering.</p>
                    </div>
                </div>
            </div>
        )
    }
}