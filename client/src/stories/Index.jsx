import React, { Component } from 'react';
import { Button } from './Button';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export class Index extends Component {
    state = {
        userNumber: "3,000,000",
        serverNum: "35,000"
    }

    componentDidMount() {
        fetch("http://localhost:3001/api/stats/frontend", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true
          }
        })
          .then(response => {
            if (response.status === 200) return response.json();
          })
          .then(responseJson => {
            this.setState({
              userNumber: responseJson.UserCount.toLocaleString("en-US"),
              serverNum: responseJson.ServerCount.toLocaleString("en-US")
            });
          });
      }

    render() {
        return (
            <div>
                <div class="cover">
                    <img src="https://biblebot.xyz/wp-content/uploads/sites/2/2021/02/cropped-study-862994-scaled-1.jpg" alt="Hands on a Bible." width="100%" />
                    <div class="centralized-cover">
                        <h1>Scripture from your Discord client to your heart.</h1>
                        <br/>
                        <a href="https://biblebot.xyz/invite">
                            <Button size="large" icon={solid("circle-plus")} label="Invite to Server" />
                        </a>
                        <a href="https://biblebot.xyz/discord">
                            <Button size="large" icon={brands("discord")} label="Official Discord Server" />
                        </a>
                    </div>
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
                <div class="cover parallax-cover">
                    <div class="centralized-cover"><h1>Serving {this.state.userNumber} users in {this.state.serverNum} communities.</h1></div>
                </div>
                <h1 class="center">Recent Updates and Posts</h1>
                <div class="recent-posts">
                    <div class="three-columns">
                        <div class="recent-post column">
                            <h2>Release: v9.2-beta</h2>
                            <h3>by Seraphim R.P. &mdash; March 31st, 2022</h3>
                            <p>We would like to express our gratitude to everyone who helped us in our fundraiser for the Biblica royalty fee. This release is dedicated to you.</p>
                        </div>
                        <div class="recent-post column">
                            <h2>Release: v9.2-beta</h2>
                            <h3>by Seraphim R.P. &mdash; March 31st, 2022</h3>
                            <p>We would like to express our gratitude to everyone who helped us in our fundraiser for the Biblica royalty fee. This release is dedicated to you.</p>
                        </div>
                        <div class="recent-post column">
                            <h2>Release: v9.2-beta</h2>
                            <h3>by Seraphim R.P. &mdash; March 31st, 2022</h3>
                            <p>We would like to express our gratitude to everyone who helped us in our fundraiser for the Biblica royalty fee. This release is dedicated to you.</p>
                        </div>
                    </div>
                    <div class="three-columns">
                        <div class="recent-post column">
                            <h2>Release: v9.2-beta</h2>
                            <h3>by Seraphim R.P. &mdash; March 31st, 2022</h3>
                            <p>We would like to express our gratitude to everyone who helped us in our fundraiser for the Biblica royalty fee. This release is dedicated to you.</p>
                        </div>
                        <div class="recent-post column">
                            <h2>Release: v9.2-beta</h2>
                            <h3>by Seraphim R.P. &mdash; March 31st, 2022</h3>
                            <p>We would like to express our gratitude to everyone who helped us in our fundraiser for the Biblica royalty fee. This release is dedicated to you.</p>
                        </div>
                        <div class="recent-post column">
                            <h2>Release: v9.2-beta</h2>
                            <h3>by Seraphim R.P. &mdash; March 31st, 2022</h3>
                            <p>We would like to express our gratitude to everyone who helped us in our fundraiser for the Biblica royalty fee. This release is dedicated to you.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}